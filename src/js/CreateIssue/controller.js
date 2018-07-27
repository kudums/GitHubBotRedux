import createIssueRecastCall from './service';
import store from '../utility/store';
import './view';

export function createRecastCall(textByUser) {
  createIssueRecastCall(textByUser).then(response => {
    const repoName = response.results.entities.repository[0].value;
    store.dispatch({
      type: 'CREATE_ISSUE',
      widgetData: { name: repoName, userEntry: textByUser },
    });
  });
}

$(document).on('click', 'button.createIssueOnGithub', function() {
  const issueInRepo = $(this).get(0).value;
  const issue = document.getElementById('issue').value;
  const issueDescription = document.getElementById('issueDescription').value;
  if (
    issueInRepo === '' ||
    issueInRepo == null ||
    issueInRepo == 0 ||
    issueInRepo == 'undefined' ||
    issue === '' ||
    issue == null ||
    issue == 0 ||
    issue == 'undefined' ||
    issueDescription === '' ||
    issueDescription == null ||
    issueDescription == 0 ||
    issueDescription == 'undefined'
  ) {
    document.getElementById('issueNameInpop').innerHTML = 'Invalid values entered';
  } else {
    fetch('https://api.github.com/repos/kudums/' + issueInRepo + '/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token 80834174aa9d716356af65f56b771e68921b8876',
      },
      body: JSON.stringify({
        title: issue,
        body: issueDescription,
        assignees: ['kudums'],
        labels: ['bug'],
      }),
    })
      .then(response => {
        response
          .json()
          .then(response => {
            console.log('===================');
            console.log('===================' + JSON.stringify({ response }));
            store.dispatch({
              type: 'SUBMIT_ISSUE',
              widgetData: {
                sucessMsg:
                  'Issue created with issue number - ' +
                  response.number +
                  ' and its current status is ' +
                  response.state,
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
