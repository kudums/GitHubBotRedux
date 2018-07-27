import store from '../utility/store';

function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function createRepoTemplateHtml(recastData) {
  const creaetReopTemplateTxt = ` <div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createRepo">
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
            <div class="col-md-3">
                <input type="name" value=${
                  recastData.name
                } class="form-control form-control-sm border border-dark" id="repository" placeholder="Repository Name"></input>
            </div>
        </div>
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Description :</label>
            <div class="col-md-3">
                <input type="description" class="form-control border border-dark" id="description" placeholder="Enter Description">
            </div>
        </div>
        <p>
            <button class="btn btn-dark float-right" type="button" data-toggle="collapse" data-target="#createRepo" aria-expanded="false"
                aria-controls="collapseExample">
                Cancel
            </button>
            <button type="button" value=${
              recastData.name
            } class="btn btn-dark createRepositoryOnGithub" data-toggle="modal" data-target="#repoCreatePopup"  >Create</button>
        </p>
    </form>
</div>
</div>`;

  return createHTMLElement(creaetReopTemplateTxt);
}

function createRepoResultTemplateHtml(gitHubData) {
  const creaetRepoResultTemplateTxt = ` <div class="border container tab-pane" aria-labelledby="pills-home-tab" id="createRepo">
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
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Description :</label>
            <div class="col-md-3">
                <input type="description" class="form-control border border-dark" id="description" placeholder="Enter Description">
            </div>
        </div>
        <p>
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
        <div class="col-md-3 info" id="repoNameInpop">${gitHubData.sucessMsg}</div>         
         </p>
    </form>
</div>
</div>`;

  return createHTMLElement(creaetRepoResultTemplateTxt);
}

store.subscribe(() => {
  $('#contentDiv').empty();
  store.getState().widgetList.forEach(widgetData => {
    if (widgetData.type === 'CREATE_REPO') {
      document.querySelector('#contentDiv').appendChild(createRepoTemplateHtml(widgetData));
    } else if (widgetData.type === 'SUBMIT_REPO') {
      document.querySelector('#contentDiv').appendChild(createRepoResultTemplateHtml(widgetData));
    }
  });
});
