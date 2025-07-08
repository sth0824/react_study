// components/WelfareSection.jsx
import React, { useReducer, useState } from 'react';
import { welfareReducer, initialState } from '../reducers/welfareReducer';
import styles from './WelfareSection.module.css';
import Modal from './Modal'; // ✅ 모달 컴포넌트 import

function WelfareSection() {
  const [state, dispatch] = useReducer(welfareReducer, initialState);

  // ✅ 모달 상태 추가
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 'meal', title: '🍱 식비 지원', detail: '점심/저녁 제공 및 간식 무제한' },
    { id: 'vacation', title: '🏖 자율 휴가', detail: '자유롭게 휴가 사용 가능' },
    { id: 'equipment', title: '💻 장비 지원', detail: '개발 장비 및 소프트웨어 지원' },
  ];

  const handleClick = (item) => {
    setSelectedItem(item); // 모달에 띄울 항목 설정
    dispatch({ type: 'TOGGLE_DETAIL', id: item.id }); // 상태 관리용 (필요 시 유지)
  };

  const closeModal = () => {
    setSelectedItem(null); // 모달 닫기
  };

  return (
    <div>
      <h2>✨ 복지 혜택</h2>
      <div className={styles.container}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleClick(item)}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* ✅ 모달 조건부 렌더링 */}
      {selectedItem && (
        <Modal
          title={selectedItem.title}
          detail={selectedItem.detail}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default WelfareSection;
