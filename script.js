// Function to handle smooth scrolling
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startPosition + targetPosition * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Easing function
  function easeOutCubic(t) {
    return (t = t - 1) * t * t + 1;
  }

  requestAnimationFrame(scrollAnimation);
}

// Listen for click events on the "Get Started" button
const knowmore = document.querySelector(".know-more" );
const aboutheader = document.querySelector(".about-header");
const projectsheader = document.querySelector(".projects-header");
const skills = document.querySelector(".skills");
const footer = document.querySelector(".footer1");
knowmore.addEventListener("click", function (event) {
  event.preventDefault();
  smoothScroll("#aboutme", 1000); // Adjust the duration as needed
});
aboutheader.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll("#aboutme", 1000); // Adjust the duration as needed
  });
projectsheader.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll("#projects", 2000); // Adjust the duration as needed
  });
skills.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll("#skills", 2000); // Adjust the duration as needed
  });
footer.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll("#footer", 2000); // Adjust the duration as needed
  });

function rotate() {
  var lastChild = $(".slider div:last-child").clone();

  $(".slider div").removeClass(".firstSlide");

  $(".slider div:last-child").remove();

  $(".slider").append(lastChild);

  $(lastChild).addClass("firstChild");
}

window.setInterval(function () {
  rotate();
}, 1000);


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", (e) => {

const posX = e.clientX;
const posY = e.clientY;
cursorDot.style.left =  `${posX}px`;
cursorDot.style.top =  `${posY}px`;
cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
},{duration: 500, fill: "forwards"});

});