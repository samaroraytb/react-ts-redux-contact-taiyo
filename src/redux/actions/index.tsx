export const addContact = (props: any) => {
    return{
        type: "CREATE",
        data: props
    }
}

export const editContact = (props: {}) => {
    return{
        type: "EDITING",
        data: props
    }
}

export const deleteContact = (props: string) => {
    return{
        type: "DELETE",
        data: props 
    }
}

export const changeCreateContactStatus = () => {
    return{
        type: "CLICKEDCREATE"
    }
}

export const saveEditedContact = (props: {}) => {
    return{
        type: "EDITED",
        data: props
    }
}