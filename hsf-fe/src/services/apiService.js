import axios from 'axios';
import { API_BASE_URL } from './config';

// Tạo instance Axios với config mặc định
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để xử lý token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API cho khóa học
export const courseApi = {
  // Lấy danh sách khóa học
  getAllCourses: async () => {
    try {
      const response = await api.get('/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  // Lấy khóa học theo ID
  getCourseById: async (id) => {
    try {
      const response = await api.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching course ${id}:`, error);
      throw error;
    }
  },

  // Lấy khóa học theo ngôn ngữ
  getCoursesByLanguage: async (language) => {
    try {
      const response = await api.get(`/courses/language/${language}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching courses for language ${language}:`, error);
      throw error;
    }
  },

  // Lấy khóa học nổi bật
  getFeaturedCourses: async () => {
    try {
      const response = await api.get('/courses/featured');
      return response.data;
    } catch (error) {
      console.error('Error fetching featured courses:', error);
      throw error;
    }
  },

  // Đăng ký khóa học
  enrollCourse: async (courseId) => {
    try {
      const response = await api.post(`/courses/${courseId}/enroll`);
      return response.data;
    } catch (error) {
      console.error(`Error enrolling in course ${courseId}:`, error);
      throw error;
    }
  },
};

// API cho người dùng
export const userApi = {
  // Đăng nhập
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // Đăng ký
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  },

  // Lấy thông tin người dùng
  getUserProfile: async () => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  // Cập nhật thông tin người dùng
  updateUserProfile: async (userData) => {
    try {
      const response = await api.put('/users/profile', userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  // Thay đổi mật khẩu
  changePassword: async (passwordData) => {
    try {
      const response = await api.put('/users/change-password', passwordData);
      return response.data;
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },
};

// API cho bài viết (blogs)
export const blogApi = {
  // Lấy tất cả bài viết
  getAllBlogs: async () => {
    try {
      const response = await api.get('/blogs');
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Lấy bài viết theo ID
  getBlogById: async (id) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog ${id}:`, error);
      throw error;
    }
  },

  // Lấy bài viết theo danh mục
  getBlogsByCategory: async (category) => {
    try {
      const response = await api.get(`/blogs/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blogs for category ${category}:`, error);
      throw error;
    }
  },

  // Thêm bình luận vào bài viết
  addComment: async (blogId, commentData) => {
    try {
      const response = await api.post(`/blogs/${blogId}/comments`, commentData);
      return response.data;
    } catch (error) {
      console.error(`Error adding comment to blog ${blogId}:`, error);
      throw error;
    }
  },
};

// API cho khảo sát
export const surveyApi = {
  // Lấy danh sách khảo sát
  getAllSurveys: async () => {
    try {
      const response = await api.get('/surveys');
      return response.data;
    } catch (error) {
      console.error('Error fetching surveys:', error);
      throw error;
    }
  },

  // Lấy khảo sát theo ID
  getSurveyById: async (id) => {
    try {
      const response = await api.get(`/surveys/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching survey ${id}:`, error);
      throw error;
    }
  },

  // Gửi kết quả khảo sát
  submitSurvey: async (surveyId, answers) => {
    try {
      const response = await api.post(`/surveys/${surveyId}/submit`, { answers });
      return response.data;
    } catch (error) {
      console.error(`Error submitting survey ${surveyId}:`, error);
      throw error;
    }
  },
};

// API cho lịch hẹn
export const appointmentApi = {
  // Lấy tất cả lịch hẹn của người dùng
  getUserAppointments: async () => {
    try {
      const response = await api.get('/appointments');
      return response.data;
    } catch (error) {
      console.error('Error fetching user appointments:', error);
      throw error;
    }
  },

  // Tạo lịch hẹn mới
  createAppointment: async (appointmentData) => {
    try {
      const response = await api.post('/appointments', appointmentData);
      return response.data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  // Hủy lịch hẹn
  cancelAppointment: async (appointmentId) => {
    try {
      const response = await api.delete(`/appointments/${appointmentId}`);
      return response.data;
    } catch (error) {
      console.error(`Error cancelling appointment ${appointmentId}:`, error);
      throw error;
    }
  },
};

export default api; 