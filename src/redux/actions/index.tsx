export const addContact = () => {
    return{
        type: "CREATE"
    }
}

export const editContact = () => {
    return{
        type: "EDITING"
    }
}

export const deleteContact = () => {
    return{
        type: "DELETE"
    }
}

export const saveContact = () => {
    return{
        type: "SAVE"
    }
}