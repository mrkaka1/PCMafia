<template>
	<v-container class="bg-[#171717] text-white">
		<div class="flex flex-col items-center justify-center">
			<v-container class="!w-4/5">
				<SelectImage />

				<v-divider class="mt-8" />

				<h1 class="font-bold text-xl mt-4 ml-1 mb-6">Título</h1>

				<v-row class="!w-full ml-1">
					<v-text-field
						label="De: nome"
						class="text-[#6A6A6A]"
						required
					></v-text-field>
				</v-row>

				<div class="flex flex-col gap-10 mt-8">
					<span class="text-[#6A6A6A]">#Tag</span>
					<span class="text-[#6A6A6A]">Estoque:</span>

					<div class="flex flex-col">
						<span class="text-[#6A6A6A]">R$0,00</span>
						<span class="text-xl font-bold">R$0,00</span>
					</div>
				</div>
			</v-container>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import SelectImage from '~/components/UI/SelectImage/SelectImage.vue';
</script>

<style></style>
