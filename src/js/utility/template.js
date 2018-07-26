function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function formGroupDiv(labelTxt, id, placeholder) {
  const formGroupDiv = `<div class="form-group row">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">${labelTxt}</label>
  <div class="col-sm-10">
  <input type="name" class="form-control form-control-sm border border-dark" 
  id="${id}" placeholder="${placeholder}">
</div>
  </div>`;
}

function createButton() {
  const createCancelButton = ` <p>
    <button
      class="btn btn-dark float-right"
      type="button"
      data-toggle="collapse"
      data-target="#createIssue"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Cancel
    </button>
    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#issueCreatePopup">
      Create
    </button>
  </p>`;
  const formButtonElements = createHTMLElement(createCancelButton);
  return formButtonElements;
}

function form() {
  const formText = `<form></form>`;
  const formElement = createHTMLElement(formText);
  formElement.appendChild(formGroupDiv());
  formElement.appendChild(formGroupDiv());
  formElement.appendChild(formGroupDiv());
  formElement.appendChild(createButton());
  return formElement;
}

function formDiv() {
  const formDivTxt = `<div class="container card card-body" style="content: \e003">
      </div>`;
  const formDivElement = createHTMLElement(formDivTxt);
  formDivElement.appendChild(form());
  return formDivElement;
}

function formParentDiv() {
  const formParentDivTxt = `<div class="border alert alert-secondary" id="${divId}">
  </div>`;
  const formParentDivElemt = createHTMLElement(formParentDivTxt);
  formParentDivElemt.appendChild(formDiv());
  return formParentDivElemt;
}

function modelPopup(id, operationResult, divId) {
  const modalBlock = ` <div class="modal" id="${divId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title bg-unfo">Confirmation Status</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div id="${id}" class="h5" style="text-align: center">${operationResult}</div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">OK</button>
        </div>
    </div>
</div>
</div>`;
  const modalBlock = createHTMLElement(modalBlock);
  return modalBlock;
}

function parentDiv() {
  const parentDiv = `<div class="tab-pane"></div>`;
  const parentDivTag = createHTMLElement(parentDiv);
  parentDiv.appendChild(modelPopup(id, operationResult, divId));
  parentDiv.appendChild(formParentDiv());

  return parentDivTag;
}

// store.subscribe(() => {
//   //alert("Subscription  received");
//   var currentState = store.getState();

//   console.log(JSON.stringify(currentState));
//   console.log('Subscription  data: ' + currentState.repo);
//   localStorage['redux-store'] = JSON.stringify(currentState);
//   if (currentState.currentView === 'CREATE_REPO') {
//     document.getElementById('contentDiv').appendChild(parentDiv(currentState.createRepo));
//     //CreateRepoView.createRepoUI(currentState.createRepo);
//   } /* else if (currentState.currentView === 'CREATE_ISSUE') {
//     CreateIssueView.displayCreateIssue(currentState.createIssue);
//   } else if (currentState.currentView === 'EDIT_ISSUE') {
//     CreateEditIssueView.displayEditIssueUI(currentState.createIssue);
//   } else if (currentState.currentView === 'GET_ISSUE') {
//     CreateGetIssueView.displayGetIssueUI(currentState.createIssue);
//   } else if (currentState.currentView === 'ADD_USER') {
//     CreateAddUser.displayAddUserUI(currentState.createIssue);
//   }*/
// });
