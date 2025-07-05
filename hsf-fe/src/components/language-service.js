import axios from 'axios';
import { USE_MOCK_DATA } from '../services/config';

// Mock data
const languageDetails = {
  javascript: {
    name: "JavaScript",
    description: "Ngôn ngữ lập trình phổ biến nhất cho phát triển web frontend, chạy trên trình duyệt và cả phía server với Node.js.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  python: {
    name: "Python",
    description: "Ngôn ngữ đa năng, đơn giản, dễ học và phổ biến cho data science, machine learning và phát triển web backend.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  java: {
    name: "Java",
    description: "Ngôn ngữ lập trình hướng đối tượng mạnh mẽ, được sử dụng rộng rãi cho ứng dụng enterprise và Android.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  php: {
    name: "PHP",
    description: "Ngôn ngữ kịch bản phía server phổ biến cho phát triển web, cung cấp nền tảng cho WordPress và nhiều CMS khác.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  csharp: {
    name: "C#",
    description: "Ngôn ngữ mạnh mẽ của Microsoft, được sử dụng cho phát triển .NET, game Unity và ứng dụng Windows.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  },
  ruby: {
    name: "Ruby",
    description: "Ngôn ngữ lập trình đơn giản, dễ đọc với triết lý \"programmer happiness\", nổi tiếng với framework Ruby on Rails.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
  }
};

// Mock courses data for each language
const mockCoursesByLanguage = {
  // JavaScript courses
  javascript: [
    {
      id: 101,
      title: "JavaScript Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với JavaScript từ con số 0, học cú pháp, biến, vòng lặp, điều kiện và hàm trong JavaScript.",
      image: "/js-course.jpg",
      coverImage: "/js-course.jpg",
      instructor: "Nguyễn Văn Anh",
      level: "Beginner",
      rating: 4.8,
      students: 1245,
      duration: 30,
      price: "Miễn phí",
      category: "frontend",
      status: "NOT_ENROLLED",
      createdBy: "Nguyễn Văn Anh",
      createdAt: "2023-08-15",
      topicName: "JavaScript",
      videoCount: 24,
      totalEnrolled: 1245,
      whatYouWillLearn: [
        "Làm quen với JavaScript từ con số 0",
        "Hiểu cú pháp cơ bản của JavaScript",
        "Học về biến, kiểu dữ liệu và toán tử",
        "Làm việc với mảng và đối tượng",
        "Xử lý sự kiện và thao tác DOM cơ bản"
      ],
      content: "<p>Khóa học JavaScript cơ bản sẽ giúp bạn hiểu những khái niệm nền tảng của JavaScript - một trong những ngôn ngữ lập trình phổ biến nhất hiện nay. Bạn sẽ được học từ cú pháp cơ bản đến các khái niệm quan trọng như biến, mảng, đối tượng, hàm và DOM.</p><p>Nội dung được thiết kế phù hợp cho người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành.</p>"
    },
    {
      id: 102,
      title: "JavaScript Nâng Cao - ES6+ và Modern JavaScript",
      description: "Tìm hiểu các tính năng hiện đại của JavaScript như ES6+, Promises, Async/Await, modules và các design pattern phổ biến.",
      image: "/js-course.jpg",
      coverImage: "/js-course.jpg",
      instructor: "Trần Minh Hiếu",
      level: "Intermediate",
      rating: 4.9,
      students: 980,
      duration: 45,
      price: "Miễn phí",
      category: "frontend",
      status: "NOT_ENROLLED",
      createdBy: "Trần Minh Hiếu",
      createdAt: "2023-09-10",
      topicName: "JavaScript",
      videoCount: 32,
      totalEnrolled: 980,
      whatYouWillLearn: [
        "Nắm vững các tính năng ES6+ (arrow functions, destructuring, spread operator, etc.)",
        "Làm việc với Promises và Async/Await",
        "Hiểu và sử dụng JavaScript Modules",
        "Áp dụng các design pattern phổ biến trong JavaScript",
        "Tối ưu hóa hiệu suất cho ứng dụng JavaScript"
      ],
      content: "<p>Khóa học JavaScript nâng cao này tập trung vào các tính năng hiện đại của JavaScript từ phiên bản ES6 trở đi. Bạn sẽ tìm hiểu cách sử dụng các tính năng mới như arrow functions, template literals, destructuring, và modules để viết mã hiệu quả hơn.</p><p>Ngoài ra, khóa học cũng đi sâu vào lập trình bất đồng bộ với Promises và Async/Await, cùng với các design pattern phổ biến để giải quyết các bài toán phức tạp.</p>"
    }
  ],

  // Python courses
  python: [
    {
      id: 201,
      title: "Python Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với Python từ cơ bản đến nâng cao, học cú pháp, cấu trúc dữ liệu và các thư viện phổ biến.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Lê Thị Hà",
      level: "Beginner",
      rating: 4.7,
      students: 1520,
      duration: 35,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      createdBy: "Lê Thị Hà",
      createdAt: "2023-07-20",
      topicName: "Python",
      videoCount: 28,
      totalEnrolled: 1520,
      whatYouWillLearn: [
        "Hiểu cú pháp và cấu trúc của Python",
        "Làm việc với các kiểu dữ liệu trong Python",
        "Học cách sử dụng điều kiện và vòng lặp",
        "Tạo và sử dụng hàm trong Python",
        "Làm việc với các module và packages"
      ],
      content: "<p>Python là một trong những ngôn ngữ lập trình dễ học và được sử dụng rộng rãi nhất hiện nay. Khóa học này giúp bạn nắm vững kiến thức cơ bản về Python, từ cú pháp, cấu trúc dữ liệu đến các tính năng quan trọng của ngôn ngữ.</p><p>Nội dung được thiết kế để phù hợp với người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành giúp bạn xây dựng nền tảng vững chắc.</p>"
    },
    {
      id: 202,
      title: "Python Cho Data Science và Machine Learning",
      description: "Học cách sử dụng Python cho phân tích dữ liệu, visualisation và machine learning với các thư viện như Pandas, NumPy, Matplotlib và Scikit-learn.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Phạm Minh Tuấn",
      level: "Intermediate",
      rating: 4.9,
      students: 1250,
      duration: 50,
      price: "Miễn phí",
      category: "data",
      status: "NOT_ENROLLED",
      createdBy: "Phạm Minh Tuấn",
      createdAt: "2023-10-05",
      topicName: "Python",
      videoCount: 40,
      totalEnrolled: 1250,
      whatYouWillLearn: [
        "Phân tích dữ liệu với Pandas và NumPy",
        "Tạo biểu đồ trực quan với Matplotlib và Seaborn",
        "Áp dụng các thuật toán Machine Learning với Scikit-learn",
        "Xây dựng và đánh giá các mô hình học máy",
        "Xử lý và tiền xử lý dữ liệu thực tế"
      ],
      content: "<p>Khóa học này sẽ giúp bạn học cách sử dụng Python trong lĩnh vực Khoa học dữ liệu và Học máy. Bạn sẽ làm quen với các thư viện phổ biến như Pandas, NumPy, Matplotlib và Scikit-learn để xử lý, phân tích và trực quan hóa dữ liệu.</p><p>Ngoài ra, bạn sẽ được thực hành xây dựng và đánh giá các mô hình học máy khác nhau, từ các thuật toán cơ bản đến các mô hình phức tạp, giải quyết các bài toán thực tế trong nhiều lĩnh vực.</p>"
    }
  ],

  // Remaining mock data for other languages follows the same pattern...
  java: [
    {
      id: 301,
      title: "Java Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với Java từ cơ bản đến nâng cao, học cú pháp, lập trình hướng đối tượng và các khái niệm quan trọng.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Nguyễn Quang Huy",
      level: "Beginner",
      rating: 4.6,
      students: 1120,
      duration: 40,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "Java"
    },
    {
      id: 302,
      title: "Phát Triển Ứng Dụng Web Với Spring Boot",
      description: "Học cách xây dựng các ứng dụng web hiện đại với Spring Boot, Spring MVC, Spring Data JPA và các công nghệ liên quan.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Trần Thu Hà",
      level: "Intermediate",
      rating: 4.8,
      students: 950,
      duration: 55,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "Java"
    }
  ],
  
  php: [
    {
      id: 401,
      title: "PHP Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với PHP từ cơ bản, học cú pháp, biến, hàm và cách tương tác với cơ sở dữ liệu MySQL.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Lê Văn Trọng",
      level: "Beginner",
      rating: 4.5,
      students: 980,
      duration: 35,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "PHP"
    },
    {
      id: 402,
      title: "Phát Triển Website Với Laravel Framework",
      description: "Học cách sử dụng Laravel - PHP framework hiện đại để xây dựng các ứng dụng web mạnh mẽ và bảo mật.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Nguyễn Thị Mai",
      level: "Intermediate",
      rating: 4.9,
      students: 850,
      duration: 50,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "PHP"
    }
  ],
  
  csharp: [
    {
      id: 501,
      title: "C# Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với C# từ cơ bản, học cú pháp, lập trình hướng đối tượng và phát triển ứng dụng với .NET Framework.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Hoàng Minh Tuấn",
      level: "Beginner",
      rating: 4.7,
      students: 920,
      duration: 40,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "C#"
    },
    {
      id: 502,
      title: "Phát Triển Web Với ASP.NET Core MVC",
      description: "Học cách xây dựng các ứng dụng web hiện đại với ASP.NET Core MVC, Entity Framework Core và các công nghệ liên quan.",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Phạm Quang Minh",
      level: "Intermediate",
      rating: 4.8,
      students: 780,
      duration: 55,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "C#"
    }
  ],
  
  ruby: [
    {
      id: 601,
      title: "Ruby Cơ Bản Cho Người Mới Bắt Đầu",
      description: "Làm quen với Ruby từ cơ bản, học cú pháp, các tính năng đặc trưng và triết lý \"mọi thứ đều là đối tượng\".",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Đỗ Thị Hương",
      level: "Beginner",
      rating: 4.6,
      students: 720,
      duration: 35,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "Ruby"
    },
    {
      id: 602,
      title: "Phát Triển Web Với Ruby on Rails",
      description: "Học cách sử dụng Ruby on Rails framework để xây dựng các ứng dụng web nhanh chóng và hiệu quả theo nguyên tắc \"Convention over Configuration\".",
      image: "/default-course.jpg",
      coverImage: "/default-course.jpg",
      instructor: "Nguyễn Hoàng Nam",
      level: "Intermediate",
      rating: 4.9,
      students: 680,
      duration: 50,
      price: "Miễn phí",
      category: "backend",
      status: "NOT_ENROLLED",
      topicName: "Ruby"
    }
  ]
};

// Service functions
export const languageService = {
  // Lấy tất cả các chi tiết ngôn ngữ
  getAllLanguageDetails: async () => {
    if (USE_MOCK_DATA) {
      return languageDetails;
    } else {
      try {
        const response = await axios.get('/api/languages');
        return response.data;
      } catch (error) {
        console.error('Error fetching language details:', error);
        throw error;
      }
    }
  },

  // Lấy chi tiết của một ngôn ngữ cụ thể
  getLanguageDetails: async (languageCode) => {
    if (USE_MOCK_DATA) {
      return languageDetails[languageCode] || null;
    } else {
      try {
        const response = await axios.get(`/api/languages/${languageCode}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching details for language ${languageCode}:`, error);
        throw error;
      }
    }
  },

  // Lấy khóa học theo ngôn ngữ
  getCoursesByLanguage: async (languageCode) => {
    if (USE_MOCK_DATA) {
      return mockCoursesByLanguage[languageCode] || [];
    } else {
      try {
        const response = await axios.get(`/api/courses/language/${languageCode}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching courses for language ${languageCode}:`, error);
        throw error;
      }
    }
  },

  // Lấy chi tiết khóa học
  getCourseDetails: async (courseId) => {
    if (USE_MOCK_DATA) {
      // Tìm khóa học trong mock data
      for (const language in mockCoursesByLanguage) {
        const course = mockCoursesByLanguage[language].find(course => course.id === parseInt(courseId));
        if (course) return course;
      }
      return null;
    } else {
      try {
        const response = await axios.get(`/api/courses/${courseId}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching course details for ID ${courseId}:`, error);
        throw error;
      }
    }
  }
};

export { languageDetails, mockCoursesByLanguage }; 