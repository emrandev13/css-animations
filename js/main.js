const tabs = document.querySelectorAll('.tab');

			function showTab(index) {
				tabs.forEach((tab, i) => {
					tab.classList.toggle('active', i === index);
				});
			}

			function toggleTheme() {
				document.body.classList.toggle('light');
				document.body.classList.toggle('dark');
			}

			let startX = 0;
			document.body.addEventListener('touchstart', e => startX = e.touches[0].clientX);
			document.body.addEventListener('touchend', e => {
				const endX = e.changedTouches[0].clientX;
				const deltaX = endX - startX;
				const activeIndex = [...tabs].findIndex(t => t.classList.contains('active'));
				if (deltaX > 50 && activeIndex > 0) showTab(activeIndex - 1);
				else if (deltaX < -50 && activeIndex < tabs.length - 1) showTab(activeIndex + 1);
			});