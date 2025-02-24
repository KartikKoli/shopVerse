import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import Dashboard from "../admin/Dashboard";
import ListProducts from "../admin/ListProducts";
import NewProduct from "../admin/NewProduct";
import UpdateProduct from "../admin/UpdateProduct";
import UploadImages from "../admin/UploadImages";
import ListOrders from "../admin/ListOrders";
import ProcessOrder from "../admin/ProcessOrder";
import ListUsers from "../admin/ListUsers";
import UpdateUser from "../admin/UpdateUser";
import ProductReviews from "../admin/ProductReviews";

const AdminRoutes = () => {
  return (
    <>
      <Route
        exact
        path="/admin/dashboard"
        element={
          <ProtectedRoute admin={true}>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        exact
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <ListProducts></ListProducts>
          </ProtectedRoute>
        }
      ></Route>

      <Route
        exact
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProduct></NewProduct>
          </ProtectedRoute>
        }
      ></Route>

<Route
        exact
        path="/admin/products/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateProduct></UpdateProduct>
          </ProtectedRoute>
        }
      ></Route>
      <Route exact path="/admin/products/:id/upload_images" element={
        <ProtectedRoute admin={true}>
            <UploadImages></UploadImages>
        </ProtectedRoute>
      }></Route>
      <Route exact path="/admin/orders" element={
        <ProtectedRoute admin={true}>
        <ListOrders></ListOrders>
    </ProtectedRoute>
      }></Route>
      <Route exact path="/admin/orders/:id" element={
        <ProtectedRoute admin={true}>
            <ProcessOrder></ProcessOrder>
        </ProtectedRoute>
      }></Route>
      <Route exact path="/admin/users" element={
        <ProtectedRoute admin={true}>
            <ListUsers></ListUsers>
        </ProtectedRoute>
      }></Route>
      <Route exact path="/admin/users/:id" element={
        <ProtectedRoute admin={true}>
            <UpdateUser></UpdateUser>
        </ProtectedRoute>
      }></Route>
      <Route exact path="/admin/reviews" element={
        <ProtectedRoute admin={true}>
            <ProductReviews></ProductReviews>
        </ProtectedRoute>
      }></Route>
    </>
  );
};

export default AdminRoutes;
