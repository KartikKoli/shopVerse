import React from "react";
import { Route } from "react-router-dom";
import Home from "../layout/Home";
import ProductDetails from "../product/ProductDetails";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../user/Profile";
import UpdateProfile from "../user/UpdateProfile";
import ProtectedRoute from "../auth/ProtectedRoute";
import UploadAvatar from "../user/UploadAvatar";
import UpdatePassword from "../user/UpdatePassword";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import Cart from "../cart/Cart";
import Shipping from "../cart/Shipping";
import ConfirmOrder from "../cart/ConfirmOrder";
import PaymentMethod from "../cart/PaymentMethod";
import MyOrders from "../order/MyOrders";
import OrderDetails from "../order/OrderDetails";
import Invoice from "../invoice/Invoice";


const UserRoutes = () => {
  return (
    <>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route
        exact
        path="/product/:id"
        element={<ProductDetails></ProductDetails>}
      ></Route>
      <Route exact path="/login" element={<Login></Login>}></Route>
      <Route exact path="/register" element={<Register></Register>}></Route>
      <Route
        exact
        path="/me/profile"
        element={
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/me/update_profile"
        element={
          <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/me/upload_avatar"
        element={
          <ProtectedRoute>
            <UploadAvatar></UploadAvatar>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/me/update_password"
        element={
          <ProtectedRoute>
            <UpdatePassword></UpdatePassword>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/password/forgot"
        element={<ForgotPassword></ForgotPassword>}
      ></Route>
      <Route
        exact
        path="/password/reset/:token"
        element={<ResetPassword></ResetPassword>}
      ></Route>
      <Route exact path="/cart" element={<Cart></Cart>}></Route>
      <Route
        exact
        path="/shipping"
        element={
          <ProtectedRoute>
            <Shipping></Shipping>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/confirm_order"
        element={
          <ProtectedRoute>
            <ConfirmOrder></ConfirmOrder>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/payment_method"
        element={
          <ProtectedRoute>
            <PaymentMethod></PaymentMethod>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/me/orders"
        element={
          <ProtectedRoute>
            <MyOrders></MyOrders>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/me/order/:id"
        element={
          <ProtectedRoute>
            <OrderDetails></OrderDetails>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/invoice/order/:id"
        element={
          <ProtectedRoute>
            <Invoice></Invoice>
          </ProtectedRoute>
        }
      ></Route>
    </>
  );
};

export default UserRoutes;
