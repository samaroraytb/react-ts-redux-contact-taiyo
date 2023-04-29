interface Contact {
  id: string
  name: string;
  email: string;
}

interface State {
  contactList: Contact[];
}

const initialState: State = {
  contactList: []
};

const contactListReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    // add cases for different actions if needed
    default:
      return state;
  }
};

export default contactListReducer;