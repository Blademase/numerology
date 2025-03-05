import axios from "axios";

// Базовый URL для всех запросов
const BASE_URL = "https://sharshenaliev.pythonanywhere.com";

// Функция для обработки ошибок
const handleError = (error) => {
    console.error("Ошибка при получении данных:", error.message);
    throw error;
};

// 📌 Функция для расчёта матрицы судьбы
export const calculateNumerology = async ({ day, month, year }) => {
    try {
        const response = await axios.post(`${BASE_URL}/matrix_fate/calculate-matrix`, {
            day,
            month,
            year,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// 📌 Функция для получения данных качеств
export const getQualitiesData = async ({ a, b, c }) => {

    
    try {
        const params = {
            birth_order: a,
            mature_order: c,
            youth_order: b,
        };
        const response = await axios.get(`${BASE_URL}/qualities1/1/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// 📌 Функция для получения данных по работе с душой
export const getSoulWorkData = async ({ a, b, c }) => {
    try {
        const params = {
            innate_talent_order: a ,
            mature_order: c,
            youth_order: b,
        };
        const response = await axios.get(`${BASE_URL}/soul-work2/2/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getKarmaData = async ({ c, c1, c2 }) => {
    try {
        const params = {
            mature_mission_order: c ,
            pre_mature_step_one_order: c1,
            pre_mature_step_two_order: c2,
        };
        const response = await axios.get(`${BASE_URL}/karma-task3/3/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getPastLife=async({d1,d2,d})=>{
    try{
        const params={
            past_life_experience_order:d1,
            past_life_lesson_order:d2,
            soul_mission_order:d
        };
        const response = await axios.get(`${BASE_URL}/past-life4/4/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}
// 
export const getComfortPoint=async({e})=>{
    try{
        const params={
            comfort_point_order:e,
        };
        const response = await axios.get(`${BASE_URL}/comfort-point5/5/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}


export const getSelfRealization=async({a2})=>{
    try{
        const params={
            self_realization_order:a2,
        };
        const response = await axios.get(`${BASE_URL}/self-realization6/6/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}

export const getPointPersonalPower=async({c1})=>{
    try{
        const params={
            follow_recommendations_order:c1,
        };
        const response = await axios.get(`${BASE_URL}/point-personal-power7/7/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}
