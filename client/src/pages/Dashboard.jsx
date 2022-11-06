import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ListInfo from "../components/ListInfo";
import { Chart } from "../components/Chart";
import { useEffect } from "react";

import {TeamOutlined,TrophyOutlined,ShoppingOutlined,HeartOutlined,LinkOutlined } from "@ant-design/icons";


const Dashboard = () => {
 
  return (
    <div className="main flex flex-row h-screen  w-full">
      <Sidebar />
      <div className="content ml-60 w-full">
        <Navbar />

        <div className="dashboard">
          <div className="content w-full px-8  ">
            <div className="content-wrapper mt-8 ">
              <div className="title  font-bold text-2xl mb-6">Dashboard</div>
              <div className="flex items-start  gap-8">

                <div className="charts w-1/2   grid grid-cols-3 gap-4">

                  <div className="col-span-2 bg-dash-10 h-28 flex items-center  rounded-xl">
                    <div className="cover flex  ml-4  ">
                          <div className=" mr-4 box bg-black rounded-lg flex items-center justify-center text-white w-12">
                          <TeamOutlined className=" text-2xl flex items-center justify-center" />
                          </div>
                          <div className="members text-white">
                            <p>Total Members</p>
                            <h1 className="font-bold text-white">200</h1>
                          </div>
                    </div>

                  </div>

                  <div className="bg-dash-20 h-28  rounded-xl flex items-center ">
                  <div className=" ml-4  flex flex-col">
                          <div className=" bg-white mb-1 rounded-lg flex items-center justify-center text-white w-10 h-10">
                          <LinkOutlined className=" text-xl text-black flex items-center justify-center" />
                          </div>
                          <h1 className="font-bold ">32</h1>
                            <p className="text-dark-1000 text-md">Connects</p>
                    </div>
                  </div>
                  <div className="bg-dash-30 h-28  rounded-xl flex items-center ">
                  <div className=" ml-4  flex flex-col">
                          <div className=" bg-white mb-1 rounded-lg flex items-center justify-center text-white w-10 h-10">
                          <HeartOutlined className=" text-xl text-black flex items-center justify-center" />
                          </div>
                          <h1 className="font-bold ">32</h1>
                            <p className="text-dark-1000 text-md">Cares</p>
                    </div>
                  </div>

                  <div className="bg-dash-40 h-28  rounded-xl flex items-center ">
                  <div className=" ml-4  flex flex-col">
                          <div className=" bg-white mb-1 rounded-lg flex items-center justify-center text-white w-10 h-10">
                          <ShoppingOutlined className=" text-xl text-black flex items-center justify-center" />
                          </div>
                          <h1 className="font-bold ">32</h1>
                            <p className="text-dark-1000 text-md">Callings</p>
                    </div>
                  </div>

                  <div className="bg-dash-50 h-28  rounded-xl flex items-center ">
                  <div className=" ml-4  flex flex-col">
                          <div className=" bg-white mb-1 rounded-lg flex items-center justify-center text-white w-10 h-10">
                          <TrophyOutlined className="  text-xl text-black flex items-center justify-center" />
                          </div>
                          <h1 className="font-bold ">32</h1>
                            <p className="text-dark-1000 text-md">Celebrations</p>
                    </div>
                  </div>
                  <div className="h-48 mt-8 col-span-3 ">
                  <Chart />

                  </div>
                </div>

                <div className="wrapper  w-1/2 flex flex-col">
                  <h4 className="font-semibold mb-4">Recent Activity</h4>
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

export default Dashboard;
