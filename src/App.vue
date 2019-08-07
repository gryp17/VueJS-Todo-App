<template>
	<div id="app">

		<el-container>
			<el-header height="auto">
				<router-link to="/">Todo List</router-link>
				<router-link to="/about">About</router-link>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>

	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="scss">
	body, html {
		height: 100%;
		padding: 0;
		margin: 0;
		background-color: #f4f6fa;
	}

	.el-header {
		padding: 25px 15px;
		background-color: #ffffff;
		border: solid 1px #c2cfe5;

		a + a {
			margin-left: 20px;
		}
	}
</style>
