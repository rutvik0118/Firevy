import Service from '../models/Service.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse } from '../utils/apiResponse.js';
import { initialServices } from '../utils/initialData.js';

export const getServices = asyncHandler(async (req, res) => {
  let services = await Service.find({ isActive: true }).sort({ createdAt: 1 });
  
  if (!services || services.length === 0) {
    services = initialServices;
  }
  
  return successResponse(res, 'Services fetched successfully', services);
});

export const getServiceBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const normalizedSlug = slug.toLowerCase();
  
  // 1. Try DB lookup first
  let service = await Service.findOne({ slug: normalizedSlug, isActive: true });
  
  // 2. Try initial data lookup
  if (!service) {
    service = initialServices.find(s => s.slug === normalizedSlug);
  }
  
  // 3. Fallback: Dynamically generate rich Service detail object for ANY unknown subpage slug
  if (!service) {
    const formattedTitle = normalizedSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    service = {
      title: formattedTitle,
      slug: normalizedSlug,
      shortDescription: `Enterprise-grade ${formattedTitle} services engineered for speed, security, and effortless scalability.`,
      description: `We architect and deliver bespoke ${formattedTitle} solutions built with modern technology stacks. Our engineering team designs custom workflows tailored to your specific enterprise requirements.`,
      icon: "Code2",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Tailwind CSS"],
      features: [
        "Enterprise SOC2 & Security Compliance",
        "Sub-second Page & API Performance",
        "High-Availability Cloud Architecture",
        "Automated CI/CD Deployment Pipelines",
        "24/7 SLA Technical Monitoring & Support"
      ],
      benefits: [
        "Accelerate time-to-market by up to 50%",
        "Reduce operational cloud costs with modern microservices",
        "Dedicated senior engineering team with same timezone alignment"
      ],
      process: [
        { step: 1, title: "Discovery & Blueprinting", description: "Define system blueprints, data flows, and tech stack specification." },
        { step: 2, title: "Sprint Engineering", description: "Develop clean modular UI components and resilient backend microservices." },
        { step: 3, title: "QA & Performance Testing", description: "Automated end-to-end testing, load stress testing, and security auditing." },
        { step: 4, title: "Production Deployment", description: "Zero-downtime deployment with continuous monitoring and SLAs." }
      ],
      faq: [
        { question: `What technologies do you use for ${formattedTitle}?`, answer: `We leverage industry-standard technologies such as React, Node.js, Python, AWS, and Docker customized specifically for ${formattedTitle}.` },
        { question: `What is the delivery timeline for ${formattedTitle}?`, answer: `Timelines range from 4 to 12 weeks depending on scope, delivered via 2-week agile sprint iterations.` }
      ],
      isActive: true
    };
  }
  
  return successResponse(res, 'Service details fetched successfully', service);
});
