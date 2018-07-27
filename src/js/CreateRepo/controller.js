import recastCall from './service';
import store from '../utility/store';
import './view';

export function createRecastCall(textByUser) {
  recastCall(textByUser).then(res => {
    const repoName = res.results.entities.repository[0].value;

    store.dispatch({
      type: 'CREATE_REPO',
      widgetData: { name: repoName, userEntry: textByUser },
    });
  });
}

$(document).on('click', 'button.createRepositoryOnGithub', function() {
  const repositoryName = $(this).get(0).value;
  //const description = document.getElementById('description').value;
  const description = 'checking';
  if (
    repositoryName === '' ||
    repositoryName == null ||
    repositoryName == 0 ||
    repositoryName == 'undefined' ||
    description === '' ||
    description == null ||
    description == 0 ||
    description == 'undefined'
  ) {
    document.getElementById('repoNameInpop').innerHTML = 'Invalid values entered';
  } else {
    fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token 80834174aa9d716356af65f56b771e68921b8876',
      },
      body: JSON.stringify({
        name: repositoryName,
        description: description,
      }),
    })
      .then(response => {
        response
          .json()
          .then(response => {
            console.log('===================');
            console.log('===================' + response.name + ' got created sucessfully!!');
            store.dispatch({
              type: 'SUBMIT_REPO',
              widgetData: {
                sucessMsg: response.name + ' got created sucessfully!!',
              },
            });
            console.log(repoName);
          })
          .catch(function() {
            console.log('There is some error in resolving name of repository from sentence...');
          });
      })
      .catch(function() {
        console.log('There is some error in recast.ai api call...');
      });
  }
});

//export default createRecastCall;
