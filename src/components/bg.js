// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';


// const gradients = [
//   'linear-gradient(135deg,rgb(87, 11, 87) 0%,rgb(92, 10, 85) 100%)',
//   'linear-gradient(135deg,rgb(58, 8, 82) 0%,rgb(46, 7, 97) 100%)',
//   'linear-gradient(135deg,rgb(51, 9, 119) 0%,rgb(6, 62, 95) 100%)',
//   'linear-gradient(135deg,rgb(10, 70, 119) 0%,rgb(6, 99, 94) 100%)',
//   'linear-gradient(135deg,rgb(11, 85, 73) 0%,rgb(12, 88, 9) 100%)',
// ];

// const GradientBackground = () => {
//   const control0 = useAnimation();
//   const control1 = useAnimation();
//   const control2 = useAnimation();
//   const control3 = useAnimation();
//   const control4 = useAnimation();

//   const controlsArray = [control0, control1, control2, control3, control4];

//   const [activeIndex, setActiveIndex] = React.useState(0);

//   React.useEffect(() => {
//     controlsArray.forEach((ctrl, i) => {
//       ctrl.set({ opacity: i === 0 ? 1 : 0 });
//     });

//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % controlsArray.length;

//       controlsArray[activeIndex].start({ opacity: 0, transition: { duration: 2 } });
//       controlsArray[nextIndex].start({ opacity: 1, transition: { duration: 2 } });

//       setActiveIndex(nextIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [activeIndex, controlsArray]);

//   return (
//     <>
//       {gradients.map((grad, i) => (
//         <motion.div
//           key={i}
//           animate={controlsArray[i]}
//           initial={{ opacity: 0 }}
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             backgroundImage: grad,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             zIndex: -9999,
//           }}
//         />
//       ))}
//     </>
//   );
// };


// export default GradientBackground;
