<template>
	<div class="todo-list-item">
		<el-checkbox v-model="task.completed" class="task-status-toggle">
			{{ task.task }}
		</el-checkbox>

		<el-button v-on:click="deleteTask" type="text" class="delete-task-button">
			<i class="el-icon-close"></i>
		</el-button>
	</div>
</template>

<script>
	export default {
		name: 'TodoListItem',
		props: {
			task: Object
		},
		watch: {
			task: {
				handler: function (newVal) {
					this.$emit('set-completed-status', newVal.id, newVal.completed)
				},
				deep: true
			}
		},
		methods: {
			deleteTask: function () {
				this.$emit('delete-task', this.task.id)
			}
		}
	}
</script>

<style lang="scss">
	
	.todo-list-item {
		padding: 20px;

		& + .todo-list-item {
			border-top: solid 1px #c2cfe5;
		}

		.task-status-toggle {
			.el-checkbox__label {
				color: #000000;
			}
		}

		.delete-task-button{
			display: none;
			float: right;
			padding: 0;

			i {
				font-weight: bold;
				font-size: 20px;
			}
		}

		&:hover {
			background-color: #dee6f1;

			.delete-task-button {
				display: block;
			}
		}
	}
	
</style>