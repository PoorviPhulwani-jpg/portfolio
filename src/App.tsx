import React, { useState } from 'react';
import profileImage from '/pphulwan.jpg' // Ensure this path is correct
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ArrowRight, 
  BarChart2,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Users
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState("about");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-green-50 text-stone-800">
      {/* Side navigation - responsive design */}
      <nav className="bg-green-900 text-white p-4 sm:p-6 lg:fixed lg:h-screen lg:w-80 lg:overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Profile Photo - Responsive sizing */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-green-700 shadow-lg">
              <img 
                src={profileImage}
                alt="Poorvi Phulwani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-6 sm:mb-8 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Poorvi Phulwani</h1>
            <p className="text-green-200 mt-1 text-sm sm:text-base">Business Analytics Professional</p>
          </div>

          {/* Navigation - horizontal on mobile, vertical on desktop */}
          <ul className="flex flex-wrap justify-center lg:flex-col lg:space-y-4 lg:flex-grow gap-2 lg:gap-0 mb-6 lg:mb-0">
            {[
              { id: 'about', label: 'About', icon: <Users size={18} /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
              { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
              { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
              { id: 'skills', label: 'Skills', icon: <BarChart2 size={18} /> },
              { id: 'leadership', label: 'Leadership', icon: <Award size={18} /> }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center text-left px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm lg:w-full ${
                    activeSection === item.id ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-800/50'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="mr-2 lg:mr-3 hidden sm:inline">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact info - better spacing and responsive layout */}
          <div className="lg:mt-8 pt-4 lg:pt-6 border-t border-green-700/50">
            <div className="flex flex-col space-y-3">
              <a href="mailto:pphulwan@tepper.cmu.edu" className="flex items-center justify-center lg:justify-start text-green-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">pphulwan@tepper.cmu.edu</span>
              </a>
              <a href="tel:+14127260723" className="flex items-center justify-center lg:justify-start text-green-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (412) 726-0723</span>
              </a>
              <div className="flex items-center justify-center lg:justify-start text-green-100">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Pittsburgh, PA</span>
              </div>
              
              {/* Social links - better spacing and centering */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                <a 
                  href="https://linkedin.com/in/poorviphulwani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-green-100 hover:text-white transition-colors p-2 hover:bg-green-800/30 rounded-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/poorviphulwani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-green-100 hover:text-white transition-colors p-2 hover:bg-green-800/30 rounded-lg"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area - responsive margins */}
      <main className="flex-1 p-4 sm:p-6 lg:p-12 lg:ml-80">
        {/* About Section */}
        <section 
          id="about"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="relative">
            <span className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 text-4xl sm:text-6xl text-green-800/10 font-bold">"</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-green-900">About Me</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-stone-700">
              Business analytics professional with expertise in data analysis, financial modeling, and business consulting. 
              Currently pursuing a Master's in Business Analytics at Carnegie Mellon University's Tepper School of Business, 
              with professional experience at Ernst & Young and other leading firms.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-stone-700">
              I specialize in translating complex data into actionable business insights and developing 
              strategic solutions to drive measurable business outcomes.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-900 flex items-center">
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-green-700" />
            Experience
          </h2>

          <div className="space-y-8 sm:space-y-12">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-green-200">
              <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-green-700 rounded-full -left-[7px] sm:-left-[9px] top-0"></span>
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">Jun 2023 - Jul 2024</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800">Business Analyst</h3>
              <p className="text-sm sm:text-base text-stone-600 font-medium mb-3">Ernst & Young LLP, Business Consulting & Performance Improvement</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Optimized cost efficiency across 24 zip codes, improving operational processes by 40% through labor allocation and route planning</li>
                <li>Achieved 25% budget optimization in disaster management by refining financial forecasting models and leveraging predictive analytics</li>
                <li>Formulated a market entry strategy driving 20% market penetration growth using SQL for profitability segmentation</li>
                <li>Streamlined loan disbursement operations, driving a 30% increase in vendor income through strategic dashboard solutions</li>
              </ul>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-green-200">
              <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-green-700 rounded-full -left-[7px] sm:-left-[9px] top-0"></span>
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">Dec 2021 - Nov 2022</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800">Performance Insights Intern</h3>
              <p className="text-sm sm:text-base text-stone-600 font-medium mb-3">CultureX Entertainment Pvt. Ltd., Marketing Intelligence Team</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Boosted social media ad conversion and engagement by 18% for Sunstone, L'Oréal, and Kia Motors using Google Analytics</li>
                <li>Led onboarding of 200+ influencers, increasing Instagram engagement by 27% through content performance analysis</li>
              </ul>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-green-200">
              <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-green-700 rounded-full -left-[7px] sm:-left-[9px] top-0"></span>
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">May 2021 - Jul 2021</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800">Database Management Intern</h3>
              <p className="text-sm sm:text-base text-stone-600 font-medium mb-3">Tata Ex-Employee Service Ltd., Market Research and Strategy Team</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Identified revenue gaps in the FinTech sector and proposed data-backed strategic recommendations through quantitative research</li>
                <li>Executed competitive benchmarking to refine go-to-market strategies using SQL-driven market analysis and regression modeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="education"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-900 flex items-center">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-green-700" />
            Education
          </h2>

          <div className="space-y-6 sm:space-y-10">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">Carnegie Mellon University</h3>
                <span className="text-sm sm:text-base text-green-700 font-medium mt-1 sm:mt-0">Aug 2024 - May 2025</span>
              </div>
              <p className="text-sm sm:text-base text-stone-700 mb-2">
                <span className="font-medium">Master of Science in Business Analytics (STEM)</span> • GPA: 3.84/4.0
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                <span className="italic">Relevant Coursework:</span> Data Visualization, Data Analytics in Finance, Modern Data Management, Probability & Statistics
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">Mumbai University, Jai Hind College</h3>
                <span className="text-sm sm:text-base text-green-700 font-medium mt-1 sm:mt-0">June 2020 - May 2023</span>
              </div>
              <p className="text-sm sm:text-base text-stone-700 mb-2">
                <span className="font-medium">Bachelor of Management Studies, Major: Finance</span> • GPA: 4.0/4.0
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                <span className="italic">Relevant Coursework:</span> Business Mathematics, Investment Analysis & Portfolio Management, Risk & Wealth Management
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-900 flex items-center">
            <Code className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-green-700" />
            Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">A.P. Moller – Maersk Transport Management System</h3>
                <a 
                  href="https://github.com/PoorviPhulwani-jpg/A.P.Moller-Maersk-Transport-Management-System-for-Planning-and-Optimization" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium self-start"
                  aria-label="View Maersk Transport Management project on GitHub"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
              </div>
              <p className="text-green-700 text-xs sm:text-sm font-medium mb-3">Gurobi, Operations Research, Supply Chain Optimization</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Designed an allocation model in Gurobi to route 7,000+ container shipments across fixed & 3PL fleets</li>
                <li>Secured a 46% modeled cost reduction and increased fixed fleet utilization from 10% to 22%</li>
                <li>Integrated lane-level demand, asset capacity, and shipment-type constraints for cost forecasting and planning optimization</li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">LendingClub Portfolio Design & Return Strategy</h3>
                <a 
                  href="https://github.com/PoorviPhulwani-jpg/LendingClub-Investment-Strategy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium self-start"
                  aria-label="View LendingClub Investment Strategy project on GitHub"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
              </div>
              <p className="text-green-700 text-xs sm:text-sm font-medium mb-3">Ridge Regression, K-Means Clustering, Portfolio Optimization</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Built a peer-to-peer lending portfolio framework by clustering 7 borrower segments based on financial attributes</li>
                <li>Applied Ridge regression and Sharpe ratio–based allocation to construct a 100-loan portfolio with 4.42% expected return</li>
                <li>Outperformed all benchmark models through risk-based predicted return variability analysis</li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">Bond Price Determinants & Predictive Modeling</h3>
                <a 
                  href="https://github.com/PoorviPhulwani-jpg/Bond-Price-Determinants" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium self-start"
                  aria-label="View Bond Price Modeling project on GitHub"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
              </div>
              <p className="text-green-700 text-xs sm:text-sm font-medium mb-3">OLS Regression, Feature Selection, Python</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Investigated 70+ bond attributes to model bid price behavior using OLS regression analysis</li>
                <li>Implemented AIC- and PRESS-based feature selection narrowing predictors to 25 and achieving R² of 0.980</li>
                <li>Highlighted curve-based pricing and prior trades as primary return indicators through valuation driver analysis</li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">Factor Timing Strategies Using Machine Learning</h3>
                <a 
                  href="https://github.com/PoorviPhulwani-jpg/FactorTimingStrategies-Finance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium self-start"
                  aria-label="View Factor Timing Strategies project on GitHub"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
              </div>
              <p className="text-green-700 text-xs sm:text-sm font-medium mb-3">Machine Learning, Quantitative Finance, Python</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Explored factor timing strategies using macroeconomic indicators and machine learning models</li>
                <li>Conducted performance evaluation through Sharpe ratios, drawdowns, and trading cost sensitivity analysis</li>
                <li>Developed quantitative finance framework for systematic investment strategy implementation</li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800">Netflix Visual Insights Dashboard</h3>
                <a 
                  href="https://github.com/PoorviPhulwani-jpg/NetflixVisualInsights-Dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium self-start"
                  aria-label="View Netflix Visual Insights project on GitHub"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
              </div>
              <p className="text-green-700 text-xs sm:text-sm font-medium mb-3">Tableau, Data Visualization, Media Analytics</p>
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 text-sm sm:text-base text-stone-700">
                <li>Analyzed global Netflix content trends using Tableau and the official Netflix titles dataset</li>
                <li>Created interactive dashboard uncovering genre distribution and country-wise production trends</li>
                <li>Provided meaningful insights for media strategy and viewer segmentation through content release pattern analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-900 flex items-center">
            <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-green-700" />
            Skills & Capabilities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-green-700 border-b border-green-100 pb-2">Technical Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Excel (VLOOKUP, PivotTables)", "PowerPoint", "SQL", "Tableau", "Power BI", "Python", "MS Office Suite"].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-green-700 border-b border-green-100 pb-2">Analytical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Financial Analysis", "Market Research", "Business Case Modeling", "Data Interpretation", "KPI Tracking"].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 lg:col-span-2">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-green-700 border-b border-green-100 pb-2">Business Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Client Presentations", "Stakeholder Communication", "Competitive Benchmarking"].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section 
          id="leadership"
          className="max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-900 flex items-center">
            <Award className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-green-700" />
            Leadership & Organizations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Student Ambassador, Tepper School of Business (2024-25)",
              "Grace Hopper Scholar (2024)",
              "Dean's Merit List",
              "Head of Creatives, Talaash – Management Festival of Jai Hind College",
              "Head of Outreach, Entrepreneurship Cell and Skill Hub",
              "Head of Operations, Project Ekta – Enactus, India"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow flex items-center"
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-700 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-stone-500 mt-12 sm:mt-16 pb-6 sm:pb-8">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Poorvi Phulwani. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;