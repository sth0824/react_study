import React, { useRef } from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import CompanyIntro from './components/CompanyIntro';
import TeamSection from './components/TeamSection';
import WelfareSection from './components/WelfareSection';
import ApplyForm from './components/ApplyForm';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

const AppContent = () => {
  const theme = useTheme();
  
  // 각 섹션에 대한 ref 생성
  const companyRef = useRef(null);
  const teamRef = useRef(null);
  const welfareRef = useRef(null);
  const applyRef = useRef(null);

  // Navbar에서 사용할 ref 객체
  const sectionRefs = {
    company: companyRef,
    team: teamRef,
    welfare: welfareRef,
    apply: applyRef
  };

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar sectionRefs={sectionRefs} />
        
        <div ref={companyRef}>
          <CompanyIntro />
        </div>
        
        <div ref={teamRef}>
          <TeamSection />
        </div>
        
        <div ref={welfareRef}>
          <WelfareSection />
        </div>
        
        <div ref={applyRef}>
          <ApplyForm />
        </div>
      </AppContainer>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
};

export default App; 