<template>
	<v-container class="bg-[#101010]">
		<h1 class="font-bold text-xl text-white mx-4">Estatísticas</h1>
		<v-divider class="mt-2 mx-4" />
		<v-list class="!bg-[#101010] !p-2 !mt-0">
			<v-list-item class="text-white font-extrabold !p-0"
				>R$: 31.989,20</v-list-item
			>
			<v-list-item class="text-white !mt-0 !p-0">Total:</v-list-item>
			<v-list-item class="text-white !p-0">Taxas:</v-list-item>
			<v-list-item class="text-white !p-0">Impostos:</v-list-item>
		</v-list>
		<v-divider class="mt-2 mx-4" />

		<HomeCardsCardItem v-for="i in 2" :key="i"/>

		<!-- <v-card class="text-white m-4 !bg-[#0C0C0C] max-h-[250px]">
			<div class="-grid h-4/5">
				<v-img
					src="/assets/images/Item-Photo-2.png"
					class="h-[200px] w-[200px] col-span-1 ml-0"
				/>
				<div>
					<v-list-item class="text-white !mt-0 !pl-3">Total:</v-list-item>
					<v-list-item class="text-white !pl-3">Taxas:</v-list-item>
					<v-list-item class="text-white !pl-3">Impostos:</v-list-item>
				</div>
			</div>
			<v-card-actions class="!m-0 !p-0 !h-max">
				<v-btn
					class="!bg-[#FFF] text-black !font-semibold m-0 p-0 h-full w-full"
					>Mais vendido</v-btn
				>
			</v-card-actions>
		</v-card> -->
	</v-container>
</template>
