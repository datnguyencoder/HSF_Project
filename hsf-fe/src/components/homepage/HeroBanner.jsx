import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroBanner.css';
// Import ảnh nền
import backgroundImage from '/back-1.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const HeroBanner = () => {
  // Sử dụng hook useInView để biết khi nào phần tử hiển thị trong viewport
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Tạo object style với ảnh nền
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) no-repeat center center/cover`
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="hero-banner" style={heroStyle}>
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>Học Lập Trình Cùng Chuyên Gia</motion.h1>
        <motion.p variants={itemVariants}>Trở thành lập trình viên chuyên nghiệp với lộ trình học tập cá nhân hóa</motion.p>
        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" className="button-wrapper">
            <Link to="/courses" className="cta-button">Khám Phá Khóa Học</Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" className="button-wrapper">
            <Link to="/register" className="secondary-button">Đăng Ký Ngay</Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-stats"
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          ref={statsRef}
        >
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              {statsInView ? (
                <CountUp 
                  start={0} 
                  end={500}
                  duration={2.5}
                  suffix="+" 
                />
              ) : "500+"}
            </span>
            <span className="stat-text">Khóa học</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              {statsInView ? (
                <CountUp 
                  start={0} 
                  end={50}
                  duration={2.5}
                  suffix="+" 
                />
              ) : "50+"}
            </span>
            <span className="stat-text">Giảng viên</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              {statsInView ? (
                <CountUp 
                  start={0} 
                  end={10}
                  duration={2.5}
                  suffix="k+" 
                />
              ) : "10k+"}
            </span>
            <span className="stat-text">Học viên</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner; 