import ProductCard from "../../components/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import type { Product } from "../../types/Products";
import { baseUrl } from "../../constants/baseUrl";

const Ecommerce = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/product`);
      const data = await response.json();
      setProducts(data);
    } catch{
      setError(true)
    }
}
    fetchData();
  }, []);

if (error) {
  return <main>Something went wrong, please try again later.</main>;
}
  return (
    <main>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid size={{ md: 4 }} sx={{width: "100%"}} >
              <ProductCard  {...p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Ecommerce;
