gsap.registerPlugin(ScrollTrigger);

gsap.from("#heroDate", {
    opacity: 0,
    duration: 1
});

gsap.from("#heroLogo", {
    y: 300,
    duration: 1
});

// gsap.from("#heroConfex", {
//     y: 300,
//     duration: 1
// });

// aboutImageContainer
// gsap.to('#aboutImageContainer', {
//     backgroundPosition: "65% 100%",
//     ease: 'none',
//     scrollTrigger: {
//         trigger: "#aboutImageContainer",
//         scrub: 0.5,
//         start: "top bottom",
//         end: "bottom top",
//         // markers: true,
//     },
// })

// gsap.from('#aboutImageContainer', {
//     scrollTrigger: {
//         trigger: ".about-us",
//         start: "top center",
//         end: "bottom bottom",
//     },
//     opacity: 0,
//     y: 700,
//     duration: 1
// });

gsap.from('#aboutText', {
    scrollTrigger: {
        trigger: ".about-us",
        start: "top center",
        end: "bottom bottom",
    },
    opacity: 0,
    duration: 1
});

// gsap.from('.speakers-img', {
//     scrollTrigger: {
//         trigger: ".speakers-container",
//         start: "top center",
//     },
//     opacity: 0,
//     y: 700,
//     duration: 1
// });

gsap.from('.partner-body', {
    scrollTrigger:{
        trigger: ".partner-body",
        start: "top center",
        end: "bottom bottom"
    },
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
});

gsap.from('.speakers-body', {
    scrollTrigger:{
        trigger: ".speakers-body",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.attend-1-body', {
    scrollTrigger:{
        trigger: ".attend-1-body",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.attend-2-body', {
    scrollTrigger:{
        trigger: ".attend-2-body",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.partners-detail-body', {
    scrollTrigger:{
        trigger: ".partners-detail-body",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.awards-body', {
    scrollTrigger:{
        trigger: ".awards-body",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.awards-body-2', {
    scrollTrigger:{
        trigger: ".awards-body-2",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.why-sponsors-body', {
    scrollTrigger:{
        trigger: ".why-partners-container",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

gsap.from('.pricing-body', {
    scrollTrigger:{
        trigger: ".pricing-content",
        start: "top center",
        end: "bottom bottom"
    },
    ease: "power3.out",
    opacity: 0,
    stagger: 0.2,
});