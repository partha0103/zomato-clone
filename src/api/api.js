import axios from 'axios';
import { END_POINT } from '../constants';

export const  getLocation  =  () => {
    return axios.get(`${END_POINT}locations?query=Bengaluru`, {
        headers: {
            "user-key": "21fd0390c928bbe8312fbd6b7acfd6c8"
        }
    })
}

export const getLocationDetails = () => {
    return getLocation()
        .then((response) => {
            let entityType = response.data.location_suggestions[0].entity_type;
            let entityId = response.data.location_suggestions[0].entity_id;
            return axios.get(`${END_POINT}location_details`, {
                params: {
                    "entity_id": entityId,
                    "entity_type": entityType
                },
                headers: {
                    "user-key": "21fd0390c928bbe8312fbd6b7acfd6c8"
                }
            })
                .then(response => response.data)
        })
}

