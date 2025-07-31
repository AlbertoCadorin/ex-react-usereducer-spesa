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
    const existingProduct = addedProducts.find(p => p.name === product.name);
    if (existingProduct) {
      updateProductQuantity(existingProduct.name, existingProduct.quantity + 1);
      return;
    }
    setAddedProducts(curr => [...curr, { ...product, quantity: 1 }]);
  };

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts(addedProducts.map(p => {
      if (p.name === name) {
        return { ...p, quantity };
      }
      return p;
    }));
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
        <h3>Totale: {addedProducts.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)} €</h3>
      </div>
    </>
  )
}

export default App
