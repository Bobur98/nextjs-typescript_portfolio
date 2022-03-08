import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import Head from 'next/head';
const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web developer | resume</title>
      </Head>{' '}
      {/* education and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className=""
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h6 className="my-2 text-xl font-bold">
              Computer science Ehgineering
            </h6>
            <p className="font-semibold">Sejong University</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className=""
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h6 className="my-2 text-xl font-bold">Software Engineer Jr. </h6>
            <p className="font-semibold">shkjfbshjk bsfbsjh fsjf bsjdf bs</p>
          </div>
        </motion.div>
      </div>
      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
