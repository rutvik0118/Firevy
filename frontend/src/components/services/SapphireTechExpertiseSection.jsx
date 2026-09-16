import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const SapphireTechExpertiseSection = ({
  title = "The Exceptional Technological Expertise of Sapphire Web Development Team"
}) => {
  const expertiseRows = [
    {
      category: 'Frontend',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Angular',
        'React',
        'Vue.js',
        'Bootstrap',
        'Typescript',
        'Backbone.js'
      ]
    },
    {
      category: 'Full-stack Frameworks',
      skills: ['NestJS', 'Koa.js', 'Nuxt.js', 'MeteorJS', 'Next.js']
    },
    {
      category: 'Backend Frameworks',
      skills: [
        'Node.js',
        'Express.js',
        'PHP',
        'Laravel',
        'Python',
        'Django',
        'Flask',
        'FastAPI'
      ]
    },
    {
      category: 'Database Management',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'GraphQL']
    },
    {
      category: 'Monitoring and Logging Tools',
      skills: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana']
    },
    {
      category: 'Code Management',
      skills: ['Bitbucket', 'GitHub', 'GitLab', 'SonarQube', 'maven', 'Gradle']
    },
    {
      category: 'CI/CD',
      skills: [
        'Jenkins',
        'CircleCI',
        'GitLab CI',
        'CHEF',
        'ANSIBLE',
        'Puppet',
        'Terraform'
      ]
    },
    {
      category: 'Microservices architecture',
      skills: ['Docker', 'Kubernetes', 'Amazon ECS', 'Apache Kafka']
    },
    {
      category: 'Cloud',
      skills: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform (GCP)'
      ]
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white font-sans text-left border-b border-slate-100 select-none">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        {/* Vertical Expertise Rows List */}
        <div className="max-w-5xl mx-auto space-y-3 sm:space-y-3.5">
          {expertiseRows.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-stretch overflow-hidden rounded-[10px] sm:rounded-[12px] shadow-2xs border border-[#CCE8F7]"
            >
              {/* Left Dark Blue Category Label Box */}
              <div className="bg-[#005F96] text-white font-[700] text-xs sm:text-[13.5px] px-4 sm:px-5 py-3 sm:py-3.5 flex items-center shrink-0 w-full sm:w-[220px] md:w-[240px] tracking-tight">
                <span>{row.category}</span>
              </div>

              {/* Right Light Blue Container with White Pills */}
              <div className="bg-[#E5F3FC] p-2 sm:p-2.5 flex-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {row.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-white text-[#1E293B] font-[600] text-xs sm:text-[12.5px] px-3 sm:px-3.5 py-1.5 rounded-[6px] shadow-2xs border border-white/80 hover:text-[#005F96] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered CTA Button */}
        <div className="mt-8 sm:mt-12 flex justify-center items-center">
          <Link
            to="/contact"
            className="bg-[#005F96] hover:bg-[#004D7A] text-white font-[700] text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-[6px] shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Share Your Requirement</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SapphireTechExpertiseSection;
