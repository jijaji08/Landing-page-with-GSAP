var tl=gsap.timeline()

tl.from("nav img , #nav-part2 h3, #nav-part3 h4,button",{
	y:-100,
	duration:1,
	delay:1,
	opacity:0, //initial existense of an element is zero, element pehle kuch nahi dikhai dega dhere dhere prakat hoga apne jagha pe..
	stagger:0.5, //0.5 secend ke interval me sare element ek ek kar ke visible honge
})

tl.from("#main h1",{
	y:200,
	duration:1,
	// delay:1,
	opacity:0,
})

tl.from("#main #left-img,#right-img",{
	duration:1,
	// delay:1,
	opacity:0,
	stagger:0.3,
})

tl.from("#main h5",{  // pehle h5 dhire aa raha hai uske baad hum jab usko niche uper bhejenge to "tl.to" ka use karenge....
	scale:0,
	opacity:0,
})

tl.to("#main h5",{
	y:40,
	repeat:-1,
	yoyo:true,  //ye movement ko smooth kar deta hai ekdom makhaan jaise..
})
