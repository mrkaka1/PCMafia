<template>
	<v-form class="flex flex-col justify-center w-2/3 p-8 gap-5">
		<input
			placeholder="Email"
			class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"
		/>
		<input
			placeholder="Senha"
			class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"
		/>

		<nuxt-link to="/Home">
			<v-btn class="h-14 w-full rounded-lg bg-white text-[#4F5978]">
				Entrar
			</v-btn>
		</nuxt-link>
		
	</v-form>
</template>

<script lang="ts" setup></script>

<style></style>
