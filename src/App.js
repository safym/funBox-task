import "./App.css";

//import components
import ProductCardsWrapper from "./components/productCardsWrapper";

function App() {
  const productsData = [
    {
      id: 1,
      title: "Нямушка",
      spec: "c фуа-гра",
      message: "Печень утки разварная с артишоками.",
      portionCount: 10,
      mouseCount: 1,
      weight: "0,5",
      inStock: true,
    },
    {
      id: 2,
      title: "Нямушка",
      spec: "c рыбой",
      message: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      portionCount: 40,
      mouseCount: 2,
      weight: "2",
      inStock: true,
    },
    {
      id: 3,
      title: "Нямушка",
      spec: "c курой",
      message: "Филе из цыплят с трюфелями в бульоне.",
      portionCount: 100,
      mouseCount: 5,
      weight: "5",
      inStock: false,
    },
  ];

  return (
    <div className="App">
      <div className="main-wrapper">
        <h1 className="section-header">Ты сегодня покормил кота?</h1>

        <ProductCardsWrapper productsData={productsData} />
      </div>
    </div>
  );
}

export default App;