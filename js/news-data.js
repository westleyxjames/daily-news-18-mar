// News Data for HeadlineHub

const breakingNews = [
  {
    id: 'b1',
    title: 'Major Breakthrough in AI Technology Announced',
    excerpt: 'Tech giants reveal revolutionary advancement in artificial intelligence capabilities...',
    image: 'https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzY5Njg0OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Technology',
    date: '2026-01-29',
    author: 'Sarah Johnson',
    readTime: '5 min'
  },
  {
    id: 'b2',
    title: 'Stock Markets Hit Record Highs Amid Economic Recovery',
    excerpt: 'Global markets surge as investors show renewed confidence in economic outlook...',
    image: 'https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmclMjBmbG9vcnxlbnwxfHx8fDE3Njk2MDkyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Business',
    date: '2026-01-29',
    author: 'Michael Chen',
    readTime: '4 min'
  }
];

const nationalNews = [
  {
    id: 'n1',
    title: 'Congress Passes Historic Infrastructure Bill',
    excerpt: 'Landmark legislation promises billions for roads, bridges, and public transit systems...',
    image: 'https://images.unsplash.com/photo-1690848012121-4752eaffbf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cyUyMGNhcGl0b2wlMjBidWlsZGluZyUyMGNvbmdyZXNzfGVufDF8fHx8MTc2OTY4NDkwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Politics',
    date: '2026-01-28',
    author: 'Emily Davis',
    readTime: '6 min'
  },
  {
    id: 'n2',
    title: 'New Education Reform Initiative Launched Nationwide',
    excerpt: 'Federal program aims to modernize curriculum and improve student outcomes...',
    image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njk2ODQ5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Education',
    date: '2026-01-28',
    author: 'James Wilson',
    readTime: '5 min'
  },
  {
    id: 'n3',
    title: 'Supreme Court to Hear Major Healthcare Case',
    excerpt: 'Landmark case could reshape healthcare policy for millions of Americans...',
    image: 'https://images.unsplash.com/photo-1697237089826-331838962a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXByZW1lJTIwY291cnQlMjBqdXN0aWNlfGVufDF8fHx8MTc2OTY4NDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Politics',
    date: '2026-01-27',
    author: 'Robert Martinez',
    readTime: '7 min'
  },
  {
    id: 'n4',
    title: 'National Parks See Record Visitor Numbers',
    excerpt: 'Tourism boom brings economic benefits but raises environmental concerns...',
    image: 'https://images.unsplash.com/photo-1619574425317-aeec312b8191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMHBhcmslMjBtb3VudGFpbnMlMjBuYXR1cmV8ZW58MXx8fHwxNzY5Njg0OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Environment',
    date: '2026-01-27',
    author: 'Lisa Anderson',
    readTime: '4 min'
  },
  {
    id: 'n5',
    title: 'Major Election Reform Bill Advances in Senate',
    excerpt: 'Bipartisan support grows for comprehensive voting rights legislation...',
    image: 'https://images.unsplash.com/photo-1560981477-dbcccffc1565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdGlvbiUyMHZvdGluZyUyMGRlbW9jcmFjeXxlbnwxfHx8fDE3Njk2ODQ5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Politics',
    date: '2026-01-26',
    author: 'Daniel Thompson',
    readTime: '6 min'
  }
];

const businessNews = [
  {
    id: 'bus1',
    title: 'Tech Startups Attract Record Venture Capital Funding',
    excerpt: 'Silicon Valley sees unprecedented investment in AI and clean energy companies...',
    image: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTY4NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Startups',
    date: '2026-01-29',
    author: 'David Kim',
    readTime: '5 min'
  },
  {
    id: 'bus2',
    title: 'Cryptocurrency Market Shows Signs of Recovery',
    excerpt: 'Bitcoin and Ethereum surge as regulatory clarity emerges...',
    image: 'https://images.unsplash.com/photo-1621631908015-5e91cb7dcac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc2OTY0MTkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Crypto',
    date: '2026-01-28',
    author: 'Jennifer Lee',
    readTime: '4 min'
  },
  {
    id: 'bus3',
    title: 'Retail Shopping Experiences Major Digital Transformation',
    excerpt: 'Major retailers invest billions in AI-powered shopping experiences...',
    image: 'https://images.unsplash.com/photo-1766600115358-1c5ce9c7c87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZyUyMG1hbGwlMjBjdXN0b21lcnN8ZW58MXx8fHwxNzY5Njg0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Retail',
    date: '2026-01-28',
    author: 'Thomas Brown',
    readTime: '6 min'
  },
  {
    id: 'bus4',
    title: 'Manufacturing Sector Reports Strong Q1 Growth',
    excerpt: 'Industrial production reaches highest levels in five years...',
    image: 'https://images.unsplash.com/photo-1695603414724-2396274ef5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY5Njg0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Manufacturing',
    date: '2026-01-27',
    author: 'Patricia Garcia',
    readTime: '5 min'
  }
];

