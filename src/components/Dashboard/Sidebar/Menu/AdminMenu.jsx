import { FaUserCog, FaUserEdit } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserEdit} label="All Users" address="all-users" />
      <MenuItem icon={FaUserCog} label="Manage Books" address="manage-books" />
    </>
  );
};

export default AdminMenu;
