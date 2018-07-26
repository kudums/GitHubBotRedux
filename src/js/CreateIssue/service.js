import DataService from '../utility/dataService';

export default class CreateIssueService {
  constructor() {
    this.dataService = new DataService();
  }

  RecastCall(textByUser) {
    const text = textByUser;
    const recastAPIurl = 'https://api.recast.ai/v2/request?text=';
    return this.dataService.getJSON(recastAPIurl + text);
  }
}
