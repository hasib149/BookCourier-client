import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { IoReceiptSharp } from "react-icons/io5";
const CustomerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFingerprint} label="My Orders" address="my-orders" />
      <MenuItem icon={IoReceiptSharp} label="Invoices" address="invoices" />
    </>
  );
};

export default CustomerMenu;
