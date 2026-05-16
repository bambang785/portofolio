export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  associatedWith: string;
  description: string;
  skills: string[];
}

export const profileData = {
  name: "Bambang Adi Candra",
  title: "Web Developer | React.js | .NET/C#",
  location: "Bandung, West Java, Indonesia",
  email: "adicandrabambang@gmail.com",
  linkedin: "www.linkedin.com/in/bambangac",
  summary:
    "A Web Developer working as a Software Developer at Bank bjb, specializing in Business Intelligence, Analytics, & Regulatory systems. Proficient in full-stack development using React.js, Python, C# .NET, and SQL Server. Experienced in developing important financial applications, including The Fundamental Review of the Trading Book, Bank Financial Reporting System, and SLIK application. Looking for challenging roles where I can continue to grow my skills in modern IT development and software engineering.",
  skills: [
    "SQL Server Integration Services (SSIS)",
    "Microsoft SQL Server",
    "React.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Golang",
    ".NET Core / C#",
    "Oracle",
    "PostgreSQL",
  ],
  experience: [
    {
      id: "exp-1",
      company: "bank bjb",
      role: "Staff Development Team, Business Intelligence, Analytics & Regulatory",
      period: "November 2023 - Present",
      location: "Bandung, West Java, Indonesia",
      description: [
        "Design, create & Implement new applications",
        "Develop web applications using modern frameworks (React, Vue.js)",
        "Build RESTful API using Node.js, Python, Golang, .Net Core.",
        "Manage Database (Oracle, SQL Server, Postgresql)",
        "Create & Implement ETL (Extract Transform Load) Process",
        "Help troubleshoot issues",
      ],
    },
    {
      id: "exp-2",
      company: "PT Kereta Api Pariwisata (KAWISATA)",
      role: "Customer Service on Station",
      period: "August 2023 - November 2023",
      location: "Cimahi, West Java, Indonesia",
      description: [
        "Providing service to train passengers and prospective passengers",
        "Giving information at the station",
        "Handling questions and complaints from passengers",
        "Assisting passengers with their needs at the station",
      ],
    },
    {
      id: "exp-3",
      company: "PT Bank Mandiri (Persero) Tbk.",
      role: "Kriya Mandiri",
      period: "October 2022 - February 2023",
      location: "Bandung, West Java, Indonesia",
      description: [
        "Receive cash and checks for deposit",
        "Verify the amount and check the accuracy of the deposit slip",
        "Handle money transfers, withdrawals, and deposits for customers",
        "Serve and assist customers with financial transactions",
      ],
    },
    {
      id: "exp-4",
      company: "PT Len Industri (Persero)",
      role: "Logistic & Management System",
      period: "September 2021 - December 2021",
      location: "Bandung, West Java, Indonesia",
      description: [
        "Designed and developed an attendance application for student interns at PT Len. This system manages and stores monthly attendance reports for 6 interns, including regular attendance, sick leave documentation, management of other leave types.",
      ],
    },
  ] as Experience[],
  education: [
    {
      id: "edu-1",
      institution: "Widyatama University",
      degree: "Bachelor of Informatics Engineering, Information Technology",
      period: "September 2018 - November 2022",
    },
  ] as Education[],
  projects: [
    {
      id: "proj-1",
      title: "New SLIK",
      period: "Mar 2024 – Present",
      associatedWith: "bank bjb",
      description: "Developed the SLIK application, simplifying the reporting process for financial institutions. This application provides a user-friendly interface for efficient data management and reporting to ensure compliance with OJK standards.",
      skills: ["Next.js", "Python", "Full-Stack Development"]
    },
    {
      id: "proj-2",
      title: "New Greens",
      period: "Aug 2024 – Jun 2025",
      associatedWith: "bank bjb",
      description: "Developed a Bank Financial Reporting System using React.js for the frontend and C#.NET 6 for the backend. This system allows users to view the bank's balance sheet and other financial reports.",
      skills: ["Next.js", "ASP.NET", "C#", "React.js"]
    },
    {
      id: "proj-3",
      title: "Fundamental Review of the Trading Book (FRTB)",
      period: "Dec 2023 – Feb 2024",
      associatedWith: "bank bjb",
      description: "Developed a The Fundamental Review of the Trading Book application using Next.js for the frontend. This application to calculate and manage market risk capital requirements for financial institutions, particularly banks, in their trading book activities.",
      skills: ["Next.js", "Risk Management System"]
    },
    {
      id: "proj-4",
      title: "Android Attendance Application",
      period: "Sep 2021 – Dec 2021",
      associatedWith: "Widyatama University",
      description: "An Android app that connects interns and companies to track intern progress. Attendance: Check-in/check-out and QR code scanning for instant attendance. Report Upload: can upload and view reports from each other.",
      skills: ["Java", "Android Development"]
    }
  ] as Project[],
};
