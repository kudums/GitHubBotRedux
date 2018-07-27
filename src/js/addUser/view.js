import store from '../utility/store';

function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function createAddUserTemplateHtml(recastData) {
  const createAddUserTemplateTxt = `
  <div class="border alert alert-secondary container tab-pane" aria-labelledby="pills-home-tab" id=${
    recastData.name
  }">
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
                  <input type="name" value=${
                    recastData.name
                  } class="form-control form-control-sm border border-dark" id="userForRepository" placeholder="Repository Name">
              </div>
          </div>
          <div class="form-group row">
              <label for="colFormLabel" class="col-sm-2 col-form-label">User Name :</label>
              <div class="col-sm-10">
                  <input type="description" class="form-control border border-dark" id="userName" placeholder="Enter User" value=${
                    recastData.user
                  }>
              </div>
          </div>
          <p>
              <button class="btn btn-dark float-right" type="button" data-toggle="collapse" data-target="#createUser" aria-expanded="false"
                  aria-controls="collapseExample">
                  Cancel
              </button>
              <button type="button" value=${recastData.user +
                ',' +
                recastData.name} class="btn btn-dark addUserOnGithub" id="addUserOnGithub" data-toggle="modal" data-target="#userAdditionPopup">Add</button>
          </p>
      </form>
  </div>
</div>`;

  return createHTMLElement(createAddUserTemplateTxt);
}

function createAddUserResultTemplateHtml(gitHubData) {
  const createUserResultTemplateTxt = ` <div class="border alert alert-secondary container tab-pane" aria-labelledby="pills-home-tab" id=${
    gitHubData.name
  }">
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
                  <input type="name" value=${
                    gitHubData.name
                  } class="form-control form-control-sm border border-dark" id="userForRepository" placeholder="Repository Name">
              </div>
          </div>
          <div class="form-group row">
              <label for="colFormLabel" class="col-sm-2 col-form-label">User Name :</label>
              <div class="col-sm-10">
                  <input type="description" class="form-control border border-dark" id="userName" placeholder="Enter User" value=${
                    gitHubData.user
                  }>
              </div>
          </div>
          <p>
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Repository Name :</label>
        <div class="col-md-3 info" id="repoNameInpop">${gitHubData.sucessMsg}</div>         
         </p>
      </form>
  </div>
</div>`;

  return createHTMLElement(createUserResultTemplateTxt);
}

store.subscribe(() => {
  store.getState().widgetList.forEach(widgetData => {
    if (widgetData.type === 'ADD_USER') {
      document.querySelector('#contentDiv').appendChild(createAddUserTemplateHtml(widgetData));
    } else if (widgetData.type === 'SUBMIT_USER') {
      document
        .querySelector('#contentDiv')
        .appendChild(createAddUserResultTemplateHtml(widgetData));
    }
  });
});
