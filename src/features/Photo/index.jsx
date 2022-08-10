import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";
import SearchPhoto from "./pages/SearchPhoto";

function Photo() {
  return (
    <Switch>
      <Route exact path="/photos" component={MainPage} />
      <Route path="/photos/search" component={SearchPhoto} />
      <Route path="/photos/add" component={AddEditPage} />
      <Route path="/photos/:photoId" component={AddEditPage} />
    </Switch>
  );
}

export default Photo;
