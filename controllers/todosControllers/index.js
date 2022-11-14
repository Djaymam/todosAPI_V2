const todo = require('../../model/index');


exports.getTodos = async (req,res)=>{
    const todos = await todo.getAll();

    res.status(200).json(todos) 
};


exports.getOne = async (req,res)=>{
    const {id} = req.params;
    //console.log(id);
    const todos = await todo.getSingle(id);
    res.status(200).json(todos);

}
exports.postTodos = async (req,res)=>{

    //if the post request is validated save the post in a new variable
    const { title, description, obs } = req.body;
  
    //validate the length of the title and description
    if(title.length <= 10 || description.length <= 20){
        res.status(411).send("Error: Invalid title (10) or description(20 ) length!")

    }else{
        //if the title and description length are valid, save the todo
        await todo.post(title,description,obs);
        res.status(201).send("Successfully added");

    }

}
exports.updateTodos = async (req, res)=>{
    const {title, description, obs} = req.body;
    const {id} = req.params;

    //validate the length of the title and description
    if(title.length <= 10 || description.length <= 20){
        res.status(411).send("Error: Invalid title or description length")
        

    }else{
        //if the title and description length are valid, update the todo
        await todo.update(title, description, obs,id);
        res.status(202).send("Successfully update");
    }

}

exports.deleteTodo = async (req,res)=>{
    const {id} = req.params;
    //removing the todo from the database
    await todo.delete(id)
    res.status(200).send("Successfully delete");
};