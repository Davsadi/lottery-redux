import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LotteryReducer from './reducer_lottery';
import LotteryReducerNumbers from './reducer_lottery_numbers';

const rootReducer = combineReducers({
    lottery: LotteryReducer,
    lotteryNumbers: LotteryReducerNumbers,
    form: formReducer
});

export default rootReducer;
