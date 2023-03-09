import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const guestUser = () => {
    setForm({ ...form, email: "guest@example.com", password: "123456" });
  };

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type={"email"}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme={"blue"}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        variant={"solid"}
        colorScheme={"red"}
        width="100%"
        onClick={guestUser}
      >
        Get Guest User Cresentials
      </Button>
    </VStack>
  );
};

export default Login;
