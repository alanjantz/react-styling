import React from "react";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { Typography } from "./styles";

type SectionTitleProps = {
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ variant, children }) => {
  variant = variant ?? "h2";
  return (
    <Typography
      variant={variant}
      color="textPrimary"
      gutterBottom
      $bold={["h1", "h2"].includes(variant)}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
