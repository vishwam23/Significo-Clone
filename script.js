function homepageAnimation() {
    gsap.set(".slidesm", { scale: 5 })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })

    tl.to(".vdodiv", {

        '--clip': "0%",
        ease: Power2
    }, 'a')

    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')

    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4
    }, 'b')
    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4
    }, 'b')
}
function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}
function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
                    , ease: Power4, duration: .5
                })
            })
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), { opacity: 0 })
            })
        })
}
function paraAnimation() {
    var clutter = "";
    document.querySelector(".textpara").textContent.split("").forEach(function (e) {
        if (e === " ") clutter += `<span>&nbsp</span>`
        clutter += `<span">${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter;
    gsap.set(".textpara span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}
function bodyclrchange() {
    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}
bodyclrchange();
capsulesAnimation();
loco();
paraAnimation();
teamAnimation();
realPageAnimation();
homepageAnimation();