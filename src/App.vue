<template>
	<div
		v-cloak
		class="main-ctn"
	>
		<Header />

		<main role="main">
			<!-- Load the component defined in the router for the current route -->
			<transition
				name="fade"
				mode="out-in"
			>
				<RouterView />
			</transition>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import { MetaInfo } from 'vue-meta';

	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';

	export default Vue.extend({
		name: 'App',
		components: {
			Header,
			Footer
		},
		metaInfo(): MetaInfo {
			return {
				// If no subcomponents specify a metaInfo.title, this title will be used
				title: this.$t('common.meta.title') as string,
				// All titles will be injected into this template
				titleTemplate: '%s | Pastry',
				meta: [
					{
						name: 'description',
						content: this.$t('common.meta.description') as string
					}
				]
			};
		}
	});
</script>

<style lang="scss">
	// Default styles and helper classes
	* {
		$transparent: rgba(0, 0, 0, 0);

		max-width: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		scroll-behavior: smooth;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		word-break: break-word;
		hyphens: auto;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: $transparent;
	}

	[v-cloak] {
		display: none;
	}

	html,
	body {
		// Font size defined by the browser
		font-size: 100%;
	}

	body {
		min-height: 100vh;
		line-height: 1.25;
	}

	main {
		flex: 1 0 auto;

		// Space for Header
		padding-top: 64px;
	}

	input {
		appearance: none;
	}

	ul {
		list-style: none;
	}

	a,
	input,
	button {
		cursor: pointer;
		transition: .25s;
	}

	a,
	button {
		border: 1px solid transparent;

		&:focus {
			outline: none;

			border-color: hsla(0, 0%, 100%, .5);
		}
	}

	.btn {
		padding: 5px 15px;
		border-radius: 2px;

		font-size: 1rem;

		color: inherit;

		display: flex;
		align-items: center;

		&.shadow {
			&.persitent,
			&:hover,
			&:focus {
				box-shadow:
				0 3px 1px -2px rgba(0, 0, 0, .2),
				0 2px 2px 0 rgba(0, 0, 0, .14),
				0 1px 5px 0 rgba(0, 0, 0, .12);
			}
		}
	}

	.sr-only {
		position: absolute !important;
		top: 0;
		left: -999px;
		width: 1px !important;
		height: 1px !important;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.required label::after {
		top: -2px;
		content: '*';
		position: relative;
	}

	// Fade <transition>
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: .15s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

	.main-ctn,
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		align-items: center;
	}

	.page {
		margin: 0 auto;
		padding: 48px;
		align-items: center;
		flex-direction: column;

		width: 1400px;
		min-height: 500px;
	}

	@media only screen and (max-width: 600px) {
		.page {
			padding: 15px !important;
		}
	}
</style>
