import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actDeleteProductRequest, actFetchProductsRequest } from './../../actions/index'

class ProductListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id)

    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
                )
            })
        }
        return result
    }

    render() {
        let products = this.props.products;
        return (
            <div className="container">
                <div className="col-12">
                    <Link to='/product/add' className="btn btn-info">Thêm sản phẩm</Link>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);