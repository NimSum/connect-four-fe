export const mock = (state = [], action) => {
  console.log(action);
  return action.type === 'MOCK_ACTION'
    ? [...state, { newData: action.data }]
    : state;
};