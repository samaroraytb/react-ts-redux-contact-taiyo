import { useSelector } from "react-redux";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const Contact = () => {
  const selector = useSelector((rootReducer: any) => rootReducer.contactList);
  const isContactAvailable = selector.contactList.length === 0;

  const renderNoContactAvailable = () => {
    const [isShowCreateForm, updateStatusCreate]= useState(false)

    return (
      <div className="p-5 flex flex-col items-center h-[75vh] md:h-screen w-full justify-center text-[#36454F]">
        <button
          type="button"
          className="font-bold md:text-2xl text-1xl bg-[#00E8FF] px-[20px] py-[15px] rounded-[15px] hover:bg-[#f4544c] hover:text-white"
        >
          Create Contact
        </button>

        <div className="flex items-center border border-grey shadow p-5 rounded-lg mt-10">
          <RxCrossCircled className="mr-[15px] text-4xl " />
          <div>
            <h1 className="font-[500] text-[20px]">No Contact Found</h1>
            <p>Please add Contact from Create Contact Button</p>
          </div>
        </div>
      </div>
    );
  };

  const contactListItem = () => {
    return <ul></ul>;
  };

  return (
    <>{isContactAvailable ? renderNoContactAvailable() : contactListItem()}</>
  );
};

export default Contact;
