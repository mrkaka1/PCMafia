<script setup lang="ts">
import Default from '~/layouts/default.vue';
</script>

<template>
	<Default>
		<div class="grid grid-cols h-full">
			<v-container class="flex justify-center items-center flex-col">
					<IconsLogo class="mb-8"/>
					<v-form class="w-2/3">
						<!-- <v-container> -->
							<v-row class="flex flex-col p-2">
								<v-col  > 
									<v-text-field
										label="First name"
										required 
										class="border-white"
									></v-text-field>
								</v-col>
	
								<v-col>
									<v-text-field
										label="Last name"
										required
									></v-text-field>
								</v-col>
	
								<v-col >
									<v-text-field label="E-mail" required></v-text-field>
								</v-col>
							</v-row>
						<!-- </v-container> -->
					</v-form>
			</v-container>
			<!-- adicionar -->
			<div class="grid-span">
				<img src="/assets/images/Background.png" alt=""  class="h-full w-full">
			</div>
		</div>
	</Default>
</template>

<style>
.grid-cols {
	grid-template-columns: 35% 65%;
}
</style>
