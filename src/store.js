import axios from 'axios'

export default {
	state: {
		todos: []
	},
	mutations: {
		setTodoTasks: function (state, todos) {
			state.todos = todos
		},
		addTask: function (state, task) {
			state.todos = [...state.todos, task]
		},
		deleteTask: function (state, id) {
			state.todos = [...state.todos].filter((task) => {
				return task.id !== id
			})
		},
		setCompletedStatus: function (state, updatedTask) {
			state.todos = [...state.todos].map((task) => {
				if (task.id === updatedTask.id) {
					task.completed = updatedTask.completed
				}

				return task
			})
		}
	},
	actions: {
		getTodoTasks: function (context) {
			return axios.get('http://localhost:9090/todos').then((response) => {
				context.commit('setTodoTasks', response.data)
			}).catch(() => {
				alert('failed to fetch todos list')
			})
		},
		addTask: function (context, taskText) {
			return axios.post('http://localhost:9090/todo', {
				task: taskText
			}).then((response) => {
				context.commit('addTask', response.data)
			}).catch(() => {
				alert('failed to insert todo task')
			})
		},
		deleteTask: function (context, id) {
			return axios.delete('http://localhost:9090/todo/' + id).then(() => {
				context.commit('deleteTask', id)
			}).catch(() => {
				alert('failed to delete todo task')
			})
		},
		setCompletedStatus: function (context, task) {
			return axios.put('http://localhost:9090/todo/' + task.id, {
				completed: task.completed
			}).then((response) => {
				context.commit('setCompletedStatus', response.data)
			}).catch(() => {
				alert('failed to update todo task')
			})
		}
	}
}