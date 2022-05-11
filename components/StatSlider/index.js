import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './statslider.module.scss';


const StatSlider = ({ name, min, max, value, setValue }) => {

  const inputElement = useRef({current: { offsetWidth: 1}});
  const containerElement = useRef(null);
  const [adjustment, setAdjustment] = useState(1);

  
  useEffect(() => {
    let fineTune = inputElement.current.offsetWidth > 155 ? 20 : 24
    setAdjustment(inputElement.current.offsetWidth * 1.0 / (containerElement.current.offsetWidth + fineTune))
  }, [inputElement.current.offsetWidth]);

  const getWidth = () => {
    return ((value - min) / (max - min) * 100 * (adjustment)) + '%'
  };

  const handleTextInput = (e) => {
    let eVal = e.target.value;
    let toSet = eVal;
    if (eVal > max) {
      toSet = String(max);
    }
    else if (eVal < min && eVal !== '') {
      toSet = String(min);
    }

    setValue(toSet);
  };

  const handleLoseFocus = (e) => {
    if (value === "") {
      setValue(String(Math.ceil((max + min) / 2)));
    }
  }

  return (
    <div className={styles.statsContainer}>
      <div className={styles.slideContainer}>
        <p>{name}</p>
      </div>
      <div ref={containerElement} className={styles.slideContainer} style={{ flexGrow: 1 }}>
        <input
          ref={inputElement}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => setValue(e.target.value)}
          className={styles.slider}
        />
        <div className={styles.value} style={{ width: value != "" ? getWidth() : '50%' }}></div>   
      </div>
      <label
        htmlFor={name}
        className={styles.numInput}
      >
      <input
        className={styles.numInputText}
        id={`${name}`}
        type="number"
        inputMode="tel"
        value={value}
        min={min}
        max={max}
        placeholder={`${min} - ${max}`}
        onChange={e => handleTextInput(e)}
        onBlur={e => handleLoseFocus(e)}
        />
      </label>
    </div>
  );
};

StatSlider.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default StatSlider;