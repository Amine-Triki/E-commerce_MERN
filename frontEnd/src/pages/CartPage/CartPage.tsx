import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useCart } from "../../context/Cart/CartContext";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const {
    cartItems,
    totalAmount,
    updateItemInCart,
    removeItemInCart,
    clearCart,
  } = useCart();

const navigate = useNavigate();

  const handleQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  const handleremoveItem = (productId: string) => {
    removeItemInCart(productId);
  };

const handleCheckout = () => {
navigate("/checkout");
}

  const renderCartItems = () => (
    <Box display="flex" flexDirection="column" gap={4}>
      {cartItems.map((item) => (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            border: 1,
            borderColor: "#f2f2f2",
            borderRadius: 5,
            padding: 1,
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <img src={item.image} width={50} />
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>
                {item.quantity} x {item.unitPrice} TND{" "}
              </Typography>
              <Button onClick={() => handleremoveItem(item.productId)}>
                Remove item
              </Button>
            </Box>
          </Box>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              onClick={() => handleQuantity(item.productId, item.quantity - 1)}
            >
              -
            </Button>
            <Button
              onClick={() => handleQuantity(item.productId, item.quantity + 1)}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
      ))}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h4">
          Total Amount: {totalAmount.toFixed(2)} TNDs
        </Typography>
        <Button variant="contained" onClick={handleCheckout}>Go To Checkout</Button>
      </Box>
    </Box>
  );
  return (
    <main>
      <Container fixed sx={{ mt: 2 }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">my cart</Typography>
          <Button onClick={() => clearCart()}> Clear Cart</Button>
        </Box>
        {cartItems.length ? (
          renderCartItems()
        ) : (
          <Typography>
            Cart is empty . please start shopping and add items first
          </Typography>
        )}
      </Container>
    </main>
  );
};

export default CartPage;
