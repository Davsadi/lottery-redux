import { FETCH_LOTTERY } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_LOTTERY:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}
