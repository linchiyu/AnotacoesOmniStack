import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import './styles.css';

import api from '../../services/api';

export default function NewIncident(){

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const ongId = localStorage.getItem('ongId');

	const history = useHistory();

	async function handleNewIncident(e) {
		e.preventDefault();
		
		const data = {
			title, description, value
		};

		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId, 
				}
			})

			history.push('/profile');
		} catch(err){
			alert("Erro ao cadastrar caso");
		}
	}


	return (
		<div>
			
		<Link to="/profile">Voltar</Link>

		<form onSubmit={handleNewIncident}>
			<input 
				placeholder="Titulo"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<textarea 
				placeholder="Descrição"
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<input 
				placeholder="Valor"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className="button" type="submit">Cadastrar</button>

		</form>
		</div>
	);
}