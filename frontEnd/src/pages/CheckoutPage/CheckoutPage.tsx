import { Box, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useCart } from "../../context/Cart/CartContext";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { baseUrl } from "../../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const { token } = useAuth();
  const addressRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const hendleConfirmOrder = async () => {
    const address = addressRef.current?.value;
    if (!address) {
      return;
    }

    const response = await fetch(`${baseUrl}/cart/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        address,
      }),
    });

    if (!response.ok) {
      return;
    }

    clearCart();
    navigate("/order-success");
  };
  const renderCartItems = () => (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        border: 1,
        borderColor: "#f2f2f2",
        borderRadius: 5,
        padding: 1,
      }}
    >
      {cartItems.map((item) => (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            width={"100%"}
          >
            <img src={item.image} width={50} />
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography>
                {item.quantity} x {item.unitPrice} TND
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Box>
        <Typography variant="body2" sx={{ textAlign: "right" }}>
          Total Amount: {totalAmount.toFixed(2)} TND
        </Typography>
      </Box>
    </Box>
  );
  return (
    <main>
      <Container
        fixed
        sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">Checkout</Typography>
        </Box>
        <TextField
          inputRef={addressRef}
          label="Delivery Address"
          name="address"
          fullWidth
        />
        {renderCartItems()}
        <Button variant="contained" fullWidth onClick={hendleConfirmOrder}>
          Pay Now
        </Button>
      </Container>
    </main>
  );
};

export default CheckoutPage;
