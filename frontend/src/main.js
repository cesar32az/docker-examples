import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world oh yeah!'
	}
});

export default app;