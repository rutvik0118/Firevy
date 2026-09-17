import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const TechStackProficientGrid = ({
  title = "Technology Stack That Firevy.co Dedicated Developers Use Proficiently",
  rows
}) => {
  const defaultStackRows = [
    {
      category: "Languages",
      pills: [
        "Java",
        "C#",
        "C/C++",
        "Objective C",
        "Groovy",
        "Swift",
        "Python",
        "PHP",
        "Rust",
        "Scala"
      ]
    },
    {
      category: "Frameworks",
      pills: [
        "JDBC / JPA",
        "JMS",
        "Hibernate",
        ".NET",
        "EJB",
        "Apache Camel",
        "Nodejs",
        "Firebase",
        "LDAP / Active Directory",
        "Reactive (Akka, RxJava, Reactor)"
      ]
    },
    {
      category: "Mobile",
      pills: [
        "iOS",
        "Android",
        "HTML5",
        "React",
        "Xamarin",
        "JavaScript"
      ]
    },
    {
      category: "Web",
      pills: [
        "Vue",
        "Sass",
        "Coffee",
        "Angular",
        "WebGL"
      ]
    },
    {
      category: "Database Management",
      pills: [
        "NoSQL",
        "MySQL",
        "Oracle SQL",
        "PostgreSQL",
        "Microsoft SQL"
      ]
    },
    {
      category: "Cloud",
      pills: [
        "Amazon Web Services (AWS)",
        "Google Cloud",
        "Oracle Cloud",
        "IBM Cloud",
        "Microsoft Azure"
      ]
    }
  ];

  const stackRows = rows || defaultStackRows;

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200">
      <Container className="max-w-7xl">
        {/* Centered Heading Matching Screenshot 1 */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* Stack Rows Container - max-w-6xl ensures all 10 language pills fit on 1 line */}
        <div className="max-w-6xl mx-auto space-y-4 mb-12">
          {stackRows.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-stretch rounded-xl overflow-hidden border border-slate-200/80 bg-[#EEF4F8] shadow-2xs"
            >
              {/* Left Blue Header Box */}
              <div className="w-full sm:w-48 lg:w-52 shrink-0 bg-[#006095] text-white p-4 sm:p-5 flex items-center justify-center font-bold text-sm sm:text-base text-center tracking-wide">
                {row.category}
              </div>

              {/* Right Pills Area */}
              <div className="flex-1 p-3.5 sm:p-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {(row.pills || (Array.isArray(row.technologies) ? row.technologies.map(t => (typeof t === 'string' ? t : t?.name || '')) : [])).map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="bg-white text-slate-800 font-semibold text-xs sm:text-[13px] px-3.5 sm:px-4 py-1.5 rounded-md shadow-2xs border border-slate-200/60 hover:text-[#006095] hover:border-[#006095]/40 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <a
            href="#quote-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('quote-form');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
            className="inline-block bg-[#006095] hover:bg-[#004B77] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-md transition-all hover:scale-105"
          >
            Share Your Requirement
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TechStackProficientGrid;

