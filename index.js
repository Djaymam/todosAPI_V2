const { application } = require('express');
const express = require('express');
const validate = require('express-jsonschema').validate;
const todosControllers = require('./controllers/todosControllers');
const schema = require('./controllers/todosControllers/todosSchema');

const app = express();
const PORT = 6996

app.use(express.json());

//listening to port
app.listen(PORT,()=>{
    console.log('Server listening on '+ PORT);
});

//request all todos
app.get('/',todosControllers.getTodos);

//resquest 1 todo
app.get('/todos/:id',todosControllers.getOne);

//add todos
app.post('/add',validate({body:schema.todosSchema}),todosControllers.postTodos);

//update todos
app.put("/update/:id",validate({body: schema.todosSchema}),todosControllers.updateTodos);
//delete todos
app.delete("/delete/:id",todosControllers.deleteTodo);
