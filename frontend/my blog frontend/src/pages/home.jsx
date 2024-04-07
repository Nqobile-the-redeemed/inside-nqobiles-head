import React, { useState } from 'react';
import headshotDemo from '../assets/images/headshotDemo.png'
import PostCard from '../cards/postCard'
import ServiceCard from '../cards/serviceCard'
import SkillCard from '../cards/skillCard'
import { Link } from 'react-router-dom';
import MediaSlider from '../cards/mediaSlider';
import EnquiryButton from '../global-assets/enquiryButton';

export default function Home({getColorSwatch}) {
  
  const [onHoverImage, setOnHoverImage] = useState('https://source.unsplash.com/high-rise-buildings-iSZJxklblkw');
  const [onHoverVideo, setOnHoverVideo] = useState('');
  const [videoStyle, setVideoStyle] = useState({
    display: 'block',
    background:'transparent'
  });

  const style = {
    backgroundImage: `url(${onHoverImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


let examplePosts = [
  {
    title: 'Tales of the crypt keeper',
    pageLink: 'tales-of-the-crypt-keeper',
    filter: 'media',
    tags: ['monkey', 'chimp', 'film-Review'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'End of Evangelion',
    pageLink:'end-of-evangelion',
    tags: ['japan', 'anime', 'mecha'],
    filter: 'media',
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/red-staircase-bar-handle-OiERUvVrioU',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Rise of the new Colosus',
    tags: ['fantasy', 'anime', 'manga', 'fururistic'],
    pageLink:'rise-of-the-new-colosus',
    filter: 'media',
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/a-view-of-a-city-with-tall-buildings-xU6gtfiLAak',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
},
{
    title: 'The tales of the hungry Dawn',
    pageLink:'the-tales-of-the-hungry-dawn',
    tags: ['space opera', 'war', 'pirates', 'film'],
    filter: 'media',
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/high-rise-buildings-city-scape-photography-wpU4veNGnHg',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
},
{
    title: 'Arichitechts of a brave new world',
    tags: ['archeology', 'sci-fi', 'space-travel' , 'manga'],
    filter: 'media',
    pageLink: 'architechts-of-a-brave-new-world',
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/a-view-of-a-city-with-tall-buildings-and-a-body-of-water-3j4UXcPxwAQ',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
},
{
    title: 'Rise of the planet of the Apes',
    tags: ['monkey', 'chimp', 'film-Review'],
    filter: 'media',
    pageLink: 'rise-of-the-planet-of-the-apes',
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/brown-building-near-intersection-W_MUqtuHwyY',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/',
        'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Mobile Banking App Design',
    pageLink: 'mobile-banking-app-design',
    filter: 'design',
    tags: ['banking', 'mobile', 'open-banking'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Meat Supermarket',
    pageLink: 'meat-supermarket',
    filter: 'design',
    tags: ['supermarket', 'meat', 'grocery'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  }, 
  {
    title: 'Kraftwerk',
    pageLink: 'kraftwerk',
    filter: 'design',
    tags: ['music', 'electronic', 'german'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Scrabble',
    pageLink: 'scrabble',
    filter: 'design',
    tags: ['board game', 'word game', 'family game'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'transportation company',
    pageLink: 'transportation-company',
    filter: 'design',
    tags: ['transport', 'logistics', 'delivery'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architect\\ure-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'FlagHolsten Grocery Store',
    pageLink: 'flagholsten-grocery-store',
    filter: 'design',
    tags: ['supermarket', 'meat', 'grocery'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  }, 
  {
    title: 'Jenga',
    pageLink: 'jenga',
    filter: 'design',
    tags: ['board game', 'family game', 'party game'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Scrabble',
    pageLink: 'scrabble',
    filter: 'design',
    tags: ['board game', 'word game', 'family game'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Multimodal Marketplace App Development',
    pageLink: 'multimodal-marketplace-app-development',
    filter: 'development',
    tags: ['marketplace', 'app', 'development', 'multimodal', 'ecommerce'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Pomodoro Timer App',
    pageLink: 'pomodoro-timer-app',
    filter: 'development',
    tags: ['productivity', 'app', 'development', 'pomodoro', 'timer'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  }, 
  {
    title: 'Crypto Currency Tracker App',
    pageLink: 'crypto-currency-tracker-app',
    filter: 'development',
    tags: ['crypto', 'currency', 'app', 'development', 'tracker'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Stocks Portfolio Tracker App',
    pageLink: 'stocks-portfolio-tracker-app',
    filter: 'development',
    tags: ['stocks', 'portfolio', 'app', 'development', 'tracker'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Hospital Administration Dashboard',
    pageLink: 'hospital-administration-dashboard',
    filter: 'development',
    tags: ['hospital', 'administration', 'dashboard', 'app', 'development'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architect\\ure-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Budgeting App',
    pageLink: 'budgeting-app',
    filter: 'development',
    tags: ['budgeting', 'finance', 'app', 'development', 'tracker'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  }, 
  {
    title: 'Options Trading App',
    pageLink: 'options-trading-app',
    filter: 'development',
    tags: ['options', 'trading', 'finance', 'app', 'development'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
  {
    title: 'Calorie Tracking App',
    pageLink: 'calorie-tracking-app',
    filter: 'development',
    tags: ['calorie', 'tracking', 'health', 'app', 'development'],
    description: 'This is a description of the post.',
    summary: 'This is a summary of the post.',
    coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
    refHold: "",
    detailedDescription: 'This is a detailed description of the category.',
    categoryGallery: [
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/',
      'https://source.unsplash.com/abstract-architecture-building-business-263402/'
    ]
  },
];

      let exampleServices = [
        {
          imageHighlight: 'https://source.unsplash.com/person-writing-on-white-paper-v9FQR4tbIq8',
          videoHighlight: '',
          title: 'UX/UI Design',
          iconFill: 'black',
          iconD: "M7 16C7.55 16 8 16.45 8 17C8 18.1 7.1 19 6 19C5.83 19 5.67 18.98 5.5 18.95C5.81 18.4 6 17.74 6 17C6 16.45 6.45 16 7 16ZM18.67 3C18.41 3 18.16 3.1 17.96 3.29L9 12.25L11.75 15L20.71 6.04C21.1 5.65 21.1 5.02 20.71 4.63L19.37 3.29C19.17 3.09 18.92 3 18.67 3V3ZM7 14C5.34 14 4 15.34 4 17C4 18.31 2.84 19 2 19C2.92 20.22 4.49 21 6 21C8.21 21 10 19.21 10 17C10 15.34 8.66 14 7 14Z",
          description: 'This is a description of the post.',
          pageLink: 'ux-ui-design'
        },
        {
          imageHighlight: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
          videoHighlight: 'https://www.youtube.com/embed/lPXRrxSWwbI?si=Pl8sDd6JSP24UFBI?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1',
          title: 'Web Development',
          iconFill: 'black',
          iconD: "M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6ZM13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16C14 15.12 13.61 14.33 13 13.78V12ZM11 17.5C10.17 17.5 9.5 16.83 9.5 16C9.5 15.17 10.17 14.5 11 14.5C11.83 14.5 12.5 15.17 12.5 16C12.5 16.83 11.83 17.5 11 17.5ZM22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8ZM21 18H17V10H21V18Z",
          description: 'This is a description of the post.',
          pageLink: 'web-development'
        },
        {
          imageHighlight: 'https://source.unsplash.com/space-gray-iphone-x-on-stand-near-silver-imac-and-apple-magic-keyboard-L0nipfx-Ry4',
          videoHighlight: 'https://www.youtube.com/embed/dKINfl0SnSY?si=IglabvpXyRudcPfN?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1',
          title: 'App Development',
          iconFill: 'black',
          iconD: "M21 0H3V24H21V0ZM14 22H10V21H14V22ZM19.25 19H4.75V3H19.25V19Z",
          description: 'This is a description of the post.',
          pageLink: 'app-development'
        },
      ]

      let exampleSkills = [
        {
          skill: 'Front End Development',
          tag: [
            {
              skill: 'React',
              icon: ''
            },
            {
              skill: 'Vite',
              icon: ''
            },
            {
              skill: 'Javascript',
              icon: ''
            },
            {
              skill: 'HTML',
              icon: ''
            },
            {
              skill: 'CSS',
              icon: ''
            }
          ]
        },
        {
          skill: 'Back End Development',
          tag: [
            {
              skill: 'Node JS',
              icon: ''
            },
            {
              skill: 'Express JS',
              icon: ''
            },
            {
              skill: 'Mongo DB',
              icon: ''
            }
          ]
        },
        {
          skill: 'UX/UI Design',
          tag: [
            {
              skill: 'Figma',
              icon: ''
            },
            {
              skill: 'Adobe Creative Suite',
              icon: ''
            }
          ]
        },
        {
          skill: 'Project Managemnt',
          tag: [
            {
              skill: 'Notion',
              icon: ''
            },
            {
              skill: 'Agile',
              icon: ''
            },
            {
              skill: 'Scrum',
              icon: ''
            }
          ]
        },
        {
          skill: 'Content Management Systems',
          tag: [
            {
              skill: 'Wordpress',
              icon: ''
            },
            {
              skill: '  Webflow',
              icon: ''
            },
            {
              skill: 'Wix',
              icon: ''
            }
          ]
        },
        {
          skill: 'Financial Modeling',
          tag: [
            {
              skill: 'R',
              icon: ''
            },
            {
              skill: 'Excel',
              icon: ''
            },
            {
              skill: 'VBA',
              icon: ''
            }
          ]
        }
      ];

      let exampleCategories = [
        {
          name: 'Design Portfolio',
          tags: [
            {
              subject: 'ux/ui',
              icon: ''
            },
            {
              subject: 'web design',
              icon: ''
            },
            {
              subject: 'graphic design',
              icon: ''
            },
            {
              subject: 'branding',
              icon: ''
            }
          ],
          shortDescription: 'This is a short description of the category.',
          coverImage: 'https://source.unsplash.com/abstract-architecture-building-business-263402/',
          categoryLink: 'design-portfolio',
          categoryFilter: 'design',
          detailedDescription: 'This is a detailed description of the category.',
          categoryGallery: [
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/'
          ]
        },
        {
          name: 'Developer Portfolio',
          tags: [
            {
              subject: 'web development',
              icon: ''
            },
            {
              subject: 'full stack',
              icon: ''
            },
            {
              subject: 'front end',
              icon: ''
            },
            {
              subject: 'back end',
              icon: ''
            }
          ],
          shortDescription: 'This is a short description of the category.',
          coverImage: 'https://source.unsplash.com/abstract-architecture-building-business-263402/',
          categoryLink: 'developer-portfolio',
          categoryFilter: 'development',
          detailedDescription: 'This is a detailed description of the category.',
          categoryGallery: [
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/'
          ]
        },
        {
          name: 'Media',
          tags: [
            {
              subject: 'film',
              icon: ''
            },
            {
              subject: 'anime',
              icon: ''
            },
            {
              subject: 'manga',
              icon: ''
            },
            {
              subject: 'tv shows',
              icon: ''
            },
            {
              subject: 'reviews',
              icon: ''
            },
            {
              subject: 'opinions',
              icon: ''
            }
          ],
          shortDescription: 'This is a short description of the category.',
          coverImage: 'https://source.unsplash.com/abstract-architecture-building-business-263402/',
          categoryLink: 'design-portfolio',
          categoryFilter: 'media', 
          detailedDescription: 'This is a detailed description of the category.',
          categoryGallery: [
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/',
            'https://source.unsplash.com/abstract-architecture-building-business-263402/'
          ]
        },
      ]

       

      let latestPosts = []
      let counter1 = 0
      let counter2 = examplePosts.length - 1
      let indexHolder = ['alpha', 'beta', 'omega', 'sharingan']
      let counter3 = 0

      while (counter1 < 4) {
        latestPosts.push(examplePosts[counter2])
        latestPosts[counter1].refHold = indexHolder[counter3]
        counter1++ 
        counter2--
        counter3++
      }

      let truthTeller = () => {
        console.log(latestPosts)
      }

      let cardset = latestPosts.map((card, index) => {
                  return <PostCard key={index} data={card} className={card.refHold} coverImage={card.coverImage}/>
                })

      let serviceSet = exampleServices.map((service, index) => {
        return <ServiceCard key={index} data={service} onHoverImage={onHoverImage} setOnHoverImage={setOnHoverImage} onHoverVideo={onHoverVideo} setOnHoverVideo={setOnHoverVideo} videoStyle={videoStyle} setVideoStyle={setVideoStyle}/>
      })

      let skillSet = exampleSkills.map((skill, index) => {
        return <SkillCard key ={index} data={skill} />
      })

      let categoriesSet = exampleCategories.map((category, index) => {
        return <MediaSlider examplePosts = {examplePosts} getColorSwatch = {getColorSwatch} index={index} data={category} />
      })

      let [name, setName] = useState('')
      let [email, setEmail] = useState('')
      let [message, setMessage] = useState('')
      let [subject, setSubject] = useState('')
      let [formSubmit, setFormSubmit] = useState(false)
      let [phoneNumber, setPhoneNumber] = useState('')

      let contactFormSubmit = (e) => {}

      let handleChange = (e) => {}

      let enquiryServices = [
        'UX/UI Design',
        'Web Development',
        'App Development',
        'Project Management',
        'Content Management Systems',
        'Financial Modeling',
        'Permanent Job Offer',
        'Freelance Work',
        'Consultation',
        'Staff Augmentation',
        'Startup Idea'
      ]

      let serviceButtonSet = enquiryServices.map((service, index) => {
        return(
          <EnquiryButton index={index} data={service} />
        )
      })
      

    return (
        <div className="homePage">
           <div className='heroSection'>
            <div className='newEpisodeContainer'>
                {cardset}
                {/* <button onClick={truthTeller}>test your shit</button>
                <h4>new episodes come here</h4> */}
            </div>
            <div className='profileHeadshot'>
                <p className='nameText'>Nqobile blessing madziba</p>
                <p className='jobText'>UX/UI Designer</p>
                {/* <hr /> */}
                <p className='jobText'>Full Stack Web Developer</p>
                <img src ={headshotDemo} className='heroImage'/>
            </div>
           </div>
           <div className='aboutSection'>
                <div className='aboutSummary overViewSection'>
                  <p className='aboutHeading sectionHeading'>About</p>
                  <p className='aboutSummaryText blackBackgroundBody'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <button className='aboutButton blackBackgroundButton'>Read More</button>
                </div>
                <div className='aboutImageHolder'>
                </div>
           </div>
           <div className='servicesSection'>
            <div className='serviceList'>
                <div className='servicesOverview overViewSection'>
                    <p className='servicesHeading sectionHeading'>Services</p>
                    <p className='servicesSummary blackBackgroundBody'>I offer a range of services that cater to the needs of the modern digital world. From UX/UI design to full stack web development, I have the skills to bring your digital dreams to life.</p>
                </div>
                {serviceSet}
            </div>
            <div className='serviceImageHolder' style={style}>
              <iframe 
                width="0" 
                height="0" 
                src={onHoverVideo}
                title="YouTube video player" 
                style={videoStyle}
                frameborder="0" 
                autoplay="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
           </div>
           <div className = "skillsSection">
            <div className='skillsList'>
              {skillSet}
            </div>
            <div className='skillsOverview overViewSection'>
              <p className='skillsHeading sectionHeading'>Skills</p>
              <p className='skillsOverviewText blackBackgroundBody'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boc</p>
              <button className='skillsButton blackBackgroundButton'>
                <Link className='blackBackgroundButtonLink'>
                  Learn More
                </Link>
              </button>
            </div>
           </div>
           <div className='categoriesSection'>
                {categoriesSet}
           </div>
           <div className='contactSection'>
            <div className='contactOverview overViewSection'>
              <p className='contactHeading sectionHeading'>Contact</p>
              <p className='contactOverviewText blackBackgroundBody'>I am available for freelance work. If you would like to work with me, please get in touch.</p>
              <div className='contactFormPersonal omegaContact'>
                  <form onSubmit={contactFormSubmit} className='contactForm actualForm'>
                    <div className='contactInputSet'>
                      <label className='contactLabel'>
                        Name
                        <input className='contactInput' type="text" value={name} onChange={handleChange} />
                      </label>
                      <label className='contactLabel'>
                        Email
                        <input className='contactInput' type="text" value={email} onChange={handleChange} />
                      </label>
                      <label className='contactLabel'>
                        Phone Number
                        <input className='contactInput' type="text" value={phoneNumber} onChange={handleChange} />
                      </label>
                      <label className='contactLabel'>
                        Subject
                        <input className='contactInput' type="text" value={subject} onChange={handleChange} />
                      </label>
                    </div>
                    <div className='titleContainer'>
                      <p>Select your desired service</p>
                      <div>
                        {serviceButtonSet}
                      </div>
                    </div>
                    <div>
                      <p>Enter Your enquiry details</p>
                      <label className='contactLabel'>
                        Message
                        <input className='contactInput' type="textarea" value={message} onChange={handleChange} />
                      </label>
                    </div>
                    <button type='submit'>Submit</button>
                  </form>
              </div>
            </div>
           </div>
        </div>
        
    )
}