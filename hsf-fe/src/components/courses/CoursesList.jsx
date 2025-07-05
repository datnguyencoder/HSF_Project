import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoursesList.css';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Học JavaScript từ cơ bản đến nâng cao, bao gồm ES6+, DOM manipulation và các kỹ thuật hiện đại.',
    image: '/js-course.jpg',
    icon: '🟨',
    language: 'JavaScript',
    color: '#F7DF1E',
    instructor: 'Nguyễn Văn A',
    level: 'Beginner',
    rating: 4.8,
    students: 1245,
    duration: '30 giờ',
    price: 'Miễn phí',
    category: 'frontend'
  },
  {
    id: 2,
    title: 'React.js - The Complete Guide',
    description: 'Xây dựng các ứng dụng web hiện đại với React hooks, Redux và các thư viện phổ biến nhất.',
    image: '/react-course.jpg',
    icon: '⚛️',
    language: 'React',
    color: '#61DAFB',
    instructor: 'Trần Thị B',
    level: 'Intermediate',
    rating: 4.9,
    students: 980,
    duration: '45 giờ',
    price: 'Miễn phí',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Học Python và các thư viện phân tích dữ liệu như Pandas, NumPy, Matplotlib và Scikit-learn.',
    image: '/python-course.jpg',
    icon: '🐍',
    language: 'Python',
    color: '#3776AB',
    instructor: 'Lê Văn C',
    level: 'Intermediate',
    rating: 4.7,
    students: 1532,
    duration: '50 giờ',
    price: 'Miễn phí',
    category: 'data'
  },
  {
    id: 4,
    title: 'Node.js & Express - API Development',
    description: 'Xây dựng REST APIs với Node.js, Express và MongoDB để phát triển backend cho ứng dụng web.',
    image: '/node-course.jpg',
    icon: '🟩',
    language: 'Node.js',
    color: '#339933',
    instructor: 'Phạm Thị D',
    level: 'Intermediate',
    rating: 4.6,
    students: 865,
    duration: '35 giờ',
    price: 'Miễn phí',
    category: 'backend'
  },
  {
    id: 5,
    title: 'Full Stack Web Development',
    description: 'Học phát triển cả frontend và backend với MERN stack (MongoDB, Express, React, Node.js).',
    image: '/fullstack-course.jpg',
    icon: '🌐',
    language: 'MERN Stack',
    color: '#000000',
    instructor: 'Hoàng Văn E',
    level: 'Advanced',
    rating: 4.9,
    students: 734,
    duration: '70 giờ',
    price: 'Miễn phí',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'Flutter - Mobile App Development',
    description: 'Xây dựng ứng dụng mobile đa nền tảng với Flutter và Dart cho iOS và Android.',
    image: '/flutter-course.jpg',
    icon: '📱',
    language: 'Flutter',
    color: '#02569B',
    instructor: 'Mai Thị F',
    level: 'Intermediate',
    rating: 4.8,
    students: 621,
    duration: '40 giờ',
    price: 'Miễn phí',
    category: 'mobile'
  }
];

// Mock data for categories
const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'data', name: 'Data Science' }
];

// Mock data for levels
const levels = [
  { id: 'all', name: 'Tất cả' },
  { id: 'Beginner', name: 'Cơ bản' },
  { id: 'Intermediate', name: 'Trung cấp' },
  { id: 'Advanced', name: 'Nâng cao' }
];

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  useEffect(() => {
    document.title = "Khóa học - CodeMaster";
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Khóa Học Lập Trình</h1>
          <p>Học kỹ năng lập trình từ cơ bản đến chuyên nghiệp với các khóa học chất lượng cao</p>
        </div>
      </div>
      
      <div className="container">
        <div className="courses-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-selects">
            <div className="filter-group">
              <label htmlFor="category">Danh mục</label>
              <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="level">Trình độ</label>
              <select id="level" value={selectedLevel} onChange={handleLevelChange}>
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="courses-loading">
            <div className="loading-spinner"></div>
            <p>Đang tải khóa học...</p>
          </div>
        ) : (
          <>
            <div className="courses-count">
              Hiển thị {filteredCourses.length} khóa học
            </div>
            
            {filteredCourses.length === 0 ? (
              <div className="no-courses">
                <h3>Không tìm thấy khóa học nào</h3>
                <p>Vui lòng thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc</p>
              </div>
            ) : (
              <div className="courses-grid">
                {filteredCourses.map(course => (
                  <div className="course-card" key={course.id}>
                    <div className="course-image-container">
                      <img src={course.image} alt={course.title} className="course-image" />
                      <div className="course-level">{course.level}</div>
                      <div className="course-language-badge" style={{ backgroundColor: course.color }}>
                        <span className="language-icon">{course.icon}</span>
                        <span className="language-name">{course.language}</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="content-upper">
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                      </div>
                      
                      <div className="content-lower">
                      <div className="course-meta">
                        <div className="meta-item">
                          <span className="meta-icon">👨‍🏫</span>
                          <span>{course.instructor}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">⭐</span>
                          <span>{course.rating} ({course.students})</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">⏱️</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      
                      <div className="course-footer">
                        <div className="course-price">{course.price}</div>
                        <Link to={`/courses/${course.id}`} className="view-course-btn">
                          Xem Chi Tiết
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoursesList; 