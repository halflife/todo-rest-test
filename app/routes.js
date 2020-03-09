module.exports = function(app) {


	// sample list
	const todoList = [
		{
			text: "Buy Rinso",
			done: false,
		},
		{
			text: "Buy Milo",
			done: true,
		},
		{
			text: "Buy Sunlight",
			done: true,
		},
		{
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

		const newTodoList = todoList.concat([{ text: req.body.text, done: false }]);
		res.json(newTodoList); // return all sample todos in JSON format

	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};