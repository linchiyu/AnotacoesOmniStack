import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';


export default function Register(){

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const history = useHistory();

	async function handleRegister(e){
		e.preventDefault();

		const data = {
			name, email, whatsapp, city, uf,
		};

		try{
			const response = await api.post('ongs', data);

			alert (`Seu id de acesso ${response.data.id}`);
			history.push('/');
		} catch (err) {
			alert ('Erro no cadastro, tente novamente.');
		}
	}

	return (
		<div>
			
		<Link to="/">Voltar</Link>

		<form onSubmit={ handleRegister }>
			<input 
				placeholder="Nome da ONG"
				value= { name }
				onChange={e => setName(e.target.value)}
			/>
			<input type="email" placeholder="Email"
				value= { email }
				onChange={e => setEmail(e.target.value)}
			/>
			<input placeholder="WhatsApp"
				value= { whatsapp }
				onChange={e => setWhatsapp(e.target.value)}
			/>
			<div className="input-group">
				<input placeholder="Cidade"
					value= { city }
					onChange={e => setCity(e.target.value)}
				/>
				<input placeholder="UF" style={{ width: 80 }}
					value= { uf }
					onChange={e => setUf(e.target.value)}
				/>
			</div>
			<button className="button" type="submit">Cadastrar</button>

		</form>
		</div>
	);
}