import { Avatar, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-shopping-bag" />
          <h1>Cart Items</h1>
        </div>
        <div className="d_flex">
          <Stack
            sx={{
              backgroundColor: "#f5f5f5",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            p={6}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                pr: 10,
                border: "none",
                boxShadow: "none",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Typography variant="h6" component="div">
                Serial
              </Typography>

              <Typography variant="h6" component="div">
                Image
              </Typography>
              <Typography variant="h6" component="div">
                Name
              </Typography>
              <Typography variant="h6" component="div">
                Quantity
              </Typography>
              <Typography variant="h6">Price</Typography>
              <Typography variant="h6" component="div">
                Action
              </Typography>
            </Card>

            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                pr: 5,
                border: "none",
                boxShadow: "none",
              }}
              // key={index}
            >
              <Typography variant="h6" component="div">
                # 1
              </Typography>

              <Avatar
                alt="product_image"
                src=""
                sx={{ width: 60, height: 60 }}
              />
              <Typography variant="h6" component="div">
                name
              </Typography>
              <Typography variant="h6" component="div">
                1
              </Typography>
              <Typography variant="h6">10$</Typography>
              <Button
                variant="contained"
                color="error"
                // onClick={() => removeItemFromCart(cart)}
              >
                Remove
              </Button>
            </Card>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Cart;
