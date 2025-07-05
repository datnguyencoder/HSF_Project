import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();
  
  // Check if user is logged in (placeholder - would use actual auth check)
  const isLoggedIn = localStorage.getItem('user') !== null;

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    // Clear user data from localStorage (placeholder - would use actual auth logout)
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Code<span className="highlight">Master</span></span>
          </Link>
        </div>
        
        <div className={`navigation ${menuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Trang Chủ</Link>
            <Link to="/courses" className="nav-link">Khóa Học</Link>
          </nav>
          
          <div className="auth-buttons">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="btn btn-text">Hồ Sơ</Link>
                <button onClick={handleLogout} className="btn btn-secondary">Đăng Xuất</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-text">Đăng Nhập</Link>
                <Link to="/register" className="btn btn-primary">Đăng Ký</Link>
              </>
            )}
          </div>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 