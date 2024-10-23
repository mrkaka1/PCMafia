<script setup lang="ts">
	import Default from "~/layouts/default.vue";
</script>

<template>
	<Default>
		<div class="grid grid-cols h-full">
			<v-container class="flex justify-center items-center flex-col">
				<IconsLogo class="mb-5" />

				<v-form class="flex flex-col justify-center w-2/3 p-8 gap-5">
					<input placeholder="Email" class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"/>
					<input placeholder="Senha" class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"/>
					<input type="button" value="Entrar" class="h-14 w-full rounded-lg bg-white text-[#4F5978]" />
				</v-form>
			</v-container>
			<!-- adicionar -->
			<div class="grid-span">
				<img src="/assets/images/Background.png" alt="" class="h-full w-full" />
			</div>
		</div>
	</Default>
</template>

<style>
	.grid-cols {
		grid-template-columns: 35% 65%;
	}
</style>
