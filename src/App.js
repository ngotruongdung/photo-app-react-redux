import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Photo from "./features/Photo";
import Header from "./components/Header";
function App() {
  return (
    <div className="photo-app">
      <Suspense
        fallback={
          <div>
            <h1>Loading..</h1>
          </div>
        }
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
