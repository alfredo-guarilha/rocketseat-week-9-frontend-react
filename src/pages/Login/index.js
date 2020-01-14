import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({history}){

    const [ email, setEmail ] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        
        const response = await api.post('sessions', { email })
        
        const { _id } = response.data;

        console.log(_id);

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <React.Fragment>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={evt => setEmail(evt.target.value)}
                placeholder="Escolha seu melhor e-mail"
            />
            <button type="submit" className="btn">Entrar</button>
            </form>
        </React.Fragment>
    );
    
}