const technologyNews = [
  {
    id: 'tech1',
    title: 'Revolutionary AI Model Transforms Healthcare Diagnostics',
    excerpt: 'New machine learning system achieves 99% accuracy in disease detection...',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2OTY3MjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'AI & Innovation',
    date: '2026-01-29',
    author: 'Alex Turner',
    readTime: '6 min'
  },
  {
    id: 'tech2',
    title: 'Next-Generation Smartphones Feature Advanced AI Capabilities',
    excerpt: 'Tech giants push boundaries with groundbreaking mobile technology...',
    image: 'https://images.unsplash.com/photo-1571126770247-9a99e5f7eff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk2NjIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gadgets',
    date: '2026-01-28',
    author: 'Maria Rodriguez',
    readTime: '5 min'
  },
  {
    id: 'tech3',
    title: 'Cybersecurity Experts Warn of Evolving Threats',
    excerpt: 'Global organizations urged to update security protocols immediately...',
    image: 'https://images.unsplash.com/photo-1760199789463-b523db55dd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzY5Njg0OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cybersecurity',
    date: '2026-01-28',
    author: 'Chris Park',
    readTime: '4 min'
  },
  {
    id: 'tech4',
    title: '5G Network Expansion Reaches 95% of Urban Areas',
    excerpt: 'Telecommunications companies celebrate major infrastructure milestone...',
    image: 'https://images.unsplash.com/photo-1614157561595-dc25d28cfa85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw1ZyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwdG93ZXJ8ZW58MXx8fHwxNzY5Njg0OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile & Networks',
    date: '2026-01-27',
    author: 'Jessica White',
    readTime: '5 min'
  },
  {
    id: 'tech5',
    title: 'Renewable Energy Technology Sees Major Breakthrough',
    excerpt: 'Solar panel efficiency reaches record 50% conversion rate...',
    image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3Njk1OTU5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Green Tech',
    date: '2026-01-26',
    author: 'Emma Green',
    readTime: '6 min'
  }
];

const sportsNews = [
  {
    id: 'sport1',
    title: 'Baseball Championship Series Reaches Decisive Game 7',
    excerpt: 'National team advances with thrilling comeback victory...',
    image: 'https://images.unsplash.com/photo-1650124077853-b6fcb0231cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHN0YWRpdW0lMjBnYW1lfGVufDF8fHx8MTc2OTU5NjYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Baseball',
    date: '2026-01-29',
    author: 'Rahul Sharma',
    readTime: '7 min'
  },
  {
    id: 'sport2',
    title: 'Basketball Star Scores Historic 70-Point Game',
    excerpt: 'NBA player joins elite club with phenomenal performance...',
    image: 'https://images.unsplash.com/photo-1720217262963-088563b579d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzY5NjgzNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Basketball',
    date: '2026-01-28',
    author: 'Mark Stevens',
    readTime: '5 min'
  },
  {
    id: 'sport3',
    title: 'Soccer World Cup Qualifiers Produce Stunning Upsets',
    excerpt: 'Underdog teams shock favorites in dramatic qualifying matches...',
    image: 'https://images.unsplash.com/photo-1763751626851-024987c2f778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMG1hdGNoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5Njg0OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Soccer',
    date: '2026-01-28',
    author: 'Laura Mitchell',
    readTime: '6 min'
  },
  {
    id: 'sport4',
    title: 'Tennis Grand Slam Features Epic Five-Set Thriller',
    excerpt: 'Championship match breaks records with 4-hour marathon...',
    image: 'https://images.unsplash.com/photo-1761286753856-2f39b4413c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXIlMjBzZXJ2aW5nfGVufDF8fHx8MTc2OTYzOTMwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tennis',
    date: '2026-01-27',
    author: 'Kevin Lee',
    readTime: '4 min'
  }
];

const internationalNews = [
  {
    id: 'int1',
    title: 'UN Assembly Reaches Historic Climate Agreement',
    excerpt: 'World leaders commit to ambitious carbon reduction targets by 2030...',
    image: 'https://images.unsplash.com/photo-1761301643716-1cf7a6ffb6fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBuYXRpb25zJTIwaW50ZXJuYXRpb25hbCUyMGRpcGxvbWFjeXxlbnwxfHx8fDE3Njk2ODQ5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'International',
    date: '2026-01-29',
    author: 'Anna Mueller',
    readTime: '8 min'
  },
  {
    id: 'int2',
    title: 'European Union Unveils New Economic Partnership',
    excerpt: 'Historic trade deal set to boost cooperation across continents...',
    image: 'https://images.unsplash.com/photo-1594811815859-c354d5afc3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHVuaW9uJTIwcGFybGlhbWVudHxlbnwxfHx8fDE3Njk2ODQ5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'International',
    date: '2026-01-28',
    author: 'Pierre Dubois',
    readTime: '6 min'
  },
  {
    id: 'int3',
    title: 'Global Climate Summit Addresses Environmental Crisis',
    excerpt: 'Nations pledge unprecedented cooperation on climate action...',
    image: 'https://images.unsplash.com/photo-1582033665011-60ccbb964168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY5NjI5MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'International',
    date: '2026-01-27',
    author: 'Yuki Tanaka',
    readTime: '5 min'
  },
  {
    id: 'int4',
    title: 'Middle East Peace Initiative Shows Progress',
    excerpt: 'Diplomatic efforts bring renewed hope for regional stability...',
    image: 'https://images.unsplash.com/photo-1554234506-68015270578e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwY29uZmxpY3QlMjByZWdpb258ZW58MXx8fHwxNzY5Njg0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'International',
    date: '2026-01-27',
    author: 'Ahmed Hassan',
    readTime: '7 min'
  },
  {
    id: 'int5',
    title: 'Immigration Policy Reform Sparks Global Debate',
    excerpt: 'New international framework aims to address migration challenges...',
    image: 'https://images.unsplash.com/photo-1769574053611-24a43db2a678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGJvcmRlciUyMHBvbGljeXxlbnwxfHx8fDE3Njk2ODQ5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'International',
    date: '2026-01-26',
    author: 'Sofia Martinez',
    readTime: '6 min'
  }
];

const allNews = [
  ...breakingNews,
  ...nationalNews,
  ...businessNews,
  ...technologyNews,
  ...sportsNews,
  ...internationalNews
];
