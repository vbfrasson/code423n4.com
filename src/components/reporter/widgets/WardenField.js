import React, { useCallback } from "react";
import clsx from "clsx";

import Select from "react-select";

import * as styles from "./WardenField.module.scss";

const WardenOptionLabel = ({ value, image }) => {
  return (
    <div className={styles.OptionContainer}>
      <img
        src={
          image
            ? image.childImageSharp.resize.src
            : "https://placekitten.com/g/64/64"
        }
        alt={"avatar for " + value}
      />
      <span>{value}</span>
    </div>
  );
};

const WardenField = ({ name, required, options, onChange, fieldState, isInvalid, isMulti = false }) => {
  const handleChange = useCallback(
    (option) => {
      const value = option && option.value ? option.value : "";
      onChange({ target: { name, value: isMulti ? option.map((o) => o.value) : value } });
    },
    [onChange, name]
  );

  return (
    <>
      <Select
        name={name}
        required={required}
        value={options.find((o) => o.value === fieldState) || undefined}
        formatOptionLabel={WardenOptionLabel}
        options={options}
        onChange={handleChange}
        className={clsx(styles.ReactSelect, isInvalid && styles.Invalid)}
        classNamePrefix="react-select"
        isClearable={true}
        isMulti={isMulti}
      />
    </>
  );
};

export default WardenField;
