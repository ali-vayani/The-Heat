function OrdersTable({ orders }) {
  // Assuming each 'order' in 'orders' includes an array of strings or objects for the items
  return (
    <table className="w-8/12 leading-normal mb-12">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">Name</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">Time</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">How to Eat</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">Payment Method</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">Order Items</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-background text-left text-xs font-semibold text-text uppercase tracking-wider">Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order['id']} className="border-b border-gray-200">
            <td className="px-5 py-5 bg-primary text-sm">{order['name']}</td>
            <td className="px-5 py-5 bg-primary text-sm">{`${order['hour']}:${order['minute'].padStart(2, '0')}`}</td>
            <td className="px-5 py-5 bg-primary text-sm">{order['howEat']}</td>
            <td className="px-5 py-5 bg-primary text-sm">{order['howPay']}</td>
            <td className="px-5 py-5 bg-primary text-sm">
              <ul>
                {order['order'].map((item, index) => {
                  //Assuming 'item' is always a string for simplicity
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </td>
            <td className="px-5 py-5 bg-primary text-sm">${order['total']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
