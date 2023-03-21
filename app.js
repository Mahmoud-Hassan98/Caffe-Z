let name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender:");

function cafe(gender){

       while(gender !="male" && gender !="female")
    {
        
         gender = prompt("Please enter your gender:");
}
if (gender==="male" ) {
    alert("welcome Mr " + name );
}else if (gender==="female")
{
    alert("welcome Ms " +name );
}
}
 cafe(gender);
 let age = prompt("Please enter your age:");

 let drink = prompt("do you want a hot or a cold drink?")
 let drink_Name= prompt("name of the drink")
 alert("your drink is getting prepared");
  const array=[name ,gender, drink,drink_Name];
 
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     console.log(element);
     
 }
 let person = document.getElementById("person")
 let customer = document.createElement("div");
 let p = document.createElement("p");
 let info = document.createElement("ul");
 let li1 = document.createElement("li");
 let li2 = document.createElement("li");
 let li3 = document.createElement("li");
  person.appendChild(customer);
 customer.appendChild(p);
 customer.appendChild(info);
 info.appendChild(li1);
 info.appendChild(li2);
 info.appendChild(li3);
 li1.textContent = `gender: ${gender}`;
 li2.textContent= `age: ${age}`;
 li3.textContent= `drink: ${drink} ${drink_Name}`;
 p.textContent= `name: ${name}`;

console.log(person);


 


// console.log(name + " ordere""d a " + drink + " "+drink_Name+ ".");







