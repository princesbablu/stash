import { FaTelegramPlane, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

type Props = {
    className?: string,
}
type SocialIcon = {
    name: string,
    icon: JSX.Element,
    url: string,
}

export default function Social({ className = "" }: Props) {
    const socialIcons: SocialIcon[] = [
        {
            name: 'telegram',
            icon: <FaTelegramPlane />,
            url: ''
        },
        {
            name: 'twitter',
            icon: <FaTwitter />,
            url: ''
        },
        {
            name: 'linkedin',
            icon: <FaLinkedinIn />,
            url: ''
        },
        {
            name: 'github',
            icon: <FaGithub />,
            url: ''
        },
    ];

    return (
        <ul className={`social-list d-flex align-items-center flex-wrap gap-2 ${className}`}>
            {socialIcons.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay=""
                        data-aos-offset="0"
                        className="social-link d-flex align-items-center justify-content-center ms-1"
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}