import axios from 'axios';

const http = axios.create({ baseURL: "https://halper.herokuapp.com/" });

export default {

  login(user) {
    return http.post('/login', user)
  },

  register(user) {
    return http.post('/register', user)
  },
  getUserDetails(username) {
    return http.get(`/userdetails/${username}`)
  },

  getPathwayDetails(topic) {
    return http.get(`/pathway/${topic}`)
  },

  updateUserAccountDetails(username, user_details) {
    return http.put(`/updateUserDetails/${username}`, user_details)
  },

  getQuotes() {
    return http.get('/getQuotes')
  },
  getWeather(zipCode) {
    return http.get(`/weather/${zipCode}`)
  },
  getOpenJobs() {
    return http.get('/openJobs')
  }
}
