const db = require('../database/dbtest.js');
const todosControllers = require('../controllers/todosControllers');
const httpMocks = require('node-mocks-http');
let req, res;
const data ={
    title: 'Ir a Camara Municipal',
    description: 'Ver os documentos para o terreno',
    obs:'levar documentos'
}
/*
beforeEach(() => {
    db.query("TRUNCATE test_DB");
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });
  beforeEach(async ()=>{
    await db.query("INSERT INTO todo_items (title, description, obs) VALUES($1,$2,$3)", [data.title, data.description, data.obs])
  });

describe("Should get the list of todos",()=>{

    it("Should return todos",async ()=>{
       const todos = await todosControllers.getTodos();

       expect(res.statusCode).toBe(200);

    })

})

*/