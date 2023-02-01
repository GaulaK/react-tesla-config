const Button = (props) => {
  const { onClickFunction, style, option, price } = props;
  return (
    <button onClick={onClickFunction} className={style}>
      <span>
        {option} - {price}
      </span>
    </button>
  );
};

export default Button;
