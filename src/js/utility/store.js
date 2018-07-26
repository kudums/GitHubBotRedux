import { createStore } from 'redux';

function githubStore(state = { widgetList: [] }, action) {
  if (typeof state === 'undefined') {
    return 'undefined';
  }
  switch (action.type) {
    case 'CREATE_REPO': {
      const widgetData = Object.assign({}, action.widgetData);
      widgetData.type = 'CREATE_REPO';
      const s = { widgetList: [...state.widgetList, widgetData] };
      return s;
    }
    case 'SUBMIT_REPO': {
      const widgetData = state.widgetList.pop();
      widgetData.sucessMsg = action.widgetData.sucessMsg;
      widgetData.type = 'SUBMIT_REPO';
      const s = { widgetList: [...state.widgetList, widgetData] };
      return s;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(githubStore, { widgetList: [] });

export default store;
// import { createStore } from 'redux';
// import { createRepo, createIssue, editIssue, getIssue, addUser } from './reducer';
// import { CreateRepoView } from '../CreateRepo/view';
// import { CreateIssueView } from '../CreateIssue/view';
// import { CreateEditIssueView } from '../EditIssue/view';
// import { CreateGetIssueView } from '../GetIssue/view';
// import { CreateAddUsersView } from '../AddUser/view';

// /*let initialState = {
//   createRepo: [],
//   createIssue: [],
//   editIssue: [],
//   getIssue: [],
//   addUser: [],
// };

// const gitHubReducers = combineReducers({
//   createRepo,
//   createIssue,
//   editIssue,
//   getIssue,
//   addUser,
// });*/

// let initialState = {
//   createRepo: [],
// };

// const gitHubReducers = combineReducers({
//   createRepo,
// });

// const state = initialState;
// const store = createStore(gitHubReducers, state);

// console.log(`=========== Initial state ${JSON.stringify(state)}`);

// //var store = createStore(createRepo, { createRepo: [] });

// store.subscribe(() => {
//   //alert("Subscription  received");
//   var currentState = store.getState();

//   console.log(JSON.stringify(currentState));
//   console.log('Subscription  data: ' + currentState.repo);
//   localStorage['redux-store'] = JSON.stringify(currentState);
//   if (currentState.createRepo === 'CREATE_REPO') {
//     CreateRepoView.createRepoUI(currentState.createRepo);
//   } /* else if (currentState.createIssue === 'CREATE_ISSUE') {
//     CreateIssueView.displayCreateIssue(currentState.createIssue);
//   } else if (currentState.editIssue === 'EDIT_ISSUE') {
//     CreateEditIssueView.displayEditIssueUI(currentState.createIssue);
//   } else if (currentState.getIssue === 'GET_ISSUE') {
//     CreateGetIssueView.displayGetIssueUI(currentState.createIssue);
//   } else if (currentState.addUser === 'ADD_USER') {
//     CreateAddUser.displayAddUserUI(currentState.createIssue);
//   }*/
// });

// store.dispatch({
//   type: 'CREATE_REPO',
//   payload: { name: 'New Repo name1', title: 'Title1' },
// });

// store.dispatch({
//   type: 'CREATE_REPO',
//   payload: { name: 'New Repo name2', title: 'Title2' },
// });

// export class StoreManager {
//   static dispatch(action) {
//     store.dispatch(action);
//     store.dispatch({ type: 'currentView', payload: action.type });
//   }
// }
//export default StoreManager;
