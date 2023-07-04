import axios from 'axios';

class BookingsService {
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

  // POST /api/bookings
  createBooking = (requestBody) => {
    return this.api.post('/api/bookings', requestBody);
  }

  // GET /api/bookings/:id
  getBooking= (id) => {
    return this.api.get(`/api/bookings/${id}`);
  }

  // PUT /api/bookings/:id
  updateBooking = (id, requestBody) => {
    return this.api.put(`/api/bookings/${id}`, requestBody);
  }

  // DELETE /api/bookings/:id
  deleteBooking = (id) => {
    return this.api.delete(`/api/bookings/${id}`);
  } 


}

// Create one instance (object) of the service
const bookingsService = new BookingsService();

export default bookingsService;