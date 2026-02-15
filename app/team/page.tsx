'use client'
import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ExternalLink, ShieldCheck, Cpu, Globe ,Instagram} from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  accent: string;
  instagram: string;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
  icon: ReactNode;
}

interface CoreTeamSection {
  title: string;
  members: TeamMember[];
  icon: ReactNode;
}

const TeamPage: React.FC = () => {
  const facultyTeam: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Bhoomi Gupta",
      role: "HOD, ITE",
      bio: "",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHCVfTXnJzUmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643182954113?e=1771459200&v=beta&t=FJrmAIHgMVFxUUsRnHK-xfBABnYLkYSqBWh5gNHGHGg",
      linkedin: "https://www.linkedin.com/in/dr-bhoomi-gupta-3278a734/",
      instagram: "#",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Ms. Sapna Gupta",
      role: "Faculty Coordinator",
      bio: "",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE49jaTKP6N7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695826184887?e=1771459200&v=beta&t=Sp7cp4Ii7dyYf2szTBwPgeNwgYFrsrS09-73kHvsYqE",
      linkedin: "https://www.linkedin.com/in/sapna-gupta-7ba94a219/",
      instagram: "#",
      accent: "from-cyan-500 to-teal-500"
    }
  ];

  const leadershipTeam: TeamMember[] = [
    {
      id: 1,
      name: "Shubham Raj",
      role: "Founder",
      bio: "",
      image: "bhaiya.png",
      linkedin: "https://www.linkedin.com/in/shubham-raj-62755628b/",
      instagram: "#",
      accent: "from-violet-600 to-purple-600"
    },
    {
      id: 2,
      name: "Jiya Chugh",
      role: "President",
      bio: "",
      image: "/jiya1.jpeg",
      linkedin: "https://www.linkedin.com/in/jiyachugh/",
      instagram: "#",
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  const coreTeamSections: CoreTeamSection[] = [
    {
      title: "Venture Lab",
      members: [
        {
          id: 1,
          name: "Kartik",
          role: "Head, Venture Lab",
          bio: "",
          image: "/kartik1.jpeg",
          linkedin: "https://www.linkedin.com/in/kartik-singh19/",
          instagram: "#",
          accent: "from-orange-500 to-red-500"
        },
        {
          id: 2,
          name: "Shubham Solanki",
          role: "Co-Head, Venture Lab",
          bio: "",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQGG51UkVP8aew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732520079133?e=1771459200&v=beta&t=a8n5UUpFJ1P-MaMLM3KK_io3mQMdI3irXpEygNPHq10",
          linkedin: "https://www.linkedin.com/in/shubham-solanki-902331321/",
          instagram: "https://www.instagram.com/the._.solanki_17/",
          accent: "from-emerald-500 to-teal-500"
        }
      ],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Outreach and Collaboration",
      members: [
        {
          id: 3,
          name: "Kushagra Deewan",
          role: "Head, Outreach and Collaboration",
          bio: "",
          image: "/kushagra.jpeg",
          linkedin: "#",
          instagram: "#",
          accent: "from-blue-600 to-indigo-600"
        },
        {
          id: 4,
          name: "Prashasti",
          role: "Head, Outreach and Collaboration",
          bio: "",
          image: "/Prashasti.jpeg",
          linkedin: "https://www.linkedin.com/in/prashasti-937504257/",
          instagram: "#",
          accent: "from-pink-600 to-rose-600"
        }
      ],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Design and Media",
      members: [
        {
          id: 5,
          name: "Riya",
          role: "Head, Design & Media",
          bio: "",
          image: "/riya.jpeg",
          linkedin: "#",
          instagram: "#",
          accent: "from-amber-500 to-yellow-500"
        }
      ],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Event and Operation",
      members: [
        {
          id: 6,
          name: "Sahil Rao",
          role: "Head, Event and Operation",
          bio: "",
          image: "/Sahil.jpeg",
          linkedin: "https://www.linkedin.com/in/sahil-rao-188b01293/",
          instagram: "#",
          accent: "from-cyan-600 to-blue-600"
        },
        {
          id: 7,
          name: "Sufiyan Ahmed",
          role: "Head, Event",
          bio: "",
          image: "/Sufiyan.jpeg",
          linkedin: "#",
          instagram: "#",
          accent: "from-slate-500 to-slate-700"
        }
      ],
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const subDepartments = [
    {
      title: "Venture Lab",
      description: "Where ideas take flight. Our incubation hub that nurtures startups from concept to creation, providing mentorship, resources, and funding guidance.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Design and Media",
      description: "The creative powerhouse behind our visual identity. Crafting compelling brand experiences, digital content, and innovative design solutions.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Research & Innovation",
      description: "Driving cutting-edge research and fostering innovation culture. Exploring emerging technologies and developing groundbreaking solutions.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Events & Operations",
      description: "The engine that brings our vision to life. Orchestrating seamless experiences, managing logistics, and ensuring flawless execution.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Outreach & Collaboration",
      description: "Building bridges across communities. Expanding our network, forging partnerships, and creating opportunities for growth and collaboration.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const teamGroups: TeamGroup[] = [
    { title: "Faculty Mentors", members: facultyTeam, icon: <Cpu className="w-6 h-6" /> },
    { title: "Leadership", members: leadershipTeam, icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 font-sans">
        {/* Hero Section */}
        <div className="text-center mb-24 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 italic leading-[1.1]"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 whitespace-nowrap">ARCHITECTS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide px-4"
          >
            A collective of visionaries, mentors, and builders driving the startup culture at Startup Sphere.
          </motion.p>
        </div>

        {/* Team Sections */}
        <div className="space-y-32">
          {teamGroups.map((group, gIdx) => (
            <section key={gIdx} className="relative">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  {group.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase italic">{group.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.members.map((member, mIdx) => (
                  <TeamCard key={member.id} member={member} index={mIdx} />
                ))}
              </div>
            </section>
          ))}

          {/* The Core Team Section with Subsections */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase italic">The Core</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
            </div>

            <div className="space-y-20">
              {coreTeamSections.map((section, sIdx) => (
                <div key={sIdx} className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                      {section.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase italic text-purple-300">
                      {section.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent ml-4" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.members.map((member, mIdx) => (
                      <TeamCard key={member.id} member={member} index={mIdx} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sub-Departments Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 py-2 px-6 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <p className="text-[13px] font-medium tracking-wider text-purple-200 uppercase">
                Our Divisions
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 italic">
              SUB-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">DEPARTMENTS</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Specialized teams driving different aspects of our entrepreneurial ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subDepartments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                      {dept.icon}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight uppercase italic text-white group-hover:text-purple-300 transition-colors duration-300">
                      {dept.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light flex-grow mb-8">
                    {dept.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                      <span>Learn More</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-purple-500 rounded-tr-lg"></div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div 
        className="group relative cursor-pointer outline-none"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={handleToggle}
      >
      <div className={`relative aspect-[4/5] max-w-xs mx-auto overflow-hidden rounded-[2.5rem] border transition-all duration-500 
        ${isActive ? 'border-white/40 shadow-[0_0_50px_rgba(168,85,247,0.2)]' : 'border-white/10'}`}>
        
        {/* Profile Image */}
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-700 
            ${isActive ? 'scale-110' : 'scale-100'}`}
        />

        {/* Text Content */}
        <div className="absolute inset-x-0 bottom-0 px-10 pt-10 pb-4 z-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
          <div className="space-y-1">
            <h3 className={`text-2xl font-bold tracking-tight leading-none transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
              ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white'}`}>
              {member.name}
            </h3>
            <p className="text-purple-300 text-xs font-black uppercase tracking-widest py-1.5 px-3 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 inline-block mb-1">
              {member.role}
            </p>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="pt-1 overflow-hidden">
                <p className="text-sm text-gray-300 leading-relaxed font-light mb-3">
                  {member.bio}
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-all active:scale-95"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-all active:scale-95"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* External Link Icon Removed */}
      </div>

      {/* Glow Effect Background */}
      <div className={`absolute -inset-px rounded-[2.5rem] bg-gradient-to-br ${member.accent} blur-xl transition-opacity duration-500 -z-10
        ${isActive ? 'opacity-15' : 'opacity-0'}`} />
    </div>
    </motion.div>
  );
};

export default TeamPage;