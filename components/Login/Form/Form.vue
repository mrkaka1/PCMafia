<script lang="ts" setup>
	import { Form, Field, ErrorMessage } from "vee-validate";
	import * as yup from "yup";
	import { useRouter } from "vue-router";

	const router = useRouter();

	const errorMessage = ref("");

	const schema = yup.object({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Email inválido"),
		password: yup
			.string()
			.required("A senha é obrigatória")
			.min(4, "A senha deve ter pelo menos 8 caracteres"),
	});

	function onSubmit(values: any) {
		if (values.email === "adm@gmail.com" && values.password === "admin") {
			router.push({ name: "Home" });
		} else {
			errorMessage.value = "Credenciais inválidas. Tente novamente.";
		}
	}
</script>
<template>
	<Form
		class="flex flex-col justify-center w-2/3 p-8 gap-5"
		@submit="onSubmit"
		:validation-schema="schema"
	>
		<Field
			placeholder="Email"
			class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"
			name="email"
			type="email"
		/>
		<ErrorMessage name="email" class="text-red-500 text-sm" />
		<Field
			placeholder="Senha"
			class="h-14 rounded-lg border-2 border-solid border-[#4F5978] text-white p-4"
			name="password"
			type="password"
		/>
		<ErrorMessage name="password" class="text-red-500 text-sm" />

		<p v-if="errorMessage" class="text-red-500 text-center mt-2">
			{{ errorMessage }}
		</p>

		<button
			type="submit"
			class="h-14 w-full rounded-lg bg-white text-[#4F5978]"
		>
			<!-- <v-btn class="h-14 w-full rounded-lg bg-white text-[#4F5978]"> -->
			Entrar
			<!-- </v-btn> -->
		</button>
	</Form>
</template>

<style></style>
