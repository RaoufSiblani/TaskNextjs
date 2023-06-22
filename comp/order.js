const Order = ({ image, title, price }) => {
    return (
      <tr className="w-95">
        <td className="pl-4">
          <img src={image} alt="Food" className="w-24 h-24 align-left" />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">{price}$</td>
      </tr>
    );
  };
  
  export default Order;
  