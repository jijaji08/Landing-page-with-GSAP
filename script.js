var tl=gsap.timeline()

tl.from("nav img , #nav-part2 h3, #nav-part3 h4,button",{
	y:-100,
	duration:1,
	// delay:1,
	opacity:0,

})
tl.from("#main h1",{
	y:200,
	duration:1,
	// delay:1,
	opacity:0,
})
tl.from("#main #left-img,#right-img",{
	duration:1,
	// delay:,
	opacity:0,
})
tl.from("#main h5",{
	scale:0,
	// delay:,
	opacity:0,
})
tl.to("#main h5",{
	y:40,
	repeat:-1,
	yoyo:true,
})

