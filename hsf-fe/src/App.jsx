import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './components/homepage/HomePage';
import CoursesList from './components/courses/CoursesList';
import CourseDetail from './components/courses/CourseDetail';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize theme from localStorage on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light theme if not set
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/courses" element={
          <Layout>
            <CoursesList />
          </Layout>
        } />
        <Route path="/courses/:id" element={
          <Layout>
            <CourseDetail />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 