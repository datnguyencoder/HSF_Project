import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">CodeMaster</h3>
          <p className="footer-description">
            Nền tảng học lập trình trực tuyến chất lượng cao dành cho lập trình viên Việt Nam
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Liên Kết</h3>
          <ul className="footer-links">
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/courses">Khóa Học</Link></li>
            <li><Link to="/about">Về Chúng Tôi</Link></li>
            <li><Link to="/contact">Liên Hệ</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Khóa Học</h3>
          <ul className="footer-links">
            <li><Link to="/courses?category=frontend">Front-end</Link></li>
            <li><Link to="/courses?category=backend">Back-end</Link></li>
            <li><Link to="/courses?category=mobile">Mobile App</Link></li>
            <li><Link to="/courses?category=devops">DevOps</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Liên Hệ</h3>
          <address className="footer-contact">
            <p>Email: info@codemaster.com</p>
            <p>Phone: +84 123 456 789</p>
            <p>Address: 123 Tech Street, Hanoi</p>
          </address>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">F</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">T</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">L</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">Y</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CodeMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 