const express = require('express');

/*importação das rotas*/
const routes = require('./routes');

const app = express();

/*informar ao app que as requisições deverão ser tratadas como json
express irá converter as requisições de json para objeto*/
app.use(express.json());
app.use(routes);


app.listen(3333);