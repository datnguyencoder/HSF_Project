import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';
import { mockCoursesByLanguage } from './mockData';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      // Tìm khóa học trong tất cả các mảng của mockCoursesByLanguage
      let foundCourse = null;
      
      // Duyệt qua tất cả các ngôn ngữ lập trình
      Object.values(mockCoursesByLanguage).forEach(languageCourses => {
        // Tìm khóa học trong mảng khóa học của mỗi ngôn ngữ
        const found = languageCourses.find(c => c.id === parseInt(id));
        if (found) {
          foundCourse = found;
        }
      });
      
      setCourse(foundCourse);
      setLoading(false);
      
      if (foundCourse) {
        document.title = `${foundCourse.title} - CodeMaster`;
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  if (loading) {
    return (
      <div className="course-detail-loading">
        <div className="loading-spinner"></div>
        <p>Đang tải thông tin khóa học...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Không tìm thấy khóa học</h2>
        <p>Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link to="/courses" className="back-to-courses">Quay lại danh sách khóa học</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${course.coverImage || course.image})` }}>
        <div className="container">
          <div className="course-hero-content">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="course-meta-info">
              <div className="meta-item">
                <span className="meta-label">Giảng viên:</span>
                <span className="meta-value">{course.instructor || course.createdBy}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Trình độ:</span>
                <span className="meta-value">{course.level}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Đánh giá:</span>
                <span className="meta-value">⭐ {course.rating} ({course.students || course.totalEnrolled} học viên)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Thời lượng:</span>
                <span className="meta-value">{course.duration} giờ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="course-detail-content">
          <div className="course-nav">
            <button 
              className={activeSection === 'overview' ? 'active' : ''}
              onClick={() => handleSectionChange('overview')}
            >
              Tổng quan
            </button>
            <button 
              className={activeSection === 'curriculum' ? 'active' : ''}
              onClick={() => handleSectionChange('curriculum')}
            >
              Nội dung khóa học
            </button>
            <button 
              className={activeSection === 'reviews' ? 'active' : ''}
              onClick={() => handleSectionChange('reviews')}
            >
              Đánh giá
            </button>
          </div>

          <div className="course-sections">
            {activeSection === 'overview' && (
              <div className="course-section">
                <h2>Bạn sẽ học được gì</h2>
                <ul className="what-you-learn">
                  {course.whatYouWillLearn && course.whatYouWillLearn.map((item, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 style={{ marginTop: '30px' }}>Mô tả khóa học</h2>
                <div dangerouslySetInnerHTML={{ __html: course.content }}></div>
              </div>
            )}

            {activeSection === 'curriculum' && (
              <div className="course-section">
                <h2>Nội dung khóa học</h2>
                {course.curriculum ? (
                  <div className="curriculum-list">
                    {course.curriculum.map((section, index) => (
                      <div className="curriculum-section" key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex}>
                              <span className="lesson-icon">📝</span>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Nội dung khóa học đang được cập nhật...</p>
                )}
              </div>
            )}

            {activeSection === 'reviews' && (
              <div className="course-section">
                <h2>Đánh giá từ học viên</h2>
                <div className="reviews-placeholder">
                  <p>Đánh giá của học viên sẽ được hiển thị tại đây.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="course-card">
            <div className="course-image-container">
              <img src={course.image || course.coverImage} alt={course.title} />
            </div>
            <div className="course-card-content">
              <div className="course-price free-price">{course.price}</div>
              <button className="enroll-button">Đăng Ký Học</button>
              <div className="course-features">
                <div className="feature-item">
                  <span className="feature-icon">🎓</span>
                  <span>Chứng chỉ hoàn thành</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Truy cập trên mọi thiết bị</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <span>Cập nhật thường xuyên</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⏱️</span>
                  <span>Truy cập trọn đời</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 