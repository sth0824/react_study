import React from 'react';
import '../Modal.css'; // 스타일 분리

function Modal({ title, detail, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-x" onClick={onClose} aria-label="닫기">×</button>
        <div className="modal-title">{title}</div>
        <div className="modal-detail">
          {detail.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <button className="modal-close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
