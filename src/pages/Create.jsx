import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Meme Name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive meme name</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Upload Your Meme</FormLabel>
          <Input type="file" multiple accept="image/*" />
        </FormControl>

        <Button type="submit">Share Meme</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
  };

  console.log(task);

  return redirect("/");
};
