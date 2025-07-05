/**
 * Mock data for courses by programming language
 * Each language has 2 courses
 */

export const mockCoursesByLanguage = {
  // JavaScript courses
  javascript: [
    {
      id: 101,
      title: 'JavaScript Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với JavaScript từ con số 0, học cú pháp, biến, vòng lặp, điều kiện và hàm trong JavaScript.',
      image: '/js-course.jpg',
      coverImage: '/js-course.jpg',
      instructor: 'Nguyễn Văn Anh',
      level: 'Beginner',
      rating: 4.8,
      students: 1245,
      duration: 30,
      price: 'Miễn phí',
      category: 'frontend',
      status: 'NOT_ENROLLED',
      createdBy: 'Nguyễn Văn Anh',
      createdAt: '2023-08-15',
      topicName: 'JavaScript',
      videoCount: 24,
      totalEnrolled: 1245,
      whatYouWillLearn: [
        'Làm quen với JavaScript từ con số 0',
        'Hiểu cú pháp cơ bản của JavaScript',
        'Học về biến, kiểu dữ liệu và toán tử',
        'Làm việc với mảng và đối tượng',
        'Xử lý sự kiện và thao tác DOM cơ bản'
      ],
      content: '<p>Khóa học JavaScript cơ bản sẽ giúp bạn hiểu những khái niệm nền tảng của JavaScript - một trong những ngôn ngữ lập trình phổ biến nhất hiện nay. Bạn sẽ được học từ cú pháp cơ bản đến các khái niệm quan trọng như biến, mảng, đối tượng, hàm và DOM.</p><p>Nội dung được thiết kế phù hợp cho người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành.</p>'
    },
    {
      id: 102,
      title: 'JavaScript Nâng Cao - ES6+ và Modern JavaScript',
      description: 'Tìm hiểu các tính năng hiện đại của JavaScript như ES6+, Promises, Async/Await, modules và các design pattern phổ biến.',
      image: '/js-course.jpg',
      coverImage: '/js-course.jpg',
      instructor: 'Trần Minh Hiếu',
      level: 'Intermediate',
      rating: 4.9,
      students: 980,
      duration: 45,
      price: 'Miễn phí',
      category: 'frontend',
      status: 'NOT_ENROLLED',
      createdBy: 'Trần Minh Hiếu',
      createdAt: '2023-09-10',
      topicName: 'JavaScript',
      videoCount: 32,
      totalEnrolled: 980,
      whatYouWillLearn: [
        'Nắm vững các tính năng ES6+ (arrow functions, destructuring, spread operator, etc.)',
        'Làm việc với Promises và Async/Await',
        'Hiểu và sử dụng JavaScript Modules',
        'Áp dụng các design pattern phổ biến trong JavaScript',
        'Tối ưu hóa hiệu suất cho ứng dụng JavaScript'
      ],
      content: '<p>Khóa học JavaScript nâng cao này tập trung vào các tính năng hiện đại của JavaScript từ phiên bản ES6 trở đi. Bạn sẽ tìm hiểu cách sử dụng các tính năng mới như arrow functions, template literals, destructuring, và modules để viết mã hiệu quả hơn.</p><p>Ngoài ra, khóa học cũng đi sâu vào lập trình bất đồng bộ với Promises và Async/Await, cùng với các design pattern phổ biến để giải quyết các bài toán phức tạp.</p>'
    }
  ],

  // Python courses
  python: [
    {
      id: 201,
      title: 'Python Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với Python từ cơ bản đến nâng cao, học cú pháp, cấu trúc dữ liệu và các thư viện phổ biến.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Lê Thị Hà',
      level: 'Beginner',
      rating: 4.7,
      students: 1520,
      duration: 35,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Lê Thị Hà',
      createdAt: '2023-07-20',
      topicName: 'Python',
      videoCount: 28,
      totalEnrolled: 1520,
      whatYouWillLearn: [
        'Hiểu cú pháp và cấu trúc của Python',
        'Làm việc với các kiểu dữ liệu trong Python',
        'Học cách sử dụng điều kiện và vòng lặp',
        'Tạo và sử dụng hàm trong Python',
        'Làm việc với các module và packages'
      ],
      content: '<p>Python là một trong những ngôn ngữ lập trình dễ học và được sử dụng rộng rãi nhất hiện nay. Khóa học này giúp bạn nắm vững kiến thức cơ bản về Python, từ cú pháp, cấu trúc dữ liệu đến các tính năng quan trọng của ngôn ngữ.</p><p>Nội dung được thiết kế để phù hợp với người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành giúp bạn xây dựng nền tảng vững chắc.</p>'
    },
    {
      id: 202,
      title: 'Python Cho Data Science và Machine Learning',
      description: 'Học cách sử dụng Python cho phân tích dữ liệu, visualisation và machine learning với các thư viện như Pandas, NumPy, Matplotlib và Scikit-learn.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Phạm Minh Tuấn',
      level: 'Intermediate',
      rating: 4.9,
      students: 1250,
      duration: 50,
      price: 'Miễn phí',
      category: 'data',
      status: 'NOT_ENROLLED',
      createdBy: 'Phạm Minh Tuấn',
      createdAt: '2023-10-05',
      topicName: 'Python',
      videoCount: 40,
      totalEnrolled: 1250,
      whatYouWillLearn: [
        'Phân tích dữ liệu với Pandas và NumPy',
        'Tạo biểu đồ trực quan với Matplotlib và Seaborn',
        'Áp dụng các thuật toán Machine Learning với Scikit-learn',
        'Xây dựng và đánh giá các mô hình học máy',
        'Xử lý và tiền xử lý dữ liệu thực tế'
      ],
      content: '<p>Khóa học này sẽ giúp bạn học cách sử dụng Python trong lĩnh vực Khoa học dữ liệu và Học máy. Bạn sẽ làm quen với các thư viện phổ biến như Pandas, NumPy, Matplotlib và Scikit-learn để xử lý, phân tích và trực quan hóa dữ liệu.</p><p>Ngoài ra, bạn sẽ được thực hành xây dựng và đánh giá các mô hình học máy khác nhau, từ các thuật toán cơ bản đến các mô hình phức tạp, giải quyết các bài toán thực tế trong nhiều lĩnh vực.</p>'
    }
  ],

  // Java courses
  java: [
    {
      id: 301,
      title: 'Java Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với Java từ cơ bản đến nâng cao, học cú pháp, lập trình hướng đối tượng và các khái niệm quan trọng.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Nguyễn Quang Huy',
      level: 'Beginner',
      rating: 4.6,
      students: 1120,
      duration: 40,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Nguyễn Quang Huy',
      createdAt: '2023-06-15',
      topicName: 'Java',
      videoCount: 32,
      totalEnrolled: 1120,
      whatYouWillLearn: [
        'Hiểu cú pháp và cấu trúc của Java',
        'Nắm vững lập trình hướng đối tượng (OOP) trong Java',
        'Làm việc với các cấu trúc dữ liệu của Java',
        'Xử lý ngoại lệ và debug code Java',
        'Tạo ứng dụng Java đơn giản'
      ],
      content: '<p>Java là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất hiện nay. Khóa học này sẽ giúp bạn nắm vững kiến thức cơ bản về Java, từ cú pháp, kiểu dữ liệu đến các nguyên lý lập trình hướng đối tượng.</p><p>Bạn sẽ được thực hành thông qua nhiều bài tập và dự án nhỏ, giúp củng cố kiến thức và xây dựng nền tảng vững chắc để phát triển các ứng dụng Java phức tạp hơn.</p>'
    },
    {
      id: 302,
      title: 'Phát Triển Ứng Dụng Web Với Spring Boot',
      description: 'Học cách xây dựng các ứng dụng web hiện đại với Spring Boot, Spring MVC, Spring Data JPA và các công nghệ liên quan.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Trần Thu Hà',
      level: 'Intermediate',
      rating: 4.8,
      students: 950,
      duration: 55,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Trần Thu Hà',
      createdAt: '2023-09-22',
      topicName: 'Java',
      videoCount: 45,
      totalEnrolled: 950,
      whatYouWillLearn: [
        'Xây dựng ứng dụng web với Spring Boot',
        'Làm việc với Spring MVC để tạo RESTful API',
        'Sử dụng Spring Data JPA để tương tác với cơ sở dữ liệu',
        'Cấu hình bảo mật với Spring Security',
        'Triển khai và quản lý ứng dụng Spring Boot'
      ],
      content: '<p>Spring Boot đã trở thành một trong những framework phổ biến nhất để phát triển ứng dụng web với Java. Khóa học này sẽ giúp bạn hiểu và sử dụng Spring Boot để xây dựng các ứng dụng web hiện đại, RESTful API và các dịch vụ microservice.</p><p>Bạn sẽ học cách sử dụng Spring MVC, Spring Data JPA để tương tác với cơ sở dữ liệu, cấu hình bảo mật với Spring Security, và triển khai ứng dụng Spring Boot lên môi trường sản xuất.</p>'
    }
  ],

  // PHP courses
  php: [
    {
      id: 401,
      title: 'PHP Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với PHP từ cơ bản, học cú pháp, biến, hàm và cách tương tác với cơ sở dữ liệu MySQL.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Lê Văn Trọng',
      level: 'Beginner',
      rating: 4.5,
      students: 980,
      duration: 35,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Lê Văn Trọng',
      createdAt: '2023-05-10',
      topicName: 'PHP',
      videoCount: 28,
      totalEnrolled: 980,
      whatYouWillLearn: [
        'Hiểu cú pháp và cấu trúc của PHP',
        'Làm việc với các kiểu dữ liệu và biến trong PHP',
        'Xử lý form và dữ liệu người dùng',
        'Kết nối và truy vấn cơ sở dữ liệu MySQL',
        'Xây dựng ứng dụng web đơn giản với PHP'
      ],
      content: '<p>PHP là một trong những ngôn ngữ lập trình web phổ biến nhất hiện nay. Khóa học này sẽ giúp bạn nắm vững kiến thức cơ bản về PHP, từ cú pháp, biến, hàm đến cách xử lý form và tương tác với cơ sở dữ liệu MySQL.</p><p>Nội dung được thiết kế để phù hợp với người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành giúp bạn xây dựng nền tảng vững chắc để phát triển các ứng dụng web với PHP.</p>'
    },
    {
      id: 402,
      title: 'Phát Triển Website Với Laravel Framework',
      description: 'Học cách sử dụng Laravel - PHP framework hiện đại để xây dựng các ứng dụng web mạnh mẽ và bảo mật.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Nguyễn Thị Mai',
      level: 'Intermediate',
      rating: 4.9,
      students: 850,
      duration: 50,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Nguyễn Thị Mai',
      createdAt: '2023-08-18',
      topicName: 'PHP',
      videoCount: 42,
      totalEnrolled: 850,
      whatYouWillLearn: [
        'Hiểu cấu trúc và kiến trúc của Laravel framework',
        'Sử dụng Eloquent ORM để tương tác với cơ sở dữ liệu',
        'Xây dựng RESTful API với Laravel',
        'Cấu hình xác thực và phân quyền trong Laravel',
        'Triển khai và quản lý ứng dụng Laravel'
      ],
      content: '<p>Laravel đã trở thành một trong những PHP framework phổ biến nhất để phát triển các ứng dụng web hiện đại. Khóa học này sẽ giúp bạn nắm vững Laravel và các tính năng mạnh mẽ của nó.</p><p>Bạn sẽ học cách sử dụng Eloquent ORM để tương tác với cơ sở dữ liệu, xây dựng các RESTful API, cấu hình xác thực và phân quyền, và triển khai ứng dụng Laravel lên môi trường sản xuất.</p>'
    }
  ],

  // C# courses
  csharp: [
    {
      id: 501,
      title: 'C# Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với C# từ cơ bản, học cú pháp, lập trình hướng đối tượng và phát triển ứng dụng với .NET Framework.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Hoàng Minh Tuấn',
      level: 'Beginner',
      rating: 4.7,
      students: 920,
      duration: 40,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Hoàng Minh Tuấn',
      createdAt: '2023-07-05',
      topicName: 'C#',
      videoCount: 32,
      totalEnrolled: 920,
      whatYouWillLearn: [
        'Hiểu cú pháp và cấu trúc của C#',
        'Nắm vững lập trình hướng đối tượng trong C#',
        'Làm việc với các cấu trúc dữ liệu của C#',
        'Xử lý ngoại lệ và debug code C#',
        'Tạo ứng dụng console và Windows Forms cơ bản'
      ],
      content: '<p>C# là một ngôn ngữ lập trình mạnh mẽ, linh hoạt và được sử dụng rộng rãi trong phát triển phần mềm. Khóa học này sẽ giúp bạn nắm vững kiến thức cơ bản về C#, từ cú pháp, kiểu dữ liệu đến các nguyên lý lập trình hướng đối tượng.</p><p>Nội dung được thiết kế để phù hợp với người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành giúp bạn xây dựng nền tảng vững chắc để phát triển các ứng dụng với C# và .NET Framework.</p>'
    },
    {
      id: 502,
      title: 'Phát Triển Web Với ASP.NET Core MVC',
      description: 'Học cách xây dựng các ứng dụng web hiện đại với ASP.NET Core MVC, Entity Framework Core và các công nghệ liên quan.',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Phạm Quang Minh',
      level: 'Intermediate',
      rating: 4.8,
      students: 780,
      duration: 55,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Phạm Quang Minh',
      createdAt: '2023-10-12',
      topicName: 'C#',
      videoCount: 45,
      totalEnrolled: 780,
      whatYouWillLearn: [
        'Xây dựng ứng dụng web với ASP.NET Core MVC',
        'Sử dụng Entity Framework Core để tương tác với cơ sở dữ liệu',
        'Tạo và sử dụng API trong ASP.NET Core',
        'Cấu hình bảo mật và xác thực trong ASP.NET Core',
        'Triển khai ứng dụng ASP.NET Core lên môi trường sản xuất'
      ],
      content: '<p>ASP.NET Core là một framework hiện đại, mạnh mẽ và cross-platform để phát triển các ứng dụng web. Khóa học này sẽ giúp bạn hiểu và sử dụng ASP.NET Core MVC để xây dựng các ứng dụng web đa nền tảng.</p><p>Bạn sẽ học cách sử dụng Entity Framework Core để tương tác với cơ sở dữ liệu, tạo và sử dụng API, cấu hình bảo mật và xác thực, và triển khai ứng dụng ASP.NET Core lên môi trường sản xuất.</p>'
    }
  ],

  // Ruby courses
  ruby: [
    {
      id: 601,
      title: 'Ruby Cơ Bản Cho Người Mới Bắt Đầu',
      description: 'Làm quen với Ruby từ cơ bản, học cú pháp, các tính năng đặc trưng và triết lý "mọi thứ đều là đối tượng".',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Đỗ Thị Hương',
      level: 'Beginner',
      rating: 4.6,
      students: 720,
      duration: 35,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Đỗ Thị Hương',
      createdAt: '2023-06-20',
      topicName: 'Ruby',
      videoCount: 28,
      totalEnrolled: 720,
      whatYouWillLearn: [
        'Hiểu cú pháp và cấu trúc của Ruby',
        'Nắm vững triết lý "mọi thứ đều là đối tượng" của Ruby',
        'Làm việc với các cấu trúc dữ liệu của Ruby',
        'Xử lý ngoại lệ và debug code Ruby',
        'Viết các script Ruby đơn giản'
      ],
      content: '<p>Ruby là một ngôn ngữ lập trình trực quan, linh hoạt và có cú pháp rất "người". Khóa học này sẽ giúp bạn nắm vững kiến thức cơ bản về Ruby, từ cú pháp, kiểu dữ liệu đến các tính năng đặc trưng của ngôn ngữ.</p><p>Nội dung được thiết kế để phù hợp với người mới bắt đầu, với nhiều ví dụ thực tế và bài tập thực hành giúp bạn xây dựng nền tảng vững chắc để tiếp tục học Ruby on Rails hoặc các framework khác.</p>'
    },
    {
      id: 602,
      title: 'Phát Triển Web Với Ruby on Rails',
      description: 'Học cách sử dụng Ruby on Rails framework để xây dựng các ứng dụng web nhanh chóng và hiệu quả theo nguyên tắc "Convention over Configuration".',
      image: '/default-course.jpg',
      coverImage: '/default-course.jpg',
      instructor: 'Nguyễn Hoàng Nam',
      level: 'Intermediate',
      rating: 4.9,
      students: 680,
      duration: 50,
      price: 'Miễn phí',
      category: 'backend',
      status: 'NOT_ENROLLED',
      createdBy: 'Nguyễn Hoàng Nam',
      createdAt: '2023-09-08',
      topicName: 'Ruby',
      videoCount: 40,
      totalEnrolled: 680,
      whatYouWillLearn: [
        'Hiểu cấu trúc và kiến trúc MVC của Ruby on Rails',
        'Sử dụng Active Record để tương tác với cơ sở dữ liệu',
        'Xây dựng RESTful API với Rails',
        'Cấu hình xác thực và phân quyền trong Rails',
        'Triển khai và quản lý ứng dụng Rails'
      ],
      content: '<p>Ruby on Rails là một framework phát triển web mạnh mẽ theo mô hình MVC, nổi tiếng với triết lý "Convention over Configuration" và "Don\'t Repeat Yourself". Khóa học này sẽ giúp bạn nắm vững Ruby on Rails và các tính năng mạnh mẽ của nó.</p><p>Bạn sẽ học cách sử dụng Active Record để tương tác với cơ sở dữ liệu, xây dựng các RESTful API, cấu hình xác thực và phân quyền, và triển khai ứng dụng Rails lên môi trường sản xuất.</p>'
    }
  ]
};

export const languageDetails = {
  javascript: {
    name: 'JavaScript',
    description: 'Ngôn ngữ lập trình phổ biến nhất cho phát triển web frontend, chạy trên trình duyệt và cả phía server với Node.js.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  python: {
    name: 'Python',
    description: 'Ngôn ngữ đa năng, đơn giản, dễ học và phổ biến cho data science, machine learning và phát triển web backend.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  java: {
    name: 'Java',
    description: 'Ngôn ngữ lập trình hướng đối tượng mạnh mẽ, được sử dụng rộng rãi cho ứng dụng enterprise và Android.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  php: {
    name: 'PHP',
    description: 'Ngôn ngữ kịch bản phía server phổ biến cho phát triển web, cung cấp nền tảng cho WordPress và nhiều CMS khác.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  csharp: {
    name: 'C#',
    description: 'Ngôn ngữ mạnh mẽ của Microsoft, được sử dụng cho phát triển .NET, game Unity và ứng dụng Windows.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
  },
  ruby: {
    name: 'Ruby',
    description: 'Ngôn ngữ lập trình đơn giản, dễ đọc với triết lý "programmer happiness", nổi tiếng với framework Ruby on Rails.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
  }
};
