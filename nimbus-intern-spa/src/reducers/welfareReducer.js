export const WELFARE_ACTIONS = {
  TOGGLE_CARD: 'TOGGLE_CARD',
  EXPAND_ALL: 'EXPAND_ALL',
  COLLAPSE_ALL: 'COLLAPSE_ALL'
};

export const welfareReducer = (state, action) => {
  switch (action.type) {
    case WELFARE_ACTIONS.TOGGLE_CARD:
      return {
        ...state,
        expandedCards: state.expandedCards.includes(action.payload)
          ? state.expandedCards.filter(id => id !== action.payload)
          : [...state.expandedCards, action.payload]
      };
    
    case WELFARE_ACTIONS.EXPAND_ALL:
      return {
        ...state,
        expandedCards: [1, 2, 3, 4] // 모든 복지 카드 ID
      };
    
    case WELFARE_ACTIONS.COLLAPSE_ALL:
      return {
        ...state,
        expandedCards: []
      };
    
    default:
      return state;
  }
};

export const initialWelfareState = {
  expandedCards: []
}; 