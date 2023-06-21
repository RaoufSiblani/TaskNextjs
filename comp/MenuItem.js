const MenuItem = ({ image, title, price, description }) => {
    return (
      <div className="flex flex-col justify-center items-center w-30 mx-10 my-20 border-2 border-black rounded-25 p-1 box-border">
        <img src={image} alt="Food" className="w-95 object-contain rounded-25" />
        <div className="text-left mt-10">
          <h3>{title}</h3>
          <h4>{price}$</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default MenuItem;