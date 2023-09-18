import { Avatar, Grid, Rating ,Box} from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">April 5,2023</p>
            </div>
          </div>
          <Rating value={2.5} name="" readOnly precision={0.5}></Rating>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            hic error nisi? Dignissimos facilis natus, accusamus quidem nostrum
            culpa inventore ut quasi reprehenderit est! Quo ut reiciendis
            repellat dolorum optio.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
