const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})



// let search = () =>{
//     var searchbox = document.getElementById("searchInput").value;
//     console.log(searchbox)
//     // var searchbox = document.getElementById("searchInput").value;
//     // const storeitems = document.getElementById("product-list")
//     // const product =document.querySelectorAll(".pro")
//     // const pname = storeitems.getElementsByTagName("h5")

//     // for(var i=0;i<pname.length;i++){
//     //     let match = product[i].getElementsByTagName('h2')[0]

//     //     if(match){
//     //         let textvalue = match.textContent || match.innerHTML

//     //         if(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
//     //             product[i].style.display = ""
//     //         }
//     //         else{
//     //             product[i].style.display = "none"
//     //         }
//     //     }
//     // }
// }


// const api_url = 
//       "https://dummyjson.com/products/1";
      
// async function getapi(url) {
   
//     // Storing response
//     const response = await fetch(url);
   
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     // if (response) {
//     //     hideloader();
//     // }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);

// function show(data) {
//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;
   
//     // Loop to access all rows 
//     for (let r of data.list) {
//         tab += `<tr> 
//     <td>${r.id} </td>
//     <td>${r.title}</td>
//     <td>${r.description}</td> 
//     <td>${r.price}</td>          
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("result").innerHTML = tab;
// }

let a = document.getElementById('inputField');
  // console.log(a.value)
  a.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      newInput();
  }
  });
  function newInput(){
    console.log(a.value)
  }

  let new1 = a.value;
//   console.log(new1)
// if(new1 == )