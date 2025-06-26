import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/baseUrl";
import { useAuth } from "../../context/Auth/AuthContext";

const CartPage = () => {
  const { token } = useAuth();
  const [cart, setCart] = useState();
  const [error, setError] = useState("");

  useEffect(() => {

    if (!token){
        return
    }

    const fetchCart = async () => {
      const response = await fetch(`${baseUrl}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        setError("Failed to fetch user cart . Please try again");
      }

      const data = await response.json();
      setCart(data);
    };
    fetchCart();
  }, [token]);
console.log(cart);
  return <main>
    <Container sx={{ mt : 2}}>
  <Typography variant="h4">my cart</Typography>
    </Container>
  </main>;
};

export default CartPage;
