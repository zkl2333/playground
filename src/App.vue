<template>
	<Header />
	<!-- <AppList /> -->
	<div id="container">
		<h1 class="title">这是一个用来尝试微应用的项目</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import AppList from "./components/AppList.vue";

export default defineComponent({
	name: "App",
	components: {
		Header,
		// AppList,
	},
});
</script>

<style lang="scss">
body {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#container {
	max-width: 1200px;
	margin: 0 auto;
	.title {
		text-align: center;
	}
}
</style>
