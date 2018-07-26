import GetIssueService from './service';
import { StoreManager } from '../utility/store';

class GetIssueController {
  constructor(value) {
    this.service = new GetIssueService();
    this.textByUser = value;
  }

  createRecastCall(textByUser) {
    this.service.RecastCall(textByUser).then(res => {
      const repoName = res.results.entities.repository[0].value;
      StoreManager.dispatch({ type: 'GET_ISSUE', payload: { name: repoName, title: '' } });
    });
  }
}

export default GetIssueController;
