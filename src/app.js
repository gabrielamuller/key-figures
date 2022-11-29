/**
 * Animated number counter.
 */

// Execute after page has loaded.
document.addEventListener('DOMContentLoaded', function() {
	const counters = document.querySelectorAll('.wp-block-avidly-key-figures .number');

	// The entries variable contains the list of elements that are being observed.
	const callback = (entries) => {

		// Do forEach loop to find which entry intersected.
		 entries.forEach(
			 (entry) => {
				 if (entry.isIntersecting) {

					// If intersecting add a class to the element.
					entry.target.classList.toggle('visible', entry.isIntersecting);

					// If the number has a class "visible", run the animation.
					const countersvisible = document.querySelectorAll('.number.visible');
			   
					countersvisible.forEach( counter => {
						const animate = () => {
							const value = +counter.getAttribute('data-value');
							const data = +counter.innerText;
							const speed = 500;
							const time = value / speed;
			
							if (data < value) {
								counter.innerText = Math.ceil(data + time);
								setTimeout(animate, 1);
							} else {
								counter.innerText = value;
							}			   
						}
						animate();
					});
				 }
			 }
		 );       
	 }

	// Create a new intersectionObserver object which will accept a callback function as a paramenter.
	let observer = new IntersectionObserver(callback);

	// Select number elements for animation.
	const animationItems = document.querySelectorAll('.number');
	
	// Loop through the selected numbers and add to the observer watch list.
	animationItems.forEach(item => {
		observer.observe(item)         
	})

 }, false);
