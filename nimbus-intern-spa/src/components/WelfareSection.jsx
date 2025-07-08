import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';

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

const WelfareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const WelfareCard = styled.div`
  background: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const WelfareIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

const WelfareTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const WelfareDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const WelfareDetails = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  border-left: 4px solid ${props => props.theme.colors.primary};
  display: ${props => props.isExpanded ? 'block' : 'none'};
`;

const welfareData = [
  {
    id: 1,
    title: '유연근무제',
    description: '자유로운 출퇴근 시간과 재택근무 지원',
    icon: '⏰',
    details: '• 코어타임 10:00-16:00 외 자유 출퇴근\n• 주 2일 재택근무 가능\n• 월 1회 반차 자유 사용'
  },
  {
    id: 2,
    title: '교육 지원',
    description: '개발자 성장을 위한 다양한 교육 프로그램',
    icon: '📚',
    details: '• 온라인 강의 플랫폼 무료 이용\n• 컨퍼런스 참가비 지원\n• 도서구입비 월 10만원 지원'
  },
  {
    id: 3,
    title: '식대 지원',
    description: '건강한 식사를 위한 식대 지원',
    icon: '🍽️',
    details: '• 점심식대 일 15,000원 지원\n• 저녁식대 일 20,000원 지원\n• 커피/간식 무제한 제공'
  },
  {
    id: 4,
    title: '건강관리',
    description: '직원 건강을 위한 다양한 혜택',
    icon: '💪',
    details: '• 건강검진 연 1회 무료\n• 헬스장 이용료 지원\n• 정신건강 상담 서비스 제공'
  }
];

const WelfareSection = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <Section>
      <Container>
        <Title>복지 혜택</Title>
        <WelfareGrid>
          {welfareData.map(welfare => (
            <WelfareCard key={welfare.id} onClick={() => handleCardClick(welfare)}>
              <WelfareIcon>{welfare.icon}</WelfareIcon>
              <WelfareTitle>{welfare.title}</WelfareTitle>
              <WelfareDescription>{welfare.description}</WelfareDescription>
            </WelfareCard>
          ))}
        </WelfareGrid>
      </Container>
      {/* 모달 조건부 렌더링 */}
      {selectedItem && (
        <Modal
          title={selectedItem.title}
          detail={selectedItem.details}
          onClose={closeModal}
        />
      )}
    </Section>
  );
};

export default WelfareSection; 