const express = require('express');
//const crypto = require('crypto');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.number().required().min(10).max(11),
		city: Joi.string().required().length(2),
	})
}),OngController.create);

routes.get('/profile', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number(),
	})
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
}), IncidentController.delete);


/*exportando as rotas para que outros arquivos possam 'enxergar' routes.js*/
module.exports = routes;