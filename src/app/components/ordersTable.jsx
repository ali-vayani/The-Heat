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
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Name</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Time</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">How to Eat</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Payment Method</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Paid?</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Order Items</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order['id']} className="border-b border-gray-200">
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">{order['name']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">{`${order['hour']}:${String(order['minute']).padStart(2, '0')}`}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">{order['howEat']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">{order['howPay']}</td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">
              <input
                type="checkbox"
                checked={order.paid}
                onChange={() => handleCheckboxChange(order.id)}
                
              />
            </td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">
              <ul>
                {order['order'].map((item, index) => {
                  //Assuming 'item' is always a string for simplicity
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </td>
            <td className="px-5 py-5 bg-primary text-sm xs:max-sm:px-0 xs:max-sm:text-center xs:max-sm:text-xs">${order['total']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
