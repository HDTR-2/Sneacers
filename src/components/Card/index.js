import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';
console.log(styles)

function Card({
    id,
    onFavorite,
    title,
    imageUrl,
    price,
    onPlus,
    favorited = false,
    loading = false
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price }
    const onClickPlus = () => {
        onPlus(obj);
    }

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>

            {
                loading ? <ContentLoader
                    speed={4}
                    width={150}
                    height={187}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                    <rect x="0" y="97" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="122" rx="3" ry="3" width="90" height="15" />
                    <rect x="0" y="156" rx="8" ry="8" width="80" height="24" />
                    <rect x="118" y="150" rx="8" ry="8" width="32" height="32" />
                </ContentLoader> : <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        {onFavorite && <img
                            src={isFavorite ? "./img/favorite-active.svg" : "./img/favorite-unactive.svg"}
                            alt="Unactive" />}
                    </div>
                    <img width={133} height={112} src={imageUrl} alt="Scneacers" className="cards-img" />
                    <h5>{title}</h5>
                    <div className={styles.price}>
                        <div className={styles.content}>
                            <span>Цена: </span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && <img
                            className={styles.plus}
                            onClick={onClickPlus}
                            width={11}
                            height={11}
                            src={isItemAdded(id) ? "./img/button-checked.svg" : "./img/button-unchecked.svg"} alt="" />}
                    </div>
                </>
            }

        </div>
    );
}
export default Card;