const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());


const users = ['Sakib', 'Riad', 'Liton', 'Nasir', 'Sadat']

app.get('/', (req, res) => {
    // res.send("Thanks for call");
    const fruit = {
        product: 'Mango',
        price: 100
    }
    res.send(fruit);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})

app.post('/addUser', (req, res) => {
    // console.log('data received', req.body);

    //  save to database
    const user = req.body;
    user.id = 40;
    res.send(user);
})

app.listen(4000, () => console.log('Listening to port 4000'));