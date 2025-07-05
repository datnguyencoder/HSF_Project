// Dữ liệu giả cho việc test trang chi tiết khóa học

export const courseDetailData = [
  {
    id: 1001,
    title: 'Thiết Kế Web Responsive Toàn Diện',
    description: 'Học cách xây dựng website thích ứng với mọi kích thước màn hình từ mobile đến desktop',
    image: '/default-course.jpg',
    coverImage: '/back-1.jpg',
    instructor: 'Phạm Hoàng Nam',
    level: 'Intermediate',
    rating: 4.9,
    students: 1356,
    duration: 42,
    price: 'Miễn phí',
    category: 'frontend',
    createdBy: 'Phạm Hoàng Nam',
    createdAt: '2023-11-15',
    topicName: 'Web Design',
    videoCount: 36,
    totalEnrolled: 1356,
    whatYouWillLearn: [
      'Thiết kế layout linh hoạt với Flexbox và Grid',
      'Sử dụng Media Queries một cách hiệu quả',
      'Tối ưu hóa hình ảnh và tài nguyên cho mobile',
      'Áp dụng nguyên tắc Mobile-First Design',
      'Tạo trải nghiệm người dùng nhất quán trên mọi thiết bị'
    ],
    content: '<p>Khóa học <strong>Thiết Kế Web Responsive Toàn Diện</strong> sẽ giúp bạn nắm vững các kỹ thuật và nguyên tắc để xây dựng website thích ứng hoàn hảo trên mọi thiết bị.</p><p>Trong thời đại di động ngày nay, việc tạo ra các trang web có khả năng hiển thị tốt trên mọi kích thước màn hình không còn là lựa chọn mà đã trở thành yêu cầu bắt buộc.</p><p>Khóa học bao gồm các bài giảng chi tiết về Flexbox, CSS Grid, Media Queries và các kỹ thuật responsive design hiện đại nhất, giúp bạn tạo ra các layout phức tạp nhưng vẫn đảm bảo tính responsive.</p>',
    curriculum: [
      {
        title: 'Nền tảng Responsive Web Design',
        lessons: [
          'Giới thiệu về Responsive Web Design',
          'Viewport và Media Queries cơ bản',
          'Mobile-First vs Desktop-First approach',
          'Đơn vị tương đối (em, rem, vw, vh) và cách sử dụng'
        ]
      },
      {
        title: 'Layout với Flexbox và Grid',
        lessons: [
          'Flexbox toàn diện',
          'CSS Grid layout system',
          'Kết hợp Flexbox và Grid',
          'Xây dựng layout phức tạp với Flexbox và Grid'
        ]
      },
      {
        title: 'Responsive Images và Media',
        lessons: [
          'Tối ưu hóa hình ảnh cho web',
          'Art Direction với picture element',
          'Sử dụng srcset và sizes',
          'Lazy loading và tối ưu hiệu suất',
          'Video và iframe responsive'
        ]
      },
      {
        title: 'Advanced Techniques',
        lessons: [
          'Typography responsive',
          'Navigation patterns cho mobile',
          'Testing và debugging trên nhiều thiết bị',
          'Accessibility trong thiết kế responsive',
          'Dự án cuối khóa: Xây dựng website responsive hoàn chỉnh'
        ]
      }
    ]
  },
  {
    id: 1002,
    title: 'Lập Trình Game 2D với Unity',
    description: 'Học cách tạo game 2D từ cơ bản đến nâng cao với Unity Engine và C#',
    image: '/default-course.jpg',
    coverImage: '/back-1.jpg',
    instructor: 'Nguyễn Đức Minh',
    level: 'Beginner',
    rating: 4.7,
    students: 982,
    duration: 50,
    price: 'Miễn phí',
    category: 'game-dev',
    createdBy: 'Nguyễn Đức Minh',
    createdAt: '2023-10-20',
    topicName: 'Unity',
    videoCount: 45,
    totalEnrolled: 982,
    whatYouWillLearn: [
      'Làm quen với Unity Editor và C# cơ bản',
      'Thiết kế và phát triển gameplay 2D',
      'Làm việc với Sprite, Animation và Tilemaps',
      'Lập trình AI đơn giản cho game',
      'Xuất bản game lên nhiều nền tảng (PC, Mobile, Web)'
    ],
    content: '<p>Khóa học <strong>Lập Trình Game 2D với Unity</strong> giúp bạn nắm vững kỹ năng phát triển game 2D hoàn chỉnh sử dụng Unity - một trong những game engine phổ biến nhất hiện nay.</p><p>Từ việc làm quen với Unity Editor đến lập trình gameplay với C#, bạn sẽ được học từng bước để có thể tạo ra các trò chơi 2D hấp dẫn và chuyên nghiệp.</p><p>Không chỉ tập trung vào lập trình, khóa học còn cung cấp kiến thức về game design, tối ưu hóa hiệu suất và quy trình xuất bản game lên nhiều nền tảng khác nhau.</p>',
    curriculum: [
      {
        title: 'Nhập môn Unity và C#',
        lessons: [
          'Giới thiệu về Unity Engine',
          'Cài đặt và cấu hình Unity',
          'Unity Editor và giao diện',
          'C# cơ bản cho Unity',
          'GameObjects và Components'
        ]
      },
      {
        title: 'Nền tảng Game 2D',
        lessons: [
          'Sprites và Sprite Renderer',
          'Physics 2D và Colliders',
          'Input handling và Player Control',
          'Camera follow và Cinemachine',
          'Tilemaps và Level Design'
        ]
      },
      {
        title: 'Animation và Visual Effects',
        lessons: [
          'Sprite Animation',
          'Animation Controller và Transitions',
          'Particle Systems trong Unity',
          'UI cơ bản cho game',
          'Sound Effects và Music'
        ]
      },
      {
        title: 'Game Systems và AI',
        lessons: [
          'Collectibles và Scoring',
          'Health và Damage Systems',
          'Enemy AI cơ bản',
          'Pathfinding với A*',
          'Game State Management'
        ]
      },
      {
        title: 'Hoàn thiện và xuất bản Game',
        lessons: [
          'Polishing và Game Feel',
          'Tối ưu hiệu suất game',
          'Build cho PC và WebGL',
          'Build cho Mobile (Android/iOS)',
          'Dự án cuối khóa: Platformer Game 2D'
        ]
      }
    ]
  },
  {
    id: 1003,
    title: 'Machine Learning Cơ Bản Với Python',
    description: 'Tìm hiểu các thuật toán Machine Learning cơ bản và ứng dụng thực tế với Python',
    image: '/default-course.jpg',
    coverImage: '/back-1.jpg',
    instructor: 'Trần Minh Tuấn',
    level: 'Intermediate',
    rating: 4.8,
    students: 1205,
    duration: 38,
    price: 'Miễn phí',
    category: 'data',
    createdBy: 'Trần Minh Tuấn',
    createdAt: '2023-09-05',
    topicName: 'Machine Learning',
    videoCount: 32,
    totalEnrolled: 1205,
    whatYouWillLearn: [
      'Hiểu về các thuật toán Machine Learning cơ bản',
      'Sử dụng thư viện Scikit-learn cho bài toán phân loại và hồi quy',
      'Xử lý và phân tích dữ liệu với Pandas và NumPy',
      'Trực quan hóa dữ liệu với Matplotlib và Seaborn',
      'Xây dựng và đánh giá mô hình Machine Learning'
    ],
    content: '<p>Khóa học <strong>Machine Learning Cơ Bản Với Python</strong> giúp bạn tiếp cận với lĩnh vực Học Máy - một trong những công nghệ đang thay đổi cách chúng ta làm việc và sống.</p><p>Bạn sẽ được học các thuật toán Machine Learning cơ bản nhất, từ Linear Regression, Logistic Regression đến các thuật toán phức tạp hơn như Random Forest, SVM và Neural Networks.</p><p>Khóa học tập trung vào thực hành với các bài toán thực tế sử dụng Python và các thư viện phổ biến như Scikit-learn, Pandas, NumPy, giúp bạn xây dựng nền tảng vững chắc để tiếp tục phát triển trong lĩnh vực AI và Machine Learning.</p>',
    curriculum: [
      {
        title: 'Nhập môn Machine Learning',
        lessons: [
          'Machine Learning là gì và ứng dụng',
          'Các loại bài toán trong Machine Learning',
          'Môi trường phát triển với Python',
          'NumPy và Pandas cơ bản',
          'Trực quan hóa dữ liệu với Matplotlib'
        ]
      },
      {
        title: 'Thuật toán Supervised Learning',
        lessons: [
          'Linear Regression',
          'Logistic Regression',
          'K-Nearest Neighbors (KNN)',
          'Decision Trees',
          'Random Forests và Ensemble Methods'
        ]
      },
      {
        title: 'Unsupervised Learning',
        lessons: [
          'K-Means Clustering',
          'Hierarchical Clustering',
          'Principal Component Analysis (PCA)',
          'Dimensionality Reduction',
          'Anomaly Detection'
        ]
      },
      {
        title: 'Xây dựng và đánh giá mô hình',
        lessons: [
          'Train/Test split và Cross-validation',
          'Metrics đánh giá mô hình',
          'Overfitting và Underfitting',
          'Regularization',
          'Hyperparameter Tuning'
        ]
      },
      {
        title: 'Ứng dụng thực tế',
        lessons: [
          'Phân loại hình ảnh cơ bản',
          'Dự đoán giá nhà',
          'Sentiment Analysis',
          'Recommendation Systems',
          'Dự án cuối khóa: End-to-end ML project'
        ]
      }
    ]
  },
  {
    id: 1004,
    title: 'Lập Trình Mobile App với Flutter',
    description: 'Xây dựng ứng dụng di động đa nền tảng với Flutter và Dart',
    image: '/default-course.jpg',
    coverImage: '/back-1.jpg',
    instructor: 'Lê Thị Hương',
    level: 'Beginner',
    rating: 4.9,
    students: 1450,
    duration: 45,
    price: 'Miễn phí',
    category: 'mobile',
    createdBy: 'Lê Thị Hương',
    createdAt: '2023-11-25',
    topicName: 'Flutter',
    videoCount: 40,
    totalEnrolled: 1450,
    whatYouWillLearn: [
      'Cơ bản về ngôn ngữ Dart',
      'Xây dựng UI đẹp mắt với Flutter Widgets',
      'Quản lý state và navigation trong Flutter',
      'Kết nối với REST API và cơ sở dữ liệu',
      'Xuất bản ứng dụng lên App Store và Google Play'
    ],
    content: '<p>Khóa học <strong>Lập Trình Mobile App với Flutter</strong> giúp bạn làm chủ framework Flutter của Google - công cụ phát triển ứng dụng di động đa nền tảng đang được rất nhiều công ty và nhà phát triển lựa chọn hiện nay.</p><p>Với slogan "Write once, run anywhere", Flutter cho phép bạn viết một codebase duy nhất và triển khai được trên cả iOS và Android, giúp tiết kiệm thời gian và chi phí phát triển.</p><p>Từ cơ bản về ngôn ngữ Dart đến các kỹ thuật phức tạp trong Flutter, khóa học sẽ hướng dẫn bạn xây dựng nhiều ứng dụng thực tế với UI/UX đẹp mắt và hiệu năng cao.</p>',
    curriculum: [
      {
        title: 'Nhập môn Flutter và Dart',
        lessons: [
          'Giới thiệu về Flutter và lợi ích',
          'Cài đặt môi trường phát triển',
          'Cú pháp cơ bản của Dart',
          'OOP trong Dart',
          'Flutter project structure'
        ]
      },
      {
        title: 'Flutter UI Basics',
        lessons: [
          'Flutter Widget system',
          'Layout widgets (Row, Column, Stack)',
          'Material Design và Cupertino widgets',
          'Handling user input và gestures',
          'Themes và styling'
        ]
      },
      {
        title: 'Navigation và State Management',
        lessons: [
          'Navigation và routing',
          'StatefulWidget và StatelessWidget',
          'setState và local state',
          'Provider pattern',
          'Bloc pattern và các giải pháp state management khác'
        ]
      },
      {
        title: 'Data và Backend',
        lessons: [
          'HTTP requests và RESTful APIs',
          'JSON serialization',
          'Làm việc với Firebase',
          'Local storage và SQLite',
          'Authentication và authorization'
        ]
      },
      {
        title: 'Advanced Topics',
        lessons: [
          'Custom animations',
          'Testing trong Flutter',
          'Native device features',
          'Performance optimization',
          'Publishing apps to stores',
          'Dự án cuối khóa: E-commerce App'
        ]
      }
    ]
  },
  {
    id: 1005,
    title: 'DevOps Cơ Bản Với Docker và Kubernetes',
    description: 'Tìm hiểu về CI/CD, containerization và orchestration với Docker và Kubernetes',
    image: '/default-course.jpg',
    coverImage: '/back-1.jpg',
    instructor: 'Hoàng Văn Đức',
    level: 'Intermediate',
    rating: 4.8,
    students: 875,
    duration: 40,
    price: 'Miễn phí',
    category: 'devops',
    createdBy: 'Hoàng Văn Đức',
    createdAt: '2023-10-10',
    topicName: 'DevOps',
    videoCount: 35,
    totalEnrolled: 875,
    whatYouWillLearn: [
      'Hiểu về DevOps và các nguyên tắc CI/CD',
      'Containerization với Docker',
      'Orchestration với Kubernetes',
      'Xây dựng pipeline CI/CD với Jenkins hoặc GitHub Actions',
      'Monitoring và logging cho ứng dụng'
    ],
    content: '<p>Khóa học <strong>DevOps Cơ Bản Với Docker và Kubernetes</strong> giúp bạn làm quen với một trong những xu hướng quan trọng nhất trong phát triển phần mềm hiện đại - DevOps.</p><p>Bạn sẽ học cách sử dụng Docker để containerize ứng dụng, đảm bảo chúng chạy nhất quán trên mọi môi trường, và Kubernetes để điều phối và mở rộng các container một cách hiệu quả.</p><p>Ngoài ra, khóa học còn giới thiệu về các công cụ CI/CD phổ biến như Jenkins và GitHub Actions, giúp bạn tự động hóa quy trình phát triển, kiểm thử và triển khai phần mềm.</p>',
    curriculum: [
      {
        title: 'DevOps Foundation',
        lessons: [
          'DevOps là gì và tại sao cần thiết',
          'CI/CD principles và practices',
          'Infrastructure as Code',
          'Microservices vs Monolithic architecture',
          'Cloud platforms overview'
        ]
      },
      {
        title: 'Docker Fundamentals',
        lessons: [
          'Container concepts và Docker overview',
          'Dockerfile và image building',
          'Working với containers',
          'Docker Compose',
          'Docker networking và volumes',
          'Docker best practices'
        ]
      },
      {
        title: 'Kubernetes Basics',
        lessons: [
          'Kubernetes architecture',
          'Pods, Services và Deployments',
          'ConfigMaps và Secrets',
          'Persistent Volumes',
          'Helm charts',
          'Kubernetes Dashboard'
        ]
      },
      {
        title: 'CI/CD Implementation',
        lessons: [
          'Setting up Jenkins',
          'Creating pipelines',
          'GitHub Actions introduction',
          'Automated testing trong CI/CD',
          'Deployment strategies',
          'Blue/Green và Canary deployments'
        ]
      },
      {
        title: 'Monitoring và Operations',
        lessons: [
          'Monitoring với Prometheus',
          'Visualization với Grafana',
          'Logging với ELK stack',
          'Alerting và notifications',
          'Dự án cuối khóa: DevOps pipeline hoàn chỉnh'
        ]
      }
    ]
  }
];

