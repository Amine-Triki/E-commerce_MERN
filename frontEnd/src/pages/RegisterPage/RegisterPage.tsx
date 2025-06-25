import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { baseUrl } from "../../constants/baseUrl";
import { useAuth } from "../../context/Auth/AuthContext";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

const {login} = useAuth()  

  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    //validate the form data
    if (!firstName || !lastName || !email || !password) {
      setError("check submitted data!");
      return;
    }

    // Make the call to API to create the user
    const response = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!response.ok) {
      setError("unable to register user, please try different credentials!");
      return;
    }

    const token = await response.json();

    if (!token){
      setError("Incorrect token")
      return
    }

    login(email, token);

  
  };

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 4,
          }}
        >
          <Typography variant="h6"> Register New Account</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
              boreder: 1,
              borderColor: "#f5f5f5",
              p: 2,
            }}
          >
            <TextField
              inputRef={firstNameRef}
              label="First Name"
              type="text"
              name="firstName"
              required
            />
            <TextField
              inputRef={lastNameRef}
              label="Last Name"
              type="text"
              name="lastName"
              required
            />
            <TextField
              inputRef={emailRef}
              label="Email"
              type="email"
              name="email"
              required
            />
            <TextField
              inputRef={passwordRef}
              label="Password"
              type="password"
              name="password"
              required
            />
            <Button onClick={onSubmit} variant="contained">
              Register
            </Button>
            {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default RegisterPage;
