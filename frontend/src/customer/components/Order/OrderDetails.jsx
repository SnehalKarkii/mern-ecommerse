import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const OrderDetails = () => {

  return (
    <div className="lg:px-20 px:5">
      <div>
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-10 border-2 my-10">
        <OrderTracker activeStep={3} />
      </div>

      {[1, 1, 1, 1].map((item) => (
        <Grid className="space-x-5" container>
          <Grid
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men kattu</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color:Black</span>
                    <span>Size:M</span>
                  </p>
                  <p>Seller:Kallu</p>
                  <p>Rs1000</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default OrderDetails;
