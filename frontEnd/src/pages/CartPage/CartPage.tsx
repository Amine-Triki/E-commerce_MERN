import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/baseUrl";
import { useAuth } from "../../context/Auth/AuthContext";
import { useCart } from "../../context/Cart/CartContext";

const CartPage = () => {
  const { token } = useAuth();
  const { cartItems, totalAmount } = useCart();
  const [error, setError] = useState("");



  return (
    <main>
      <Container sx={{ mt: 2 }}>
        <Typography variant="h4">my cart</Typography>
        {cartItems.map((item) => (
          <Box>{item.title}</Box>
        ))}
      </Container>
    </main>
  );
};

export default CartPage;
