import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const ThemeToggle = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = ({ sectionRefs }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  const scrollToSection = (sectionName) => {
    if (sectionRefs[sectionName]) {
      sectionRefs[sectionName].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo>님버스테크</Logo>
        <NavMenu>
          <NavItem>
            <NavLink onClick={() => scrollToSection('company')}>
              회사소개
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('team')}>
              팀원소개
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('welfare')}>
              복지혜택
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('apply')}>
              지원하기
            </NavLink>
          </NavItem>
        </NavMenu>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? '☀️ 라이트' : '🌙 다크'}
        </ThemeToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 