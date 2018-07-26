import addUserService from './service';
import { StoreManager } from '../utility/store';

class AddUserController {
  constructor(value) {
    this.service = new AddUserService();
    this.textByUser = value;
  }

  createRecastCall(textByUser) {
    this.service.RecastCall(textByUser).then(res => {
      const repoName = res.results.entities.repository[0].value;
      StoreManager.dispatch({ type: 'ADD_USER', payload: { name: repoName, title: '' } });
    });
  }
}

export default AddUserController;
