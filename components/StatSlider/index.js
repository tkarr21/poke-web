import React from 'react';
import PropTypes from 'prop-types';
import styles from './statslider.module.scss';


const StatSlider = ({name, min, max, value, setValue}) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.slideContainer}>
        <p>{name}</p>
      </div>
      <div className={styles.slideContainer} style={{flexGrow: 3}}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => setValue(e.target.value)}
          className={styles.slider}
        />
        {/*<div className={styles.value} style={{ width: (value - min) / (max - min) * 100 + '%' }}></div>*/}
        
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