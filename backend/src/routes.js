const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
	return response.send('hello word');
});

routes.get('/json', (request, response) => {
	return response.json({
		evento: 'semana omnistack',
		aluno: 'aluno'
	});
});

/**
Query params
localhost:3333/users?nome=Diego
**/
routes.get('/users', (request, response) => {
	const params = request.query;

	console.log(params); /*name=Diego*/
	return response.json({
		params
	});
});

/**
Route params
localhost:3333/users/1
**/
routes.get('/users/:id', (request, response) => {
	const id = request.params;

	console.log(id); /*1*/
	return response.json({
		id
	});
});

/**
Request body
localhost:3333/users
body:{nome:"xxx"}
**/
routes.post('/users/create', (request, response) => {
	const body = request.body;

	console.log(body); /*1*/
	return response.json({
		body
	});
});

/*exportando as rotas para que outros arquivos possam 'enxergar' routes.js*/
module.exports = routes;