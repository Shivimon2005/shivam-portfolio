import { Experience, Project, Education, Certificate, Social } from './types';

export const RESUME_DATA = {
  name: "Shivam",
  role: "Automation Software Engineer",
  location: "Naddi, Dharamshala",
    summary: "Founder of Daemon Labs (coming soon) and automation software engineer with experience in automation testing, skilled in platforms like Jenkins and Docker. Enhanced Python automation libraries and integrated them into feature services, improving testing efficiency. Aiming to leverage technical skills and collaborative abilities to drive quality assurance.",
  
  contact: [
    { label: "Phone", value: "8628989364", icon: "phone", href: "tel:+918628989364" },
    { label: "Email", value: "s.ksharma30189@gmail.com", icon: "mail", href: "mailto:s.ksharma30189@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/shivam0", icon: "linkedin", href: "https://www.linkedin.com/in/shivam0/" },
    { label: "Location", value: "Naddi, Dharamshala", icon: "map", href: "https://www.google.com/maps/place/Naddi+Castle+Homestay/@32.2500951,76.3037411,17z/data=!4m20!1m10!3m9!1s0x391b57cdb5e9e8cb:0x1f690803557673f3!2sNaddi+Castle+Homestay!5m2!4m1!1i2!8m2!3d32.2500907!4d76.308612!16s%2Fg%2F11ncl_3r6s!3m8!1s0x391b57cdb5e9e8cb:0x1f690803557673f3!5m2!4m1!1i2!8m2!3d32.2500907!4d76.308612!16s%2Fg%2F11ncl_3r6s?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" }
  ] as Social[],

  experience: [
    {
            company: "Daemon Labs",
            role: "Founder",
            period: "Coming Soon",
            details: [
                      "Building Daemon Labs — coming soon."
                    ]
    },
    {
      company: "Xperi Inc.",
      role: "Automation Software Engineer",
      period: "Aug 2022 - Dec 2023",
      details: [
        "Added Jacoco code coverage verification to all FE services, ensuring Jenkins builds pass/fail based on thresholds.",
        "Enhanced Python automation library with new functionalities to test developer code.",
        "Integrated automation library into all FE services, streamlining testing processes.",
        "Deployed FE containers in integration and preprod environments using Docker.",
        "Upgraded Python dependencies in FE containers for system stability."
      ]
    }
  ] as Experience[],

  projects: [
    {
      title: "Sorting Visualizer",
      description: "Designed a visualizer using Simple Direct Media Layer (SDL) library to analyze various sorting algorithms.",
      tech: "C++, SDL",
    },
    {
      title: "Art of Pixels",
      description: "Image website hosted on AWS S3, integrated with code pipeline via Github.",
      tech: "HTML, CSS, JS, AWS",
    },
    {
      title: "Desktop Cleaner",
      description: "Python automation script that organizes desktop files into folders based on categories.",
      tech: "Python",
    }
  ] as Project[],

  skills: [
    "Python", "C++", "Docker", "Jenkins", "AWS", "Kafka", "Git/Github", "Pytest", "Postman", "HTML/CSS"
  ],

  softSkills: [
    "Problem Solver", "Adaptive", "Performance-Oriented", "Team Player"
  ],

  education: {
    institution: "Lovely Professional University",
    degree: "B.Tech, Computer Science",
    year: "2019",
    grade: "8.11 CGPA"
  } as Education,

  certificates: [
    { name: "Data Structures and Algorithm", issuer: "GeeksforGeeks", date: "07.2021" },
    { name: "Google IT Support Specialization", issuer: "Coursera", date: "09.2021" },
    { name: "Crash Course on Python", issuer: "Coursera", date: "10.2021" }
  ] as Certificate[],

  extra: {
    title: "Naddi Castle Host",
    description: "Host at Naddi Castle Run, a successful homestay in Naddi, Dharamshala (HP).",
    rating: "4.7/5 Google Rating",
    subRating: "9.4/10 Booking.com"
  }
};
