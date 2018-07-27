import store from '../utility/store';

function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function createIssueTemplateHtml(recastData) {
  const createIssueTemplateHtml = `<div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createIssue">
    <div class="container card card-body" style="content: \e003">
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
                  <input type="name" class="form-control form-control-sm border border-dark" value=${
                    recastData.name
                  } placeholder="Repository Name">
              </div>
          </div>
          <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Issue :</label>
              <div class="col-sm-10">
                  <input type="name" class="form-control form-control-sm border border-dark" id="issue"
                  } placeholder="Repository Name">
              </div>
          </div>
          <div class="form-group row">
              <label for="colFormLabel" class="col-sm-2 col-form-label">Issue Description:</label>
              <div class="col-sm-10">
                  <input type="description" class="form-control border border-dark" id="issueDescription" placeholder="Enter Description">
              </div>
          </div>
          <p>
              <button class="btn btn-dark float-right" type="button" data-toggle="collapse" data-target="#createIssue" aria-expanded="false"
                  aria-controls="collapseExample">
                  Cancel
              </button>
              <button type="button" value="${
                recastData.name
              }" class="btn btn-dark createIssueOnGithub" data-toggle="modal" data-target="#issueCreatePopup">Create</button>
          </p>
      </form>
  </div>
</div>
</div>`;

  return createHTMLElement(createIssueTemplateHtml);
}

function createIssueResultTemplateHtml(gitHubData) {
  const createIssueResultTemplateHtml = `<div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createIssue">
  <div class="container card card-body" style="content: \e003">
    <form>
    <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
    <div class="col-md-3">
        <output>${gitHubData.userEntry}</output>
    </div>
 </div>
        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
            <div class="col-sm-10">
                <input type="name" class="form-control form-control-sm border border-dark" value=${
                  gitHubData.name
                } placeholder="Repository Name">
            </div>
        </div>
       <!-- <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Issue No:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control form-control-sm border border-dark" value=${
                  gitHubData.issueno
                } placeholder="Repository Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Issue :</label>
            <div class="col-sm-10">
                <input type="description" class="form-control border border-dark" value=${
                  gitHubData.title
                } placeholder="Enter Description">
            </div>
        </div>-->
        <p>      
        <div class="col-md-3 info" id="repoNameInpop">${gitHubData.sucessMsg}</div>         
         </p>
    </form>
</div>
</div>`;

  return createHTMLElement(createIssueResultTemplateHtml);
}

store.subscribe(() => {
  $('#contentDiv').empty();
  store.getState().widgetList.forEach(widgetData => {
    if (widgetData.type === 'CREATE_ISSUE') {
      document.querySelector('#contentDiv').appendChild(createIssueTemplateHtml(widgetData));
    } else if (widgetData.type === 'SUBMIT_ISSUE') {
      document.querySelector('#contentDiv').appendChild(createIssueResultTemplateHtml(widgetData));
    }
  });
});
