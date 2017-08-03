import axios from 'axios';

const BEARER =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NGFmMjk4ZjMzNGEzMmUzOWM1NmE0OCIsImlhdCI6MTQ5ODA4NDAwMSwiZXhwIjoxNTAwNjc2MDAxfQ.beRPMB4vOrSpzLG2MFdNM-usVoUxjdOx6FPPS7ZFcBs';
const HEADERS = {
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NGFmMjk4ZjMzNGEzMmUzOWM1NmE0OCIsImlhdCI6MTUwMDc1ODY0MSwiZXhwIjoxNTAzMzUwNjQxfQ.S5kDqS5zt5xuM_EFJpWTXY4Xthiv_Mnr-zDD5_uXln8',
        'Content-Type': 'application/json'
    }
};
const ROOT_URL = `https://apps.dferguson.com/api/lottery/v1`;

export const FETCH_LOTTERY = 'FETCH_LOTTERY';
export const FETCH_LOTTERY_NUMBERS = 'FETCH_LOTTERY_NUMBERS';
export const CREATE_LOTTERY_NUMBERS = 'CREATE_LOTTERY_NUMBERS';

export function fetchLottery() {
    const url = `${ROOT_URL}/lottery/`;
    const request = axios.get(url);

    return {
        type: FETCH_LOTTERY,
        payload: request
    };
}

export function fetchLotteryNumbers(lotteryId) {
    const url = `${ROOT_URL}/lottery/mynumbers/${lotteryId}`;
    const request = axios.get(url);
    //console.log(request);
    return {
        type: FETCH_LOTTERY_NUMBERS,
        payload: request
    };
}

export function createLotteryNumbers(values) {
    const url = `${ROOT_URL}/lottery/mynumbers/add`;
    const request = axios.post(url, values, HEADERS);
    console.log(request);
    return {
        type: CREATE_LOTTERY_NUMBERS,
        payload: request
    };
}
