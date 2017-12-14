export default function (state = [], action = {}) {
    switch(action.type) {
        case 'ADDED_NAME':
        // return action.payload;
        // break;
        return [
            ...state,
            action.payload
            
          ];      
        default: 
            return state;
    }
}
