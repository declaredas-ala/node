const baseStyle = {
  color: "black.900",
  fontFamily: "SF UI  Text",
};
const sizes = {
  xs: {
    fontSize: "16px",
    fontWeight: 500,
  },
  s: {
    fontSize: "22px",
    fontWeight: 400,
  },
  md: {
    fontSize: '{"md":"28px","base":"24px","sm":"26px"}',
    fontWeight: 500,
  },
};
const defaultProps = {
  size: "s",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
