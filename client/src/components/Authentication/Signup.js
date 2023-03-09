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
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  pic: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "file" ? e.target.files[0] : value;
    setForm({ ...form, [name]: val });
  };

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
      </FormControl>
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
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input type={"file"} p={1.5} accept="image/*" onChange={handleChange} />
      </FormControl>

      <Button
        colorScheme={"blue"}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Signup
      </Button>
    </VStack>
  );
};

export default Signup;
