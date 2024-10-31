import React from 'react';

import {Post} from '@domain';
import {render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

const mockedPost: Post = {
  id: 1,
  imageURL: 'https://picsum.photos/200/300',
  commentCount: 5,
  favoriteCount: 10,
  reactionCount: 15,
  text: 'This is a post text',
  author: {
    id: 1,
    name: 'John Doe',
    profileURL: 'https://picsum.photos/200/300',
    userName: 'johndoe',
  },
};

describe('<PostBottom />', () => {
  test('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });
});
