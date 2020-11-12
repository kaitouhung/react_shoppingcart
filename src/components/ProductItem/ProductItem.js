import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {


    onDelete = (id) => {
        if (confirm('Bạn chắc chắn xóa hay ko')) { //eslint-disable-line
            this.props.onDelete(id)
        }
    }   

    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        let statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-3">Sửa</Link>
                    <button className="btn btn-danger" onClick={() => { this.onDelete(product.id) }}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;