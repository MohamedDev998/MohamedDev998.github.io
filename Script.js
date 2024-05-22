const MenuBtn = document.getElementById('MenuBtn');
const SmNav = document.getElementById('SmNav');

// console.log(MenuBtn)

MenuBtn.addEventListener("click",()=>{
    console.log('Button is Clicked ' + SmNav)
     SmNav.classList.toggle("Show")
     

})



// Data

const Data = [
    {
       title:"Appartement Smlaliya ",
       imgs: [{
        img1:"./IMG/Aparrt/Apprt1.jpg",
        img2: "./IMG/Aparrt/Apprt2.jpg",       
        img3:"./IMG/Aparrt/Apprt3.jpg"
      }
      ],
        type:'Appartement',
        Price:"1000"

},
    {
       title:"Appartement Guiliz ",
       imgs: [{
        img1:"./IMG/Aparrt/Apprt4.jpg",
        img2: "./IMG/Aparrt/Apprt5.jpg",       
        img3:"./IMG/Aparrt/Apprt6.jpg"
      }
      ],
        type:'Appartement',
        Price:"700"

},
    {
       title:"Appartement Guiliz ",
       imgs: [{
        img1:"./IMG/Aparrt/Apprt7.jpg",
        img2: "./IMG/Aparrt/Apprt8.jpg",       
        img3:"./IMG/Aparrt/Apprt9.jpg"
      }
      ],
        type:'Appartement',
        Price:"500"

},
    {
       title:"Riad a La Medina ",
        imgs: [{
          img1:"./IMG/Aparrt/Apprt10.jpg",
          img2: "./IMG/Aparrt/Apprt11.jpg",       
          img3:"./IMG/Aparrt/Apprt12.jpg"
        }
        ],
        type:'Appartement',
        Price:"400"

},
];



Data.map((item)=>{
  

  let Title =item.title
  let img= item.imgs
  let Type = item.type
  let Price = item.Price
 
  
   
   document.querySelectorAll(".card_wrapper").forEach((CardWr)=>{
 

    
     CardWr.insertAdjacentHTML(
     
       "beforeend",
       ` 
       <div class=Card>
       
       ${img.map((Pics)=>{
          //  console.log(Pics.)
          return(
           `
           <div class="carousel">
         <div class="carousel__item "><img src="${Pics.img1}" alt="img"></img></div>
         <div class="carousel__item "><img src="${Pics.img2}" alt="img"></img></div>
         <div class="carousel__item "> <img src="${Pics.img3}" alt="img"></img>   </div>
         </div>


          `)
        })
       }
     
       <div class="card_info">
           <h6 class="title">${Title}</h6>
           <p class="type">${Type}</p>
           <h5 class="price">${Price}DH</h5>
         </div>
         </div>
         `
     )
   
   });
   


})



// Carrousel
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

// Carrousel









`
<div class="carousel">
<div class="carousel__item one"></div>
<div class="carousel__item two"></div>
<div class="carousel__item three"></div>
</div>
`




// CardWr.insertAdjacentHTML(
     
//   "beforeend",
//   ` 
//   <div class="carousel">
//   ${img.map((Pics)=>{
//      //  console.log(Pics.)
//      return(
//       `
      
//     <div class="carousel__item "><img src="${Pics.img1}" alt="img"></img></div>
//     <div class="carousel__item "><img src="${Pics.img2}" alt="img"></img></div>
//     <div class="carousel__item "> <img src="${Pics.img3}" alt="img"></img>   </div>
    
//      `)
//    })
//   }
// </div>
//   <div class="card_info">
//       <h6 class="title">${Title}</h6>
//       <p class="type">${Type}</p>
//       <h5 class="price">${Price}DH</h5>
//     </div>
//     `
// )

// });