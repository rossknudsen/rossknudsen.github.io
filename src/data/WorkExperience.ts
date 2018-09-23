export interface ITenure {
    employer: IEmployer;
    positions: IPosition[];
}

export interface IPosition {
    title: string,
    from: number | Date,
    to: number | Date | null,
    duration: string,
    workExamples?: string[],
    achievements?: string[]
}

export interface IEmployer {
    name: string,
    description: string,
    logoUrl?: string
}

const nzhl = {
    description: "NZ Home Loans is a financial institution that aims to help kiwis become debt-free faster.",
    logoUrl: "img/nzhl-logo.png",
    name: "NZ Home Loans",
};

const gravity = {
    description: "Gravity Computing build bespoke IT solutions and provide IT administration services.",
    logoUrl: "img/gravity-computing-logo.png",
    name: "Gravity Computing",
};

const ecolab = {
    description: "Ecolab is a world leader in cleaning and sanitisation products for various industrial and consumer markets.",
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
        employer: nzhl,
        positions: 
        [
            {
                duration: "1 year",
                from: new Date(2017, 2, 1), // "Mar 2017",
                title: "ICT Projects Manager",                
                to: null,
                workExamples: [
                    "Liaison between NZHL and Datacom for 700k+ software project."
                ]
            },
            {
                duration: "1 year 8 months",
                from: new Date(2015, 6, 1), // "Jul 2015",
                title: "Systems Administrator",
                to: new Date(2017, 1, 1), // "Feb 2017",
                workExamples: [
                    "Setup and maintain Office 365 mail and sharepoint access for 250+ users.",
                    "Setup local software such as MS Office, MS Windows and proprietary software.",
                    "Provide 1st/2nd level support to Head Office and franchise staff."
                ]
            }
        ]
    },
    {
        employer: gravity,
        positions: 
        [
            {
                duration: "2 Years",
                from: new Date(2013, 2, 1), // "Mar 2013",
                title: "IT Solutions Engineer",
                to: new Date(2015, 1, 1), // "Feb 2015",
                workExamples: [
                    "Consulting directly with end-users to identify requirements and perform business analysis.",
                    "Worked with my team to design and build business software solutions.",
                    "Experience building software solutions using Microsoft .Net technology.",
                    "Maintained and managed server platforms (both Windows and Linux) for multiple clients.",
                    "The majority of these solutions utilised external databases to provide storage (MySQL, SQL Server).",
                    "Provided PC support, installation, and maintenance for a variety of businesses and local schools..",
                    "Designed and created business-specific extensions in Word, Excel, and Outlook (VBA)."
                ]
            }
        ]
    },
    {
        employer: ecolab,
        positions: 
        [
            {
                achievements: [
                    "Achieved sales budget for 2011",
                    "Integration with the Nalco sales team through company merger"
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
            }
        ]
    },
    {
        employer: fonterra,
        positions: 
        [
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
            }
        ]
    }
];

export default workExperience;