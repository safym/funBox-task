//import modules
import { useState } from "react";

// import components
import ProductCardBack from "./productCardBack";

// import images
import cat from "../img/img-cat.png";

const ProductCard = (props) => {
  const product = props.product;
  let [selected, setSelected] = useState(false);

  let message, mouse;

  if (product.inStock && !selected) {
    message = (
      <p className="product-message">
        Чего сидишь? Порадуй котэ,&nbsp;
        <span
          onClick={() => {
            setSelected(!selected);
          }}
        >
          купи.
        </span>
      </p>
    );
  } else if (selected) {
    message = (
      <p className="product-message">
        {product.message}
      </p>
    );
  } else {
    message = (
      <p className="product-message yellow">
        Печалька, {product.spec} закончился.
      </p>
    );
  }

  console.log(product.mouseCount);

  if (product.mouseCount === 1) {
    mouse = <p className="product-mouse">Мышь в подарок</p>;
  } else if (product.mouseCount < 5) {
    mouse = (
      <p className="product-mouse">
        <b>{product.mouseCount}</b> мыши в подарок
      </p>
    );
  } else {
    mouse = (
      <p className="product-mouse">
        <b>{product.mouseCount}</b> мышей в подарок
        <br />
        <span>заказчик доволен</span>
      </p>
    );
  }

  return (
    <div className="product-item">
      <div
        className={`product-card 
          ${selected ? "selected" : ""} 
          ${!product.inStock ? "out-of-stock" : ""}`}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <div className="product-card-info-wrapper">
          <p className="product-overview">Сказочное заморское яство</p>

          <div className="product-header-wrapper">
            <p className="product-header">{product.title}</p>
            <p className="product-composition">{product.spec}</p>
          </div>

          <p className="product-portion">
            <b>{product.portionCount}</b> порций
          </p>

          {mouse}
        </div>

        <div className="product-weight">
          <p>{product.weight}</p>
          <span>кг</span>
        </div>

        <img className="img-cat" alt="cat" src={cat} />

        <ProductCardBack />
      </div>

      {message}
    </div>
  );
};

export default ProductCard;