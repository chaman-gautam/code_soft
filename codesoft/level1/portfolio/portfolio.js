
let lastScrollY = window.scrollY; // Initial scroll position
const header = document.querySelector('.header_section1');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('bg_blue');
    } else {
        // Scrolling up
        header.classList.remove('bg_blue');
    }

    // Update lastScrollY
    lastScrollY = currentScrollY;
});


// let lastScrollY = window.scrollY;
// let header = document.getElementsByClassName("header_section1");
// console.log("hiil|");
// window.addEventListener('scroll', () => {
//     let currentScrollY = window.scrollY;
// console.log("hii");
//     // Ensure the header element exists
//     if (header[0]) {
//         if (currentScrollY > lastScrollY) {
//             // Scrolling down
//             console.log("Scrolling down");
//             header[0].classList.add('bg_blue');
//         } else {
//             // Scrolling up or no scroll
//             console.log("Scrolling up");
//             if (currentScrollY <= 100) {
//                 header[0].classList.remove('bg_blue');
//             }
//         }
//     }

//     lastScrollY = currentScrollY;
// });


// let color=document.getElementsByClassName("left_bar");
// color[0].addEventListener("scrolly",()=>{
//       console.log("hii");
// })

// @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Quicksand:wght@300..700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap');







// * {
    // margin: 0px;
    // padding: 0px;
    // box-sizing: border-box;
    /* overflow-x: hidden; */
// }





// .logo_name div {
//     width: 80px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .logo_name div i ul {
//     height: 500px;
//     /* display: none; */
// }

// .logo_name p {
//     font-size: 1.5rem;
//     font-family: 'Times New Roman', Times, serif;
//     text-decoration: underline 2px solid white;
// }

// .cont {
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// /* main {
//     overflow-y:scroll; 
// } */





// .left_bar,
// .right_bar {
    
// }



// .right_bar {
//     position: fixed;
//     right: 1px;
// }



// /* .line1{
//     width: 10rem;
//     height: 2px;
//     color: white;
//     border: 1px solid white;
// } */




// /* .projects_instagram_clone div{
//     width: 100%;
// }
// .projects_instagram_clone div img{
//     height: 10rem;
//     width: 18rem;
//     /* width: 10rem; */
//     /* border-radius: 2rem; */
//     /* text-align: center; */
//     /* text-align: center; */
//     /* margin: 0px auto; */
// /* } */ 
// let lastScrollY = window.scrollY;
// let header = document.getElementsByClassName("header_section1");

// window.addEventListener('scroll', () => {
//     let currentScrollY = window.scrollY;
// console.log("hiil");
//     // Ensure the header element exists
//     if (header[0]) {
//         if (currentScrollY > lastScrollY) {
//             // Scrolling down
//             header[0].classList.add('bg_blue');
//         } else {
//             // Scrolling up or no scroll
//             if (currentScrollY <= 100) {
//                 header[0].classList.remove('bg_blue');
//             }
//         }
//     }

//     lastScrollY = currentScrollY;
// });

// // Corrected event listener for scrolling
// let color = document.getElementsByClassName("left_bar");
// if (color[0]) {
//     color[0].addEventListener("scroll", () => {
//         console.log("Scroll event detected");
//     });
// }
// script.js
// let lastScrollY = window.scrollY; // Initial scroll position
// const navbar = document.querySelector('.header_section1');

// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Change to desired color
//     } else {
//         // Scrolling down
//         navbar.style.backgroundColor = 'transparent';
//     }

//     // Update lastScrollY
//     lastScrollY = currentScrollY;
// });
// script.js