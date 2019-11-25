import React from "react";

const Image = ({
  src,
  figureClasses,
  imageClasses,
  alt = "blank",
  ...rest
}) => (
  <figure className={`image ${figureClasses || ""}`}>
    <img {...rest} className={imageClasses || ""} alt={alt} src={src} />
  </figure>
);
export default Image;
