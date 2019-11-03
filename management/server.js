const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', function(req, res) {
  res.send([{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': "Hello world",
    'birthday': "940110",
    'gender': 'male',
    'job': 'no'
    },

    {'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': "Hello WoRld",
    'birthday': "940120",
    'gender': 'female',
    'job': 'no'
    },

    {'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': "Hello World",
    'birthday': "950110",
    'gender': 'male',
    'job': 'no'
    }]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));

