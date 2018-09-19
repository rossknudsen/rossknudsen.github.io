enum SocialOptions {
    twitter,
    github,
    linkedin,
}

const socialData: ISocialProps[] = [
    {
        link: "https://github.com/rossknudsen",
        type: SocialOptions.github,
    },
    {
        link: "https://www.linkedin.com/in/rossknudsen/",
        type: SocialOptions.linkedin,
    },
    {
        link: "https://twitter.com/rossco898",
        type: SocialOptions.twitter,
    }
];

interface ISocialProps {
    type: SocialOptions,
    link: string,
}

export { SocialOptions, ISocialProps, socialData };