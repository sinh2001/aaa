import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./Product";
export default function App() {
  const [Prodcts, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6173d982110a740017223178.mockapi.io/product/product")
      .then((Response) => Response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/Product" exact>
          <Products />
        </Route>
        <Route path="/prodct/add" exact>
          {" "}
          Product Add
        </Route>
        <Route path="/product/:id">chi tiet</Route>
        <Route path="/product/:id/edit" exact>
          update{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
