const Order = ({ image, title, price }) => {
  return (
    <div className="grid grid-cols-3 w-95 container">
      <div className="flex justify-center items-center">
        <img src={image} alt="Food" className="w-24 h-24" />
      </div>
      <div className="text-center">{title}</div>
      <div className="text-center">{price}$</div>
    </div>
  );
};

export default Order;

  