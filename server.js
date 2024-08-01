const express = require ('express');
const path = require('path');
const fs = require('fs')


const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join (__dirname, 'public')));

app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req,res) => {
res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/assets/js/index.js', (req,res) => {
res.sendFile(path.join(__dirname, 'assets', 'js', 'index.js'));
});
app.get('/assets/css/styles.css', (req,res) => {
res.sendFile(path.join(__dirname, 'assets', 'css', 'styles.css'));
});
app.get('/api/notes', (req,res) => {
res.sendFile(path.join(__dirname, './db','db.json'));
});

let notes = [];
const saver = () => {
const toJson = path.resolve (__dirname, './db/db.json');
fs.writeFileSync(toJson, JSON.stringify(notes, null, 2),'utf-8');
};
const genId = (array) => {
    const maxId = array.reduce((max, item) => (item.id > max ? item.id : max), 0);
    let nextId = maxId + 1;
    return array.map(item => ({
      ...item,
      id: item.id ? item.id : nextId++
    }));
};

app.post('/',)


app.listen(port, () => console.log(`App listening on PORT ${port}`));