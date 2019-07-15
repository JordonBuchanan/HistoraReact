import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
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
            <label>{label}</label>
            <input type={type} 
            className={ classnames('form-control form-control-lg', {
            'is-invalid': error
            })}
            placeholder={placeholder} 
            value = { value }
            onChange = { onChange }
            name={name}
            disabed = {disabled} />
            {info && <small className="form-text text-muted">{info}</small>}
        { error && <div className="invalid-feedback">{error}</div> }
      </div>
    )
  }

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;