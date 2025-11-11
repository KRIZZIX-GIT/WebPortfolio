import styles from './Main.module.css';

import React, { useState, useEffect } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';
import COPY, { type Lang } from '../../interfaces/lang-interface';
import TypingEffect from '../../components/TextTyping/TypingEffect';
import { formatInTimeZone } from 'date-fns-tz'

// icons
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { RiFolderDownloadFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

// images
import jslogo from '../../assets/JavaScript-logo.png'
import tslogo from '../../assets/typescript-logo.svg'
import zustandlogo from '../../assets/zustandlogo.png'
import reduxlogo from '../../assets/reduxlogo.png'
import htmllogo from '../../assets/html.png'
import csslogo from '../../assets/CSS3_logo.svg'
import reactlogo from '../../assets/react-logo-png_seeklogo-273845.png'
import expresslogo from '../../assets/expressjs.svg'
import nodejslogo from '../../assets/nodejs-logo.gif'
import socketiologo from '../../assets/Socket-iologo.svg'
import dockerlogo from '../../assets/docker.png'
import mongologo from '../../assets/mongodb.webp'
import postgreslogo from '../../assets/postgres.png'
import gitlogo from '../../assets/github-logo.png'
import reactspin from '../../assets/react-spin.png'

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const timeZone = 'Europe/Minsk';
    const formattedTime = formatInTimeZone(time, timeZone, 'HH:mm:ss');
 
  const [theme, setTheme] = useState('light');
  const [showCVLangBlock, setShowCVLangBlock] = useState<boolean>(false)
  const [lang, setLang] = useState<Lang>('EN');
  const T = COPY[lang];

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'EN' ? 'RU' : 'EN'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles[`${theme === 'light' ? 'container-light' : 'container-dark'}`]}>
      {/* header */}
      <div className={styles['contact-info-cont']}>
        <div className={styles['left']}>
          <TypingEffect text={T.header.portfolio} speed={110} />
        </div>

        <div className={styles['right']}>
          <div className={styles['linklogo']}>
            <a href="https://github.com/KRIZZIX-GIT" aria-label="GitHub">
              <FaGithub color='white' size={35} />
            </a>
          </div>

          <div className={styles['devider']}>{T.header.contacts}</div>

          <div className={styles['linklogo']}>
            <a href="https://discord.com/users/891394523320705054" aria-label="Discord">
              <FaDiscord color='white' size={35} />
            </a>
          </div>

          <div className={styles['linklogo']}>
            <a href="https://t.me/theKRIZZIX" aria-label="Telegram">
              <FaTelegram color='white' size={35} />
            </a>
          </div>

          <div className={styles['devider']}></div>

          <div className={styles['linklogo']} onClick={toggleTheme} role="button" aria-label="Toggle theme">
            {theme === 'light' ? <CiDark color='white' size={35} /> : <CiLight color='white' size={35} />}
          </div>

          <div className={styles['linklogo']} onClick={toggleLang} role="button" aria-label="Toggle language">
            <MdLanguage color='white' size={35} />
            <span style={{ fontFamily: "WDXL Lubrifont SC", marginLeft: -6, fontSize: '25px' }}>{T.header.langShort}</span>
          </div>
        </div>
      </div>

      {/* first block */}
      <div className={styles['block-first']}>
        <div className={styles['main-info-block']}>
          <p style={{ fontSize: '90px', fontWeight: 'bold', fontFamily: "Neucha", letterSpacing: '0.1em' }}>
            {T.hero.hi}
          </p>

          <p style={{ fontSize: '50px', fontFamily: "WDXL Lubrifont SC" }}>
            {T.hero.role}
          </p>

          <p style={{ fontSize: '35px', fontFamily: "WDXL Lubrifont SC" }}>
            {T.hero.scroll}
          </p>
        </div>

        <div className={styles['ex-info-block']}>
          4
          <div className={styles['ex-info-block-text']}>
            {lang === 'EN' ? (
              <>
                <span>{T.experience.years}</span> <span>{T.experience.of}</span> <span>{T.experience.experience}</span>
              </>
            ) : (
              <>
                <span>{T.experience.years}</span>
                <span>{T.experience.experience}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* second block */}
      <div className={styles['block-second']}>
        <div
          className={styles['knowledge-content']}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', fontFamily: "Neucha", color: 'white', letterSpacing: '0.2em' }}>
            {T.skills.title}
          </h1>
         <div className={styles['knowledge-blocks']}>
            <h1>Frontend</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={jslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={tslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={reactlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={htmllogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={csslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={zustandlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={reduxlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
            <h1>Backend</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={nodejslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={expresslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={socketiologo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
            <h1>{T.skills.third}</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={postgreslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={mongologo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
            <h1>{T.skills.fourth}</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={gitlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={dockerlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
        </div>
        </div>

        <div className={styles['reactSvg-content']} data-aos="fade" data-aos-offset="500" data-aos-duration="500">
          <img src={reactspin} alt="React spinning logo" style={{ height: '100%' }} />
        </div>
      </div>


       {/* third block */}
      <div className={styles['block-last']}>
        <div className={styles['contact-block']}
         data-aos="fade-right"
       data-aos-offset="500"
       data-aos-duration="500"
        >
        <h1>{T.contacts.title}</h1>
        <a style={{textDecoration: 'none'}} href="https://t.me/theKRIZZIX" aria-label="Telegram-2"><span><FaTelegram color='white' size={70} />- Telegram</span></a>
         <a style={{textDecoration: 'none'}} href="https://discord.com/users/891394523320705054" aria-label="Discord-2"><span><FaDiscord color='white' size={70} />- Discord</span></a>
        <span onClick={() => setShowCVLangBlock(!showCVLangBlock)}><RiFolderDownloadFill color='white' size={70}/>{T.contacts.download}</span>
        <div className={styles[`${!showCVLangBlock ? 'cv-dropdown' : 'cv-dropdown-show'}`]}>
           <span className={styles['dropdownchoise']}>RU</span> | 
           <span className={styles['dropdownchoise']}>EN</span>
         </div>
        </div>
        <div className={styles['time-block']}
         data-aos="fade-left"
       data-aos-offset="500"
       data-aos-duration="500"
        >
          <h1>My current time:</h1>
          <p><MdLocationPin color='white' size={50} /> Belarus - Minsk</p>
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
