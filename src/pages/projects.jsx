// import React from 'react';
// import { Box, Typography, Paper, Stack, Avatar } from '@mui/material';

// const projects = [
//   {
//     title: 'Cloud Infrastructure Automation',
//     date: 'March 2024 - Present',
//     description: 'Automated cloud infrastructure using Terraform and AWS CloudFormation to enable scalable and reliable deployments.',
//     technologies: ['Terraform', 'AWS', 'CloudFormation', 'Python'],
//     imageUrl: '/images/project1.png',
//   },
//   {
//     title: 'Kubernetes Multi-Cluster Management',
//     date: 'June 2023 - Feb 2024',
//     description: 'Managed multiple Kubernetes clusters with Helm and ArgoCD for continuous deployment across different environments.',
//     technologies: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker'],
//     imageUrl: '/images/project2.png',
//   },
//   {
//     title: 'Real-Time Monitoring Dashboard',
//     date: 'Jan 2023 - May 2023',
//     description: 'Built a dashboard for monitoring cloud resources in real-time using React, D3.js and Prometheus.',
//     technologies: ['React', 'D3.js', 'Prometheus', 'Grafana'],
//     imageUrl: '/images/project3.png',
//   },
// ];

// export default function Projects() {
//   return (
//     <Box sx={{ maxWidth: 900, margin: 'auto', p: 4 }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         align="center"
//         sx={{ color: '#ffffff' }}
//       >
//         Projects
//       </Typography>

//       <Box
//         sx={{
//           position: 'relative',
//           pl: 4,
//           borderLeft: '3px solid #9b5de5', // Neon mor çizgi
//           ml: 2,
//         }}
//       >
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: 'relative',
//               mb: 6,
//               pl: 4,
//               '&:last-child': { mb: 0 },
//             }}
//           >
//             {/* Timeline Dot */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: '-13px',
//                 top: '8px',
//                 width: 20,
//                 height: 20,
//                 backgroundColor: '#9b5de5', // neon mor
//                 borderRadius: '50%',
//                 border: '3px solid #ffffff',
//                 zIndex: 2,
//               }}
//             />

//             {/* Saydam kutu */}
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                 backdropFilter: 'blur(6px)',
//                 color: '#fff',
//               }}
//             >
//               <Stack
//                 direction={{ xs: 'column', sm: 'row' }}
//                 spacing={3}
//                 alignItems="center"
//               >
//                 <Avatar
//                   variant="rounded"
//                   src={project.imageUrl}
//                   alt={project.title}
//                   sx={{ width: 120, height: 90, flexShrink: 0 }}
//                 />

//                 <Box>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {project.title}
//                   </Typography>
//                   <Typography variant="caption" color="#bbb" gutterBottom>
//                     {project.date}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     {project.description}
//                   </Typography>
//                   <Typography variant="body2" color="#ccc">
//                     <strong>Technologies:</strong>{' '}
//                     {project.technologies.join(', ')}
//                   </Typography>
//                 </Box>
//               </Stack>
//             </Paper>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }
