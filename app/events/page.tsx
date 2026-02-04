'use client';

import React, { useState, useRef, ReactNode, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Palette,
  Lightbulb,
  Users,
  Sparkles,
  Trophy,
  ChevronRight,
  Image as ImageIcon,
  Camera,
  FileText,
  Video,
  Rocket,
  Search,
  BookOpen,
  DollarSign,
  Code
} from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  date: string;
  location: string;
  category: string;
  accent: string;
  icon: ReactNode;
  type?: 'Upcoming' | 'Past';
  attendees?: number;
}

const EventsPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const featuredEvents: EventItem[] = [
    {
      id: 1,
      title: "Fish Tank 2.0",
      description: "Our flagship pitching competition – where creativity meets courage, mentorship meets guidance, and ideas meet opportunity. Participants didn't just pitch ideas; they brought passion, and vision to the table.",
      details: "Distinguished jury and mentors provided invaluable insights. Growth happens when ideas are challenged.",
      image: "/jiya.jpg",
      date: "March 15, 2024",
      location: "MAIT Auditorium",
      category: "Competition",
      accent: "from-purple-500 to-blue-500",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Canva Basics Workshop",
      description: "An exclusive learning session for our members – a hands-on class designed to help you create impactful posters, presentations, and social media creatives from scratch.",
      details: "No prior design experience required. Focused on visual storytelling for startup founders.",
      image: "/fem.jpg",
      date: "April 3, 2024",
      location: "Design Studio",
      category: "Workshop",
      accent: "from-pink-500 to-rose-500",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Venture Lab & Campus Ventures",
      description:
        "From campus idea to platform – we support student-led initiatives like CampusMart that are shaping the future through creativity.",
      details:
        "Our ecosystem provides the resources and network to help you build it from the ground up.",
      image: "/blue.jpg",
      date: "May 20, 2024",
      location: "Innovation Hub",
      category: "Incubation",
      accent: "from-amber-400 to-orange-600",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Pitch Perfect Workshop',
      date: 'Feb 5, 2026',
      type: 'Upcoming',
      description: 'Master the art of pitching to investors and refining your value proposition.',
      details: "Expert feedback on your deck and presentation style.",
      image: '/shubh.jpg',
      attendees: 80,
      location: "MAIT Seminar Hall",
      category: "Workshop",
      accent: "from-purple-500 to-indigo-500",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const calendarEvents: EventItem[] = [
     {
      id: 113,
      title: "Fresh Talent Hiring: Recruitment Drive",
      date: "19-Sept-2025",
      type: "Past",
      description: "Connecting our startups with the brightest fresh minds from the campus.",
      details: "Direct hiring drive for internships and entry-level startup roles.",
      image: "/recruitment.jpg",
      location: "Campus Plaza",
      category: "Recruitment",
      accent: "from-indigo-500 to-purple-600",
      icon: <Users className="w-5 h-5" />,
      attendees: 250,
    },
    {
      id: 112,
      title: "Virtual Orientation",
      date: "18-Sept-2025",
      type: "Past",
      description: "Online session for remote members to understand the global sphere network.",
      details: "Unveiling the new digital dashboard and collaborative tools.",
      image: "/orientation.jpg",
      location: "Discord / Zoom",
      category: "Orientation",
      accent: "from-cyan-400 to-blue-500",
      icon: <Sparkles className="w-5 h-5" />,
      attendees: 500,
    },
    {
      id: 111,
      title: "Fish Tank 2.0: Pitch Your Idea Challenge",
      date: "19-Aug-2025",
      type: "Past",
      description: "The next iteration of our premier startup competition. Submit your prototypes now.",
      details: "Phase 1: Idea vetting. Phase 2: Mentor matching. Final: Live Pitch.",
      image: "/fish-tank.jpg",
      location: "Innovation Hub",
      category: "Competition",
      accent: "from-purple-600 to-blue-600",
      icon: <Trophy className="w-5 h-5" />,
      attendees: 300,
    },
    {
      id: 110,
      title: "CAT & GATE Guidance Session",
      date: "21-Aug-2025",
      type: "Past",
      description: "Strategic planning and guidance for students aiming for higher education via CAT/GATE.",
      details: "Toppers' roadmap and resource identification for competitive exams.",
      image: "/gate-cat.jpg",
      location: "Auditorium",
      category: "Guidance",
      accent: "from-slate-500 to-gray-700",
      icon: <BookOpen className="w-5 h-5" />,
      attendees: 150,
    },
    {
      id: 109,
      title: "Web Dev Bootcamp: Igniting Innovation",
      date: "02-Nov-2024",
      type: "Past",
      description: "Intensive bootcamp focused on React, Tailwind CSS, and building scalable web applications.",
      details: "Transitioning from basic HTML to modern production-ready stacks.",
      image: "/bootcamp.jpg",
      location: "Tech Lab",
      category: "Development",
      accent: "from-blue-600 to-cyan-500",
      icon: <Code className="w-5 h-5" />,
      attendees: 110,
    },
    {
      id: 108,
      title: "Friday Finance Program",
      date: "25-Oct-2024",
      type: "Past",
      description: "Essential financial literacy session for budding founders and student investors.",
      details: "Covering budgeting, burn rate, and basic venture capital terminology.",
      image: "/finance.jpg",
      location: "Finance Wing",
      category: "Finance",
      accent: "from-green-500 to-emerald-500",
      icon: <DollarSign className="w-5 h-5" />,
      attendees: 70,
    },
    {
      id: 107,
      title: "Mastering the Art of Photography",
      date: "24-Oct-2024",
      type: "Past",
      description: "Technical workshop on composition, lighting, and product photography for startups.",
      details: "Hands-on session with DSLR and mobile photography experts.",
      image: "/photography.jpg",
      location: "Visual Arts Lab",
      category: "Creative",
      accent: "from-violet-500 to-fuchsia-500",
      icon: <Camera className="w-5 h-5" />,
      attendees: 40,
    },
    {
      id: 105,
      title: "Mock Interview Session",
      date: "19-Oct-2024",
      type: "Past",
      description: "Simulated interview environments with industry professionals to sharpen placement readiness.",
      details: "One-on-one feedback sessions for soft skills and technical knowledge.",
      image: "/inter.jpg",
      location: "Career Center",
      category: "Professional",
      accent: "from-emerald-400 to-teal-600",
      icon: <Users className="w-5 h-5" />,
      attendees: 55,
    },
    {
      id: 104,
      title: "Exploring Contemporary Marketing Strategies",
      date: "16-Oct-2024",
      type: "Past",
      description: "In-depth workshop on modern digital marketing, growth hacking, and personal branding.",
      details: "Analyzing successful case studies of 2024 marketing campaigns.",
      image: "/marketing.jpg",
      location: "Marketing Hub",
      category: "Workshop",
      accent: "from-pink-500 to-purple-500",
      icon: <Search className="w-5 h-5" />,
      attendees: 85,
    },
    {
      id: 103,
      title: "Identifying Top Books Across Key Domains",
      date: "13-Oct-2024",
      type: "Past",
      description: "A week-long curation session to identify foundational literature for entrepreneurial success.",
      details: "Collaborative research session to build the Sphere Library.",
      image: "/books.jpg",
      location: "Sphere Library",
      category: "Knowledge",
      accent: "from-amber-400 to-yellow-600",
      icon: <BookOpen className="w-5 h-5" />,
      attendees: 30,
    },
    {
      id: 102,
      title: "Startup Sphere ITE Fresh Talent Orientation",
      date: "10-Sept-2024",
      type: "Past",
      description: "Welcoming the new cohort of innovators to the Startup Sphere ecosystem.",
      details: "Introduction to our mission, vision, and the resources available to students.",
      image: "/orientation.jpg",
      location: "Main Seminar Hall",
      category: "Orientation",
      accent: "from-blue-500 to-indigo-500",
      icon: <Rocket className="w-5 h-5" />,
      attendees: 200,
    },
    {
      id: 101,
      title: "Video Reel Creation Challenge",
      date: "09-Sept-2024",
      type: "Past",
      description: "A creative competition focusing on short-form video storytelling and cinematic editing techniques.",
      details: "Members competed to create the most engaging viral-ready reels for startups.",
      image: "/video-reel.jpg",
      location: "Media Lab",
      category: "Creative",
      accent: "from-red-500 to-orange-500",
      icon: <Video className="w-5 h-5" />,
      attendees: 45,
    },
  ];

  const sponsors = [
    { name: "Red Bull", logo: "/redbull.jpg", gradient: "from-red-500 to-blue-500" },
    { name: "Red Tape", logo: "/red.png", gradient: "from-red-600 to-gray-800" },
    { name: "Unstop", logo: "/un.png", gradient: "from-blue-500 to-cyan-400" },
    { name: "PW", logo: "/PW.jpg", gradient: "from-orange-500 to-pink-500" },
    { name: "FPV", logo: "/in.png", gradient: "from-red-500 to-gray-700" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans pb-32"
    >
      {/* Background Interactive Layer */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
              Milestones of Innovation
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
            EVENTS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              & SPHERE
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Witness the evolution of entrepreneurship. From the first spark of an idea 
            to full-scale ventures and industry-shaping workshops.
          </p>
        </div>
        </motion.div>

        {/* Featured Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-[0.4em] text-purple-500 uppercase italic">/ From Ideation to Execution</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredEvents.map((event, index) => (
              <FeaturedEventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>


        {/* Full Calendar / Workshops Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-[0.4em] text-cyan-500 uppercase italic">/ Other Events & Activities</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>
          <div className="space-y-6">
            {calendarEvents.filter(event => event.category !== 'Competition' && event.category !== 'Incubation').map((event, index) => (
              <ListEventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Sponsors Section - IMPROVED */}
        <div className="mt-32 mb-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                POWERED BY
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">PARTNERS</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Trusted by industry leaders who believe in empowering the next generation of innovators
            </p>
          </div>

          {/* Sponsors Grid - Single Row */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 blur-3xl" />
            <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${sponsor.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                    
                    {/* Logo */}
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="relative z-10 w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                    />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Name Label */}
                  <div className="mt-4 text-center">
                    <p className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                      {sponsor.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Interested in partnering?</p>
            <a href="/contact" className="group px-6 py-3 bg-purple-600 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-purple-700 transition-all duration-300 relative overflow-hidden inline-block">
              <span className="relative z-10">Become a Sponsor</span>
              <div className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-components ---

const FeaturedEventCard = ({ event, index }: { event: EventItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
    <div className="relative h-80 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      <div className="absolute top-6 left-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
          <span className="text-purple-400">{event.icon}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white">
            {event.category}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-4xl font-black tracking-tighter italic uppercase leading-none">
          {event.title}
        </h3>
      </div>
    </div>

    <div className="p-8 pt-4 space-y-6">
      <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3 text-purple-500" />
          {event.date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-cyan-500" />
          {event.location}
        </div>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed font-light">
        {event.description}
      </p>

      <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
        <div className={`p-4 rounded-2xl bg-gradient-to-r ${event.accent}/10 border-l-4 border-purple-500`}>
          <p className="text-sm text-gray-300 italic">"{event.details}"</p>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <a href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300">
          <ImageIcon className="w-3 h-3" /> View Gallery
        </a>
      </div>
    </div>
    </div>
  </motion.div>
);

const ListEventCard = ({ event, index }: { event: EventItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.01 }}
  >
    <div className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden relative">
    <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest z-20 ${
      event.type === 'Upcoming' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 text-gray-500 border border-white/10'
    }`}>
      {event.type}
    </div>

    <div className="w-full md:w-[350px] aspect-video md:aspect-auto h-52 md:h-auto relative rounded-2xl overflow-hidden shrink-0">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
    </div>

    <div className="flex-1 flex flex-col justify-center py-2">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-gray-400">
          <Calendar className="w-3 h-3 text-purple-500" />
          {event.date}
        </div>
        {event.attendees && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-gray-400">
            <Users className="w-3 h-3 text-cyan-500" />
            {event.attendees} Attendees
          </div>
        )}
      </div>

      <h3 className="text-3xl font-bold mb-3 italic tracking-tight group-hover:text-purple-400 transition-colors">
        {event.title}
      </h3>
      
      <p className="text-gray-400 font-light leading-relaxed text-base mb-6 max-w-xl">
        {event.description}
      </p>

      <div className="flex items-center gap-6 mt-auto">
        <a href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300">
          <ImageIcon className="w-3 h-3" /> Gallery
        </a>
        
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <MapPin className="w-3 h-3" />
          {event.location}
        </div>
      </div>
    </div>
    </div>
    
    <div className={`absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br ${event.accent} opacity-0 blur-[120px] group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
  </motion.div>
);

export default EventsPage;