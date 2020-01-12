

document.addEventListener("DOMContentLoaded",()=> {
   let input = document.querySelector("#input1");
   let button = document.querySelector("#button");
   let form = document.querySelector("#form");

   form.addEventListener("submit",(e)=> {
       e.preventDefault()
       let value = input.value
       const checkAnimal = async (input) => {
        let result = await axios.get(`http://localhost:3001/animal/${value}`);
        let p = document.createElement("p")
        p.innerText = result.data
        document.body.appendChild(p)
        // debugger
       }
       checkAnimal(value)
       
   })

   
})