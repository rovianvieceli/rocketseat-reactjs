import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        paginate: {}
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);
        const { docs, ...paginate } = response.data;

        this.setState({ products: docs, paginate });
    }

    render() {
        const { products } = this.state;

        return (
            <div className='products-list'>
                {
                    products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <a href="">Acessar</a>
                        </article>
                    ))
                }
            </div>
        );
    }
}