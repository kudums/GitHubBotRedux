import CreateIssueService from './service';
import { StoreManager } from '../utility/store';

class CreateIssueController {
  constructor(value) {
    this.service = new CreateIssueService();
    this.textByUser = value;
  }

  createRecastCall(textByUser) {
    this.service.RecastCall(textByUser).then(res => {
      const repoName = res.results.entities.repository[0].value;
      StoreManager.dispatch({ type: 'CREATE_ISSUE', payload: { name: repoName, title: '' } });
    });
  }
}

export default CreateIssueController;
