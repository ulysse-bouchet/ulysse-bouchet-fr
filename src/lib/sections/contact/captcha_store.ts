import { readable } from 'svelte/store';

const generateRandomString = (length = 6) => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}
	return result;
};

export const captcha = readable(generateRandomString());
