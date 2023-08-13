import Card from "./components/card";
import Header from "./components/header";
import Overlay from "./components/overlay";
function App() {
  return (
    <div className="wrapper clear">
      <Overlay />
      <Header />
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/Search.svg" alt="Search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards">
          <Card />
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers2.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers3.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers4.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers5.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers6.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers7.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers8.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers9.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers10.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers9.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/sneacers/sneacers7.jpg" alt="Scneacers" className="cards-img" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div className="card-content">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="./img/Plus.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
