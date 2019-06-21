import React, {Component} from 'react';
export default class Info extends Component {


    render(){
    const { onAllDelete, totalNumber, sumPrice, averagePrice } = this.props;
    return (
        <div className="col-sm-12">

            <ul className="list-group list-group-horizontal-xl float-right pt-5">
                <li className="list-group-item">Total number of products: {totalNumber}</li>
                <li className="list-group-item">Sum of the prices: {sumPrice}$</li>
                <li className="list-group-item">Average price: {averagePrice}$</li>
                <li className="list-group-item"> <button className="btn btn-danger" onClick={onAllDelete}>Delete all</button></li>
            </ul>

        </div>

    )}
}

