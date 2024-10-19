
<script setup lang="ts"></script>

<template>
	<div class="teste bg-black">
		<v-card variant="tonal">
			<v-form class="flex">
				<v-container>
					<v-row>
						<v-col cols="12" md="4">
							<v-text-field
								:counter="10"
								label="First name"
								required
							></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field
								:counter="10"
								label="Last name"
								required
							></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field
								label="E-mail"
								required
							></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-card>

		<v-img src="/assets/images/Background.png"/>
<script setup lang="ts">
</script>

<template>
	<div class="grid grid-cols-2 w-full h-full">
		<v-card text="..."></v-card>

		<!-- adicionar -->
		<div class="bg-red-500 w-full h-full grid-span"></div>
	</div>
</template>
<style>
.teste {
	display: grid;
	grid-template-columns: 1fr auto;
}
</style>