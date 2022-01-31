import PropTypes from "prop-types";
const Button = ({ className, children }) => {
  return (
    <button className={`btn ${className && className}`}>{children}</button>
  );
};
Button.propTypes = {
  className: PropTypes.string
};
Button.defaultProps = {
  className: "btn--primary"
};
export default Button;
