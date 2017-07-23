import { FETCH_LOTTERY_NUMBERS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_LOTTERY_NUMBERS:
            //return _.mapKeys(action.payload.data, '_id');
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}
