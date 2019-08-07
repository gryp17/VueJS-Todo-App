const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuidv4 = require('uuid/v4')

const app = module.exports = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//in memory store for the todo tasks
//restarting the server will wipe the data
let todos = []

//get all todo tasks
app.get('/todos', function (req, res) {
	res.json(todos)
})

//update todo task status
app.put('/todo/:id', function (req, res) {
	let updatedTodo

	todos = todos.map((todo) => {
		if (todo.id == req.params.id) {
			todo.completed = req.body.completed
			updatedTodo = todo
		}

		return todo
	})

	res.json(updatedTodo)
})

//delete todo task
app.delete('/todo/:id', function (req, res) {
	todos = todos.filter((todo) => {
		return todo.id != req.params.id
	})

	res.json(todos)
})

//insert new todo task
app.post('/todo', function (req, res) {
	let task = {
		id: uuidv4(),
		task: req.body.task,
		completed: false
	}
	
	todos.push(task)

	res.json(task)
})


app.all("*", function (req, res){
	res.status(404).json({
		errors: {
			api: "URL not found"
		}
	})
})

app.listen(9090, function () {
	console.log("listening on port " + 9090)
})
