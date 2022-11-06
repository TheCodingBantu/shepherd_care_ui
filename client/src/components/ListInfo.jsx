import placeholder from "../images/placeholder.jpg";

import {ClockCircleFilled} from '@ant-design/icons'

const ListInfo = () => {
    return ( 
        <div className="main flex items-center  gap-4 h-20  border-b">
            <img className="cursor-pointer w-12 h-12  object-cover rounded-full" src={placeholder} alt="" />

            <div className="contet   flex flex-col justify-center  ">
                
                <div className="flex justify-between">
                <p className="text-md"><b>John Doe</b> is Celebrating!</p>

                <div className="time flex">
                <span className=" w-12 text-dark-10">5 hrs</span>
                <span className="text-blue-800 text-xs"><ClockCircleFilled /></span>

            </div>
                </div>
                <p className="h-10 cursor-pointer mr-16 text-sm  text-ellipsis  overflow-hidden text-dark-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor perferendis illum, beatae soluta corporis aliquid praesentium, sapiente ipsum itaque, minima sit excepturi eum? Dolorum aperiam odit dolore quibusdam error laudantium quod sed. Distinctio, facere hic dicta ipsam facilis cupiditate natus. Doloribus non odit quo impedit dolore veritatis rem, deleniti ipsa?
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis illum, beatae soluta corporis aliquid praesentium, sapiente ipsum itaque, minima sit excepturi eum? Dolorum aperiam odit dolore quibusdam error laudantium quod sed. Distinctio, facere hic dicta ipsam facilis cupiditate natus. Doloribus non odit quo impedit dolore veritatis rem, deleniti ipsa?</p>
            </div>
            

        </div>
     );
}
 
export default ListInfo
;