<script setup lang="ts">
	import Login from "~/components/Section/Login/Login.vue";
import Default from "~/layouts/default.vue";
</script>

<template>
	<Default>
		<Login/>
	</Default>
</template>
  
<style>
	.grid-cols {
		grid-template-columns: 35% 65%;
	}
</style>
