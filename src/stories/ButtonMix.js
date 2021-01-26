import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const ButtonMix = ({
  primary,
  backgroundColor,
  backgroundColorSub,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`].join(
          " "
        )}
        style={backgroundColorSub && { backgroundColorSub }}
        {...props}
      >
        {label}
      </button>

      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>

    </div>
  );
};

ButtonMix.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundColorSub: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonMix.defaultProps = {
  backgroundColor: null,
  backgroundColorSub: 'gray',
  primary: false,
  size: "medium",
  onClick: undefined,
};
