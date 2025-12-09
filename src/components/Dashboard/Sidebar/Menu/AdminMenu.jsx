import { FaUserCog, FaUserEdit } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={FaUserEdit} label='All Users' address='all-users' />
    </>
  )
}

export default AdminMenu
