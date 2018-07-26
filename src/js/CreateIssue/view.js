export default class CreateIssueView {
  createIssueUI(data) {
    const repoName = data.results.entities.repository[0].value;

    const creatIssueDiv = document.createElement('div');
    creatIssueDiv.className = 'tab-pane';
    creatIssueDiv.id = 'crateIssueDiv_issue' + `${repoName}`;

    const createIssue = document.createElement('div');
    createIssue.className = 'border alert alert-secondary collapse';
    createIssue.id = 'createIssue_issue' + `${repoName}`;

    const div1 = document.createElement('div');
    div1.className = 'container card card-body';
    div1.style = 'content: e003';

    const form = document.createElement('form');

    const div2 = document.createElement('div');
    div2.className = 'form-group row';

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'colFormLabelSm');
    label1.className = 'col-sm-2 col-form-label col-form-label-sm';
    label1.innerHTML = 'Repository Name :';

    const div3 = document.createElement('div');
    div3.className = 'col-sm-10';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.className = 'form-control form-control-sm border border-dark';
    input1.id = 'issueInRepo_issue' + `${repoName}`;
    input1.setAttribute('placeholder', 'Repository Name');
    ////////////
    const div13 = document.createElement('div');
    div13.className = 'form-group row';

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'colFormLabelSm');
    label4.className = 'col-sm-2 col-form-label col-form-label-sm';
    label4.innerHTML = 'Issue :';

    const div14 = document.createElement('div');
    div14.className = 'col-sm-10';

    const input5 = document.createElement('input');
    input5.type = 'text';
    input5.className = 'form-control form-control-sm border border-dark';
    input5.id = 'issueDescription_issue' + `${repoName}`;
    input5.setAttribute('placeholder', 'Enter Description');
    ////////
    const div4 = document.createElement('div');
    div4.className = 'form-group row';

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'colFormLabelSm');
    label2.className = 'col-sm-2 col-form-label col-form-label-sm';
    label2.innerHTML = 'Description :';

    const div5 = document.createElement('div');
    div5.className = 'col-sm-10';

    const input2 = document.createElement('input');
    input2.type = 'description';
    input2.className = 'form-control form-control-sm border border-dark';
    input2.id = 'description_issue' + `${repoName}`;
    input2.setAttribute('placeholder', 'Enter Description');

    const p1 = document.createElement('p');

    const button1 = document.createElement('button');
    button1.className = 'btn btn-dark float-right';
    button1.innerHTML = 'Cancel';

    const button2 = document.createElement('button');
    button2.className = 'btn btn-dark';
    button2.innerHTML = 'Create';
    button2.setAttribute('data-toggle', 'modal');
    button2.setAttribute('data-target', '#repoCreatePopup');
    button2.id = 'createRepositoryOnGithub_issue' + `${repoName}`;
    button2.setAttribute('onclick', 'createRepositoryOnGithub');

    const div6 = document.createElement('div');
    div6.className = 'repoCreatePopup';
    button1.setAttribute('tabindex', '-1');
    button1.setAttribute('role', 'dialog');
    button1.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
    button1.setAttribute('aria-hidden', 'true');
    const div7 = document.createElement('div');
    div7.className = 'modal-dialog modal-dialog-centered';
    button1.setAttribute('role', 'document');

    const div8 = document.createElement('div');
    div8.className = 'modal-content';

    const div9 = document.createElement('div');
    div9.className = 'modal-header';

    const h1 = document.createElement('h5');
    h1.className = 'modal-title bg-unfo';
    h1.id = 'exampleModalLongTitle_issue' + `${repoName}`;
    h1.innerHTML = 'Creation Status';
    div9.appendChild(h1);

    const button3 = document.createElement('button');
    button3.className = 'close';
    button3.setAttribute('data-dismiss', 'modal');
    button3.setAttribute('aria-label', 'Close');

    const span1 = document.createElement('span');
    span1.setAttribute('aria-hidden', 'true');
    span1.innerHTML = '&times';

    div9.appendChild(button3.appendChild(span1));

    const div10 = document.createElement('div');
    div10.className = 'modal-body';

    const form3 = document.createElement('form');

    const div11 = document.createElement('div');
    div11.className = 'h5';
    div11.id = 'repoNameInpop_issue' + `${repoName}`;
    div11.style = 'text-align:center';
    div10.appendChild(form3.appendChild(div11));

    const div12 = document.createElement('div');
    div11.className = 'modal-footer';

    const button4 = document.createElement('button');
    button4.className = 'btn btn-dark';
    button4.setAttribute('data-dismiss', 'modal');

    /** footer */
    div12.appendChild(button4);
    div8.appendChild(div9);
    div8.appendChild(div10);
    div8.appendChild(div12);
    div7.appendChild(div8);
    div6.appendChild(div7);
    /** footer */
    div13.appendChild(label3);
    div13.appendChild(div14);
    div14.appendChild(input5);
    div2.appendChild(label1);
    div2.appendChild(div3);
    div3.appendChild(input1);
    div4.appendChild(label2);
    div4.appendChild(div5);
    div5.appendChild(input2);
    p1.appendChild(button1);
    p1.appendChild(button2);
    form.appendChild(p1);
    form.appendChild(div4);
    form.appendChild(div2);
    form.appendChild(div13);
    div1.appendChild(form);
    creatRepo.appendChild(div1);
    creatRepoDiv.appendChild(div6);
    creatRepoDiv.appendChild(creatRepo);

    document.getElementById('repository_issue' + `${repoName}`).value =
      data.results.entities.repository[0].value;
  }
}
