<template>
	<section>
		<h2>{{ userName }}</h2>
		<h3>{{ userEmail }}</h3>
	</section>
</template>

<script>
	export default {
		props: {
			userName: { type: String, required: true },
			userEmail: { type: String, required: true },
		},
	};
</script>
