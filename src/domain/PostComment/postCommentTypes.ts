export interface PostComment {
  id: number; // 107;
  message: string; // 'Ad excepturi reiciendis.';
  createdAt: string; // '2023-07-27T01:47:42.000-03:00';
  createdAtRelative: string; // '2 hours ago';
  author: {
    id: number; // 8;
    profileURL: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/3-gabriel.png';
    name: string; // 'Gabriel Lemos';
    userName: string; // 'glemos';
  };
}

export interface PostCommentAPI {
  id: number; // 107;
  message: string; // 'Ad excepturi reiciendis.';
  user_id: number; // 8;
  post_id: number; // 1;
  created_at: string; // '2023-07-27T01:47:42.000-03:00';
  updated_at: string; // '2023-07-27T16:12:25.820-03:00';
  user: {
    id: number; // 8;
    first_name: string; // 'Gabriel';
    last_name: string; // 'Lemos';
    username: string; // 'glemos';
    email: string; // 'glemos@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/3-gabriel.png';
    is_online: boolean; // false;
    full_name: string; // 'Gabriel Lemos';
  };
  meta: any; // {};
}
