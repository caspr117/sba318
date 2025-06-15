export const obj = []

export function addUser(data){
    
    obj.push(data)
    data.id = obj.length
 
}
export function deleteUser(data){
    obj.includes(data)
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