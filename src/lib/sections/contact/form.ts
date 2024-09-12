import { captcha } from './captcha_store';

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
	return nameInput !== '' ? true : [false, 'Nom vide.'];
};

const checkMail = (mailInput: string): true | Error => {
	if (mailInput === '') return [false, 'Adresse vide.'];

	const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return mailRegex.test(mailInput) ? true : [false, 'Adresse mail invalide.'];
};

const checkMessage = (messageInput: string): true | Error => {
	return messageInput !== '' ? true : [false, 'Message vide.'];
};

const checkCaptcha = (captchaInput: string): true | Error => {
	if (captchaInput === '') return [false, 'Captcha vide.'];

	let captchaValue: string = '';
	captcha.subscribe((c) => (captchaValue = c));

	return captchaInput === captchaValue ? true : [false, 'Captcha erroné.'];
};

export const checkForm = (): true | Error[] => {
	const formData = parseForm();
	const errors: Error[] = [];

	const nameCheck = checkName(formData.name);
	if (nameCheck != true) errors.push(nameCheck);

	const mailCheck = checkMail(formData.mail);
	if (mailCheck != true) errors.push(mailCheck);

	const messageCheck = checkMessage(formData.message);
	if (messageCheck != true) errors.push(messageCheck);

	const captchaCheck = checkCaptcha(formData.captcha);
	if (captchaCheck != true) errors.push(captchaCheck);

	return errors.length === 0 ? true : errors;
};
