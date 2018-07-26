// import event from 'event-module';
import createRecastCall from './CreateRepo/controller';
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
      //   document.getElementById('creatRepoDiv').style.display = 'block';
      createRecastCall(userDesire);
    }
  }
}

// }

// $('#userDesire').addEventListener('keypress', submitUserDesire(event));
document.querySelector('#userDesireBtn').addEventListener('click', submitUserDesire);
