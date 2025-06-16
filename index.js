import express from "express";
import {
  addUser,
  getPosts,
  updateUser,
  deleteUser,
  addComment,
} from "./public/js/data.js";
import path from "path";
const app = express();

const port = 5000;

app.set("view engine", "ejs");
const getting = (req, res, next) => {
  console.log("Getting");
  next();
};
const deleting = (res, req, next) => {
  console.log("deleting");
  next();
};

app.use(express.static("public"));
app.use(express.json());

app.post("/posts", (req, res) => {
  addUser(req.body);
  res.json("User Added");
});
app.get("/posts", getting, (req, res, next) => {
  const posts = getPosts();
  if (posts.length === 0) {
    const error = new Error("No users");
    error.status = 404
    return next(error);
  }
  res.json(getPosts());
});
app.get("/", getting, (req, res) => {
  res.render("index", { title: "User Page", buttonText: "Get Users" });
});
app.patch("/posts/:id", (req, res) => {
  const { name } = req.body;
  const updated = updateUser(req.params.id, name);
  if (!updated) return res.status(404).send("User not found");

  res.render("success", { message: "Patch successful" });
});
app.post("/users/:id/comments", (req, res) => {
  addComment(req.params.id, req.body.text);
  res.redirect(`/users/${req.params.id}`);
});
app.delete("/posts/:id", deleting, (req, res) => {
  const deleted = deleteUser(req.params.id);
  if (!deleted) return res.status(404).send("User not found");
  res.send("User deleted");
});
app.use((err, req, res, next) => {
  res.status(err.status);
  res.json({
    status : "error",
    message: err.message,});
});

app.listen(port);
