gsap.registerPlugin(ScrollTrigger);

gsap.to(".third-scroll", {
	scale: 6,
	duration: 3,
	ease: "bounce.out",
	scrollTrigger: {
		trigger: ".third-scroll",
		toggleActions: "restart",
	},
	start: 1200,
	marginLeft: 180,
})
