export const obj = []

export function addUser(data){
    
    obj.push(data)
    data.id = obj.length
 
}
export function getPosts(){
    return obj
}
export function updateUser(id, newName) {
    const user = obj.find(u => u.id === parseInt(id));
    if (!user) return false;
    user.name = newName;
    return true;
}
export function deleteUser(id) {
    const index = obj.findIndex(user => user.id === parseInt(id));
    if (index === -1) return false;
    obj.splice(index, 1);
    return true;
}

export function addComment(userId, text) {
  const user = obj.find(u => u.id === parseInt(userId));
  if (user) {
    user.comments.push({ text });
  }
}
