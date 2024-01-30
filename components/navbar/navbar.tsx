// Updated Navbar Component
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import HamburgerImg from '@/assets/navbar/hamburger.svg';
import {
  Nav,
  NavWrapper,
  Overlay,
  NavOption,
  HamburgerIcon,
  Logo,
  TextLogo,
  ListLink,
  ListItem,
  Contact,
} from './navbar.style';
import PaddingContainer from '../paddingContainer/paddingContainer';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <Nav>
      <PaddingContainer>
      <Overlay visible={isMobileMenuOpen} onClick={toggleMobileMenu}></Overlay>
      <NavWrapper>
        <HamburgerIcon onClick={toggleMobileMenu} data-testid="hamburger-icon">
          <Image src={HamburgerImg} alt="" />
        </HamburgerIcon>

        <Logo>
          <Link href={'/'}>
            <TextLogo>D</TextLogo>
          </Link>
        </Logo>

        <NavOption $isShow={isMobileMenuOpen}>
          <ListLink>
            <ListItem $isSelect={pathName === '/overview'}>
              <Link href={'/overview'}>Overview</Link>
            </ListItem>

            <ListItem $isSelect={pathName === '/skill'}>
              <Link href={'/skill'}>Skills</Link>
            </ListItem>

            <ListItem $isSelect={pathName === '/project'}>
              <Link href={'/project'}>Projects</Link>
            </ListItem>

            <ListItem $isSelect={pathName === '/contact'}>
              <Link href={'/contact'}>Contact</Link>
            </ListItem>
          </ListLink>

          <Contact isSelect={pathName === 'prjct'}>
            <Link data-testid="prjct" href={'/project'}>
              Start a project
            </Link>
          </Contact>
        </NavOption>
      </NavWrapper>
      </PaddingContainer>
    </Nav>
  );
}
