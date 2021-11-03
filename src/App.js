import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import GetService from "./Pages/GetService/GetService";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";

import initializeAuthentication from "./Pages/Login/Firebase/Firebase.init";
import MyBookings from "./Pages/MyBookings/MyBookings";
import AllBookings from "./Pages/AllBookings/AllBookings";
import AddService from "./Pages/AddService/AddService";

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <GetService></GetService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/add-service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
