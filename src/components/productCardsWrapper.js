//import components
import ProductCard from "./productCard";

const ProductCardsWrapper = (props) => {

  return (
    <div className="product-cards-wrapper">

      {props.productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default ProductCardsWrapper;