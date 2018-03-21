import { helper } from '@ember/component/helper';

export function indexCounter(params) {
  const val=parseFloat(params);
  return val+1;
}

export default helper(indexCounter);
