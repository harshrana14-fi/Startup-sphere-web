import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/company/startups-sphere/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/startup_sphere/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/company/startups-sphere/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/startup_sphere/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/company/startups-sphere/",
      },
    ],
  },
  {
    title: "Resources",
    data: [
      {
        name: "Posts",
        icon: null,
        link: "https://www.linkedin.com/company/startups-sphere/",
      },
      {
        name: "Reports",
        icon: null,
        link: "https://www.linkedin.com/company/startups-sphere/",
      },
    ],
  },
  {
    title: "Startup Sphere",
    data: [
      {
        name: "About",
        icon: null,
        link: "/about",
      },
      {
        name: "Events",
        icon: null,
        link: "/events",
      },
      {
        name: "Contact",
        icon: null,
        link: "/contact",
      },
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Fish Tank 2.0",
    description:
      "Our flagship pitching competition celebrating ideas, innovation and courage. Participants pitched solutions with passion and vision. Distinguished jury and mentors provided invaluable insights. Growth happens when ideas are challenged, guidance is given, and collaboration takes place.",
    image: "/fish.jpg",
    link: "https://www.linkedin.com/company/startups-sphere/",
  },
  {
    title: "CampusMart & Venture Lab",
    description:
      "From campus idea to platform empowering student entrepreneurs. Meet ventures like CampusMart – redefining campus innovation. At Startup Sphere we support and celebrate student-led ventures shaping the future through creativity, courage, and collaboration.",
    image: "/.jpg",
    link: "https://www.linkedin.com/company/startups-sphere/",
  },
  {
    title: "Canva Basics Workshop",
    description:
      "Exclusive learning session for our members – hands-on class to create impactful posters, presentations, and social media creatives from scratch. At Startup Sphere we believe in empowering our community with skills that amplify ideas and make them stand out.",
    image: "/.png",
    link: "https://www.linkedin.com/company/startups-sphere/",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as const;

export const LINKS = {
  linkedin: "https://www.linkedin.com/company/startups-sphere/",
};
