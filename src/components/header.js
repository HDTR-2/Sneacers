import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();
    console.log(props)
    return (
        <header>
            <Link to="/">
                <div className="headerLeft">

                    <img width={40} height={40} src="./img/Logo.png" alt="" />

                    <div className="headerInfo">
                        <h3>React Sneacers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>

                </div>
            </Link>
            <div className="headerRight">
                <ul>
                    <li onClick={props.onClickCart}>
                        <img width={20} height={20} src="./img/Cart.svg" alt="Корзина" />

                        <span>{totalPrice} руб.</span>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <img width={20} height={20} src="./img/favorite.svg" alt="Закладки" />
                        </Link>
                    </li>
                    <li ><Link to="/orders">
                        <img width={20} height={20} src="./img/User.svg" alt="Пользователь" />
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;