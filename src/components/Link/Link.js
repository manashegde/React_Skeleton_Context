import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <RouterLink {...props}>{children}</RouterLink>
);
export default Link;
