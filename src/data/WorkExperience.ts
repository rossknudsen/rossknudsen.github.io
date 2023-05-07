export interface ITenure {
  employer: IEmployer;
  positions: IPosition[];
}

export interface IPosition {
  title: string;
  from: number | Date;
  to: number | Date | null;
  duration: string;
  workExamples?: string[];
  achievements?: string[];
}

export interface IEmployer {
  name: string;
  description: string;
  logoUrl?: string;
}

const datacom = {
  description: "Datacom is Australasia's largest homegrown tech company.",
  logoUrl: "img/datacom.png",
  name: "Datacom",
};

const nzhl = {
  description:
    "NZ Home Loans is a financial institution that aims to help kiwis become debt-free faster.",
  logoUrl: "img/nzhl-logo.png",
  name: "NZ Home Loans",
};

const gravity = {
  description:
    "Gravity Computing build bespoke IT solutions and provide IT administration services.",
  logoUrl: "img/gravity-computing-logo.png",
  name: "Gravity Computing",
};

const ecolab = {
  description:
    "Ecolab is a world leader in cleaning and sanitisation products for various industrial and consumer markets.",
  logoUrl: "img/ecolab-logo.png",
  name: "Ecolab",
};

const fonterra = {
  description: "World leading dairy producer",
  logoUrl: "img/fonterra-logo.jpg",
  name: "Fonterra",
};

const workExperience: ITenure[] = [
  {
    employer: datacom,
    positions: [
      {
        duration: "4.5 years",
        from: new Date(2019, 1, 1),
        title: "Fullstack Developer",
        to: null,
        workExamples: [
          "Senior developer for 18 months, providing software development, design, and deployment support to agile delivery teams. Mentored and collaborated with other developers on a large-scale integration project, while ensuring smooth BAU operations.",
          "Agile software team member for 15 months, working on enhancements. Contributed to the integration of a React-based web solution into a UWP application, enabling gradual migration to the web. Assisted in implementing bespoke, interactive graphs using D3.js. Added new APIs and integrated them with backend services.",
          "Proficient in using ASP.Net Framework/Core to develop APIs and web apps.",
          "Experienced in working with Entity Framework and SQL Server for data modeling and management.",
          "Skilled in using Azure DevOps to build CI/CD pipelines for software delivery.",
          "Familiar with various Azure technologies, including Web Apps, Function Apps, SQL Server, and Service Bus, and able to leverage them effectively to deliver scalable and reliable solutions.",
        ],
      },
    ],
  },
  {
    employer: nzhl,
    positions: [
      {
        duration: "1 year",
        from: new Date(2017, 2, 1), // "Mar 2017",
        title: "ICT Projects Manager",
        to: new Date(2018, 12, 31),
        workExamples: [
          "Liaison between NZHL and Datacom for large-scale software project.",
        ],
      },
      {
        duration: "1 year 8 months",
        from: new Date(2015, 6, 1), // "Jul 2015",
        title: "Systems Administrator",
        to: new Date(2017, 1, 1), // "Feb 2017",
        workExamples: [
          "Setup and maintain Office 365 mail and sharepoint access for 250+ users.",
          "Setup local software such as MS Office, MS Windows and proprietary software.",
          "Provide 1st/2nd level support to Head Office and franchise staff.",
        ],
      },
    ],
  },
  {
    employer: gravity,
    positions: [
      {
        duration: "2 Years",
        from: new Date(2013, 2, 1), // "Mar 2013",
        title: "IT Solutions Engineer",
        to: new Date(2015, 1, 1), // "Feb 2015",
        workExamples: [
          "Worked with my team to design and build business software solutions using Microsoft .Net technology.",
        ],
      },
    ],
  },
  {
    employer: ecolab,
    positions: [
      {
        achievements: [
          "Achieved sales budget for 2011",
          "Integration with the Nalco sales team through company merger",
        ],
        duration: "2 years",
        from: 2010,
        title: "WC Territory Manager",
        to: 2012,
      },
      {
        duration: "6 years",
        from: 2004,
        title: "Laboratory Tech/Chemist",
        to: 2010,
      },
    ],
  },
  {
    employer: fonterra,
    positions: [
      {
        duration: "1 year",
        from: 2003,
        title: "Senior Analyst",
        to: 2004,
      },
      {
        duration: "6 months",
        from: 2003,
        title: "Laboratory Technician",
        to: 2003,
      },
    ],
  },
];

export default workExperience;
