import { Button, ButtonProps, Stack, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img from '../public/imgs/hacker.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Image
        alt="portfolio image"
        src={img}
        width="128px"
        height="128px"
        className="mx-auto border rounded-full"
        quality={100}
      />
      <h3 className="my-4 font-medium tracking-wider text-3x1 font-kaushan">
        <span style={{ color: '#1976d2' }}>Bobur</span>
        Dev.
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark: bg-black-500">
        Web Developer
      </p>
      <a
        style={{ gap: '10px' }}
        className="flex items-center justify-center px-2 py-1 my-2 space-x-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        href="/assests/Summit Dey Resume.pdf"
        download="Summit Dey Resume.pdf"
      >
        <CloudDownloadIcon color="primary" /> <span> Download resume</span>{' '}
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <Link href="/" passHref>
          <a aria-label="github">
            <GitHubIcon color="primary" />
          </a>
        </Link>
        <Link href="/" passHref>
          <a aria-label="linkedin">
            <LinkedInIcon color="primary" />
          </a>
        </Link>
      </div>
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200">
        <div className="space-x-2">
          <span>
            {' '}
            <LocationOnIcon color="primary" /> Seoul, Korea
          </span>
        </div>
        <p className="my-2">example@gmail.com</p>
        <p className="my-2">+545465154</p>
      </div>

      <div
        style={{
          marginTop: '20px',
        }}
      >
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-darkblue to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() => window.open('mailto:code.sumax@gmail.com')}
        >
          Email me
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-darkblue to-blue-500 focus:outline-none hover:scale-105 "
        >
          {/* //TODO remove bg black */}
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
