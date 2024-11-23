<template>
	<div class="grid grid-cols-2 h-full">
		<HomeSectionContentLeft />
		<v-container class="bg-[#171717] text-white">
			<h1 class="font-extrabold text-xl">Status da Loja</h1>

			<v-divider class="mt-2 mx-4" />
			<v-list class="!bg-[#171717] !p-2 !mt-0">
				<v-list-item class="text-white font-extrabold !p-0"
					>+5000 avaliações</v-list-item
				>
				<v-list-item class="text-white !mt-0 !p-0">Neutras:</v-list-item>
				<v-list-item class="text-white !p-0">Positivas:</v-list-item>
				<v-list-item class="text-white !p-0">Negativas:</v-list-item>
			</v-list>
			<v-divider class="mt-2 mx-4" />

			<div class="flex flex-col gap-5 items-center justify-center ">
				<IconsIconCompany />
				<h1 class="font-black text-4xl">5 Melhores Produtos</h1>
			</div>
		</v-container>
	</div>
</template>

<style>
	.-grid {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>
