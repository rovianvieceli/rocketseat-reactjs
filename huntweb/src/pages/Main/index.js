import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        paginate: {}
    }
    /**
     * Função nativa do ReactJS
     * Utilizada assim que o render é iniciado
     */
    componentDidMount() {
        this.loadProducts();
    }

    /**
     * Função própria criada pelo dev
     * Consome o endereço api recebendo um objeto de itens
     * Setando as propriedade do State
     */
    loadProducts = async () => {
        const response = await api.get(`/products`);
        const { docs, ...paginate } = response.data;

        this.setState({ products: docs, paginate });
    }
    /**
     * Função nativa do ReactJS
     * Que da o Start do app
     */
    render() {
        const { products } = this.state;

        return (
            <div className='products-list'>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}