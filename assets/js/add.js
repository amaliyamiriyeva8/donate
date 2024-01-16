const form=document.querySelector("form")
const image=document.querySelector("#add-image")
const add_file=document.querySelector("#add-file")
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const input=document.querySelector('input[type="file"]')


input.addEventListener("input",(e)=>{
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader
        reader.readAsDataURL(file)
        reader.onload=()=>{
            image.src=reader.result
            image.style.width="70px"
            image.style.height="70px"
        }
    }
})

form.addEventListener("submit",(e)=>{
e.preventDefault()
let obj=[]
let src=add_file.files[0]
const reader=new FileReader
reader.readAsDataURL(src)
reader.onload=(e)=>{
   obj={
    image:e.target.result,
    name:name.value,
    des:description.value,
   } 
   axios.post(`http://localhost:3000/donate/`,obj)
}
window.location="index.html"
})