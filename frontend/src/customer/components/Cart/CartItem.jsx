import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 rounded-md border shadow-lg">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim mid Pant</p>
          <p className="opactiy-70">Size: L,white</p>
          <p className="opactiy-70 mt-2">Seller: Crishtaliyo 2 fashion</p>

          <div className="flex space-x-5 items-center text-lg text-gray-900 mt-6">
            <p className="font-semibold">Rs199</p>
            <p className="opacity-50 line-through">Rs499</p>
            <div className="text-green-600 font-semibold">5% off</div>
          </div>
        </div>
        </div>

          <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="py-1 px-7 border rounded-sm">1</span>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div>
              <Button>remove</Button>
            </div>
          </div>
       
      </div>
    
  );
};

export default CartItem;
