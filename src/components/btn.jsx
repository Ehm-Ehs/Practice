const Button = () => {

    const handleClick = (e) => {

    }

  return (
    <>
      <button onClick={(e)=> handleClick} className="btn">
        <a href="#" className="links button">
          Request Demo
        </a>
      </button>
    </>
  );
};

export default Button;
