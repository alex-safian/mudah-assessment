import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Loading from "../Loading";
import About from "../../pages/About";
import Products from "../../pages/Products";
import Product from "../../pages/Product";
import NotFound from "../../pages/NotFound";

const App: React.FC = () => (
  <Router>
    <Suspense
      fallback={<Loading className="flex justify-center items-center h-full" />}
    >
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
