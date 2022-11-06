import {CameraOutlined} from '@ant-design/icons'

import placeholder from "../images/placeholder.jpg";

const AddMember = () => {
  return (
    <div className="bg-dark-800 fixed overflow-y-auto top-0 bottom-0 left-0  w-full h-screen  ">
      <div className="container relative mx-auto  mt-8 mb-8 p-4 flex flex-col   bg-white w-96   rounded-xl shadow-md ">
        <h4 className="font-semibold mb-2">New Profile</h4>
        <div className='relative mx-auto'>
        <img className="  mb-6 flex mx-auto w-24  h-24 object-cover  rounded-full" src={placeholder} alt="" />
        <CameraOutlined className='absolute flex -right-3 top-0  bg-blue-500 p-1.5 text-lg rounded-full text-white border-white border-2' bg- />
        </div>
        <form className="mb-14" action="" >
          <div className="flex flex-col mb-3">
            <label htmlFor="">Member Name</label>
            <input className="focus:outline-none border text-gray-700 text-sm rounded-md p-1.5" type="text" name="" id="" />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="">Phone</label>
            <input className="focus:outline-none border text-gray-700 text-sm rounded-md p-1.5" type="text" name="" id="" />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="">Email</label>
            <input className="focus:outline-none border text-gray-700 text-sm rounded-md p-1.5" type="text" name="" id="" />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="">Gender</label>
            <input className="focus:outline-none border text-gray-700 text-sm rounded-md p-1.5" type="text" name="" id="" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Date Joined</label>
            <input className="focus:outline-none border text-gray-700 text-sm rounded-md p-1.5" type="date" name="" id="" />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="">Date Joined</label>
            <select className="focus:outline-none text-gray-700 border rounded-md p-1.5" name="" id="">
                <option value="">Select Calling</option>
                <option value="">Children's Ministry</option>
                <option value="">Missions</option>
                <option value="">Pastoral</option>
                <option value="">Praise and Worship</option>
            </select>
          </div>

        </form>
        <div className="footer flex justify-end gap-8  text-sm absolute p-5 rounded-br-xl rounded-bl-xl bottom-0 w-full left-0 bg-light-50 ">
                <button>Cancel</button>
                <button className="bg-dark-700 p-1.5 text-white pl-6 pr-6 rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
