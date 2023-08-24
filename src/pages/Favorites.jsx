import React from 'react';
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({ onAddToFavorites }) {
    const { favorites } = React.useContext(AppContext);
    return (
        <div className="content">
            <div className="search">
                <h1>Закладки</h1>
            </div>
            <div className="cards">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorites}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}
export default Favorites;