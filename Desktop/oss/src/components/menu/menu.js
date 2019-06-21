import React from 'react';
import './menu.css'
import { Link } from 'react-router-dom';


const Menu = () => {



    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/catalog">Catalog</Link>
                <Link to="/new-product">Add new product</Link>

            </div>
        </div>
    )


};

export default Menu;
