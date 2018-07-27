import getJSON from '../utility/dataService';

function addUserRecastCall(textByUser) {
  const text = textByUser;
  const recastAPIurl = 'https://api.recast.ai/v2/request?text=';
  return getJSON(recastAPIurl + text);
}

export default addUserRecastCall;
