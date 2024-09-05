<script>
	import CaptchaCanvas from '$lib/sections/contact/CaptchaCanvas.svelte';
</script>

<div
	id="contact"
	class="bg-accent-background rounded-b-3xl shadow-xl relative -mt-4 p-6 pt-10 z-10"
>
	<span class="font-heading font-medium text-xl text-accent"> Contact </span>
	<div class="flex py-4 space-y-4 flex-col justify-center">
		<div class="field">
			<label for="name"> Nom </label>
			<div>
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
		</div>

		<div class="field">
			<label for="mail"> Adresse mail </label>
			<div>
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
		</div>

		<div class="field">
			<label for="message"> Message </label>
			<textarea name="message" class="h-36"></textarea>
		</div>

		<div class="flex flex-col">
			<label class="label" for="captcha"> Captcha </label>
			<div class="flex w-full justify-between items-center">
				<CaptchaCanvas />
				<input type="text" class="input w-1/2 h-8" name="captcha" placeholder="ABCDEF" />
			</div>
		</div>

		<button class="btn bg-accent border-none text-background">Envoyer</button>
	</div>
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
