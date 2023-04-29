export const addContact = (props: any) => {
    return{
        type: "CREATE",
        data: props
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

export const changeCreateContactStatus = () => {
    return{
        type: "CLICKEDCREATE"
    }
}