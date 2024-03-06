import "./Products.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [shopData, setShopData] = useState();
  console.log(shopData);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      // * Bei dem 2 then speichern wir die daten in einem State "setMegaData(data)"
      .then((apiData) => setShopData(apiData))
      .catch((error) => console.error("Fehler :-(", error));
  }, []); // Hier wird er beim ersten mal rendern die daten gefetcht

  return (
    <>
      <section className="shop">
        <h1>Shop</h1>
        <div className="products-grid">
          {shopData ? (
            shopData.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt="" />
                <span>{item.title}</span>
                <Link to={`/products/details/${item.id}`}> Zum Produkt</Link>
              </div>
            ))
          ) : (
            <p>Laden...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
