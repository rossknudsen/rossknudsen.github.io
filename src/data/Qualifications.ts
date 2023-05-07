export interface IQualificationData {
    title: string;
    institution: string;
    completed: string;
    major?: string;
    minor?: string;
    supportingSubjects?: string;
    link?: ILink;
}

export interface ILink {
    description: string;
    url: string;
}

const qualifications: IQualificationData[] = [
    {
        completed: "2001",
        institution: "Massey University",
        major: "Chemistry",
        supportingSubjects: "Physics and Mathematics",
        title: "Bachelor of Science",
    },
    {
        completed: "2019",
        institution: "Massey University",
        major: "Finance",
        minor: "Computer Science",
        title: "Bachelor of Business",
    },
    {
        completed: "2018",
        institution: "Rice University - Coursera",
        link: {
            description: "Certificate",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/HBBH2KKV5W67"
        },
        title: "Parallel, Concurrent, and Distributed Programming in Java Specialization",
    }
];

export default qualifications;