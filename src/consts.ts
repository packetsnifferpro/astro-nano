import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Abdul Ahad Alami",
  EMAIL: "contact@ahadalami.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I'm Ahad, an IT support specialist moving into networking. Here I write up my home lab projects and what I learn from them.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "My home lab projects: what I built, what broke and how I fixed it.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/packetsnifferpro",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/abdulahadalami/",
  },
];
