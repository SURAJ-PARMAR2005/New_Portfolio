export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo-round.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Certificates',
      href: '/journey/certificates',
    },
    // {
    //   label: 'Blogs',
    //   href: '/blog',
    // },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],
};
