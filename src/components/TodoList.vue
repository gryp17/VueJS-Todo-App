<template>

	<el-row type="flex" justify="center">
		<el-col :xs="24" :md="18">

			<div class="todo-list">
				<div class="input-wrapper">
					<el-input v-model="taskText" placeholder="Todo content..."></el-input>
					<el-button v-on:click="addTask" type="primary">Add</el-button>
				</div>
				<div class="tasks-list">
					<template v-if="todoTasks && todoTasks.length > 0">
						<TodoListItem 
							v-for="task in todoTasks" 
							v-bind:key="task.id"
							v-bind:task="task"
							v-on:set-completed-status="setCompletedStatus"
							v-on:delete-task="deleteTask"/>
					</template>
					<div v-else class="no-tasks-message">
						No items
					</div>
				</div>
			</div>

		</el-col>
	</el-row>

</template>

<script>
	import TodoListItem from './TodoListItem.vue'

	export default {
		name: 'TodoList',
		components: {
			TodoListItem
		},
		data: function () {
			return {
				taskText: ''
			}
		},
		created: function () {
			this.$store.dispatch('getTodoTasks')
		},
		computed: {
			todoTasks: function () {
				return this.$store.state.todos
			}
		},
		methods: {
			addTask: function () {
				this.$store.dispatch('addTask', this.taskText)
				this.taskText = ''
			},
			setCompletedStatus: function (id, completed) {
				this.$store.dispatch('setCompletedStatus', {
					id,
					completed
				})
			},
			deleteTask: function (id) {
				this.$store.dispatch('deleteTask', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.todo-list {
		$border: solid 1px #c2cfe5;
		border: $border;
		border-radius: 4px;
		background-color: #ffffff;

		.input-wrapper {
			display: flex;
			padding: 20px;
			border-bottom: $border;

			button {
				margin-left: 20px;
			}
		}

		.no-tasks-message {
			text-align: center;
			padding: 20px;
			color: #909399;
		}
	}
</style>