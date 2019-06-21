import React, {Component} from 'react';
import GetJson from '../../service/service-class';
import Info from '../info/info'


export default class Product extends Component {
    getProductsList = new GetJson();
    state = {
        productsList: []
    };

    componentDidMount() {
        this.getProductsList
            .getProducts()
            .then((productsList) => {
                this.setState({
                    productsList
                })
            })
    };

    items(arr) {

        return arr.map((product) => {
            return (
                <div key={product.id} className="col-md-3">


                    <div className="card">
                        <img src={product.url} className="card-img-top" alt="{product.name}"/>
                        <div className="card-body">
                            <h6 className="card-title">{product.name}</h6>
                            <p className="card-text">{product.description}</p>
                            <div className="price">Price: <span>{product.price}</span>$</div>
                        </div>

                        <button className="btn btn-danger" onClick={() => this.onDelete(product.id)}>X</button>
                    </div>


                </div>
            )
        })
    }

    onDelete(id) {

        this.setState(() => {
            console.log(`id: ${id}`);
            const idx = this.state.productsList.findIndex((el) => el.id === id);
            console.log(`idx: ${idx}`);

            const before = this.state.productsList.slice(0, idx);
            const after = this.state.productsList.slice(idx + 1);
            const newArray = [...before, ...after];
            return {
                productsList: newArray
            };
        })

    }

    onAllDelete() {

        this.setState(() => {
            return {
                productsList: []
            };
        })

    }

    totalNumber = () => {

        return this.state.productsList.length;
    };
    countPrice = () => {

        return this.state.productsList.reduce((sum, product) => sum + +product.price, 0);
    };
    averagePrice = () => {
        let averagePriceValue = parseFloat((this.countPrice() / this.totalNumber()).toFixed(2));

        if (isNaN(averagePriceValue)) {
            return 0;
        } else {
            return averagePriceValue;
        }
    };

    render() {

        const {productsList} = this.state;
        const totalNumber = this.totalNumber();
        const sumPrice = this.countPrice();
        const averagePrice = this.averagePrice();

        if (!productsList) {
            console.log('null');
        }
        const items = this.items(productsList);
        return (
            <div className="row">
                {items}


                <Info onAllDelete={() => this.onAllDelete()}
                      totalNumber={totalNumber}
                      sumPrice={sumPrice}
                      averagePrice={averagePrice}

                />

            </div>
        )
    }
}