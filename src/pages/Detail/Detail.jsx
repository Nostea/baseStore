// 1. Alle daten Fetchen
// 2. Linkn oben auslesen damit ich weis welches Produkt ich hier anzeigen lassen soll
// 3. find methode schrieben um das einzelen produkt zu finden
// 4. ins html schriebn
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const [product, setProduct] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = product.find((item) => Number(item.id) === Number(id));
    setDetails(find);
  }, [product]);
  console.log(details);

  return (
    <section className="details">
      <h2>Details</h2>
      {details ? (
        <div>
          <img src={details.image} alt="" />

          <h3>{details.title}</h3>
          <p>{details.price} €</p>
          <p>{details.description}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default Detail;
