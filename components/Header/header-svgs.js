import PropTypes from 'prop-types';

export const Burger = ({ setBurgerPressed, burgerPressed, styleClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="40"
      viewBox="0 0 53 40"
      className={styleClass}
      onClick={() => setBurgerPressed(!burgerPressed)}
      aria-labelledby="burger"
      role="img"
    >
      <title id="burger">Menu burger collapesed</title>
      <g
        id="Burger_Menu"
        data-name="Burger Menu"
        transform="translate(-2281.201 -4826)"
      >
        <rect
          id="Rectangle_725"
          data-name="Rectangle 725"
          width="53"
          height="7"
          transform="translate(2281.201 4826)"
        />
        <rect
          id="Rectangle_726"
          data-name="Rectangle 726"
          width="53"
          height="7"
          transform="translate(2281.201 4842)"
        />
        <rect
          id="Rectangle_727"
          data-name="Rectangle 727"
          width="53"
          height="8"
          transform="translate(2281.201 4858)"
        />
      </g>
    </svg>
  );
};

Burger.propTypes = {
  setBurgerPressed: PropTypes.func,
  burgerPressed: PropTypes.bool,
  styleClass: PropTypes.string
};

export const RedBurger = ({
  setBurgerPressed,
  burgerPressed,
  styleClass
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="40"
      viewBox="0 0 53 40"
      onClick={() => setBurgerPressed(!burgerPressed)}
      className={styleClass}
      role="img"
      aria-labelledby="red-burger"
    >
      <title id="red-burger">Menu burger expanded</title>
      <g
        id="Burger_Menu"
        data-name="Burger Menu"
        transform="translate(-2281.201 -4826)"
      >
        <rect
          id="Rectangle_725"
          data-name="Rectangle 725"
          width="53"
          height="7"
          transform="translate(2281.201 4826)"
          fill="#ee4c4c"
        />
        <rect
          id="Rectangle_726"
          data-name="Rectangle 726"
          width="53"
          height="7"
          transform="translate(2281.201 4842)"
          fill="#ee4c4c"
        />
        <rect
          id="Rectangle_727"
          data-name="Rectangle 727"
          width="53"
          height="8"
          transform="translate(2281.201 4858)"
          fill="#ee4c4c"
        />
      </g>
    </svg>
  );
};

RedBurger.propTypes = {
  setBurgerPressed: PropTypes.func,
  burgerPressed: PropTypes.bool,
  styleClass: PropTypes.string
};
