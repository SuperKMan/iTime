import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const RadioFieldGroup = ({
  name,
  id,
  value,
  label,
  error,
  info,
  checked,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={value === checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label className="form-check-label" for={id}>
          {label}
        </label>
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

RadioFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

export default RadioFieldGroup;
