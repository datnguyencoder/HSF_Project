import { useEffect } from 'react';
import HeroBanner from './HeroBanner';
import FeaturedCourses from './FeaturedCourses';
import TechTrends from './TechTrends';
import LanguagePathways from './LanguagePathways';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    document.title = "CodeMaster - Nền tảng học lập trình chất lượng cao";
  }, []);

  return (
    <div className="home-page">
      <HeroBanner />
      <FeaturedCourses />
      <TechTrends />
      <LanguagePathways />
    </div>
  );
};

export default HomePage; 