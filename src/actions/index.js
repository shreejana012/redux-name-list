export const handleSubmit = (addName) => {
    return {
        type: 'ADDED_NAME',
        payload: addName
    }
};