import React, {Component} from 'react';

import AppHeader from '../header/header';
import Catalog from '../catalog/catalog';
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends Component {




  render(){


      return(
        <div className="container">
          <AppHeader/>
          <Catalog/>

            {/*<Router>*/}
                {/*<AppHeader/>*/}
                {/*<Route path="/catalog" component={Catalog}></Route>*/}
                {/*<Route path="/new-product" component={Catalog}></Route>*/}

            {/*</Router>*/}



        </div>


    )

  }


}

