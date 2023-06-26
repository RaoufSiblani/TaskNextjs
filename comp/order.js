const Order = ({ image, title, price }) => {
    return (
      <tr className="w-95">
        <td className="flex justify-center items-center">
          <img src={image} alt="Food" className="w-24 h-24" />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">{price}$</td>
      </tr>
      
    );
  };
  
  export default Order;
  