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