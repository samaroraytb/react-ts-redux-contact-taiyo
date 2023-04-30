interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

interface ContactObject {
  contactList: Contact[], 
  isCreateContact: boolean,
  isEditContact: boolean,
  editContactData: {}
}

const initialState: ContactObject = {
  contactList: [],
  isCreateContact: false,
  isEditContact: false, 
  editContactData: {},
}


const contactReducer = (state: ContactObject = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE':
      return {...state,  contactList: [...state.contactList, action.data ] }
    case 'CLICKEDCREATE':
      return {...state, isCreateContact: !state.isCreateContact}
    case 'DELETE':
      const filterIdList = state.contactList.filter((each) => (each.id !== action.data))
      return {...state, contactList: filterIdList}
    case 'EDITING':
      return {...state, isEditContact: true,  editContactData: action.data}
    case 'EDITED':
      const newData = action.data
      const updateDataList = state.contactList.map((each)=> {
        if (each.id === newData.id){
          return newData
        }else{
          return each
        }
      })
      return {...state, contactList: updateDataList, isEditContact: false, }
    default:
      return state;
  }
};

export default contactReducer;