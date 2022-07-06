const bookImg = [
    {
        img: "/layouts/img/punroulsel2Img/Demirow.jpg"
    },
    {
        img: "/layouts/img/punroulsel2Img/Eloquent JS.jpg"
    },
    {
        img: "/layouts/img/punroulsel2Img/JS NINJA.jpg"
    },
    {
        img: "/layouts/img/punroulsel2Img/Oriely.jpg"
    },
    {
        img: "/layouts/img/punroulsel2Img/python.webp"
    },
]

//Create a basic for each that renders the images as HTML
const loadBooks = ()=>{
    bookImg.forEach((item)=>{
        const ImageBox = document.createElement("div");
        ImageBox.className = "image_box";
        ImageBox.id = "img_container";

        const img = document.createElement("img");
        img.className = "carousel_img";
        img.src= `${item.img}`

        ImageBox.appendChild(img)
        let section = document.querySelector("#display_container")
        section.appendChild(ImageBox)
        
    })


    }

    loadBooks()


     
// This makes the arrows click, left and right 

let bookPosition = 0;
let forwardArrow = document.querySelector("#forward")
let backwardArrow = document.querySelector('#back')
forwardArrow.addEventListener("click", ()=>{
    if(bookPosition > 0){
     bookPosition = bookPosition - 1
     document.querySelector("#display_container").style.marginLeft = '-' + (bookPosition* 100) + '%'
    console.log("how come I am still here")
    }
})

backwardArrow.addEventListener("click", ()=>{
    bookPosition = bookPosition + 1
if(bookPosition<5){
    document.querySelector("#display_container").style.marginLeft = '-' + (bookPosition* 100) + '%'
    console.log("how come I am still here")
}
  
})
 
// onclick on the left arrow, the item should shift to accomodate the new item same to the right 
// using a loop , when you click on the an arrow it should move to a previous item or a next item 
