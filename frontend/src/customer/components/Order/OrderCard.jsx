import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate()
  return (
    <div onClick= {()=>navigate(`/account/order/${5}`)}className="mt-10 shadow-lg p-5 hover:shadow-2xl border mr-10">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
              className="h-[5rem] w-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold"> Men slim pant</p>
              <p className="opacity-50 text-xs font-semibold ">Size:M</p>
              <p className="opacity-50 text-xs font-semibold ">Color:Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>Rs1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your item has been Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery on Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
