export default class AddUserView {
  addUserUI(data) {
    document.getElementById('repository_issue' + `${repoName}`).value =
      data.results.entities.repository[0].value;
  }
}
