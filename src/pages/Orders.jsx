import React from 'react';
import Card from "../components/Card";
import axios from 'axios';
import AppContext from '../context';

function Orders() {
    const { onAddToFavorites } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://64de03c5825d19d9bfb1e12e.mockapi.io/orders');
                setOrders(data.map((obj) => obj.items).flat());
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка')
            }
        })();
    }, []);
    return (
        <div className="content">
            <div className="search">
                <h1>Заказы</h1>
            </div>
            <div className="cards">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}
export default Orders;