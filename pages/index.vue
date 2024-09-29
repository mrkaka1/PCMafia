<script setup lang="ts">
	import { VContainer } from "vuetify/components";
</script>

<template>
	<div>
		<VAppBar> My App </VAppBar>
		<VNavigationDrawer></VNavigationDrawer>
		<VContainer>
			<h2>Dashboar</h2>
			<p>
				Welcome to your dashboard. You can add more pages to your app by
				creating new files in the pages directory
			</p>
		</VContainer>
	</div>
</template>
