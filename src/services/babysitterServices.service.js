import axios from 'axios';

class BabysitterServicesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/babysitterServices
  createBabysitterService = (requestBody) => {
    return this.api.post('/api/babysitterServices', requestBody);
  }

  // GET /api/babysitterServices
  getAllBabysitterServices = () => {
    return this.api.get('/api/babysitterServices');
  }

  // GET /api/babysitterServices/:id
  getBaBysitterService = (id) => {
    return this.api.get(`/api/babysitterServices/${id}`);
  }

  // PUT /api/babysitterServices/:id
  updateBabysitterService = (id, requestBody) => {
    return this.api.put(`/api/babysitterServices/${id}`, requestBody);
  }

  // DELETE /api/babysitterServices/:id
  deleteBabysitterServices = (id) => {
    return this.api.delete(`/api/babysitterServices/${id}`);
  } 


}

// Create one instance (object) of the service
const babysitterServices = new BabysittersService();

export default babysitterServices;