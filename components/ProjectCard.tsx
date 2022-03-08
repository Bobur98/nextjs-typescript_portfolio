import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import { IProject } from '../type';
import img from '../public/vercel.svg';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';
const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        width="300"
        height="150"
        src={img}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black text-white bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark: dark:bg-dark-100 "
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                width="300"
                height="150"
                src={img}
                alt={name}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark: bg-dark-200"
              >
                <GitHubIcon style={{ color: 'white' }} />{' '}
                <span className="text-white">Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark: bg-dark-200"
              >
                <GitHubIcon style={{ color: 'white' }} />{' '}
                <span className="text-white">Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200 "
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full outline-none top-3 right-3 focus: dark:bg-dark-200"
          >
            <CloseIcon style={{ color: 'black' }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
