import React from 'react';
import Card from "../components/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorites,
    onAddToCart,
    isLoading
}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />
        ));

    }

    return (
        <div className="content">
            <div className="search">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="search-block">
                    <img
                        className='input'
                        src="./img/Search.svg"
                        alt="Search" />
                    {searchValue && (<img
                        onClick={() => setSearchValue('')}
                        className='clear'
                        src="./img/Delete.svg"
                        alt="Clear" />)}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" name="" id="" placeholder="Поиск..." />
                </div>
            </div>
            <div className="cards">
                {renderItems()}
            </div>
        </div>
    )
}
export default Home;