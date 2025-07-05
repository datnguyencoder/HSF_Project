import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCourses.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

// Import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Mock data for featured courses
const mockCourses = [
  {
    id: 1,
    title: 'JavaScript Từ Cơ Bản Đến Nâng Cao',
    description: 'Học JavaScript từ cơ bản đến nâng cao, bao gồm ES6+, DOM manipulation và các kỹ thuật hiện đại.',
    image: '/js-course.jpg',
    icon: '🟨',
    language: 'JavaScript',
    color: '#F7DF1E',
    level: 'Cơ bản đến Nâng cao',
    duration: '40 giờ',
    price: 'Miễn phí',
    instructor: 'Nguyễn Văn A',
    rating: 4.9
  },
  {
    id: 2,
    title: 'React - Xây Dựng Giao Diện Modern',
    description: 'Học React từ đầu và xây dựng các ứng dụng web hiện đại với React Hooks và Redux.',
    image: '/react-course.jpg',
    icon: '⚛️',
    language: 'React',
    color: '#61DAFB',
    level: 'Trung cấp',
    duration: '35 giờ',
    price: 'Miễn phí',
    instructor: 'Trần Thị B',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Node.js & Express - API Development',
    description: 'Xây dựng REST API với Node.js, Express và MongoDB để phát triển backend cho web apps.',
    image: '/node-course.jpg',
    icon: '🟩',
    language: 'Node.js',
    color: '#339933',
    level: 'Trung cấp đến Nâng cao',
    duration: '30 giờ',
    price: 'Miễn phí',
    instructor: 'Lê Văn C',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Python cho Data Science',
    description: 'Học Python và các thư viện phân tích dữ liệu như Pandas, NumPy và Matplotlib.',
    image: '/default-course.jpg',
    icon: '🐍',
    language: 'Python',
    color: '#3776AB',
    level: 'Cơ bản đến Nâng cao',
    duration: '45 giờ',
    price: 'Miễn phí',
    instructor: 'Phạm Thị D',
    rating: 4.6
  },
  {
    id: 5,
    title: 'Flutter - Phát triển ứng dụng di động',
    description: 'Xây dựng ứng dụng di động đa nền tảng với Flutter và Dart.',
    image: '/default-course.jpg',
    icon: '📱',
    language: 'Flutter',
    color: '#02569B',
    level: 'Trung cấp',
    duration: '38 giờ',
    price: 'Miễn phí',
    instructor: 'Hoàng Văn E',
    rating: 4.9
  }
];

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  // Simulate fetching courses from API
  useEffect(() => {
    // In a real app, this would be an API call
    setCourses(mockCourses);
  }, []);

  return (
    <section className="section featured-courses" data-aos="fade-up">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Khóa Học Nổi Bật</h2>
          <p className="section-description">
            Các khóa học được thiết kế bởi chuyên gia với nội dung cập nhật theo xu hướng công nghệ mới nhất
          </p>
        </div>

        <div className="courses-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="course-card">
                  <div className="course-image-container">
                    <img src={course.image || '/default-course.jpg'} alt={course.title} className="course-image" />
                    <div className="course-level">{course.level}</div>
                    <div className="course-language-badge" style={{ backgroundColor: course.color }}>
                      <span className="language-icon">{course.icon}</span>
                      <span className="language-name">{course.language}</span>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="course-header">
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                    </div>
                    
                    <div className="course-details">
                      <div className="course-meta">
                        <div className="meta-item">
                          <span className="meta-icon">⏱️</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">👨‍🏫</span>
                          <span>{course.instructor}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">⭐</span>
                          <span>{course.rating}/5</span>
                        </div>
                      </div>
                      
                      <div className="course-footer">
                        <div className="course-price">{course.price}</div>
                        <Link to={`/courses/${course.id}`} className="btn-course-details">
                          Xem Chi Tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="view-all-courses" data-aos="fade-up" data-aos-delay="400">
          <Link to="/courses" className="btn-view-all">
            Xem Tất Cả Khóa Học
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses; 