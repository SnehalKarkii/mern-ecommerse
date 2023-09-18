import { Button } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
        <div className="lg:grid grid-cols-3 relative">
      <div className="col-span-2 mt-5">
      {[1,1,1,1].map((item)=><CartItem />)}
      </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-10 lg:mt-5">
        <div className="border p-10">
          <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
          <hr />

          <div className="space-y-3 font-semibold mb-5">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>Rs4697</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span>Rs400</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery Charge</span>
              <span>Rs97</span>
            </div>
            <div className="flex justify-between pt-3 text-black border-t-2">
              <span className="font-bold">Total Amount</span>
              <span>Rs4267</span>
            </div>
          </div>
          <Button
            className="w-full"
            variant="contained"
            sx={{ px: "1rem", mt: "2rem", fontSize: "1rem" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default OrderSummary;
