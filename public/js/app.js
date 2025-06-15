// import{addUser,obj} from "./data.js"
// import {axios} from "./axios"
let button = document.getElementById("button")



button.addEventListener("click",async()=>{
let r = await axios.get("http://localhost:5000/posts")
r.data.forEach(element =>{
    let p = document.createElement("p")
    p.textContent = JSON.stringify(element)
    document.body.appendChild(p)
})


// console.log(r.data[0])
})