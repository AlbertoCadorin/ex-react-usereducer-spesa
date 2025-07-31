import { useState } from "react";

function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const existingProduct = addedProducts.some(p => p.name === product.name);
    if (existingProduct) {
      return
    }
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <div>
        <h1>Prodotti disponibili:</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} : {product.price.toFixed(2)} €
              <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </li>
          ))}
        </ul>
        <h2>Carrello:</h2>
        <ul>
          {addedProducts.length === 0 ? (
            <li>Il carrello è vuoto</li>
          ) : (
            addedProducts.map((product, index) => (
              <li key={index}>
                {product.name} : {product.price.toFixed(2)} € x {product.quantity}
                <button onClick={() => {
                  setAddedProducts(addedProducts.filter(p => p.name !== product.name));
                }}>Rimuovi</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default App
