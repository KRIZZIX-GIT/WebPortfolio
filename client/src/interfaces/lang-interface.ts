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
    databases: string;
    tools: string;
  };
  contacts: {
    title: string;
    download: string;
  };
  time: {
    title: string;
    location: string;
  }
};

export const COPY = {
  EN: {
    header: {
      portfolio: "KRIZZIX's Web Portfolio",
      contacts: "contacts:",
      langShort: "EN",
    },
    hero: {
      hi: "Hi, I'm KRIZZIX",
      role: "I'm a full-stack React developer",
      scroll: "Scroll down to see my skills and contacts",
    },
    experience: {
      years: "Years",
      of: "Of",
      experience: "Experience",
    },
    skills: {
      title: "My skills:",
      databases: "Databases",
      tools: "Tools"
    },
    contacts: {
      title: "Let's build something amaizing together!",
      download: "Download CV"
    },
    time: {
      title: 'My current time:',
      location: ' Belarus - Minsk'
    }
  },
  RU: {
    header: {
      portfolio: "Веб‑портфолио KRIZZIX",
      contacts: "контакты:",
      langShort: "RU",
    },
    hero: {
      hi: "Привет, я KRIZZIX",
      role: "Я full‑stack React‑разработчик",
      scroll: "Листайте вниз, чтобы увидеть мои навыки и контакты",
    },
    experience: {
      years: "Года",       
      of: "",         
      experience: "опыта",
    },
    skills: {
      title: "Мои навыки:",
      databases: "Базы данных",
      tools: "Инструменты"
    },
     contacts: {
      title: "Давайте построим что-нибудь потрясающее вместе!",
      download: "Скачать CV"
    },
     time: {
      title: 'Мое текущее время:',
      location: ' Беларусь - Минск'
    }
  },
} satisfies Record<Lang, CopyBlock>;

export default COPY;