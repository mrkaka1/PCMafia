<template>
	<div>
		<v-app-bar :elevation="2" color="#0C0C0C" class="h-[85px]">
			<v-app-bar-title>
				<v-form class="mt-4">
					<SearchBar />
					<!-- <input
						placeholder="Buscar..."
						class="h-12 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4 mt-3"
					/> -->
				</v-form>
			</v-app-bar-title>
			<div class="flex flex-row gap-6 mr-8 mt-5">
				<nuxt-link to="./">
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

		<div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import SearchBar from "~/components/VV/SearchBar.vue";
</script>

<style></style>
