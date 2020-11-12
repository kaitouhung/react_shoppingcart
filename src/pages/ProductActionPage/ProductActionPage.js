import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index'
import { connect } from 'react-redux'

class ProductActionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        let history = this.props.history;
        e.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = this.state;
        if (id) {
            this.props.onUpdateProduct({
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            });
        } else {
            this.props.onAddProduct({
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            })

        }
        history.push('/product-list')
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            console.log(id)
            this.props.onEditProduct(id)
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            let { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }



    render() {
        let { txtName, txtPrice, chkbStatus } = this.state;
        return (

            < div className="col-6" >
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label />Tên SP
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label />Giá
                        <input type="text" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label />Trạng thái
                        <input type="checkbox" className="form-control" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={chkbStatus} />Còn hàng

                    </div>
                    <button type="submit" className="btn btn-primary mr-3">Lưu lại</button>
                    <Link to="/product-list" className="btn btn-danger">Quay lại</Link>
                </form>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);