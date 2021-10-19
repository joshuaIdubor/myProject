/*
Author: Idubor Joshua Oluwakemi
Content: Project Bank Layout
Date of Publication: 06-June-2019
Dept:
*/

//creating a function to get the burger and nav-links
const navSlide = () => {
	const burger =document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks =document.querySelectorAll('.nav-links li');
	

	burger.addEventListener('click',()=>{
		//Toggle Nav
		nav.classList.toggle('nav-active');

			//Animate links
			navLinks.forEach((link, index)=> {
				if (link.style.animation){
					link.style.animation ='';
				}else{
					link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
				}
			});

			//Burger animation
			burger.classList.toggle('toggle');
		});
	}

//calling the function
navSlide();