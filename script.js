var pokemon=fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
pokemon.then((data)=>data.json())
.then((data1)=>console.log(data1))
.catch((error)=>console.log9(error));

// var url="https://625d6bbf4c36c7535774ca0e.mockapi.io/cartoons";

//  function somedata(){
//     var pokemon=fetch("https://625d6bbf4c36c7535774ca0e.mockapi.io/cartoons");
//     pokemon.then((data)=>data.json())
//     .then((data1)=>console.log(data1))
//     .catch((error)=>console.log9(error));
// }

//  function createdata(){
//      var data={
//          name:"anand sivesh",
//          email:"sivesh@mail.in"
//      };
//      fetch(url,{
//          method:"POST",
//          body:JSON.stringify(data),
//          Headers:{
//              "Content-Type":"application/json"
//          }
    
//      })
    
// }
//  createdata();