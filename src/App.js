import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import BackToTop from "./components/BackToTopButton";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./screens/Home/Hompage";
import ContactUs from "./screens/ContactUs/ContactUs";
import Subcategory from "./screens/Subcategory/Subcategory";
import Page404 from "./screens/404Page/Page404";
import Product from "./screens/Product/Product";
import SingleProduct from "./screens/Product/SingleProduct";
import AccountDashboard from "./screens/AccountDashboard/AccountDashboard";
import UserInformation from "./components/UserInformation/UserInformation";
import FormSignUp from "./screens/Signup/FormSignUp";
import DashboardInfo from "./screens/AccountDashboard/DasboardInfo";
import FormLogin from "./screens/Login/FormLogin";
import AddressbookDashboard from "./screens/AccountDashboard/AddressbookDashboard";
import NewAddress from "./components/AddressBook/NewAddress";
import ResetPassword from './screens/ResetPassword/ResetPassword';
import ForgottenPassword from './screens/ForgottenPassword/ForgottenPaassword';
import AboutUs from './screens/AboutUs/AboutUs';
import VerifyRegistration from "./screens/Signup/VerifySignup";
import { ProtectCustomerRoute } from "./context/ProtectRoute";
import WalletDashboard from "./screens/WalletPage/WalletDashoard";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/dashboard" element={
            <ProtectCustomerRoute>
              <AccountDashboard />
            </ ProtectCustomerRoute>
          } />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/dashboard-acc-info" element={
          <ProtectCustomerRoute>
          <DashboardInfo />
        </ ProtectCustomerRoute>} />
          <Route path="/addressbook" element={
            <ProtectCustomerRoute>
            <AddressbookDashboard />
          </ ProtectCustomerRoute>} />
          
          <Route path="/login" element={<FormLogin />} />
          <Route path="/new-address" element={
          <ProtectCustomerRoute>
          <NewAddress />
        </ ProtectCustomerRoute>} />
          <Route path="/forgotpassword" element={<ForgottenPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/verifyRegistration" element={<VerifyRegistration />} />
          <Route
            path="/shop"
            element={
              <Product
                title={"Products"}
                url={"products"}
                productUrlProp={`/products/paginated-all`}
                isEditable={false}
                isId={false}
              />
            }
          />
          <Route path="/shop/products/:id" element={<SingleProduct />} />

          <Route
            path="favorites"
            element={
              <Product
                title={"Subcategory"}
                url={"favorites"}
                displayCategories={false}
                isEditable={true}
                isId={false}
              />
            }
          />
          <Route path="favorites/:id" element={<SingleProduct />} />

          <Route path="*" element={<Page404 />} />
          <Route path="/accountInfo" element={
          <ProtectCustomerRoute>
            <UserInformation />
        </ ProtectCustomerRoute>} />

          <Route
            path="categories/viewByCategory/:id"
            element={
              <Subcategory
                title={"Subcategories"}
                url={`/subcategory/viewByCategory`}
              />
            }
          />

          <Route
            path="categories/subcategories/:id/shop"
            element={
              <Product
                title={"Products"}
                url={"products"}
                productUrlProp={`/products/subcategory`}
                isEditable={false}
                isId={true}
              />
            }
          />
          <Route
            path="categories/subcategories/:id/shop/products/:id"
            element={<SingleProduct />}
          />
          <Route path="/wallet" element={
            <ProtectCustomerRoute>
            <WalletDashboard />
        </ ProtectCustomerRoute>
          } />
        </Routes>
        <BackToTop />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
