<template>
	<div>
		<v-app-bar :elevation="2" color="#0C0C0C" class="h-[75px]">
			<v-app-bar-title>
				<v-form>
					<input
						placeholder="Buscar..."
						class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"
					/>
				</v-form>
			</v-app-bar-title>
		</v-app-bar>
    <div>
      
    </div>

		<div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
