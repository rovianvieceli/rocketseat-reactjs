import React, { Component } from 'react';

import api from '../../services/api';

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
        return (
            <div className='products-list'>
                {
                    this.state.products.map(product => (
                        <h2 key={product._id}>{product.title}</h2>
                    ))
                }
            </div>
        );
    }
}