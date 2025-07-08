import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #004a8f 100%);
  color: ${props => props.theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
`;

const CompanyIntro = () => {
  const theme = useTheme();

  return (
    <Section>
      <Container>
        <Title>님버스테크</Title>
        <Subtitle>혁신적인 기술로 미래를 만들어갑니다</Subtitle>
        <Description>
          님버스테크는 최신 기술 트렌드를 활용하여 사용자 중심의 솔루션을 제공하는 
          혁신적인 IT 기업입니다. 우리는 창의적이고 열정적인 인재들과 함께 
          더 나은 디지털 세상을 만들어가고 있습니다.
        </Description>
      </Container>
    </Section>
  );
};

export default CompanyIntro; 