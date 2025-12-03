export type Experience = {
  id: string;
  title: string;
  role?: string;
  company?: string;
  customSubtitle?: string;
  period: string;
  detailedDescription: string;
  keyAccomplishments: Record<string, string[]>;
  color: string;
  solved: boolean;
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    id: 'intro',
    title: 'Who Am I?',
    customSubtitle: 'A curious engineer',
    period: 'Unscramble the cube to reveal my work',
    detailedDescription: "Great engineering was never about just getting the job done. It's about understanding the whys, whens, whats, hows and whos. I focus on asking the right questions first.",
    keyAccomplishments: {
      "Highlights": [
        "Have over 4.5 years of professional experience building scalable, maintainable and functional systems.",
        "Built production systems with <150ms latency requirements",
        "Mentored a few junior engineers and conducted a few technical interviews"
      ]
    },
    color: '#ffffff',
    solved: false,
    tech: ['React', 'Three.js', 'TypeScript', '20$ worth of Coffee']
  },
  {
    id: 'exp1',
    title: 'SDE I',
    role: 'Software Development Engineer I',
    company: 'Amazon',
    period: '2020 - 2022',
    detailedDescription: "At Amazon, I started my journey by tackling infrastructure-level challenges. I designed the core Pickup Locations retrieval system that forms the backbone of Amazon's pickup services globally. This API had to handle massive scale (200+ requests per second) while maintaining strict latency constraints (<150ms). I also led the initiative to centralize fragmented partner configurations across multiple teams, which involved navigating complex organizational dynamics and technical constraints.",
    keyAccomplishments: {
      "Highlights": [
        "Designed high-throughput Pickup Locations API (200+ TPS, <150ms latency)",
        "Reduced partner onboarding effort from 4 days to minutes via config centralization",
        "Implemented critical operational excellence practices for service reliability",
        "Collaborated across 5+ Amazon teams to align on architecture and requirements"
      ]
    },
    color: '#00A8E1',
    solved: true,
    tech: ['Java', 'Dozens of core AWS services', 'API Design', 'Event Driven Systems', 'Scale/Load Management']
  },
  {
    id: 'exp2',
    title: 'SDE II',
    role: 'Software Development Engineer II',
    company: 'Amazon',
    period: '2022 - 2024',
    detailedDescription: "Promoted to SDE II, I took ownership of high-visibility projects that directly impacted Amazon's customer experience and revenue. The Collection Tab was a complex initiative involving frontend, backend, and event-driven systems. It required careful coordination with Principal Engineers and multiple product teams. I also owned the DHL validation project, which was a critical fix for Amazon Germany—working with external partners and aligning their requirements with Amazon's infrastructure.",
    keyAccomplishments: {
      "Highlights": [
        "Shipped Collection Tab feature used 40K+ times daily on Amazon Product Page",
        "Drove 10% pickup order uplift (~10K additional orders per day)",
        "Collaborated with DHL to implement validation preventing 5K+ daily delivery failures",
        "Owned end-to-end feature development: frontend, backend, data systems, and operations"
      ]
    },
    color: '#FF9900',
    solved: true,
    tech: ['Java', 'AWS CDK', 'System Design', 'Microservices', 'React']
  },
  {
    id: 'exp3',
    title: '"Internship"',
    role: 'Full Stack Engineer',
    company: 'Pavepal.ai',
    period: 'Apr 2025 - Aug 2025',
    detailedDescription: "At Pavepal, I worked as a full-stack engineer—wearing all hats from DevOps to frontend development. What started as an HTML+JS POC hosted became a production-ready SaaS platform serving live clients across the globe. ",
    keyAccomplishments: {
      "Highlights": [
        "Architected end-to-end cloud infrastructure using AWS CDK",
        "Built 4+ REST APIs for road quality and defect data processing",
        "Implemented secure OAuth authentication with JWT refresh logic",
        "Designed and built interactive map-based UI for defect visualization",
        "Established full CI/CD pipeline, scripts for dev/beta/prod environments and the release process"
      ]
    },
    color: '#00C853',
    solved: true,
    tech: ['Next.js', 'Agile (actually used as intended)', 'MongoDB', 'Auth flows and Frameworks (OAuth)', 'Good bunch of AWS services']
  },
  {
    id: 'wip',
    title: 'Work In Progress',
    customSubtitle: 'Tech is a space that never ends, a cube that is never fully solved.',
    period: '2025+',
    detailedDescription: "Personally, I build tech to solve problems - for myself and for the communities around me. Professionally, I'm always looking for new opportunities and new domains to work in.",
    keyAccomplishments: {
      "What's Cooking?": [
        "An Introspective Journaling App that uses AI and some clever data analysis to provide insights and better self-reflection.",
        "An AI lawyer assistant that helps local sports organization and it's players with governance and grievances [WIP]",
        "A financial trading platform used by me and my friends to paper-trade and play around with trading algorithms as a foray into fintech [WIP]"
      ]
    },
    color: '#E91E63',
    solved: false,
    tech: ['Loads of Curiosity', 'Decent amount of AI', 'INF amounts of Coffee']
  }
];
