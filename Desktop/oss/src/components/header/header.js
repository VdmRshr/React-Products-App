import React from 'react';
import image from '../../logo.svg';
// import Menu from '../../components/menu/menu'

const AppHeader=()=>{
    const companyName='Company Name';
    return(
        <header>
            <div className="row">
                <div className="col-md-3"> <img src={image} alt={companyName}/></div>
                <div className="col-md-9 text-center align-self-center" > <h1>{companyName}</h1></div>
                {/*<div className="col-md-1 text-right align-self-center" > <Menu/></div>*/}
            </div>

        </header>
    )
};

export default AppHeader;

