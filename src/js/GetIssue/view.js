export default class GetIssueView {
  getIssueUI(data) {
    document.getElementById('repository_issue' + `${repoName}`).value =
      data.results.entities.repository[0].value;
  }
}
