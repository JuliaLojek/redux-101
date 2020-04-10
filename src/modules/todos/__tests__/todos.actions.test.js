import {
  TODOS_ACTION_TYPES,
  ADD_TODO,
  TOGGLE_TODO,
  SET_FETCHED_TODOS,
  FETCH_INIT_TODOS
} from "../todos.actions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe("todos.actions", () => {
  it("ADD_TODO", () => {
    const expectedResult = {
      type: TODOS_ACTION_TYPES.ADD_TODO,
      value: {title: "eat some cake", id: 4, completed: true}
    };
    const result = ADD_TODO({title: "eat some cake", id: 4, completed: true});

    expect(result).toStrictEqual(expectedResult);
  });

  it("TOGGLE_TODO", () => {
    const expectedResult = {
      type: TODOS_ACTION_TYPES.TOGGLE_TODO_STATUS,
      value: {title: "eat some cake", id: 4, completed: true}
    };
    const result = TOGGLE_TODO({title: "eat some cake", id: 4, completed: true});

    expect(result).toStrictEqual(expectedResult);
  });

  it("SET_FETCHED_TODOS", () => {
    const expectedResult = {
      type: TODOS_ACTION_TYPES.SET_FETCHED_TODOS,
      value: [1, 2, 3]
    };
    const result = SET_FETCHED_TODOS([1, 2, 3]);

    expect(result).toStrictEqual(expectedResult);
  });

  // it('should correctly dispatch actions for success fetch', () => {
  //   const store = mockStore();

  //   const mockApiResponse = [{exampleKey: 'exampleValue'}, {exampleKey2: 'exampleValue2'},];
  //   const mockJsonPromise = Promise.resolve(mockApiResponse);
  //   const mockFetchPromise = Promise.resolve({
  //     todos: () => mockJsonPromise,
  //   });

  //   const expectedAction1 = {
  //     type: TODOS_ACTION_TYPES.SET_FETCHED_TODOS,
  //     value: mockApiResponse,
  //   };

  //   jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  //   return store.dispatch(FETCH_INIT_TODOS())
  //     .then(() => {
  //       const actions = store.getActions();
  //       console.log(actions);
  //       expect(actions.length).toBe(1);
  //       expect(actions[0]).toStrictEqual(expectedAction1);
  //     });
  // });
})