import axios from "axios";

const BASE_URL = "http://86.107.44.212";

const handleError = (error) => {
    console.error("Ошибка при получении данных:", error.message);
    throw error;
};

export const calculateNumerology = async ({ day, month, year, day1, month1, year1 }) => {
    try {
        const [compatibilityResponse, matrixResponse] = await Promise.all([
            axios.post(`http://86.107.44.212/other/calculate-compatibility/`, {
                day,
                month, 
                year,
                day2: day1,
                month2: month1,
                year2: year1,
            }),
            axios.post(`http://86.107.44.212/other/calculate-matrix/`, {
                day,
                month,
                year,
            })
        ]);

        return {
            compatibilityData: compatibilityResponse.data,
            matrixData: matrixResponse.data
        };
    } catch (error) {
        console.error("Ошибка запроса:", error);
        return null;
    }
}

export const getChildBusiness= async ({ a }) => {

    
    try {
        const params = {
            arcana_a: a,
        };
        const response = await axios.get(`${BASE_URL}/child/child_business_card/1/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getChildDestiny= async ({ r,s,y }) => {
    try {
        const params = {
            arcana_r: r,
            arcana_s: s,
            arcana_y: y,
        };
        const response = await axios.get(`${BASE_URL}/child/child_destiny/6/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getChildParentKarma = async ({a2,a,a1 }) => {
    try {
        const params = {
            arcana_a: a,
            arcana_a1: a1,
            arcana_a2: a2,
        };
        const response = await axios.get(`${BASE_URL}/child/child_parent_karma/7/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getChildPersonal=async({b,c})=>{
    try{
        const params={
            arcana_b:b,
            arcana_c:c,
        };
        const response = await axios.get(`${BASE_URL}/child/child_personal_qualities/2/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}
// 
export const getChildPoint=async({e})=>{
    try{
        const params={
            arcana_e: e,
        };
        const response = await axios.get(`${BASE_URL}/child/child_point_of_comfort/4/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    
}


export const getChildSelf=async({a2})=>{
    try{
        const params={
            arcana_a2: a2,
        };
        const response = await axios.get(`${BASE_URL}/child/child_self_realization/3/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    

}

export const getTasksFromPast=async({d,d1,d2})=>{
    try{
        const params={
            arcana_d: d,
            arcana_d1: d1,
            arcana_d2: d2,
        };
        const response = await axios.get(`${BASE_URL}/child/tasks_from_past_lives/5/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
    

}




