const app = Vue.createApp({
	data() {
		return {
			myName: "Sara",
			imageUrl: "https://picsum.photos/200",
		};
	},
	methods: {
		currentAge() {
			const birthYear = 1982;
			const currentYear = new Date().getFullYear();

			return currentYear - birthYear;
		},
		futureAge() {
			return this.currentAge() + 5;
		},
		favNumber() {
			return Math.random();
		},
	},
});

app.mount("#assignment");
