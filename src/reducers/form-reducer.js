export default function (state= '', action) {
    switch(action.type) {
        case 'ADDED_NAME':
            return action.addName
            break;
    }
    return state
}