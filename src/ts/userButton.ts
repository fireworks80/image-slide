export class UserButton {
	wrapEl: HTMLElement;
	selectAllButton: HTMLButtonElement;
	slideShowButton: HTMLButtonElement;

	constructor(wrapEl: HTMLElement) {
		this.wrapEl = wrapEl;

		this.selectAllButton = document.createElement('button');
		this.slideShowButton = document.createElement('button');
		this.selectAllButton.textContent = 'select all';
		this.slideShowButton.textContent = 'slide show';

		this.render();
		this.setUpEvents();
	}

	render() {
		const div = document.createElement('div');
		div.appendChild(this.selectAllButton);
		div.appendChild(this.slideShowButton);

		this.wrapEl.appendChild(div);
	}

	setUpEvents() {
		this.selectAllButton.addEventListener(
			'click',
			this.handleSelectAllClick.bind(this)
		);
		this.slideShowButton.addEventListener(
			'click',
			this.handleSlideShowClick.bind(this)
		);
	}

	handleSelectAllClick() {
		console.log(this);
	}
	handleSlideShowClick() {
		console.log(this);
	}
}
