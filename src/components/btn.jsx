const Button = (props) => {
  const handleClick = (e) => {};

  // const myStyle=

  return (
    <>
      <button onClick={(e) => handleClick} className={"btn " + props.className}>
        {props.text}
        <img src={props.img} alt="" className="btn-img" />
      </button>
    </>
  );
};

export default Button;
