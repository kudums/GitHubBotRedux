import recastCall from './service';
import store from '../utility/store';
import './view';

export function createRecastCall(textByUser) {
  recastCall(textByUser).then(res => {
    const repoName = res.results.entities.repository[0].value;

    store.dispatch({
      type: 'GET_ISSUES',
      widgetData: { name: repoName, userEntry: textByUser },
    });
  });
}
$(document).on('click', 'button.getIssuefromRepo', function() {
  const issueInRepository = $(this).get(0).value;
  const issueNo = document.getElementById('target').value;
  var uri = 'null';

  if (
    issueInRepository === '' ||
    issueInRepository == null ||
    issueInRepository == 0 ||
    issueInRepository == 'undefined'
  ) {
    document.getElementById('issueNameInpop').innerHTML = 'Invalid values entered';
  }
  if (
    issueNo === '' ||
    issueNo == null ||
    issueNo == 0 ||
    issueNo == 'undefined' ||
    issueNo == 'all'
  ) {
    uri = 'https://api.github.com/repos/kudums/' + issueInRepository + '/issues';
  } else {
    uri = 'https://api.github.com/repos/kudums/' + issueInRepository + '/issues/' + issueNo;
  }
  fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token 80834174aa9d716356af65f56b771e68921b8876',
    },
  })
    .then(response => {
      response
        .json()
        .then(res => {
          console.log('repoanse msg====>' + JSON.stringify(res));
          //display all issues
          var div = document.getElementById('repoNameInpop');
          div.innerHTML = '';
          var table = document.createElement('table');
          table.className = 'table';
          table.id = 'myTable';
          table.setAttribute('onclick', 'sortTable();');
          var thead = document.createElement('thead');
          thead.className = 'thead-dark';
          var thr = document.createElement('tr');
          var thd1 = document.createElement('th');
          var thd2 = document.createElement('th');
          var thd3 = document.createElement('th');
          var headeCol1 = document.createTextNode('Id');
          var headeCol2 = document.createTextNode('Name');
          var headeCol3 = document.createTextNode('Status');

          thd1.appendChild(headeCol1);
          thd2.appendChild(headeCol2);
          thd3.appendChild(headeCol3);

          thr.appendChild(thd1);
          thr.appendChild(thd2);
          thr.appendChild(thd3);

          thead.appendChild(thr);
          table.appendChild(thr);

          var tbody = document.createElement('tbody');

          if (Array.isArray(res)) {
            for (var i = 0; i < res.length; i++) {
              var tr = document.createElement('tr');

              var td1 = document.createElement('td');
              var td2 = document.createElement('td');
              var td3 = document.createElement('td');

              var issueNo = document.createTextNode(res[i].number);
              var issueTitle = document.createTextNode(res[i].title);
              var issueStatus = document.createTextNode(res[i].state);

              td1.appendChild(issueNo);
              td2.appendChild(issueTitle);
              td3.appendChild(issueStatus);

              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);

              tbody.appendChild(tr);
            }
          } else {
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            var issueNo = document.createTextNode(res.number);
            var issueTitle = document.createTextNode(res.title);
            var issueStatus = document.createTextNode(res.state);

            td1.appendChild(issueNo);
            td2.appendChild(issueTitle);
            td3.appendChild(issueStatus);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tbody.appendChild(tr);
          }
          table.appendChild(tbody);
          div.appendChild(table);
          console.log('Div msg====>' + div);
          store.dispatch({
            type: 'GET_ISSUE_GIT',
            widgetData: {
              sucessMsg: div,
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
});
