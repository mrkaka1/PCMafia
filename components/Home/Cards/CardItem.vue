<template>
	<v-card class="text-white m-4 !bg-[#0C0C0C] max-h-[250px]">
		<div class="-grid h-4/5">
			<v-img
				src="/assets/images/Item-Photo.png"
				class="h-[200px] w-[200px] col-span-1 ml-0"
			/>
			<div>
				<v-list-item class="text-white !mt-0 !pl-3">Total:</v-list-item>
				<v-list-item class="text-white !pl-3">Taxas:</v-list-item>
				<v-list-item class="text-white !pl-3">Impostos:</v-list-item>
			</div>
		</div>
		<v-card-actions class="!m-0 !p-0 !h-max">
			<v-btn class="!bg-[#FFF] text-black !font-semibold m-0 p-0 h-full w-full"
				>Mais vendido</v-btn
			>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts" setup></script>

<style></style>
