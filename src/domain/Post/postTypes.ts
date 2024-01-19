export interface Post {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 1
  text: string; // "Hello World"
  user_id: number; // 1
  image_url: string; // "https://picsum.photos/200/300"
  is_fixed: boolean; // false
  is_activated: boolean; // true
  created_at: string; // "2021-01-01T00:00:00.000Z"
  updated_at: string; // "2021-01-01T00:00:00.000Z"
  user: {
    id: number; // 1
    first_name: string; // "John"
    last_name: string; // "Doe"
    username: string; // "johndoe"
    email: string; // "johndoe@gmail"
    profile_url: string; // "https://picsum.photos/200/300"
    is_online: boolean; // true
    full_name: string; // "John Doe"
  };
  status: string; // "published"
  meta: {
    like_count: string; // '0'
    favorite_count: string; // '0'
    comments_count: string; // '0'
  };
}
