const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

const connection = require('./database/connection');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');



routes.post('/sessions', SessionController.create);

/*routes.get('/ongs', async (request, response) => {
	const ongs = await connection('ongs').select(*);

	return response.json(ongs);
});*/
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


/*exportando as rotas para que outros arquivos possam 'enxergar' routes.js*/
module.exports = routes;