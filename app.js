const app = Vue.createApp({
	data() {
		return {
			counter1: 0
		}
	},
	methods: {
		increase1() { this.counter1 = this.counter1 + 1 },
		decrease1() { this.counter1 = this.counter1 - 1 },
		increase2(step) { this.counter1 += step },
		decrease2(step) { this.counter1 -= step }
	},
})
app.mount("#app")