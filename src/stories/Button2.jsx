import React from 'react';
import PropTypes from 'prop-types';
import { useTracking } from 'react-tracking';

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({ primary, ...props }) => {
  const { trackEvent } = useTracking();

  const handleToggleChecked = ({ target: { checked } }) => {
    trackEvent({ event_name: "name", event_type: checked ? 'checked' : 'unchecked' });
  };

  return (
    <button
      type="button"
      onChange={handleToggleChecked}
    >
      <span>My Button</span>
    </button>);
};

Button2.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button2.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
