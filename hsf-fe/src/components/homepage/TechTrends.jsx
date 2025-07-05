import { useEffect } from 'react';
import './TechTrends.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const TechTrends = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const trends = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      description: 'Những cơ hội và thách thức trong ngành trí tuệ nhân tạo, machine learning và deep learning.',
      icon: '🧠',
      stats: {
        growth: 35,
        jobs: 150000,
        salary: 120
      }
    },
    {
      id: 2,
      title: 'Blockchain Development',
      description: 'Khám phá công nghệ chuỗi khối, smart contracts và phát triển dApps trên các nền tảng blockchain.',
      icon: '⛓️',
      stats: {
        growth: 23,
        jobs: 80000,
        salary: 110
      }
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Nắm vững các kỹ năng về AWS, Azure, Google Cloud và kiến trúc microservices trong cloud.',
      icon: '☁️',
      stats: {
        growth: 28,
        jobs: 180000,
        salary: 105
      }
    }
  ];

  const statistics = [
    {
      value: 4.5,
      suffix: "M+",
      label: "Lập trình viên trên toàn cầu",
      decimals: 1
    },
    {
      value: 26.2,
      suffix: "%",
      label: "Tăng trưởng ngành IT tại Việt Nam",
      decimals: 1
    },
    {
      value: 150,
      suffix: "K+",
      label: "Vị trí tuyển dụng mỗi năm",
      decimals: 0
    },
    {
      value: 95,
      prefix: "$",
      suffix: "K",
      label: "Mức lương trung bình",
      decimals: 0
    }
  ];

  return (
    <section className="section tech-trends">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Xu Hướng Công Nghệ</h2>
          <p className="section-description">
            Cập nhật các xu hướng công nghệ mới nhất trong ngành lập trình và phát triển phần mềm
          </p>
        </div>

        <div className="trends-container" data-aos="fade-up" data-aos-delay="200">
          {trends.map((trend, index) => (
            <div 
              className="trend-card" 
              key={trend.id}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="trend-icon">{trend.icon}</div>
              <h3 className="trend-title">{trend.title}</h3>
              <p className="trend-description">{trend.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="stats-container" 
          ref={statsRef}
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="stats-title">
            <h3>Thống Kê Ngành IT</h3>
            <p>Dữ liệu được cập nhật từ các báo cáo ngành năm 2023</p>
          </div>

          <div className="stats-grid">
            {statistics.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-value">
                  <CountUp 
                    start={0} 
                    end={statsInView ? stat.value : 0} 
                    duration={2.5} 
                    decimals={stat.decimals} 
                    prefix={stat.prefix || ''} 
                    suffix={stat.suffix || ''} 
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTrends; 