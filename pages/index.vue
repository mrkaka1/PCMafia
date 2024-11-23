<script setup lang="ts">
	import Default from "@/layouts/default.vue";
</script>

<template>
	<Default>
		<Login />
	</Default>
</template>

<style>
	@import url("../assets/styles/global.css");
	.grid-cols {
		grid-template-columns: 35% 65%;
	}
	* {
		font-family: "Poppins";
	}
</style>
