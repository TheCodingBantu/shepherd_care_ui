import {
  MenuOutlined,
  SearchOutlined,
  UserAddOutlined,
  BellOutlined,
} from "@ant-design/icons";
import placeholder from "../images/placeholder.jpg";

const Navbar = () => {
  return (
    <div className="wrapper   flex flex-row  justify-between items-center w-full sticky top-0 p-4 shadow-sm  bg-white  ">
      <MenuOutlined className="text-xl" />
      <div className="search flex  bg-dark-50 items-center p-2 w-96 rounded-md ">
        <SearchOutlined className="text-dark-100 w-12"/>
        <input className="focus:outline-none p-0 bg-transparent w-full " type="text"  name="" id="" />
      </div>

      <div className="flex items-center gap-4">
        <UserAddOutlined className="cursor-pointer text-xl" />
        <BellOutlined className="cursor-pointer text-xl" />
        <img
          className="profile cursor-pointer w-10 h-10 object-cover  rounded-full "
          src={placeholder}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
