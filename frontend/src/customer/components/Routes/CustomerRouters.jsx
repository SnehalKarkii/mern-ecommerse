import { Route, Routes } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Checkout from "../checkout/Checkout";
import ProductDetails from "../ProductDetails/ProductDetails";
import Order from "../Order/Order";
import OrderDetails from "../Order/OrderDetails";
import HomePage from "../../pages/HomePage/HomePage"
import Product from "../Product/Product"
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/:labelOne/:labelTwo/:labelThree" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
          

 
      
        </Routes>
      </div>
      <div>
        <Footer />{" "}
      </div>
    </div>
  );
};

export default CustomerRouters;
