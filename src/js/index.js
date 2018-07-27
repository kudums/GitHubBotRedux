// import event from 'event-module';
import * as createRepo from './CreateRepo/controller';
import * as addUser from './addUser/controller';
import * as createIssue from './CreateIssue/controller';
import * as getIssue from './GetIssue/controller';
//import createRecastCall from './CreateRepo/controller';
//import createUserRecastCall from './addUser/controller';
import '../js/CreateRepo/view';

function submitUserDesire() {
  // if (e.keyCode === '13') {
  const userDesire = document.getElementById('userDesire').value;
  if (userDesire) {
    if (
      userDesire.indexOf('create a repo') !== -1 ||
      userDesire.indexOf('make a repo') !== -1 ||
      userDesire.indexOf('add a repo') !== -1
    ) {
      createRepo.createRecastCall(userDesire);
    } else if (userDesire.indexOf('add user') !== -1) {
      addUser.createRecastCall(userDesire);
    } else if (
      userDesire.indexOf('create a issue') !== -1 ||
      userDesire.indexOf('make a issue') !== -1 ||
      userDesire.indexOf('add a issue') !== -1
    ) {
      createIssue.createRecastCall(userDesire);
    } else if (
      userDesire.indexOf('get a issue') !== -1 ||
      userDesire.indexOf('get all issue') !== -1 ||
      userDesire.indexOf('fetch a issue') !== -1
    ) {
      getIssue.createRecastCall(userDesire);
    }
  }
}

// }

// $('#userDesire').addEventListener('keypress', submitUserDesire(event));
document.querySelector('#userDesireBtn').addEventListener('click', submitUserDesire);
