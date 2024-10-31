import React from 'react';

import {Post} from '@domain';
import {fireEvent, render, screen} from 'test-utils';

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

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('navigates to PostCommentScreen when  pressing the comment link', () => {
    render(<PostBottom {...mockedPost} />);

    const commentLinkElement = screen.getByText(/ver 5 comentários/);

    fireEvent.press(commentLinkElement);

    // expect call navigate function with params
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
