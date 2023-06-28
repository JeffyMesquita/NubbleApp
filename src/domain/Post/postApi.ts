import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: Simulate API call with a delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(postListMock);
    }, 500);
  });
}

export const postApi = {
  getList,
};
