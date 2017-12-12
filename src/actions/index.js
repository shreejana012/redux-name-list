export const onSubmit = (addName) => {
    return {
        type: 'ADDED_NAME',
        payload: addName
    }
};