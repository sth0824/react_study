import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled.div`
  background: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const MemberRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MemberMessage = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  opacity: 0.8;
`;

const teamMembers = [
  {
    id: 1,
    name: '강하나',
    role: '기능 구현 담당',
    message: 'React의 모든 기능을 활용해서 멋진 웹사이트를 만들어보겠습니다!',
    avatar: '강'
  },
  {
    id: 2,
    name: '이수민',
    role: 'UI/UX 담당',
    message: '사용자 경험을 최우선으로 생각하는 아름다운 디자인을 만들어보겠습니다.',
    avatar: '이'
  },
  {
    id: 3,
    name: '성태환',
    role: '스크롤 & 전역 상태 담당',
    message: '부드러운 스크롤과 효율적인 상태 관리를 통해 완벽한 사용자 경험을 제공하겠습니다.',
    avatar: '성'
  }
];

const TeamSection = () => {
  const theme = useTheme();

  return (
    <Section>
      <Container>
        <Title>우리 팀을 소개합니다</Title>
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamCard key={member.id}>
              <Avatar>{member.avatar}</Avatar>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberMessage>{member.message}</MemberMessage>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};

export default TeamSection; 