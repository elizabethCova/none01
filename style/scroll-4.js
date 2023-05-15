gsap.registerPlugin(ScrollTrigger);

gsap.to(".fourth-scroll", {
	rotation: 360,
	duration: 1,
	scrollTrigger: {
		trigger: ".fourth-scroll",
		toggleActions: "restart",

	},
	start: 3100,


})


gsap.to(".fourth-scroll", {
	scale: 1.5,
	duration: 0.8,
	delay: 1,
	ease: "bounce.out",
	scrollTrigger: {
		trigger: ".fourth-scroll",
		toggleActions: "restart",
	},
	start: 3100,
})


