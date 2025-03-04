export const ActionTypes = {
  ADD_GRADE: "addGrade",
  REMOVE_GRADE: "removeGrade",
  RESET: "reset",
  REMOVE_ALL_GRADES: "removeAllGrades",
  CHANGE: "change",
};

export const initialState = {
  count: 10,
  grades: [2, 4, 7],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE: {
      const newState = { ...state };
      newState.count = newState.count + action.payload;

      return newState;
    }

    case ActionTypes.ADD_GRADE: {
      return {
        ...state,
        grades: [state.count, ...state.grades],
      };
    }

    case ActionTypes.REMOVE_ALL_GRADES: {
      return {
        ...state,
        grades: [],
      };
    }

    case ActionTypes.REMOVE_GRADE: {
      const newGrades = [...state.grades];
      newGrades.splice(action.payload, 1);

      return {
        ...state,
        grades: newGrades,
      };
    }

    case ActionTypes.RESET: {
      const newState = { ...state };
      newState.count = initialState.count;

      return newState;
    }

    default:
      return state;
  }
};
