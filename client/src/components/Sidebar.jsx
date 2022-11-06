import {TrophyOutlined,ShoppingOutlined, AppstoreOutlined,UserAddOutlined,HeartOutlined,LinkOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="wrapper text-white   w-60 bg-dark-600 fixed top-0 bottom-0 left-0 ">
      <h1 className=" flex justify-center font-semibold text-4xl mt-5">sc</h1>
      <div className="items flex flex-col  mr-8  gap-5 mt-14 ml-12">
        <div className="list flex items-center">
          <AppstoreOutlined />
          <span className="pl-4 cursor-pointer">Dashboard</span>
        </div>

        <div className="list flex items-center">
          <UserAddOutlined />
          <span className="pl-4 cursor-pointer hover:text-white text-light-10">Come</span>
        </div>

        <div className="list flex items-center">
        
        <LinkOutlined />
          <span className="pl-4 cursor-pointer hover:text-white text-light-10">Connect</span>
        </div>

        <div className="list flex items-center">
        
        <HeartOutlined />
          <span className="pl-4 cursor-pointer hover:text-white text-light-10">Care</span>
        </div>

        <div className="list flex items-center">
        
        <ShoppingOutlined />
          <span className="pl-4 cursor-pointer hover:text-white text-light-10">Calling</span>
        </div>

        <div className="list flex items-center">
        
        <TrophyOutlined />
          <span className="pl-4 cursor-pointer hover:text-white text-light-10">Celebrate</span>
        </div>

      </div>

      <a className=" text-sm absolute bottom-8 left-4" href="/about-developer">@ <span className="text-blue-100">Dev_Phil</span>, 2022</a>

    </div>
  );
};

export default Sidebar;
