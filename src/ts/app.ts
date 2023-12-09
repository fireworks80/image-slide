import { request } from './api';
import { UserButton } from './userButton';
import { List, Photo, PhotoList } from './photoList';

export class App {
	wrapEl: HTMLDivElement;
	userButtons: HTMLElement;

	constructor(wrapEl: HTMLDivElement) {
		this.wrapEl = wrapEl;

		this.init();
	}

	async init() {
		try {
			const photoList = await request.getPhotos();
			this.createComponent(photoList.data);
		} catch (error) {
			console.error('Error fetching photo list:', error);
		}
	}

	createComponent(photoList: List) {
		new UserButton(this.wrapEl);
		new PhotoList(this.wrapEl, photoList);
	}
}
