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

const cars = [
    { id: 1, company: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, company: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, company: 'Ford', model: 'Mustang', year: 2021 },
    { id: 4, company: 'Chevrolet', model: 'Malibu', year: 2018 },
    { id: 5, company: 'Tesla', model: 'Model S', year: 2022 },
    { id: 6, company: 'Nissan', model: 'Altima', year: 2020 },
    { id: 7, company: 'BMW', model: '3 Series', year: 2021 },
    { id: 8, company: 'Audi', model: 'A4', year: 2020 },
    { id: 9, company: 'Mercedes-Benz', model: 'C-Class', year: 2019 },
    { id: 10, company: 'Lexus', model: 'RX', year: 2021 }
];

app.get('/cars',(req, res)=>{
    res.json(cars);
})

app.get('/cars/:carId', (req, res)=>{
    let requestedId = req.params.carId;
    let requestedCar = cars.find(car=>
        car.id === parseInt(requestedId))

    if (requestedCar) {
        res.json(requestedCar);
        return
    }
    res.status(404).send("car not found")
    
})



app.listen(300, ()=>{console.log("Server started on port: 300")});