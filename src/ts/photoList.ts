export type Photo = {
	url: string;
	title: string;
	user: number;
	description: string;
	id: number;
};
export type List = {
	limit: number;
	success: boolean;
	total_photos: number;
	message: string;
	offset: number;
	photos: Array<Photo>;
};

export class PhotoList {
	wrapEl: HTMLDivElement;
	grid: HTMLDivElement;
	list: List;
	photos: Array<Photo>;

	constructor(wrapEl: HTMLDivElement, list: List) {
		this.wrapEl = wrapEl;
		this.list = list;
		this.photos = list?.photos || [];

		this.render();
		this.setUpEvents();
	}

	render() {
		if (!this.photos.length) return;

		this.grid = document.createElement('div');
		this.grid.className = 'wrap';

		const fragment = new DocumentFragment();

		this.photos.forEach(({ url, title, id }) => {
			const img = document.createElement('img');
			img.src = url;
			img.alt = title;
			img.dataset.id = String(id);
			fragment.appendChild(img);
		});

		this.grid.appendChild(fragment);
		this.wrapEl.appendChild(this.grid);
	}

	setUpEvents() {
		this.grid.addEventListener('mouseenter', this.handleMouseEnter, {
			capture: true,
		});
		this.grid.addEventListener('mouseleave', this.handleMouseLeave, {
			capture: true,
		});
	}

	handleMouseEnter(e: Event) {
		const target = e.target as HTMLImageElement;

		if (target.tagName !== 'IMG') return;

		setTimeout(() => {
			target.classList.add('is-magnify');
		}, 1000);
	}

	handleMouseLeave(e: Event) {
		const target = e.target as HTMLImageElement;
		target.classList.remove('is-magnify');
	}
}
