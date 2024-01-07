const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./todos.db');

const app = express()
const PORT = 3000;

app.use(bodyParser.json())

app.get('/todos', (_, res) => {
    db.all("SELECT * FROM todos", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json({data: rows});
    });
});

app.post('/todos', (req, res) => {
    try {
        const title = req.query.title;
        if (!title) {
            throw new Error('title is required');
        }
        
        db.run(`INSERT INTO todos(title) VALUES(?)`, [title], function(err) {
            if (err) {
                return console.log(err.message);
            }
            res.json({id: this.lastID, title: title, completed: false});
        });
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

app.delete('/todos/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error('id is required');
        }

        db.run(`DELETE FROM todos WHERE id = ?`, id, function(err) {
            if (err) {
                return console.log(err.message);
            }
            if (this.changes === 0) {
                res.status(404).json({error: 'id not found'});
            } else {
                res.sendStatus(204);
            }
        });
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});