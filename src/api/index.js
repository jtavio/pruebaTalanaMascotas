import axios from "axios"

const api = axios.create({ baseURL: 'http://sva.talana.com:8000/api/' })

export default api