//main.js把该方法写入原型prototype
const storage = {
  set(key,value){
      localStorage.setItem(key,JSON.stringify(value))
  },
  get(key){
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key){
    localStorage.removeItem(key);
  },
  // remove:key=>{
    
  // }
  clear(){
    localStorage.clear()
  }
 

}
export default storage;