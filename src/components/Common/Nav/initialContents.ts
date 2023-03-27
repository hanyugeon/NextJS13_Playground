import { icGithub } from '@/assets/icons'

const NAV_ROUTE_CONTENTS = [
  { href: '/', variant: 'menu', title: '커피 목록' },
  { href: '/tech', variant: 'menu', title: '기술 스택' },
  { href: '/about', variant: 'menu', title: '만든 계기' },
]

const NAV_LINK_CONTENTS = [
  {
    href: 'https:/github.com/hanyugeon',
    variant: 'link',
    title: 'github',
    icon: icGithub,
  },
]

export { NAV_ROUTE_CONTENTS, NAV_LINK_CONTENTS }
