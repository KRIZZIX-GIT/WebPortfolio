import React, { useState, useEffect } from 'react';
import webdisignsert from '../../assets/1.png';
import jssert from '../../assets/2.png';
import fedsert from '../../assets/3.png';
import datasert from '../../assets/4.png';
import './ImageSlider.module.css'; // Импортируем стили

const ImageSlider = () => {
  const images = [webdisignsert, jssert, fedsert, datasert];
  const texts = [
    "Ваш текст для первого изображения", // Измените это
    "Текст для второго изображения",     // Измените это
    "Текст для третьего изображения",    // Измените это
    "Текст для четвертого изображения"   // Измените это
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
      setCurrentText(texts[nextIndex]); // Обновляем текст
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images, texts]);

  return (
    <div className="sertificat">
      <h1>{currentText}</h1>
      <img src={currentImage} alt="Slideshow" className="sertificat-img" />
    </div>
  );
};

export default ImageSlider;