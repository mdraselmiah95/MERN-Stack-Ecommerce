import React from "react";
import { Box } from "@mui/material";

const Head = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <section className="head">
          <div className="container d_flex">
            <div className="left row">
              <i className="fa fa-phone" />
              <label> +8801845515895</label>
              <i className="fa fa-envelope" />
              <label> support@rasel.com</label>
            </div>
            <div className="right row RText">
              <label>Theme FAQ&#39;s</label>
              <label>Need Help?</label>
              <label>EN</label>
              <label>USD</label>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
};

export default Head;
