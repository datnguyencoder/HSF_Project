import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Đăng Nhập - CodeMaster';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!formData.username || !formData.password) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin đăng nhập');
      return;
    }
    
    // Simulate login API call (would be replaced with actual API call)
    if (formData.username === 'admin' && formData.password === 'password') {
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify({
        username: formData.username,
        name: 'Nguyễn Văn A',
        role: 'student'
      }));
      
      // Redirect to homepage after successful login
      navigate('/');
    } else {
      setErrorMessage('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Đăng Nhập</h2>
          <p>Chào mừng quay trở lại với CodeMaster</p>
        </div>

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nhập tên đăng nhập hoặc email"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Quên mật khẩu?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Đăng Nhập
          </button>
        </form>

        <div className="divider">
          <span>hoặc đăng nhập với</span>
        </div>

        <div className="social-login" style={{ width: '100%' }}>
          <button className="social-button google large" style={{ width: '100%' }}>
            <span>Google</span>
          </button>
        </div>

        <div className="signup-prompt">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 