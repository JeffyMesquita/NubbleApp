import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: Simulate API call with a delay
  await new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
  return postListMock;
}

export const postApi = {
  getList,
};
