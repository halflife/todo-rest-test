module.exports = function(app) {


	// sample list
	const todoList = [
		{
			id: 1,
			text: "Buy Rinso",
			done: false,
		},
		{
			id: 2,
			text: "Buy Milo",
			done: true,
		},
		{
			id: 3,
			text: "Buy Sunlight",
			done: true,
		},
		{
			id: 4,
			text: "Buy Anchor Butter",
			done: false,
		}
	];

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		res.json(todoList); // return all sample todos in JSON format

	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		const newTodoList = todoList.concat([{ id: 1234, text: req.body.text, done: false }]);
		res.json(newTodoList); // return all sample todos in JSON format

	});

	// create todo and send back all todos after creation
	app.patch('/api/todos/:todoId', function(req, res) {

		var todoDone = !!req.body.done;
		const newTodoList = todoList.concat([{ id: req.params.todoId, text: req.body.text, done: todoDone }]);
		res.json(newTodoList); // return all sample todos in JSON format

	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};