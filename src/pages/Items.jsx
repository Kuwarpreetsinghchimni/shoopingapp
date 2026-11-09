import { useEffect, useState } from "react";

export default function Items() {


  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);


  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
     

  }, []);


  return (
  <div className="container-fluid mb-6">
    <h1>our beatiful collection</h1>

    <button
  className="btn success"
  onClick={() => setVisibleCount(visibleCount + 1)}
>
  +
</button>

<span style={{ margin: "0 15px" }}>
  {visibleCount}
</span>

<button
  className="btn decrease"
  onClick={() => setVisibleCount(Math.max(0, visibleCount - 1))}
>
  -
</button>

    <div className="row">
      {products.slice(0, visibleCount).map((product) => (
        <div className="col col-lg-3 col-6 mb-4" key={product.id}>
          <div className="card h-100 yahoo">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
            />

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="fw-bold">${product.price}</p>

              <button className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);}