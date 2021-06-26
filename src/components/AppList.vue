<template>
	<ul class="app-list">
		<li v-for="app in appList" :key="app.activeRule" @click="pushState(app.name, app.activeRule)">
			<div class="name">{{ app.name }}</div>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { appList } from "../app-list";
export default defineComponent({
	name: "AppList",
	setup: () => {
		const pushState = (name: string, url: string) => {
			console.log(url);
			history.pushState({}, name, url);
		};
		return { pushState, appList };
	},
});
</script>

<style scoped lang="scss">
.app-list {
	padding: 0 30px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	li {
		display: block;
		height: 200px;
		background: #ccc;
		border-radius: 10px;
		min-width: 0;
		.name {
			font-weight: bolder;
			font-size: 30px;
		}
	}
}
</style>
