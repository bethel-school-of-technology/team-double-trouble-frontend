import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/post/';

class UserService {
  getPosts() {
    return axios.get(API_URL);
  }

  getUserPosts() {
    return axios.get(API_URL + {id}, { headers: authHeader() });
  }

}

export default new UserService();