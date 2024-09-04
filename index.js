const express = require("express");

const app = express();

//endpoint
app.get('/', (req, res)=>{
    res.send("Welcome Home!")
});

const Todos = [
    { id: 1, task: 'Body workout'},
    {id: 2, task: 'Doing research'},
    {id: 3, task: 'work out the asignment'},
    {id: 4, task: 'General cleaning'},
    {id: 5, task: 'Driving'}
];



//A todo list Home route/endpoint
app.get('/home', (req, res)=>{
    res.send('Welcome to your Todo home page!')
});


//A list of Todos route/endpoint
app.get('/todos', (req, res)=>{
    res.json(Todos)
});

//A single Todo depending on the id
app.get('/todos/:todoId', (req, res)=>{
    let requestedId = req.params.todoId;
    let requestedTodo = Todos.find(todo=>
        todo.id === parseInt(requestedId)
    );

    if(requestedTodo){
        res.json(requestedTodo);
        return
    }
    res.status(404).send("Todo not found")
})

app.listen(300, ()=>{console.log("Server started on port: 300")});