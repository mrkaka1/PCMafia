<template>
	<v-layout>
		<v-app-bar
			scroll-behavior="hide"
			:elevation="2"
			color="#0C0C0C"
			class="h-[85px] fixed top-0 left-0 right-0"
		>
			<v-app-bar-title>
				<nuxt-link to="/Home" class="mt-4">
					<IconsIconBack />
				</nuxt-link>
			</v-app-bar-title>
			<div class="flex flex-row gap-6 mr-8 mt-5">
				<nuxt-link to="/RegisterProduct">
					<IconsIconNewItem />
				</nuxt-link>
				<nuxt-link to="">
					<IconsIconHistorical />
				</nuxt-link>
				<nuxt-link to="./">
					<IconsIconLogout />
				</nuxt-link>
			</div>
		</v-app-bar>

		<v-main class="mt-5">
			<slot />
		</v-main>
	</v-layout>
</template>

<script lang="ts" setup>
	import SearchBar from "~/components/VV/SearchBar.vue";
</script>

<style></style>
