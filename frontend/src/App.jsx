import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./customer/components/Routes/CustomerRouters";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </>
  );
};

export default App;
