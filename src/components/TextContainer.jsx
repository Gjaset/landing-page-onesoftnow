import { React, Fragment } from 'react';
import { motion } from 'framer-motion';

// const fadeIn = (direction = 'up') => {
//   return {
//     initial: {
//       y: direction === 'up' ? 40 : -60,
//       opacity: 0,
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//   };
// };

const TextContainer = () => {
  return (
    <Fragment>
      <motion.div
        initial={{
          y: -60,
          x: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.1,
            ease: 'easeInOut',
          },
        }}
        className="text"
      >
        <span>Si tu lo sueñas, nosotros lo programamos.</span>
      </motion.div>
      <motion.div
        initial={{
          y: 60,
          x: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.1,
            ease: 'easeInOut',
          },
        }}
        className="textsub"
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          urna nunc, auctor id interdum ut, gravida quis ligula. Sed vitae urna
          condimentum, euismod dolor ut, faucibus erat. Etiam luctus semper
          consectetur. Curabitur viverra aliquet felis, sit amet laoreet velit
          tristique ac. Fusce facilisis interdum metus quis aliquet. Ut pretium
          orci eget leo dignissim congue.
        </span>
      </motion.div>
    </Fragment>
  );
};

export default TextContainer;
