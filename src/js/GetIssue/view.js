import store from '../utility/store';

function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function getAllIssuesRecastTemplateHtml(recastData) {
  const getAllIssuesRecastTemplateHtmlTxt = ` <div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createRepo">
<div class="card card-body" role="tabpanel" aria-labelledby="pills-home-tab" style="content: \e003">
    <form>
    <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
            <div class="col-md-3">
                <output>${recastData.userEntry}</output>
            </div>
        </div>
        <div class="form-group row">
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
        <div class="col-sm-10">
            <input type="name" class="form-control form-control-sm border border-dark" id="getIssuesInRepo" value="${
              recastData.name
            }" placeholder="Repository Name">
        </div>
    </div>
    <div class="form-group row">
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Target:</label>
        <div class="col-sm-10">
            <input type="name" class="form-control form-control-sm border border-dark" id="target" placeholder="issue of">
        </div>
    </div>
    <p>
        <button class="btn btn-dark float-right" type="button" data-toggle="collapse" data-target="#getIssue" aria-expanded="false"
            aria-controls="collapseExample">
            Cancel
        </button>
        <button type="button" class="btn btn-dark getIssuefromRepo" value="${
          recastData.name
        }" type="button" data-toggle="modal" data-target="#issueGetPopup">Proceed</button>
    </p>
</form>
</div>
</div>`;

  return createHTMLElement(getAllIssuesRecastTemplateHtmlTxt);
}

function getAllIssuesGitHubTemplateHtml(gitHubData) {
  const getAllIssuesGitHubTemplateHtmlTxt = ` <div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createRepo">
<div class="card card-body" style="content: \e003">
    <form>
    <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
            <div class="col-md-3">
                <output>${gitHubData.userEntry}</output>
            </div>
        </div>
        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
            <div class="col-md-3">
                <input type="name" value=${
                  gitHubData.name
                } class="form-control form-control-sm border border-dark" id="repository" placeholder="Repository Name"></input>
            </div>
        </div>        
        <p>
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
        <div class="col-md-3 info" id="repoNameInpop">${gitHubData.sucessMsg}</div>         
         </p>
    </form>
</div>
</div>`;

  return createHTMLElement(getAllIssuesGitHubTemplateHtmlTxt);
}

store.subscribe(() => {
  $('#contentDiv').empty();
  store.getState().widgetList.forEach(widgetData => {
    if (widgetData.type === 'GET_ISSUES') {
      document.querySelector('#contentDiv').appendChild(getAllIssuesRecastTemplateHtml(widgetData));
    } else if (widgetData.type === 'GET_ISSUE_GIT') {
      document.querySelector('#contentDiv').appendChild(getAllIssuesGitHubTemplateHtml(widgetData));
    }
  });
});
