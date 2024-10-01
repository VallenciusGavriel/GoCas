// socialLinks.js
import { Icon } from "@chakra-ui/react";

export const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <Icon viewBox="0 0 24 24" fill="currentColor" w="7" h="7">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </Icon>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <Icon viewBox="0 0 24 24" fill="currentColor" w="7" h="7">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </Icon>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <Icon viewBox="0 0 24 24" fill="currentColor" w="7" h="7">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </Icon>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <Icon viewBox="0 0 24 24" fill="currentColor" w="7" h="7">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </Icon>
        ),
    },
];
