import {PageAPI} from 'src/api/apiTypes';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: Simulate API call with a delay

  let response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.LjOlWqKn1CX97KxXLNmAm9D5gPgMCVQzwiH6dBcJPRkNBMAbgu2jJRcGIwUv',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