// Mock reviews cho khóa học
export const courseReviews = [
  {
    id: 1,
    courseId: 1001,
    user: "Nguyễn Văn Cường",
    avatar: "/default-avatar.jpg",
    rating: 5,
    date: "2023-12-15",
    comment: "Khóa học rất chi tiết và dễ hiểu. Tôi đã học được rất nhiều về responsive design mà trước đây chưa biết. Giảng viên giải thích rõ ràng và có nhiều ví dụ thực tế."
  },
  {
    id: 2,
    courseId: 1001,
    user: "Trần Thị Lan",
    avatar: "/default-avatar.jpg",
    rating: 4,
    date: "2023-11-28",
    comment: "Nội dung khóa học rất tốt, giúp tôi hiểu sâu hơn về Flexbox và Grid. Tuy nhiên, tôi mong muốn có thêm bài tập thực hành."
  },
  {
    id: 3,
    courseId: 1001,
    user: "Lê Minh Đức",
    avatar: "/default-avatar.jpg", 
    rating: 5,
    date: "2023-12-05",
    comment: "Tuyệt vời! Sau khi học xong khóa này, tôi đã có thể redesign website công ty theo responsive design và được sếp khen ngợi."
  },
  {
    id: 4,
    courseId: 1002,
    user: "Phạm Hoài Nam",
    avatar: "/default-avatar.jpg",
    rating: 5,
    date: "2023-11-20",
    comment: "Khóa học Unity này rất phù hợp cho người mới bắt đầu như tôi. Các bài giảng được thiết kế logic và dễ theo dõi."
  },
  {
    id: 5, 
    courseId: 1002,
    user: "Vũ Thị Hồng",
    avatar: "/default-avatar.jpg",
    rating: 4,
    date: "2023-12-10",
    comment: "Tôi đã học được nhiều kỹ thuật animation trong Unity mà trước đây không biết. Tuy nhiên, phần AI hơi khó hiểu, cần bổ sung thêm ví dụ."
  }
];

// Học viên đăng ký khóa học
export const courseEnrollments = [
  {
    userId: 101,
    courseId: 1001,
    enrollmentDate: "2023-12-01",
    progress: 65, // phần trăm hoàn thành
    lastAccessedLesson: 15,
    certificateIssued: false
  },
  {
    userId: 102,
    courseId: 1001,
    enrollmentDate: "2023-11-15",
    progress: 100,
    lastAccessedLesson: 36,
    certificateIssued: true
  },
  {
    userId: 103,
    courseId: 1002,
    enrollmentDate: "2023-11-20",
    progress: 45,
    lastAccessedLesson: 12,
    certificateIssued: false
  }
]; 