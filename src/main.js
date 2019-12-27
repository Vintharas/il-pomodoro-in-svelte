import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'il Pomodoro'
	}
});

export default app;
