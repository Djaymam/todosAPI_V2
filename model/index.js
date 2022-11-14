const db = require('../database')


class todo {
static async getAll() {
    try {
        const todos = await db.query("SELECT * FROM todo_items");
        
        if (todos.rows.length == 0) {
            return "No todo items Found";            
        } else {
            return todos.rows[0];
        }
    
    } catch (error) {
        console.error(error.message);
    }
}
static async getSingle(id) {
    try {
        const todos = await db.query("SELECT * FROM todo_items WHERE id=$1",[id]);
        //console.log(todos.rows);
        
        //Validate the data from the todo_items
        if (todos.rows.length == 0) {
            return "This ID does not exist";            
        } else {
            return todos.rows[0];
        }
        
    } catch (error) {
        console.error(error.message);
    }
    
}
static async post(title, description, obs) {

    try {
        await db.query("INSERT INTO todo_items (title, description, obs) VALUES($1,$2,$3)", [title, description, obs]);

    } catch (error) {
        console.error(error.message);
    }

}
static async update(title, description, obs,id) {

    try {
        await db.query("UPDATE todo_items SET title=$1, description=$2, obs=$3  WHERE id=$4",[title, description, obs,id]);
        
    } catch (error) {
        console.log(error.message);
    }
}
static async delete(id){
    try {
        await db.query("DELETE FROM todo_items WHERE id=$1",[id]);
        
    } catch (error) {
        console.log(error.message);
    }
}

}

module.exports = todo;