import propTypes from "prop-types";

export const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
