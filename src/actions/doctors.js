import axios from 'axios'

export const getDoctors = (doctors) => ({
    type: 'GET_DOCTORS',
    doctors
})

export const startGetDoctors = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/doctorDetail').then((response) => {
            dispatch(getDoctors(response.data.doctors))
        }).catch((e) => {
            console.log(e);
        })
    }
}