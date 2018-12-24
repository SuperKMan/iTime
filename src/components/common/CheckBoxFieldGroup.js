import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const CheckBoxFieldGroup = ({
  name,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
        <label className="form-check-label" for="gridCheck">
          {label}
        </label>
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

CheckBoxFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

export default CheckBoxFieldGroup;
