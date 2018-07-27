import addUserRecastCall from './service';
import store from '../utility/store';
import './view';

export function createRecastCall(textByUser) {
  addUserRecastCall(textByUser).then(response => {
    const userName = response.results.entities.user[0].value;
    const repoName = response.results.entities.repository[0].value;
    store.dispatch({
      type: 'ADD_USER',
      widgetData: { name: repoName, userEntry: textByUser, user: userName },
    });
  });
}

$(document).on('click', 'button.addUserOnGithub', function() {
  const text = $(this).get(0).value;
  const userDetails = text.split(',');
  const userName = userDetails[0];
  const userForRepository = userDetails[1];
  const uri =
    'https://api.github.com/repos/kudums/' + userForRepository + '/collaborators/' + userName;
  if (
    userForRepository === '' ||
    userForRepository == null ||
    userForRepository == 0 ||
    userForRepository == 'undefined' ||
    userName === '' ||
    userName == null ||
    userName == 0 ||
    userName == 'undefined'
  ) {
    store.dispatch({
      type: 'SUBMIT_USER',
      widgetData: {
        sucessMsg: ' Invalid values entered !!',
      },
    });
  } else {
    fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token 80834174aa9d716356af65f56b771e68921b8876',
      },
      body: JSON.stringify({
        permission: 'admin',
      }),
    })
      .then(response => {
        response
          .json()
          .then(res => {
            store.dispatch({
              type: 'SUBMIT_USER',
              widgetData: {
                sucessMsg: res.invitee.login + ' got added sucessfully!!',
              },
            });
          })
          .catch(function() {
            console.log(
              'Github responded successfully but there is some problem in parsing response...'
            );
          });
      })
      .catch(function() {
        console.log('There is some error in github api call...');
      });
  }
});
