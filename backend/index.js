const express = require('express');

const app = express();

app.get('/', (request, response) => {
	return response.send('hello word');
});

app.get('/json', (request, response) => {
	return response.json({
		evento: 'semana omnistack',
		aluno: 'aluno 1'
	});
});

app.listen(3333);