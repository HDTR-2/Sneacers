function Overlay() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="cart-remove" width={30} height={30} src="/img/delete.svg" alt="Remove" /></h2>
                <div className="cart-items">
                    <div className="cart-item">
                        <img width={70} height={70} src="/img/sneacers/sneacers1.jpg" alt="Sneacers" />
                        <div className="cart-content">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="cart-remove" width={30} height={30} src="/img/delete.svg" alt="Remove" />
                    </div>
                    <div className="cart-item">
                        <img width={70} height={70} src="/img/sneacers/sneacers1.jpg" alt="Sneacers" />
                        <div className="cart-content">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="cart-remove" width={30} height={30} src="/img/delete.svg" alt="Remove" />
                    </div>
                </div>

                <div className="pay-content">
                    <ul className="pay-content-ul">
                        <li className="pay-content-li">
                            <span>Итого </span>
                            <div></div>
                            <b>21500</b>
                        </li>
                        <li className="pay-content-li">
                            <span>НДС: </span>
                            <div></div>
                            <b>1750</b>
                        </li>
                    </ul>
                    <button type="submit" class="pay-button">Оформить заказ <img src="/img/Arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    )
}
export default Overlay;