import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import ListInfo from "../components/ListInfo";



const InfoPage = () => {
    return(
        <div className="main flex flex-row h-screen  w-full">
        <Sidebar/>
        <div className="content ml-60 w-full">
        <Navbar/>

        <div className="content w-full px-8 ">
            <div className="content-wrapper mt-8 ">
                <div className="title font-bold text-2xl mb-6">Celebrations</div>
                <div className="wrapper flex flex-col">

                    <ListInfo/>
                    <ListInfo/>
                    <ListInfo/>
                    <ListInfo/>



                </div>
                
            </div>
        </div>
        </div>
        
       
        </div>
    )
}
export default InfoPage;
    