const router = require('express').Router();
const{ v4: uuidv4 } = require('uuid');
const fs = require ('fs');
const { json } = require('sequelize');
// const { Json } = require('sequelize/lib/utils');

router.get('/api/notes', async (req, res) =>{
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
   res,json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs,fs.readFileSync('db/db.json',"utf-8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});



router.delete('/api/notes/:id', (req,res) => {
    let data = fs.writeFileSync("db/db.json","utf8");
    const dataJson = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
    res.json(deleted);
});


module.exports = router;
    
