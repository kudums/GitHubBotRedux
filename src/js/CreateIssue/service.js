import getJSON from '../utility/dataService';

function recastCall(textByUser) {
  const text = textByUser;
  const recastAPIurl = 'https://api.recast.ai/v2/request?text=';
  return getJSON(recastAPIurl + text);
}

export default recastCall;
