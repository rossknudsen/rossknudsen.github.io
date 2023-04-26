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