export default function (state = null, action) {
    switch(action.type) {
        case 'ADDED_NAME':
            return action.payload;
            break;
    }
      return state;
}
