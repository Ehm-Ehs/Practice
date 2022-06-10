const Button = (props) => {

    const handleClick = (e) => {

    }

    // const myStyle=

  return (
    <>
      <button onClick={(e)=> handleClick} className={"btn "+props.className}>
        <a href="#" className="links button ">
          Request Demo
        </a>
      </button>
    </>
  );
};

export default Button;
