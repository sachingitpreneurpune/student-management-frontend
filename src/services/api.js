import axios from "axios";

const API=axios.create({
    baseURL:"https://student-management-backend-0ydu.onrender.com/"
})

export default API