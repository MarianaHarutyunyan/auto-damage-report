import { createStore, createEffect } from 'effector';
import axios from 'axios';
const baseUrl = 'https://myfailemtions.npkn.net/b944ff/';

export const getCircles = createEffect(async (): Promise<string[]> => {
    try {
        const response = await axios.get(baseUrl);
        let result = [];
        if (Array.isArray(response.data)) {
            result = response.data;
        }
        return result;
    }
    catch (err) {
        console.log(err);
        return [];
    }
});

export const postCircles = createEffect(async (circleId: string[]) => {
    try {
        const response = await axios.post(baseUrl, circleId);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
});

export const circlesStore = createStore<string[]>([])
    .on(getCircles.doneData, (_, data) => data)
    .on(postCircles.doneData, (_, newData) => {
        return newData;
    });
