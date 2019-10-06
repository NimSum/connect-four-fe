export const mock = (state = [], action) => {
  return action.type === 'MOCK_ACTION'
    ? [...state, { newData: action.data }]
    : state;
};