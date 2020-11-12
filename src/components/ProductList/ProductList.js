import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card border-primary mb-3" >
                <div className="card-header">Danh sách sản phẩm </div>
                <div className="card-body text-primary">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ProductList;