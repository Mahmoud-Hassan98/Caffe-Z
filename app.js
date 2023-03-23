// let name = prompt("Please enter your name:");
// let gender = prompt("Please enter your gender:");

// function cafe(gender){

//        while(gender !="male" && gender !="female")
//     {
        
//          gender = prompt("Please enter your gender:");
// }
// if (gender==="male" ) {
//     alert("welcome Mr " + name );
// }else if (gender==="female")
// {
//     alert("welcome Ms " +name );
// }
// }
//  cafe(gender);
//  let age = prompt("Please enter your age:");

//  let drink = prompt("do you want a hot or a cold drink?")
//  let drink_Name= prompt("name of the drink")
//  alert("your drink is getting prepared");
//   const array=[name ,gender, drink,drink_Name];
 
//  for (let index = 0; index < array.length; index++) {
//      const element = array[index];
//      console.log(element);
     
//  }
//  let person = document.getElementById("person")
//  let customer = document.createElement("div");
//  let p = document.createElement("p");
//  let info = document.createElement("ul");
//  let li1 = document.createElement("li");
//  let li2 = document.createElement("li");
//  let li3 = document.createElement("li");
//   person.appendChild(customer);
//  customer.appendChild(p);
//  customer.appendChild(info);
//  info.appendChild(li1);
//  info.appendChild(li2);
//  info.appendChild(li3);
//  li1.textContent = `gender: ${gender}`;
//  li2.textContent= `age: ${age}`;
//  li3.textContent= `drink: ${drink} ${drink_Name}`;
//  p.textContent= `name: ${name}`;

// console.log(person);
let perosn = document.getElementById("perosn")
const form = document.getElementById("customer");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = event.target.name.value
    let age = event.target.age.value
    let drink_type = event.target.drink_type.value
    let gender = event.target.name1.value
    let type1 = event.target.hot.checked ? event.target.hot.value : "";
    let type2 = event.target.cold.checked ? event.target.cold.value : "";


    
    console.log(username,age,drink_type,gender);
    render(username,age,drink_type,gender , type1,type2)
   
    form.reset();
})

function render(username,age,drink_type,gender,type1,type2)
{
  
 let customer = document.createElement("div");
 let p = document.createElement("p");
 let info = document.createElement("ul");
 let li1 = document.createElement("li");
 let li2 = document.createElement("li");
 let li3 = document.createElement("li");
 let li4 = document.createElement("li");
    perosn.appendChild(customer);
 customer.appendChild(p);
 customer.appendChild(info);
 info.appendChild(li1);
 info.appendChild(li2);
 info.appendChild(li3);
 info.appendChild(li4);
 p.textContent= `username: ${username}`;
 li1.textContent = `age: ${age}`;
 li2.textContent= `drink type: ${drink_type} `;
 li3.textContent= `gender: ${gender}`;
 li4.textContent= `drink: ${type1} ${type2}`
 ;

}






