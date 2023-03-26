import { InfoOutlineIcon, PlusSquareIcon, StarIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={StarIcon} color="white"></ListIcon>
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={PlusSquareIcon} color="white"></ListIcon>
          New Meme
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={InfoOutlineIcon} color="white"></ListIcon>
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
}
