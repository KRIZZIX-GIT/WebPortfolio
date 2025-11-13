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
import { RiArrowDownWideLine } from "react-icons/ri";

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
import npmlogo from '../../assets/Npm-logo.svg.png'

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
  useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme); 
}, [theme]);

  const [showCVLangBlock, setShowCVLangBlock] = useState<boolean>(false)
  const [lang, setLang] = useState<Lang>('EN');
  const T = COPY[lang];

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'EN' ? 'RU' : 'EN'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleDownloadCVEN = () => {
    const link = document.createElement('a');
    link.href = 'URL_TO_YOUR_FILE'; 
    link.download = 'CV-EN.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadCVRU = () => {
    const link = document.createElement('a');
    link.href = 'URL_TO_YOUR_FILE'; 
    link.download = 'CV-RU.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     <>
     <style>
    {`
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
      }
      /* Светлая тема */
      [data-theme='light'] ::-webkit-scrollbar-track {
        padding: 3px;
        background: linear-gradient(210deg, #ea9dff 45%, #6ba1ff 55%);
      }
      /* Темная тема */
      [data-theme='dark'] ::-webkit-scrollbar-track {
        padding: 3px;
        background: linear-gradient(210deg, #6a4f9f 45%, #203f82ff 55%);
      }
      /* Прозрачный ползунок */
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0); 
      }
    `}
  </style>
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

          <div className={styles['linklogo2']} onClick={toggleTheme} role="button" aria-label="Toggle theme">
            {theme === 'light' ? <CiDark color='white' size={35} /> : <CiLight color='white' size={35} />}
          </div>

          <div className={styles['linklogo2']} onClick={toggleLang} role="button" aria-label="Toggle language">
            <MdLanguage color='white' size={35} />
            <span style={{ fontFamily: "WDXL Lubrifont SC", marginLeft: -6, fontSize: '25px' }}>{T.header.langShort}</span>
          </div>
        </div>
      </div>

      {/* first block */}
      <div className={styles['block-first']}>
      <div className={styles['block-first-content']}>
       <div className={styles['main-info-block']}>
      <span className={styles['main-info-block-h1']}>
        {T.hero.hi}
      </span>
      <p className={styles['main-info-block-role']}>
        {T.hero.role}
      </p>
      <p className={styles['main-info-block-scroll']}>
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

  <div className={styles['scroll-arrows']} aria-hidden="true">
    <RiArrowDownWideLine className={styles['arrow']} style={{marginTop: '-30px', position: 'absolute'}} size={70} />
    <RiArrowDownWideLine className={styles['arrow']} size={70} />
  </div>
</div>

      {/* second block */}
      <div className={styles['block-second']}>
        <div
          className={styles['knowledge-content']}
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="500"
        >
          <h1 className={styles['knowledge-content-h1-main']}>
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
             <h1>{T.skills.tools}</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={gitlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={dockerlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={npmlogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
            <h1>{T.skills.databases}</h1>
            <div className={styles['knowlege-blocks-content']}>
            <div className={styles['knowledge-block']}>
                <img src={postgreslogo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            <div className={styles['knowledge-block']}>
                <img src={mongologo} style={{ height: '80%', borderRadius: '15px' }} />
            </div>
            </div>
           
        </div>
        </div>

        <div className={styles['reactSvg-content']} data-aos="fade" data-aos-offset="70" data-aos-duration="500">
          <img src={reactspin} alt="React spinning logo" style={{ height: '100%' }} />
        </div>
      </div>


       {/* third block */}
      <div className={styles['block-last']}>
        <div className={styles['contact-block']}
         data-aos="fade"
       data-aos-offset="400"
       data-aos-duration="500"
        >
        <h1>{T.contacts.title}</h1>
        <a style={{textDecoration: 'none'}} href="https://t.me/theKRIZZIX" aria-label="Telegram-2"><span><FaTelegram className={styles['contact-icon']} />- Telegram</span></a>
         <a style={{textDecoration: 'none'}} href="https://discord.com/users/891394523320705054" aria-label="Discord-2"><span><FaDiscord className={styles['contact-icon']} />- Discord</span></a>
         <a className={styles['github-hidden-link']} style={{textDecoration: 'none'}} href="https://github.com/KRIZZIX-GIT" aria-label="GitHub-2"><span><FaGithub className={styles['contact-icon']} />- GitHub</span></a>
        <span onClick={() => setShowCVLangBlock(!showCVLangBlock)}><RiFolderDownloadFill className={styles['contact-icon']}/>{T.contacts.download}</span>
        <div className={styles[`${!showCVLangBlock ? 'cv-dropdown' : 'cv-dropdown-show'}`]}>
           <span onClick={handleDownloadCVRU} className={styles['dropdownchoise']}>RU</span> | 
           <span onClick={handleDownloadCVEN} className={styles['dropdownchoise']}>EN</span>
         </div>
        </div>
        <div className={styles['time-block']}
         data-aos="fade"
       data-aos-offset="400"
       data-aos-duration="500"
        >
          <h1>{T.time.title}</h1>
          <p>{T.time.location}</p>
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
