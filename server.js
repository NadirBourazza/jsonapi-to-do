const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000;

app.use(bodyParser.json())

let todos = [
    { id: 1, title: 'Take out the trash', completed: false },
]

app.get('/todos', (_, res) => {
    res.json({data: todos});
});

app.post('/todos', (req, res) => {
    try {
        const title = req.query.title;
        if (!title) {
            throw new Error('title is required');
        }
        
        const newTodo = {
            title: title,
            id: (todos.length + 1).toString(), // In a real app, I would use a real id generator
            completed: false
        }

        todos.push(newTodo);
        
        res.status(201).json({data: newTodo});    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.delete('/todos/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (!id) {
            throw new Error('id is required');
        }

        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
            throw new Error('id not found');
        }

        todos.splice(todoIndex, 1);
        res.sendStatus(204);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});