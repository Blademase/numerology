import axios from "axios";

// Базовый URL для всех запросов
const BASE_URL = "https://sharshenaliev.pythonanywhere.com/";

// Функция для обработки ошибок
const handleError = (error) => {
    console.error("Ошибка при получении данных:", error.message);
    throw error;
};

// 📌 Функция для расчёта матрицы судьбы
export const calculateNumerology = async ({ day, month, year }) => {
    try {
        const response = await axios.post(`${BASE_URL}matrix_fate/calculate-matrix/`, {
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/qualities1/1/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/soul-work2/2/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/karma-task3/3/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/past-life4/4/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/comfort-point5/5/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/self-realization6/6/`, { params });
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
        const response = await axios.get(`${BASE_URL}/matrix_fate/point-personal-power7/7/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }


    
}
export const getGenericPower=async({e1})=>{
    try{
        const params={
            must_be_done_order:e1,
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/generic-power8/8/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getParentChildKarma=async({a2,a,a1})=>{
    try{
        const params={
            family_relationship_mistakes_order:a2,
            parent_teaching_order:a,
            personal_growth_goal_order:a1,
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/parent-child-karma9/9/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getSpiritualKarma=async({b,b1,b2})=>{
    try{
        const params={
            spiritual_karma1_order:b,
            spiritual_karma2_order:b1,
            spiritual_karma3_order:b2,
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/spiritual-karma10/10/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getMatrixRelationship=async({k,d2,j})=>{
    try{
        const params={
            ideal_partner_order:k,
            partner_challenges_order:d2,
            partner_meeting_places_order:k,
            relationship_issues_order:j
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/matrix-relationships11/11/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getMatrixMoney=async({l,j,c2})=>{
    try{
        const params={
            financial_growth_order:l,
            money_blockages_order:j,
            money_sources_order:l,
            suitable_professions_order:c2,
            wealth_development_order:l
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/matrix-money12/12/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getSoulMission=async({r,s,y,x,t,u,v,w})=>{
    try{
        const params={
            personal_arcan1_order:r,
            personal_arcan2_order:s,
            personal_arcan3_order:y,
            planet_purpose_order:x,
            social_arcan1_order:t,
            social_arcan2_order:u,
            social_arcan3_order:v,
            spiritual_purpose_order:w
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/soul-mission13/13/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getDiseasePredisposition=async({h,i,f,g})=>{
    try{
        const params={
            female_father_lineage_tasks_order:h,
            female_mother_lineage_tasks_order:i,
            male_father_lineage_tasks_order:f,
            male_mother_lineage_tasks_order:g,  
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/disease-predisposition14/14/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getHealthMap=async({o6,p6,q6,o4,p4,q4,o3,p3,q3,o1,p1,q1,o7,p7,q7,o2,p2,q2,o,p,q,o5,p5,q5})=>{
    try{
        const params={
            ajna_o6_order:o6,
            ajna_p6_order:p6,
            ajna_q6_order:q6,
            anahata_o4_order:o4,
            anahata_p4_order:p4,
            anahata_q4_order:q4,
            manipura_o3_order:o3,
            manipura_p3_order:p3,
            manipura_q3_order:q3,
            muladkhara_o1_order:o1,
            muladkhara_p1_order:p1,
            muladkhara_q1_order:q1,
            sahasrara_o7_order:o7,
            sahasrara_p7_order:p7,
            sahasrara_q7_order:q7,
            svadhisthana_o2_order:o2,
            svadhisthana_p2_order:p2,
            svadhisthana_q2_order:q2,
            total_o_order:o,
            total_p_order:p,
            total_q_order:q,
            vishuddha_o5_order:o5,
            vishuddha_p5_order:p5,
            vishuddha_q5_order:q5  
        };
        const response = await axios.get(`${BASE_URL}/matrix_fate/health-map15/15/`, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}






