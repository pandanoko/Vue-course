<template>
	<section>
		<h3>Insert data</h3>
		<form v-on:submit.prevent="submitData">
			<div>
				<label>User Name</label>
				<input
					type="text"
					v-model="enteredName"
				/>
			</div>
			<div>
				<label>User Email</label>
				<input
					type="text"
					v-model="enteredEmail"
				/>
			</div>
			<button>Submit</button>
		</form>
	</section>
</template>

<script>
	export default {
		emits: ["set-active-user"],
		data() {
			return {
				enteredName: "",
				enteredEmail: "",
			};
		},
		methods: {
			submitData() {
				this.$emit("set-active-user", this.enteredName, this.enteredEmail);
			},
		},
	};
</script>
