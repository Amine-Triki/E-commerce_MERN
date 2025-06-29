/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Typography } from "@mui/material";
import { useAuth } from "../../context/Auth/AuthContext";
import { useEffect } from "react";

const MyOrdersPage = () => {
  const { myOrder, getMyOrders } = useAuth();

  useEffect(() => {
    getMyOrders();
  }, []);
  return (
    <main>
      <Container
        fixed
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography>My Orders</Typography>
        {myOrder.map(({ address, orderItems, total }, index) => (
          <Box
            key={address || index}
            sx={{ border: 1, borderColor: "gray", borderRadius: 2, padding: 1 }}
          >
            <Typography>Address: {address}</Typography>
            <Typography>Items: {orderItems.length}</Typography>
            <Typography>Total: {total}</Typography>
          </Box>
        ))}
      </Container>
    </main>
  );
};

export default MyOrdersPage;
