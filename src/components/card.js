function Card() {
    return (
        <div className="card">
            <div className="card-favorite">
                <img src="/img/favorite-unactive.svg" alt="Unactive" />
            </div>
            <img width={133} height={112} src="./img/sneacers/sneacers1.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
                <div className="card-content">
                    <span>Цена: </span>
                    <b>12 999 руб.</b>
                </div>
                <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
        </div>
    )
}
export default Card;