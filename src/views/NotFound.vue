<template>
	<section class="page not-found">
		<h2 class="code">
			404
		</h2>

		<h3>Page non trouvée</h3>

		<p>Il semblerait qu'il y ait eu une erreur !</p>

		<RouterLink
			:to="{ name: 'home' }"
			class="btn primary"
		>
			Retour à la page d'accueil
		</RouterLink>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { MetaInfo } from 'vue-meta';

	export default Vue.extend({
		name: 'NotFound',
		metaInfo(): MetaInfo {
			return {
				title: this.$t('views.notFound.meta.title') as string,
				meta: [
					{
						name: 'description',
						content: this.$t('views.notFound.meta.description') as string
					}
				]
			};
		}
	});
</script>

<style lang="scss" scoped>
	.code {
		color: #00a3ba;
		font-size: 6rem;
		font-family: serif;
	}

	p {
		margin-top: 8px;
	}
</style>
