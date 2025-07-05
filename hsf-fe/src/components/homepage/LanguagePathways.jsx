import { useState } from 'react';
import { motion } from 'framer-motion';
import './LanguagePathways.css';

const LanguagePathways = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const pathways = {
    javascript: {
      title: 'JavaScript',
      icon: '🟨',
      description: 'Ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng để xây dựng các ứng dụng web động.',
      levels: [
        {
          level: 'Cơ bản',
          skills: ['Cú pháp cơ bản', 'Biến và kiểu dữ liệu', 'Hàm', 'Mảng và đối tượng', 'DOM cơ bản']
        },
        {
          level: 'Trung cấp',
          skills: ['ES6+', 'Promises & Async/Await', 'Fetch API', 'Modules', 'Local Storage']
        },
        {
          level: 'Nâng cao',
          skills: ['Design Patterns', 'Performance Optimization', 'Testing', 'Security', 'Progressive Web Apps']
        }
      ],
      tools: ['VS Code', 'Chrome DevTools', 'ESLint', 'npm', 'Webpack'],
      frameworks: ['React', 'Vue', 'Angular', 'Node.js', 'Express']
    },
    python: {
      title: 'Python',
      icon: '🐍',
      description: 'Ngôn ngữ lập trình đa năng, dễ học với cú pháp rõ ràng, được sử dụng rộng rãi trong AI và data science.',
      levels: [
        {
          level: 'Cơ bản',
          skills: ['Cú pháp cơ bản', 'Biến và kiểu dữ liệu', 'Hàm', 'Lists và Dictionaries', 'File I/O']
        },
        {
          level: 'Trung cấp',
          skills: ['OOP', 'Modules', 'Error Handling', 'Virtual Environments', 'APIs']
        },
        {
          level: 'Nâng cao',
          skills: ['Data Analysis', 'Machine Learning', 'Web Scraping', 'Concurrency', 'Testing']
        }
      ],
      tools: ['PyCharm', 'Jupyter Notebook', 'pip', 'Anaconda', 'Git'],
      frameworks: ['Django', 'Flask', 'Pandas', 'NumPy', 'TensorFlow']
    },
    java: {
      title: 'Java',
      icon: '☕',
      description: 'Ngôn ngữ lập trình hướng đối tượng mạnh mẽ, được sử dụng rộng rãi trong phát triển enterprise và Android.',
      levels: [
        {
          level: 'Cơ bản',
          skills: ['Cú pháp cơ bản', 'OOP', 'Collections', 'Exception Handling', 'File I/O']
        },
        {
          level: 'Trung cấp',
          skills: ['Multithreading', 'JDBC', 'Generics', 'Lambda Expressions', 'Stream API']
        },
        {
          level: 'Nâng cao',
          skills: ['Design Patterns', 'JVM Internals', 'Memory Management', 'Testing', 'Microservices']
        }
      ],
      tools: ['IntelliJ IDEA', 'Eclipse', 'Maven', 'Gradle', 'JUnit'],
      frameworks: ['Spring', 'Hibernate', 'JavaFX', 'Apache Struts', 'Play']
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tabVariants = {
    inactive: { 
      color: 'var(--text-secondary)',
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    active: { 
      color: 'var(--primary-color)',
      borderColor: 'var(--primary-color)',
      backgroundColor: 'rgba(var(--primary-color-rgb), 0.05)'
    },
    hover: {
      backgroundColor: 'rgba(var(--primary-color-rgb), 0.05)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="language-pathways" data-aos="fade-up">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Lộ Trình Học Lập Trình</h2>
          <p className="section-description">
            Khám phá lộ trình học các ngôn ngữ lập trình phổ biến từ cơ bản đến nâng cao
          </p>
        </div>

        <div className="pathway-tabs" data-aos="fade-up" data-aos-delay="200">
          {Object.keys(pathways).map(key => (
            <motion.button
              key={key}
              className={`pathway-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTabChange(key)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === key ? "active" : "inactive"}
              whileHover="hover"
            >
              <span className="tab-icon">{pathways[key].icon}</span>
              <span className="tab-text">{pathways[key].title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="pathway-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="pathway-header">
            <div className="header-icon">{pathways[activeTab].icon}</div>
            <h3>{pathways[activeTab].title}</h3>
            <p>{pathways[activeTab].description}</p>
          </div>

          <motion.div 
            className="pathway-levels"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {pathways[activeTab].levels.map((level, index) => (
              <motion.div 
                className="level-card" 
                key={index}
                variants={itemVariants}
              >
                <h4 className="level-title">{level.level}</h4>
                <ul className="level-skills">
                  {level.skills.map((skill, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div className="pathway-tools-frameworks">
            <motion.div 
              className="tools-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h4>Công cụ phát triển</h4>
              <div className="tools-list">
                {pathways[activeTab].tools.map((tool, index) => (
                  <motion.span 
                    className="tool-tag" 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="frameworks-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h4>Frameworks & Libraries</h4>
              <div className="frameworks-list">
                {pathways[activeTab].frameworks.map((framework, index) => (
                  <motion.span 
                    className="framework-tag" 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {framework}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagePathways; 