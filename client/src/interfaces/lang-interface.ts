export type Lang = 'EN' | 'RU';

export type ExperienceCopy = {
  years: string;
  of: string;
  experience: string;
};

export type CopyBlock = {
  header: {
    portfolio: string;
    contacts: string;
    langShort: string;
  };
  hero: {
    hi: string;
    role: string;
    scroll: string;
  };
  experience: ExperienceCopy; 
  skills: {
    title: string;
  };
};

export const COPY = {
  EN: {
    header: {
      portfolio: "-  KRIZZIX's Web Portfolio",
      contacts: "contacts:",
      langShort: "EN",
    },
    hero: {
      hi: "Hi, I'm KRIZZIX",
      role: "I'm a full-stack React developer",
      scroll: "Scroll down to see my skills and projects",
    },
    experience: {
      years: "Years",
      of: "Of",
      experience: "Experience",
    },
    skills: {
      title: "My skills:",
    },
  },
  RU: {
    header: {
      portfolio: "-  Веб‑портфолио KRIZZIX",
      contacts: "контакты:",
      langShort: "RU",
    },
    hero: {
      hi: "Привет, я KRIZZIX",
      role: "Я full‑stack React‑разработчик",
      scroll: "Листайте вниз, чтобы увидеть мои навыки и проекты",
    },
    experience: {
      years: "Года",       
      of: "",         
      experience: "опыта",
    },
    skills: {
      title: "Мои навыки:",
    },
  },
} satisfies Record<Lang, CopyBlock>;

export default COPY;