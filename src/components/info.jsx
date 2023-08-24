import React from 'react'
import AppContext from '../context';

const Info = ({ title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);
    return (
        <div className="cart-empty">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} type="submit" class="pay-button">Вернуться назад <img src="/img/Arrow.svg" alt="Arrow" /></button>
        </div>
    )
}

export default Info;
