interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

interface ContactObject {
  contactList: Contact[], 
  isCreateContact: boolean
}

const initialState: ContactObject = {
  contactList: [],
  isCreateContact: false
}


const contactReducer = (state: ContactObject = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE':
      return {...state,  contactList: [...state.contactList, action.data ] }
    case 'CLICKEDCREATE':
      return {...state, isCreateContact: !state.isCreateContact}
    default:
      return state;
  }
};

export default contactReducer;