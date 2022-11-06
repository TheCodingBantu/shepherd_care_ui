import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  return (
    <div className="main flex flex-row h-screen  w-full">
      <Sidebar />
      <div className="content ml-60 w-full">
        <Navbar />

        <div className="content  w-full px-8 ">
          <div className="content-wrapper mt-4 mb-8 ">
            <div className="title font-bold text-2xl mb-8">Members</div>
            <div
              className="cardholder grid 
                xs:gap-8 xs:grid-cols-1 
                sm:gap-4 sm:grid-cols-2

                md:gap-5 md:grid-cols-3

                lg:gap-6 lg:grid-cols-5


                "
            >
              <ContactCard  />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
      {/* popup component to add member */}
    </div>
  );
};

export default Contacts;
