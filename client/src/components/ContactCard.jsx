import placeholder from "../images/placeholder.jpg";


const ContactCard = () => {
    return ( 
        
<div className="w-full bg-white  rounded-lg  shadow-cardShadow2">
 
    <div className="flex flex-col items-center pb-4 pt-4">
        <img className="mb-3 w-16 h-16 object-cover rounded-full " src={placeholder} alt='placeholder'/>
        <h5 className="mb-1  font-semibold text-gray-900 dark:text-white">John Doe</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Member</span>
   
    </div>
</div>

     );
}
 
export default ContactCard;