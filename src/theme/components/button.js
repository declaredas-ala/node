import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "6px",
  outlineOffset: "0",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: 700,
});

const sizes = {
  xs: defineStyle({
    h: "55px",
    fontSize: "18px",
    px: "35px",
  }),
};

const variants = {
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      deep_purple_200: {
        borderColor: "deep_purple.200",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "deep_purple.200",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["deep_purple_200"];
  }),
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      indigo_300: {
        bg: "indigo.300",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["indigo_300"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "xs",
  },
});
export default Button;
