import { GET_POKEMON } from "../actions/constants";

export default function(state = null, action) {
    switch(action.type) {
        case GET_POKEMON:
            return action.payload;
        default:
              return state;
    }
}
