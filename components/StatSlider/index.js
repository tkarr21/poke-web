import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './statslider.module.scss';


const StatSlider = ({ name, min, max, value, setValue }) => {

  const inputElement = useRef({current: { offsetWidth: 1}});
  const containerElement = useRef(null);
  const [adjustment, setAdjustment] = useState(1);

  

  useEffect(() => {
    setAdjustment(inputElement.current.offsetWidth * 1.0 / containerElement.current.offsetWidth)
  }, [inputElement.current.offsetWidth])

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

        <div  className={styles.value} style={{ width: ((value - min) / (max - min + 3) * 100 * (adjustment)) + '%' }}></div>
        
        
      </div>
      <div className={styles.slideContainer}>
        <p>{value}</p>
      </div>
    </div>
  );
};

StatSlider.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  setValue: PropTypes.func
}

export default StatSlider;