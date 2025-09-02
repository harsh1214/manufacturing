const navLink = document.querySelector('#navbar-link');
const navSubUl = document.querySelector('.nav-sub-ul');
const loader = document.querySelector('.loader-container');

const navToggle = () => {
    navLink.classList.toggle('max-lg:hidden');
}

const navToggleChapter = () => {
    navSubUl.classList.toggle('max-lg:hidden');
}


const editionsCount = document.getElementById("editionsCount");
const speakersCount = document.getElementById("speakersCount");
const partnersCount = document.getElementById("partnersCount");
const delegatesCount = document.getElementById("delegatesCount");
const uCompanysCount = document.getElementById("uCompanysCount");

var counter = 0;

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

window.onload = () => {
    loader.style.display = 'none';
    const observerIn = new IntersectionObserver((e) => {
        e.forEach((e) => {
            if(e.isIntersecting){
                if(counter === 0){
                    counter = counter + 1;
                    animateValue(editionsCount, 0, 4, 1000);
                    animateValue(speakersCount, 0, 120, 1000);
                    animateValue(partnersCount, 0, 43, 1000);
                    animateValue(delegatesCount, 0, 755, 1000);
                    animateValue(uCompanysCount, 0, 521, 1000);
                }
            }
        })
    });
    const staticsContainer = document.querySelectorAll('.statistics-content-container');
    staticsContainer.forEach((e) => observerIn.observe(e));
}

// Hero Container Height
// const heroContainer = document.querySelector('.hero-container');
// console.log(heroContainer.clientHeight);
// const heroHeight = heroContainer.clientHeight;

// const navImage = document.getElementById('nav-image');
// const navbarContainer = document.querySelector('.navbar-container');
// const navbarContainer1 = document.querySelector('.navbar-container-1');
// const active = document.querySelector('.active');
const subNavBar = document.getElementById('subNavBar');

window.onscroll = function () { 
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ) {
        subNavBar.classList.add('py-4');
        subNavBar.classList.remove('py-8');
        }
        else {
            subNavBar.classList.add('py-8');
            subNavBar.classList.remove('py-4');
    }
};

const aboutUsTextContainerBg = document.getElementById('aboutUsTextContainerBg');
const aboutUsTextContainer = document.getElementById('aboutUsTextContainer');


const readAboutTextClose = () => {
    aboutUsTextContainerBg.classList.add('hidden')
    aboutUsTextContainer.classList.add('hidden')
}

const readAboutTextOpen = () => {
    aboutUsTextContainerBg.classList.remove('hidden')
    aboutUsTextContainer.classList.remove('hidden')
}