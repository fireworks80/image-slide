// import { ImageSlide } from './image-slide.js';
import './style.css';

// const wrap = document.createElement('div');
// wrap.classList.add('wrap');

// const fetchData = async (url: string, options: any) => {
// 	const response = await fetch(url, {
// 		mode: 'cors',
// 		credentials: 'same-origin',
// 		referrerPolicy: 'no-referrer',
// 		...options,
// 	});
// 	return response.json();
// };

// const addEvent = () => {
// 	wrap.addEventListener('click', (e) => {
// 		Array.from(wrap.querySelectorAll('.btn')).forEach((btn) =>
// 			btn.classList.remove('selected')
// 		);
// 		const tag = e.target as HTMLElement;
// 		if (tag.tagName.toLowerCase() !== 'button') return;

// 		tag.classList.toggle('selected');
// 	});
// };

// interface List {
// 	url: string;
// 	title: string;
// 	id: number;
// }

// const drawImageList = (list: Array<List>) => {
// 	let timer: NodeJS.Timeout = null;
// 	const listDoms = list.map(({ url, title, id }) => {
// 		const button = document.createElement('button');
// 		const img = document.createElement('img');
// 		img.src = url;
// 		img.alt = title;

// 		button.dataset.id = String(id);
// 		button.classList.add('btn');

// 		button.appendChild(img);

// 		button.addEventListener('mouseenter', ({ target }) => {
// 			timer = setTimeout(() => {
// 				(target as HTMLButtonElement).classList.add('is-magnify');
// 			}, 1000);
// 		});

// 		button.addEventListener('mouseleave', ({ target }) => {
// 			if ((target as HTMLButtonElement).classList.contains('is-magnify')) {
// 				(target as HTMLButtonElement).classList.remove('is-magnify');
// 			}
// 			clearTimeout(timer);
// 		});

// 		return button;
// 	});
// 	wrap.append(...listDoms);
// 	document.body.appendChild(wrap);
// 	addEvent();
// };

// const selectAllOrDeSelectAllImages = (() => {
// 	let isSelected = false;

// 	return () => {
// 		Array.from(wrap.querySelectorAll('.btn')).forEach((btn) => {
// 			btn.classList.toggle('selected');
// 		});
// 		isSelected = !isSelected;
// 		return isSelected;
// 	};
// })();

// const slideShow = () => {
// 	let index = 0;
// 	let start = 0;
// 	const frame = 60;
// 	let animationFrame: any = null;
// 	const list = Array.from(wrap.querySelectorAll('.btn'));

// 	const convertMillisecondToSecond = (value: number): number =>
// 		Number(((value % 60000) / 1000).toFixed(0));

// 	const intervalSlide = (timestamp: number) => {
// 		if (!start) {
// 			start = timestamp;
// 		}

// 		const elapsed = convertMillisecondToSecond(timestamp - start);

// 		if (elapsed >= 2) {
// 			start = 0;
// 			index += 1;
// 			list[index - 1].classList.remove('is-magnify');
// 		}

// 		if (index >= list.length) {
// 			list[index - 1].classList.remove('is-magnify');
// 			cancelAnimationFrame(animationFrame);
// 			return;
// 		}

// 		list[index].classList.add('is-magnify');

// 		animationFrame = requestAnimationFrame(intervalSlide);
// 	};
// 	requestAnimationFrame(intervalSlide);
// };

// const appendButtons = () => {
// 	const wrapButton = document.createElement('div');
// 	const selectAll = document.createElement('button');
// 	selectAll.textContent = 'Select All';

// 	selectAll.addEventListener('click', () => {
// 		const isSelected = selectAllOrDeSelectAllImages();
// 		selectAll.textContent = isSelected ? 'UnSelect All' : 'Select All';
// 	});

// 	const slideShowBtn = document.createElement('button');
// 	slideShowBtn.textContent = 'Slide Show';

// 	slideShowBtn.addEventListener('click', slideShow);

// 	wrapButton.appendChild(selectAll);
// 	wrapButton.appendChild(slideShowBtn);
// 	document.body.appendChild(wrapButton);
// };

// window.addEventListener('load', async () => {
// 	const data = await fetchData(
// 		'https://api.slingacademy.com/v1/sample-data/photos',
// 		{
// 			method: 'GET',
// 		}
// 	);

// 	// console.log(data);
// 	// new ImageSlide(data.photos);
// 	appendButtons();
// 	drawImageList(data.photos);
// });

import { App } from './ts/app';

window.addEventListener('DOMContentLoaded', () => {
	console.log(document.querySelector('#app'));
	new App(document.querySelector('#app'));
});
