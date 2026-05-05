import axios from 'axios'

const API_URL = 'https://69fa357fc509a40d3aa41215.mockapi.io/employees'

export default {
  getEmployees() {
    return axios.get(API_URL)
  },
  addEmployee(data) {
    return axios.post(API_URL, data)
  },
  updateEmployee(id, data) {
    return axios.put(`${API_URL}/${id}`, data)
  },
  deleteEmployee(id) {
    return axios.delete(`${API_URL}/${id}`)
  }
}