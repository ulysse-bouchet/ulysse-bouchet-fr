import { captcha } from './captcha_store';

export type FormStatus = {
	name: true | Error;
	mail: true | Error;
	message: true | Error;
	captcha: true | Error;
};

type FormData = {
	name: string;
	mail: string;
	message: string;
	captcha: string;
};

type Error = [boolean, string];

const parseForm = (): FormData => {
	const formData: FormData = {
		name: '',
		mail: '',
		message: '',
		captcha: ''
	};

	// Get name input value
	const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
	if (nameInput) formData.name = nameInput.value;

	// Get mail input value
	const mailInput = document.querySelector<HTMLInputElement>('input[name="mail"]');
	if (mailInput) formData.mail = mailInput.value;

	// Get message input value
	const messageInput = document.querySelector<HTMLInputElement>('textarea[name="message"]');
	if (messageInput) formData.message = messageInput.value;

	// Get captcha input value
	const captchaInput = document.querySelector<HTMLInputElement>('input[name="captcha"]');
	if (captchaInput) formData.captcha = captchaInput.value;

	return formData;
};

const checkName = (nameInput: string): true | Error => {
	return nameInput !== '' ? true : [false, 'Veuillez indiquer un nom.'];
};

const checkMail = (mailInput: string): true | Error => {
	if (mailInput === '') return [false, 'Veuillez indiquer une adresse mail.'];

	const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return mailRegex.test(mailInput) ? true : [false, 'Veillez à ce que votre adresse mail soit valide.'];
};

const checkMessage = (messageInput: string): true | Error => {
	return messageInput !== '' ? true : [false, 'Veuillez rédiger un message.'];
};

const checkCaptcha = (captchaInput: string): true | Error => {
	if (captchaInput === '') return [false, 'Veuillez renseigner le code captcha.'];

	let captchaValue: string = '';
	captcha.subscribe((c) => (captchaValue = c));

	return captchaInput === captchaValue ? true : [false, 'Captcha erroné.'];
};

export const checkForm = (): FormStatus => {
	const formData: FormData = parseForm();

	return {
		name: checkName(formData.name),
		mail: checkMail(formData.mail),
		message: checkMessage(formData.message),
		captcha: checkCaptcha(formData.captcha)
	};
};
