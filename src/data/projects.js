const projects = [
  {
    title: 'Elçi Yazılım Website Design',
    date: 'September 2024 - November 2024',
    description: [
  "This project is a modern company introduction website designed to showcase the company's profile, services, and contact information in a professional and user-friendly manner.",
  "The front-end is built with React and Material-UI (MUI), providing a responsive and sleek design optimized for both desktop and mobile devices.",
  "The backend is powered by Node.js and Express, creating a RESTful API that manages dynamic content such as team members, service details, and customer inquiries.",
  "The database used is PostgreSQL, which stores all the company data securely and efficiently.",
  "The API endpoints have been thoroughly tested using Postman to ensure reliability and smooth data flow between the client and server.",
  "This architecture allows for easy scalability and maintainability, making it simple to update the company information or add new features in the future.",
  "Elcitr.com",
],

    technologies: ['React', 'JS', 'MUI', 'Node.js','Postgresql','Express','Postman','Postgresql','Express','Postman','Axios'],
    imageUrl: '/images/elci.png',
  },



  {
    title: 'Receipt OCR Ai',
    date: 'November 2024 - January 2025',
    description: [
  "This project is an AI-powered invoice processing system that reads invoices, extracts relevant data, and organizes it into structured tables.",
  "The frontend is built entirely with React, utilizing Material-UI (MUI) for a responsive and intuitive user interface.",
  "The backend is powered by Python, leveraging machine learning models to perform invoice data extraction with an accuracy rate of approximately 55%-65%.",
  "Extracted data can be exported to Excel for further analysis or record-keeping.",
  "The system is designed to automate manual invoice processing, improving efficiency despite current accuracy limitations."
],

    technologies: ['React', 'JS', 'Json to Excel', 'Python', 'PaddleOCR', 'Node.js', 'PostgreSQL', 'Express', 'Postman', 'Axios'],
    imageUrl: '/images/ocrapp.png',
  },
  {
    title: 'BGYARDIM',
    date: 'March 2025 - Present',
    description: [
  "A web application developed to facilitate the distribution of scholarships and book donations to individuals in need.",
  "Developed a modern and user-friendly frontend using React and Tailwind CSS.",
  "Designed and implemented a dynamic admin panel for aid coordinators using TypeScript and Tailwind CSS.",
  "Built the backend with MongoDB (NoSQL), providing efficient CRUD operations for both users and administrators.",
  "Enabled seamless online application and management of various aid types through a secure and scalable system.",
],

    technologies: ['React', 'JS', 'Json to Excel', 'Typescript','TailwindCss','ViteJs', 'Multer','Zod','NodeMailer','Mailgun','Cors','Bcrypt', 'NoSQL', 'Node.js', 'MongoDB', 'Express', 'Postman', 'Axios'],
    imageUrl: '/images/bgyardımcom.png',
  },
  {
    title: 'Yakup Simsek Portfolio ',
    date: 'May 2025 - May 2025',
    description: [
      "Built a responsive and user-friendly interface using React, React Material UI, and React Hook Router.",
      "Implemented backend functionality with Node.js, and handled CRUD operations using PostgreSQL.",
      "Utilized Axios for API calls, pgAdmin for database management, and Postman for API testing.",
      "Created a dynamic structure to manage content such as education history, projects, certifications, and contact details.",
      "Developed a fully dynamic admin panel that grants the user full control over the website, enabling 100% content customization and management.",
  
],

    technologies: ['React', 'JS', 'Materıal UI',  'Node.js', 'PostgreSQL','SQL', 'Express', 'Postman', 'Axios', 'PgAdmin4'],
    imageUrl: '/images/ys_portfolio.png',
  },
//   {
//   title: 'Real-Time Monitoring Dashboard',
//   date: 'Jan 2023 - May 2023',
//   description: [
//     'Built a dashboard for monitoring cloud resources in real-time.',
//     'Used React for UI rendering and D3.js for data visualization.',
//     'Integrated Prometheus for metrics collection and Grafana for real-time charting and alerting.'
//   ],
//   technologies: ['React', 'D3.js', 'Prometheus', 'Grafana'],
//   imageUrl: '/images/project3.png',
// }

];

export default projects;