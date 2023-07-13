import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Post[]> {
  const postPageAPI = await postApi.getList({page, per_page: 10});
  return postPageAPI.data.map(postAPI => postAdapter.toPost(postAPI));
}

export const postService = {
  getList,
};
