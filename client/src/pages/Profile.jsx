import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ListInfo from "../components/ListInfo";
import placeholder from "../images/placeholder.jpg";

import { MessageFilled,PhoneFilled } from "@ant-design/icons";

const Profile = () => {
  return (
    <div className="main flex flex-row h-screen  w-full">
      <Sidebar />
      <div className="content ml-60 w-full">
        <Navbar />

        <div className="dashboard">
          <div className="content w-full px-8  ">
            <div className="content-wrapper mt-8 ">
              <div className="title  font-bold text-2xl mb-6">Profile</div>
              <div className="flex items-start  gap-8">
                <div className="w-1/2 sticky top-24 bg-dark-900 p-8 rounded-2xl flex gap-4 ">
                  <img
                    className="rounded-full w-36 h-36 object-cover"
                    src={placeholder}
                    alt=""
                  />
                  <div className="details ">
                    <div className="names p-4 ">
                    <h2 className="font-semibold text-3xl">John Doe</h2>
                    <p className="text-xs flex items-center text-dark-1000">Member since 2010</p>
                    </div>

                    <div className="pl-4 mb-2  flex items-center justify-center gap-2">
                    <MessageFilled />
                      <span className="text-sm">john.doe@mailchimp.com</span>
                    </div>

                    <div className="pl-4  flex items-center gap-2">
                  
                    <PhoneFilled />
                      <span className="text-sm">+2547783738</span>
                    </div>
                  </div>
                </div>

                <div className="wrapper  w-1/2 flex flex-col">
                  <h1 className="font-semibold text-md mb-4">
                    Recent Activity
                  </h1>
                  <hr />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                  <ListInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
