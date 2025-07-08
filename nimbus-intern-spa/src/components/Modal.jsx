import React from 'react';
import '../Modal.css'; // 스타일 분리 (상위 폴더로 경로 수정)

function Modal({ title, detail, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal; 