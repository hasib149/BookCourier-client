const InvoicesOrderData = ({ invoice }) => {
  const { PaymentID, Amount, date } = invoice;

  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200  text-center text-sm whitespace-nowrap w-1/3">
        {PaymentID}
      </td>

      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        {Amount}
      </td>

      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        {new Date(date).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default InvoicesOrderData;
