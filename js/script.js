searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');


document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick = () =>
{
    loginForm.classList.remove('active')
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');

    if (window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    } else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>
{
    if (window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    } else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}







// var swiper = new Swiper(".ads-slider", {
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });



// var swiper = new Swiper(".product-slider", {
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });













// Footer start

// Phone
var cNumber = document.getElementById("cNumber");
cNumber.innerHTML = "+91 95184 19715";
document.getElementById('phoneLink').href = "tel:+919518419715";

// Mail Id
var cMail = document.getElementById("cMail");
cMail.innerHTML = "Dhruvjindal156@gmail.com";
document.getElementById('emailLink').href = "mailto:dhruvjindal156@gmail.com";
document.getElementById('cMail').style.textTransform = "none";

// Address
var cAddress = document.getElementById("cAddress");
cAddress.innerHTML = "My World, kali Devi Chowk, Hansi, Haryana, 125033";
document.getElementById('addressLink').href = "https://goo.gl/maps/B4mLfGGZCqCEsKTc7";
addressLink.target = "_blank";

// Footer End