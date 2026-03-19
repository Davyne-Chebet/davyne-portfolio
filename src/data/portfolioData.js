// src/data/portfolioData.js
// All content sourced from Davyne Faith Chebet's CV

export const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#graphic',    label: 'Graphic'    },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact'    },
];

export const SKILLS = [
  {
    icon: '🖌', label: 'UI/UX & Product', bar: 'bar-coral',
    chips: [
      'Wireframing','User Flows','Interactive Prototyping',
      'Usability Testing','UX Research','Design Systems',
      'Responsive Design','Accessibility',
    ],
  },
  {
    icon: '✍', label: 'Visual & Brand', bar: 'bar-amber',
    chips: [
      'Typography','Layout Design','Branding','Color Theory',
      'Marketing Design','Digital Publishing','Poster Design','Social Graphics',
    ],
  },
  {
    icon: '⌨', label: 'Frontend Dev', bar: 'bar-teal',
    chips: [
      'React.js','JavaScript','HTML5','CSS3',
      'Responsive UI','Git','Component Libraries','REST APIs',
    ],
  },
  {
    icon: '🛠', label: 'Tools', bar: 'bar-green',
    chips: [
      'Figma','Adobe XD','Adobe Illustrator',
      'Adobe Photoshop','Canva Pro','VS Code','Miro','Notion',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'spaq',
    num: '01',
    type: 'Mobile App · UX',
    title: 'SPAQ',
    titleItalic: 'Smart Parking',
    visual: 'pv-spaq',
    bgWord: 'SPAQ',
    badge: 'Mobile App — UX',
    numColor: 'rgba(77,180,255,.55)',
    role: 'UX Research · User Flows · Interactive Prototype',
    desc: 'Designed wireframes and an interactive Figma prototype for a mobile parking assistance app. Conducted UX research and usability testing to refine navigation and reduce friction — from searching spaces to navigating to them.',
    caseStudy: [
      { label: 'Problem',  val: 'Drivers struggling to find and navigate to available parking spaces in Nairobi' },
      { label: 'My Role',  val: 'Solo UX researcher and interaction designer — end to end' },
      { label: 'Process',  val: 'User interviews → Affinity mapping → User flows → Wireframes → Hi-fi Figma prototype' },
      { label: 'Outcome',  val: 'Validated prototype with improved navigation confirmed through usability testing' },
    ],
    tags: ['Figma', 'UX Research', 'Usability Testing', 'User Flows', 'Mobile UX'],
    links: [
      { href: 'https://www.figma.com/design/nMQpaZwG3InJrSO9V5LdsY/SPAQ', label: 'View Figma Prototype →', cls: 'pi-link' },
    ],
    reverse: false,
    live: false,
  },
  {
    id: 'skika',
    num: '02',
    type: 'Web Platform · Civic Tech',
    title: 'SKIKA',
    titleItalic: 'County Management',
    visual: 'pv-skika',
    bgWord: 'SKIKA',
    badge: 'Web Platform — Gov',
    numColor: 'rgba(77,220,130,.5)',
    role: 'Responsive UI Design · UX · Interface Architecture',
    desc: 'Designed a responsive web application enabling communication between county officials and the public. Applied modern UI patterns and structured layouts to improve information access for staff and citizens across devices.',
    caseStudy: [
      { label: 'Problem',  val: 'County communication systems lacking accessible, user-friendly digital interfaces' },
      { label: 'My Role',  val: 'Lead designer — UI design, information architecture, and responsive layout system' },
      { label: 'Process',  val: 'Stakeholder discovery → IA mapping → UI pattern library → Responsive screen designs' },
      { label: 'Outcome',  val: 'Accessible interface supporting county staff and public user flows across all devices' },
    ],
    tags: ['Figma', 'Responsive Design', 'Civic Tech', 'UI Patterns', 'Accessibility'],
    links: [
      { href: 'https://www.figma.com/design/iU2pw1xxcJCZyVyEMdqbwI/SKIKA', label: 'View Figma Design →', cls: 'pi-link' },
    ],
    reverse: true,
    live: false,
  },
  {
    id: 'vml',
    num: '03',
    type: 'Website · Edtech',
    title: 'Virtual',
    titleItalic: 'Mechatronics Labs',
    visual: 'pv-vml',
    bgWord: 'VML',
    badge: 'Website — Live',
    numColor: 'rgba(200,100,220,.5)',
    role: 'UI/UX Design · Visual Identity · Frontend Collaboration',
    desc: 'Led the UX and UI design of the Virtual Mechatronics Labs website — creating clear, user-friendly interfaces for students, trainers, and industry partners. Designed high-fidelity prototypes in Figma with smooth developer handoff for live implementation.',
    caseStudy: [
      { label: 'Problem',  val: 'VML needed a professional web presence to serve students, trainers, and industry partners' },
      { label: 'My Role',  val: 'Lead designer — UX, wireframes, hi-fi Figma designs, developer collaboration' },
      { label: 'Process',  val: 'Discovery → IA → Wireframes → Visual design → Figma handoff → Collaborative build' },
      { label: 'Outcome',  val: 'Live website at vml.dkut.ac.ke serving VML\'s Industry 4.0 training programs' },
    ],
    tags: ['Figma', 'UI/UX Design', 'Brand Design', 'Developer Handoff', 'Edtech'],
    links: [
      { href: 'https://vml.dkut.ac.ke',             label: 'View Live Site →', cls: 'pi-link live' },
      { href: 'https://www.behance.net/davynesang',  label: 'Behance Case →',  cls: 'pi-link' },
    ],
    reverse: false,
    live: true,
  },
  {
    id: 'funwithlove',
    num: '04',
    type: 'Web Platform · Lifestyle',
    title: 'FunwithLove',
    titleItalic: 'Web Platform',
    visual: 'pv-funwithlove',
    bgWord: 'FWL',
    badge: 'Web Platform',
    numColor: 'rgba(240,120,160,.5)',
    role: 'Wireframes · Prototyping · UX Design',
    desc: 'Created website wireframes and interactive prototypes for FunwithLove, focused on improving user engagement and content clarity. Developed user flows that prioritised intuitive discovery and seamless navigation throughout the platform.',
    caseStudy: [
      { label: 'Problem',  val: 'Improving user engagement and content clarity on the FunwithLove web platform' },
      { label: 'My Role',  val: 'UX designer — wireframes, user flows, and interactive Figma prototype' },
      { label: 'Process',  val: 'User flow mapping → Wireframing → Interactive prototype → Design iteration' },
      { label: 'Outcome',  val: 'Clear, engagement-focused interface design with improved navigation hierarchy' },
    ],
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Web UX'],
    links: [
      { href: 'https://www.behance.net/davynesang', label: 'View on Behance →', cls: 'pi-link' },
    ],
    reverse: true,
    live: false,
  },
];

export const GRAPHIC_CARDS = [
  {
    icon: '🖼',
    title: 'Brand Identity Design',
    body: 'Logos, brand guidelines, colour systems, and typography stacks for early-stage startups and small businesses across Kenya. Every identity built from scratch to communicate credibility and ambition.',
    tags: ['Logos', 'Brand Guidelines', 'Colour Systems', 'Typography'],
  },
  {
    icon: '📰',
    title: 'Digital Magazines & Newsletters',
    body: 'Monthly digital magazines and weekly newsletters for VML — maintaining a consistent visual identity across web and print. Designed layout systems and template libraries for efficient recurring publication.',
    tags: ['Editorial Layout', 'Digital Publishing', 'VML Newsletters', 'Template Design'],
  },
  {
    icon: '📣',
    title: 'Marketing & Promotional Design',
    body: 'Posters, brochures, social media graphics, and campaign collateral for technology products and Industry 4.0 programs at VML and Royal Technologies — brand-aligned, visually consistent.',
    tags: ['Social Media', 'Posters', 'Brochures', 'Campaign Design'],
  },
];

export const EXPERIENCE = [
  {
    badge: 'Current Role',
    dates: 'Feb 2025 – Aug 2025',
    title: 'UI/UX & Visual Designer',
    company: 'Virtual Mechatronics Labs (VML)',
    location: 'Nyeri, Kenya',
    bullets: [
      'Led the UX and UI design of the VML website — creating clear interfaces for students, trainers, and industry partners.',
      'Designed and maintained interactive wireframes and high-fidelity prototypes in Figma, ensuring smooth handoff to developers.',
      'Produced monthly digital magazines and weekly newsletters, building a consistent visual identity across web and print.',
      'Created marketing and branding materials — posters, brochures, social graphics — to promote Industry 4.0 training programs.',
      'Collaborated with technical teams to ensure accurate implementation of designs in the live website.',
    ],
    links: [
      { href: 'https://vml.dkut.ac.ke',                         label: 'vml.dkut.ac.ke ↗' },
      { href: 'https://vml.dkut.ac.ke/Newsletter/newsletters',  label: 'Newsletters ↗' },
    ],
    tags: ['Figma', 'UI/UX Design', 'Brand Design', 'Digital Publishing', 'Developer Collaboration'],
  },
  {
    badge: 'Freelance',
    dates: 'Jan 2024 – Present',
    title: 'Freelance UI/UX & Graphic Designer',
    company: 'Remote / Independent',
    location: 'Nairobi, Kenya',
    bullets: [
      'Designed user-centered interfaces, brand identities, and marketing materials for startups and small businesses.',
      'Worked directly with clients to translate business goals into clear, visually compelling digital designs.',
      'Delivered logos, business cards, brochures, social media graphics, and website layouts for real-world campaigns.',
      'Built a growing portfolio of professional work across multiple industries.',
    ],
    links: [
      { href: 'https://www.behance.net/davynesang', label: 'behance.net/davynesang ↗' },
    ],
    tags: ['Brand Identity', 'UI Design', 'Marketing Design', 'Client Management', 'Figma'],
  },
  {
    badge: 'Project-Based',
    dates: '2024 – 2025',
    title: 'UI/UX Designer',
    company: 'Project-Based Engagements',
    location: 'Nairobi / Remote',
    bullets: [
      'SPAQ (Mobile App) — Designed wireframes and interactive prototype for a parking assistance app, refined through user interview feedback.',
      'FunwithLove (Web Platform) — Created website wireframes and prototypes focused on improving user engagement and clarity.',
      'SKIKA (County Management) — Designed responsive interface for a county communication platform, supporting staff and public users.',
    ],
    links: [
      { href: 'https://www.figma.com/design/nMQpaZwG3InJrSO9V5LdsY/SPAQ',  label: 'SPAQ Figma ↗'  },
      { href: 'https://www.figma.com/design/iU2pw1xxcJCZyVyEMdqbwI/SKIKA', label: 'SKIKA Figma ↗' },
    ],
    tags: ['UX Research', 'Wireframing', 'Prototyping', 'Responsive UI', 'Figma'],
  },
  {
    badge: 'Volunteer',
    dates: 'Jan 2024 – Aug 2024',
    title: 'Graphic Design Volunteer',
    company: 'Royal Technologies',
    location: 'Nairobi, Kenya',
    bullets: [
      'Designed posters, social media graphics, and promotional content for technology products including laptops and accessories.',
      'Supported marketing campaigns with visually consistent and brand-aligned designs.',
    ],
    links: [],
    tags: ['Poster Design', 'Social Graphics', 'Marketing Collateral', 'Brand Alignment'],
  },
];

export const SOCIALS = [
  { platform: 'Behance Portfolio', val: 'behance.net/davynesang',          href: 'https://www.behance.net/davynesang' },
  { platform: 'Live Work',         val: 'vml.dkut.ac.ke',                  href: 'https://vml.dkut.ac.ke' },
  { platform: 'Phone',             val: '+254 0705 830 551',               href: 'tel:+2540705830551' },
  { platform: 'VML Newsletters',   val: 'View Publications ↗',             href: 'https://vml.dkut.ac.ke/Newsletter/newsletters' },
];
