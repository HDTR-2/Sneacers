import React from 'react';
import axios from 'axios';

import Info from "../info";
import { useCart } from '../../hooks/useCart';

import styles from './Drawe.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Overlay({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);



    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://64de03c5825d19d9bfb1e12e.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);


            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://64da15d0e947d30a260abeeb.mockapi.io/cart' + item.id);
                await delay(1000)
            }



        } catch (error) {
            alert("Не удалось создать заказ")
        }
        setIsLoading(false);
    }
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisabile : ''}`}>
            <div className={styles.drawer}>
                <h2>Корзина <img onClick={onClose} className="cart-remove" width={30} height={30} src="/img/delete.svg" alt="Remove" /></h2>
                {
                    items.length > 0 ? (
                        <div>
                            <div className="cart-items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cart-item">
                                        <img width={70} height={70} src={obj.imageUrl} alt="" />
                                        <div className="cart-content">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="cart-remove" width={30} height={30} src="/img/delete.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="pay-content">
                                <ul className="pay-content-ul">
                                    <li className="pay-content-li">
                                        <span>Итого </span>
                                        <div></div>
                                        <b>{totalPrice} руб.</b>
                                    </li>
                                    <li className="pay-content-li">
                                        <span>НДС: </span>
                                        <div></div>
                                        <b>{totalPrice / 100 * 5}</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} type="submit" class="pay-button">Оформить заказ <img src="/img/Arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div>
                    ) : <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кросовок"} />

                }


            </div>
        </div>
    )
}
export default Overlay;