let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 3000
    },
    // responsive brakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}
// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
function submitForm() {
    // Code to submit the form goes here (e.g., AJAX request)
  
    // // Assuming the submission was successful, display the success message
    // var messageContainer = document.getElementById("message-container");
    // messageContainer.textContent = "Submitted successfully";
    alert("Submitted Successfully!");
  }
  
  // Example usage: Call the submitForm() function when the form is submitted
  document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm();
  });
  