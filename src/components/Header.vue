<template>
	<header
		role="header"
		class="header"
	>
		<RouterLink
			:to="$t('components.header.homeLink.to')"
			class="main-link btn"
		>
			<HomeIcon />

			{{ $t('components.header.homeLink.label') }}
		</RouterLink>

		<CartLink />
	</header>
</template>

<script lang="ts">
	import Vue from 'vue';

	import CartLink from '@/components/CartLink.vue';
	import HomeIcon from 'icons/Home.vue';

	export default Vue.extend({
		name: 'Header',
		components: {
			CartLink,
			HomeIcon
		}
	});
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		position: fixed;
		width: 100%;

		padding: 8px 24px;
		height: 64px;

		z-index: 3;

		color: #fff;
		background: #1d0c0a;

		box-shadow:
			0 2px 4px -1px rgba(0, 0, 0, .2),
			0 4px 5px 0 rgba(0, 0, 0, .14),
			0 1px 10px 0 rgba(0, 0, 0, .12);
	}

	.main-link {
		display: flex;
		height: 100%;
		align-items: center;

		color: inherit;
		font-size: 1.1rem;
		text-decoration: none;

		/deep/ .home-icon {
			margin-right: 10px;

			svg {
				bottom: 0;
			}
		}

		&:hover,
		&:focus {
			background: #3a0f05;
		}
	}
</style>
