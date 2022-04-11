const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(express.json());

const users = require('./routes/user');
const error = require('./middlewares/error');

app.use('/', users);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
