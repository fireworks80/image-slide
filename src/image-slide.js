export class ImageSlide {
	constructor(imageList) {
		this.list = imageList;
	}

	render() {
		const setAllBtn = document.createElement('button');
		setAllBtn.textContent = 'selectAll';

		document.body.appendChild(setAllBtn);
	}
}
