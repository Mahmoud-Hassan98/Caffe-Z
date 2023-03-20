var name = prompt("Please enter your name:");
var gender = prompt("Please enter your gender:");
function cafe(gender){

             while(gender !="male"&& gender !="female")
    {
        alert("plz enter ur gender");
        var gender = prompt("Please enter your gender:");
        if (gender==="male" ) {
            alert("welcome Mr " + name );
        }else if (gender==="female")
        {
            alert("welcome Ms " +name );
        }
    }
    
}
 cafe();

 let drink = prompt("do you want a hot or a cold drink?")
 let drink_Name= prompt("name of the drink")
 alert("your drink is getting prepared");
  const array=[name ,gender, drink,drink_Name];
 
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     console.log(element);
     
 }

// console.log(name + " ordere""d a " + drink + " "+drink_Name+ ".");







