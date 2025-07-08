import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const Form = styled.form`
  background: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  font-size: 1rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  font-size: 1rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ApplyForm = () => {
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 강하나가 useState로 구현할 부분
    console.log('폼 제출됨');
  };

  return (
    <Section>
      <Container>
        <Title>지원하기</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">이름 *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="이름을 입력해주세요"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">이메일 *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">연락처</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="연락처를 입력해주세요"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="portfolio">포트폴리오 링크</Label>
            <Input
              type="url"
              id="portfolio"
              name="portfolio"
              placeholder="GitHub, 포트폴리오 링크를 입력해주세요"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">지원 동기</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="님버스테크에 지원하게 된 동기를 작성해주세요"
            />
          </FormGroup>

          <SubmitButton type="submit">
            지원서 제출하기
          </SubmitButton>
        </Form>
      </Container>
    </Section>
  );
};

export default ApplyForm; 