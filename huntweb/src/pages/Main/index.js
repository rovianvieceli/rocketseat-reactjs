import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        paginate: {},
        page: 1
    }
    /**
     * Função nativa do ReactJS
     * Utilizada assim que o render é iniciado
     */
    componentDidMount() {
        this.loadProducts();
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const currentPage = page - 1;
        this.loadProducts(currentPage);
    }

    nextPage = () => {
        const { page, paginate } = this.state;
        if (page === paginate.pages) return;

        const currentPage = page + 1;
        this.loadProducts(currentPage);
    }

    /**
     * Função própria criada pelo dev
     * Consome o endereço api recebendo um objeto de itens
     * Setando as propriedade do State
     */
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...paginate } = response.data;

        this.setState({ products: docs, paginate, page });
    }
    /**
     * Função nativa do ReactJS
     * Que da o Start do app
     */
    render() {
        const { products, paginate, page } = this.state;

        return (
            <div className='products-list'>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        {/* <a href="">Acessar</a> */}
                    </article>
                ))}
                <div className="pagination">
                    <button disabled={ page === 1 } onClick={ this.prevPage }>Anterior</button>
                    <p>{`Página ${page}/${paginate.pages}`}</p>
                    <button disabeld={ page === paginate.pages } onClick={ this.nextPage }>Próximo</button>
                </div>
            </div>
        );
    }
}