<template>
	<header>
		<ul>
			<li>
				<a @click="pushState('首页', '/')">首页</a>
			</li>
			<li v-for="app in appList" :key="app.activeRule">
				<a @click="pushState(app.name, app.activeRule)">{{ app.name }}</a>
			</li>
		</ul>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { appList } from "../app-list";
export default defineComponent({
	name: "Header",
	setup: () => {
		const pushState = (name: string, url: string) => {
			console.log(url);
			history.pushState({}, name, url);
		};
		return { appList, pushState };
	},
});
</script>

<style scoped lang="scss">
header {
	background: #999;
	color: #fff;
	border-radius: 8px;
	margin: 10px;
	padding: 0 20px;
	ul {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
		li {
			a {
				text-decoration: none;
				display: block;
				padding: 8px;
				color: #fff;
				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
}
</style>
