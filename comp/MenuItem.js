const MenuItem = ({ image, title, price, description }) => {
  return (
    <div className="inline-block  w-30 sm:w-45 lg:w-90 mx-10 my-20 border-2 border-black rounded-25 p-1 box-border">
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
