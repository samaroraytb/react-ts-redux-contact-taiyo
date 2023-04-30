import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact, changeCreateContactStatus } from "../redux/actions";

const AddContact = () => {
  const [userFirstName, updateFirstName] = useState("");
  const [userLastName, updateLastName] = useState("");
  const [radioValue, updateRadioValue] = useState("ACTIVE");
  const dispatchFn = useDispatch();

  const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstName(event.target.value);
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateLastName(event.target.value);
  };

  const changeRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateRadioValue((event.target as HTMLInputElement).value);
  };

  const submitContactForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (userFirstName !== "" && userLastName !== "") {
      const newContactData = {
        id: uuidv4(),
        firstName: userFirstName,
        lastName: userLastName,
        status: radioValue,
      };
      dispatchFn(addContact(newContactData));
      dispatchFn(changeCreateContactStatus());
    } else {
      alert("Please fill all the details !!");
    }
  };

  return (
    <div className="overflow-visible md:h-screen h-[580px] md:w-full flex flex-col md:text-center items-center justify-center border text-[#36454F] bg-[#F3F3F3]">
      <h1 className="text-[25px] md:text-3xl mb-8 font-bold text-[#f4544c]">
        Create New Contact
      </h1>
      <form onSubmit={submitContactForm}>
        <div className="flex flex-col md:w-[550px] w-[300px] mx-5 border p-10 h-[300px] bg-[white] rounded-xl drop-shadow-sm items-center justify-center">
          <div className="md:w-full block md:flex items-center mb-5 justify-between">
            <label
              className="mr-3 font-bold text-[18px] md:text-[25px]"
              htmlFor="FIRSTNAME"
            >
              First Name:
            </label>
            <input
              onChange={changeFirstName}
              value={userFirstName}
              className="grow max-w-[300px] border-2 border-[#36454F] rounded-lg px-3 py-1 font-[500]"
              type="text"
              id="FIRSTNAME"
            />
          </div>

          <div className="md:w-full block md:flex  items-center mb-5 justify-between">
            <label
              className="mr-3 font-bold text-[18px] md:text-[25px]"
              htmlFor="LASTNAME"
            >
              Last Name:
            </label>
            <input
              onChange={changeLastName}
              value={userLastName}
              className="grow max-w-[300px] border-2 border-[#36454F] rounded-lg px-3 py-1 font-[500]"
              type="text"
              id="LASTNAME"
            />
          </div>

          <div className="flex items-center text-[18px] md:text-2xl font-bold md:w-full justify-between">
            <h1 className="mr-5">Status: </h1>
            <div className="grow max-w-[300px]">
              <div className="flex items-center">
                <input
                  checked={radioValue === "ACTIVE"}
                  onChange={changeRadioValue}
                  className="mr-2 "
                  type="radio"
                  id="ACTIVE"
                  value="ACTIVE"
                  name="ACTIVEINACTIVE"
                />
                <label className=" mb-1" htmlFor="ACTIVE">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={radioValue === "INACTIVE"}
                  onChange={changeRadioValue}
                  className="mr-2 "
                  type="radio"
                  id="INACTIVE"
                  value="INACTIVE"
                  name="ACTIVEINACTIVE"
                />
                <label className=" mb-1" htmlFor="INACTIVE">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap align-center justify-center text-center">
          <button
            onClick={submitContactForm}
            className="hover:bg-[#00E8FF] hover:text-[#36454F] md:h-[50px] h-[40px] md:w-[150px] w-[125px] text-white font-bold rounded-xl drop-shadow-md bg-[#f4544c] mt-5"
            type="submit"
          >
            Save Contact
          </button>
          <button
            onClick={() => dispatchFn(changeCreateContactStatus())}
            className="hover:bg-[#00E8FF] hover:text-[#36454F] md:h-[50px] h-[40px] md:w-[150px] w-[125px] text-white font-bold rounded-xl drop-shadow-md bg-[#f4544c] mt-5 ml-3"
            type="submit"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
