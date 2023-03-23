import { icGithub } from '@/assets/icons'
import SideBarCloseButton from './SideBarCloseButton'
import SideBarLinkItem from './SideBarLinkItem'
import SideBarMenuItem from './SideBarMenuItem'
import {
  StyledSideBar,
  StyledSideBarLinkContainer,
  StyledSideBarMenuContainer,
  StyledSideBarWrapper,
} from './styled'

const NAV_MENU_CONTENTS = [
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

interface SideBarTypes {
  toggleSideBar: () => void
  isSideBarOpen: boolean
}

const SideBar = ({ toggleSideBar, isSideBarOpen }: SideBarTypes) => {
  return (
    <StyledSideBarWrapper isSideBarOpen={isSideBarOpen}>
      <StyledSideBar>
        <SideBarCloseButton toggleSideBar={toggleSideBar} />
        <StyledSideBarMenuContainer>
          {NAV_MENU_CONTENTS.map((content) => (
            <SideBarMenuItem
              key={content.title}
              href={content.href}
              title={content.title}
            />
          ))}
          <StyledSideBarLinkContainer>
            {NAV_LINK_CONTENTS.map((content) => (
              <SideBarLinkItem
                key={content.title}
                href={content.href}
                title={content.title}
                icon={content.icon}
              />
            ))}
          </StyledSideBarLinkContainer>
        </StyledSideBarMenuContainer>
      </StyledSideBar>
    </StyledSideBarWrapper>
  )
}

export default SideBar
