import { FaBookMedical } from "react-icons/fa";import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";
const LibrarianMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaBookMedical}
        label="Add Book"
        address="add-book"
      />
      <MenuItem icon={MdHomeWork} label="My Books" address="my-books" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Orders"
        address="manage-orders"
      />
    </>
  );
};

export default LibrarianMenu;
