import { useSelector, useDispatch } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import CreateContact from "./CreateContact";
import { changeCreateContactStatus } from "../redux/actions";
import ContactItems from "./ContactItems";
import EditContact from './EditContact'

const Contact = () => {
  const selectorObject = useSelector(
    (rootReducer: any) => rootReducer.contactReducer
  );
  const isContactAvailable = selectorObject.contactList.length === 0;

  const isCreateFormClicked = selectorObject.isCreateContact;
  const isEditItemClicked = selectorObject.isEditContact;

  const dispatchFn = useDispatch();

  const renderNoContactAvailable = () => {
    return (
      <div className="bg-[#F3F3F3] p-5 flex flex-col items-center md:h-screen md:w-full justify-center text-[#36454F]">
        <button
          type="button"
          className="font-bold md:text-2xl text-1xl bg-[#00E8FF] px-[20px] py-[15px] rounded-[15px] hover:bg-[#f4544c] hover:text-white"
          onClick={() => dispatchFn(changeCreateContactStatus())}
        >
          Create Contact
        </button>

        <div className="bg-white flex items-center border border-grey shadow p-5 rounded-lg mt-10">
          <RxCrossCircled className="mr-[15px] text-4xl " />
          <div>
            <h1 className="font-[500] text-[20px]">No Contact Found</h1>
            <p>Please add Contact from Create Contact Button</p>
          </div>
        </div>
      </div>
    );
  };

  const createFormRender = () => {
    return (
      <div className="md:w-full">
        <CreateContact />
      </div>
    );
  };

  const contactListItem = () => {
    return (
      <div className="bg-[#F3F3F3] flex  flex-col md:h-screen md:w-full items-center">
        <ul className="p-5 md:overflow-auto md:self-start flex flex-wrap md:justify-start justify-center mb-[50px] md:mb-[100px] ">
          {selectorObject.contactList.map(
            (eachItem: {
              id: string;
              firstName: string;
              lastName: string;
              status: string;
            }) => (
              <ContactItems key={eachItem.id} contactDetail={eachItem} />
            )
          )}
        </ul>
        <button
          type="button"
          className="fixed bottom-[20px] font-bold md:text-2xl text-1xl bg-[#00E8FF] px-[20px] py-[15px] rounded-[15px] hover:bg-[#f4544c] hover:text-white"
          onClick={() => dispatchFn(changeCreateContactStatus())}
        >
          Create Contact
        </button>
      </div>
    );
  };

  const renderEditForm = () => {
    return (
      <div className="md:w-full">
        <EditContact />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-[#F3F3F3]">
      {isCreateFormClicked
        ? createFormRender()
        : isContactAvailable
        ? renderNoContactAvailable()
        : (isEditItemClicked ? renderEditForm() : contactListItem())}
    </div>
  );
};

export default Contact;
