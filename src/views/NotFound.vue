<template>
	<section class="page not-found">
		<h2 class="code">
			{{ $t('views.notFound.code') }}
		</h2>

		<h3>{{ $t('views.notFound.title') }}</h3>

		<p>{{ $t('views.notFound.description') }}</p>

		<RouterLink
			:to="{ name: 'home' }"
			class="btn primary"
		>
			{{ $t('views.notFound.homeLink') }}
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
