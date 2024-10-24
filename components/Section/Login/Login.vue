<template>
	<div class="grid grid-cols h-full">
		<v-container class="flex justify-center items-center flex-col">
			<IconsLogo class="mb-5" />
			<Form/>
		</v-container>
		<div class="grid-span">
			<img src="/assets/images/Background.png" alt="" class="h-full w-full" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Form from './Form/Form.vue';
</script>

<style></style>
