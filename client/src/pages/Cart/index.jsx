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
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Cart;
