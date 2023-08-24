import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/header";
import Overlay from "./components/Overlay";
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


//========================================================================================================================================================

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://64da15d0e947d30a260abeeb.mockapi.io/cart'),
          axios.get('https://64de03c5825d19d9bfb1e12e.mockapi.io/favorites'),
          axios.get('https://64da15d0e947d30a260abeeb.mockapi.io/items')
        ]);

        setIsLoading(true);
        setIsLoading(false)
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка')
        console.error(error)

      }
    }
    fetchData();
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://64da15d0e947d30a260abeeb.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post('https://64da15d0e947d30a260abeeb.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        })])

      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
      console.error(error)

    }
  }

  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://64da15d0e947d30a260abeeb.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Не удалось удалить из корзины')
      console.error(error)

    }
  }

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://64de03c5825d19d9bfb1e12e.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))


      } else {
        const { data } = await axios.post('https://64de03c5825d19d9bfb1e12e.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data])

      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
      console.error(error)

    }

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))

  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorites,
      onAddToCart,
      setCartOpened,
      setCartItems
    }}>
      <div className="wrapper clear">

        {
          <Overlay
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            opened={cartOpened}
          />}

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          />
        </Routes>
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites onAddToFavorites={onAddToFavorites} />
            }
            exact
          />
        </Routes>
        <Routes>
          <Route
            path="/orders"
            element={
              <Orders onAddToFavorites={onAddToFavorites} />
            }
            exact
          />
        </Routes>


      </div>
    </AppContext.Provider>
  );
}

export default App;
