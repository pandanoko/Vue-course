<template>
	<section>
		<h1>My App</h1>
	</section>
	<user-data v-on:set-active-user="setActiveUser"></user-data>
	<active-user
		v-bind:user-name="user.name"
		v-bind:user-email="user.email"
	></active-user>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: "nome",
					email: "email@email.com",
				},
			};
		},
		methods: {
			setActiveUser(name, email) {
				const activeUser = {
					name: name,
					email: email,
				};

				this.user = activeUser;
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
	* {
		box-sizing: border-box;
	}

	html {
		font-family: "Jost", sans-serif;
	}
</style>
