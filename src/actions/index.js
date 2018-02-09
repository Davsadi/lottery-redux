import axios from 'axios';

const BEARER =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2QzNjQxNmY1NTc4Nzc2NTlhZTFlYyIsImlhdCI6MTUxODE1NTM0MCwiZXhwIjoxNTIwNzQ3MzQwfQ.3vGFzA_rVSz1ajjq7fN9DwLreNWLvORrG7kO2Mg8F5Q';
const HEADERS = {
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2QzNjQxNmY1NTc4Nzc2NTlhZTFlYyIsImlhdCI6MTUxODE1NTM0MCwiZXhwIjoxNTIwNzQ3MzQwfQ.3vGFzA_rVSz1ajjq7fN9DwLreNWLvORrG7kO2Mg8F5Q',
        'Content-Type': 'application/json'
    }
};
const ROOT_URL = `https://lottery.dferguson.com/api/lottery/v1`;

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
