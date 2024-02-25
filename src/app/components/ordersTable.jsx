import { useState } from "react";

function OrdersTable({ orders, updateOrder }) {
  // Assuming each 'order' in 'orders' includes an array of strings or objects for the items

  const handleCheckboxChange = (orderId) => {
    updateOrder(orderId, { paid: !orders.find((order) => order.id === orderId).paid });
  };

  return (
    <table className="w-8/12 leading-normal mb-12 xs:max-sm:w-11/12">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Name</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Time</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">How to Eat</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Payment Method</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Paid?</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Order Items</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Total</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">Extra Info</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order['id']} className="border-b border-gray-200">
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">{order['name']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">{`${order['hour']}:${String(order['minute']).padStart(2, '0')}`}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">{order['howEat']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">{order['howPay']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">
              <input
                type="checkbox"
                checked={order.paid}
                onChange={() => handleCheckboxChange(order.id)}
                
              />
            </td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">
              <ul>
                {order['order'].map((item, index) => {
                  //Assuming 'item' is always a string for simplicity
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">${order['total']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xxs">{order['extraInfo']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
