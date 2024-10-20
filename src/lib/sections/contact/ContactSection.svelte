<script lang="ts">
	import CaptchaCanvas from '$lib/sections/contact/CaptchaCanvas.svelte';
	import { checkForm, type FormStatus } from './form';

	let formStatus: FormStatus;

	const handleCaptchaInput = () => {
		const inputField = document.getElementById('captcha') as HTMLInputElement;

		if (inputField) {
			// Allow only letters, convert to uppercase, and limit to 6 characters
			inputField.value = inputField.value
				.replace(/[^a-zA-Z]/g, '')
				.toUpperCase()
				.slice(0, 6);
		}
	};

	const resetButton = () => {
		const btn = document.getElementById('send-button') as HTMLButtonElement;
		btn.textContent = 'Envoyer';
		btn.style.backgroundColor = '#EE6055';
		btnOnCooldown = false;
	};

	let btnOnCooldown = false;
	const handleFormInput = async () => {
		if (btnOnCooldown) return;

		const btn = document.getElementById('send-button') as HTMLButtonElement;
		btn.textContent = '...';
		btnOnCooldown = true;

		formStatus = checkForm();
		const allFieldsTrue = Object.values(formStatus).every((value) => value === true);

		if (allFieldsTrue) {
			// Gather form data
			const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
			const mail = (document.querySelector('input[name="mail"]') as HTMLInputElement).value;
			const message = (document.querySelector('textarea[name="message"]') as HTMLTextAreaElement)
				.value;

			// Send email request to Cloudflare Worker
			const response = await fetch('https://contact.ulysse-bonneau.workers.dev/', {
				// Replace with your actual worker URL
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, mail, message })
			});

			if (response.ok) {
				const result = await response.json();
				if (result.status === 'success') {
					btn.textContent = 'Message envoyé avec succès !';
					btn.style.backgroundColor = '#00A96E';

					setTimeout(() => {
						// Clear the form and reset button
						const form = document.getElementById('contact-form') as HTMLFormElement;
						form.reset();
						resetButton();
					}, 3000);
				} else {
					btn.textContent = 'Erreur. Veuillez réessayer ultérieurement.';
					btn.style.backgroundColor = '#F08C84';

					console.error('Error sending email:', result.message);

					setTimeout(resetButton, 3000);
				}
			} else {
				btn.textContent = 'Erreur. Veuillez réessayer ultérieurement.';
				btn.style.backgroundColor = '#F08C84';

				console.error('Failed to send email:', response.statusText);

				setTimeout(resetButton, 3000);
			}
		} else {
			btn.textContent = 'Veuillez remplir correctement le formulaire.';
			btn.style.backgroundColor = '#F08C84';

			setTimeout(resetButton, 3000);
		}
	};
</script>

<div
	id="contact"
	class="bg-accent-background rounded-b-3xl shadow-xl relative -mt-4 p-6 pt-10 z-10 lg:pt-14 lg:px-12"
>
	<span class="font-heading font-medium text-xl text-accent lg:text-2xl"> Contact </span>
	<form id="contact-form" class="flex py-4 space-y-4 flex-col justify-center">
		<div class="field">
			<label for="name"> Nom </label>
			<div
				class="outline {formStatus && formStatus.name !== true
					? 'outline-red-500 '
					: 'outline-transparent'}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-4 w-4 opacity-70 fill-accent"
				>
					<path
						d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
					/>
				</svg>
				<input type="text" class="grow" name="name" placeholder="John Doe" />
			</div>
			<span class="mt-2 text-red-500 text-sm h-[14px]">
				{#if formStatus && formStatus.name !== true}{formStatus.name[1]}{/if}
			</span>
		</div>

		<div class="field">
			<label for="mail"> Adresse mail </label>
			<div
				class="outline {formStatus && formStatus.mail !== true
					? 'outline-red-500 '
					: 'outline-transparent'}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-4 w-4 opacity-70 fill-accent"
				>
					<path
						d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
					/>
					<path
						d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
					/>
				</svg>
				<input type="text" class="grow" name="mail" placeholder="example@gmail.com" />
			</div>
			<span class="mt-2 text-red-500 text-sm h-[14px]">
				{#if formStatus && formStatus.mail !== true}{formStatus.mail[1]}{/if}
			</span>
		</div>

		<div class="field">
			<label for="message"> Message </label>
			<textarea
				name="message"
				class="h-36 outline {formStatus && formStatus.message !== true
					? 'outline-red-500 '
					: 'outline-transparent'}"
			/>
			<span class="mt-2 text-red-500 text-sm h-[14px]">
				{#if formStatus && formStatus.message !== true}{formStatus.message[1]}{/if}
			</span>
		</div>

		<div class="flex flex-col">
			<label class="label" for="captcha"> Captcha </label>
			<div class="flex w-full justify-between items-center">
				<input
					id="captcha"
					type="text"
					class="input w-1/2 h-8 outline {formStatus && formStatus.captcha !== true
						? 'outline-red-500 '
						: 'outline-transparent'}"
					name="captcha"
					placeholder="ABCDEF"
					on:input={handleCaptchaInput}
				/>
				<CaptchaCanvas />
			</div>
			<span class="mt-2 text-red-500 text-sm h-[14px]">
				{#if formStatus && formStatus.captcha !== true}{formStatus.captcha[1]}{/if}
			</span>
		</div>

		<button
			id="send-button"
			class="!mt-8 btn bg-accent border-none text-background transition-colors lg:pb-12 lg:pt-4 lg:text-lg lg:!mt-16 lg:!mb-4"
			on:click|preventDefault={handleFormInput}
		>
			Envoyer
		</button>
	</form>
</div>

<style>
	.field {
		@apply flex flex-col;
	}

	.field label {
		@apply label;
	}

	.field div {
		@apply input flex items-center gap-4;
	}

	.field textarea {
		@apply textarea;
	}

	label {
		@apply text-accent;
	}
</style>
