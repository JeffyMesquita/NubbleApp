export interface User {
  id: number; // 1
  firstName: string; // 'John'
  lastName: string; // 'Doe'
  username: string; // 'johndoe'
  email: string; // 'johndoe@email.com
  profileUrl: string; // 'https://www.johndoe.com'
  isOnline: boolean; // true
  fullName: string; // 'John Doe'
}

export interface UserAPI {
  id: number; // 1
  first_name: string; // 'John'
  last_name: string; // 'Doe'
  username: string; // 'johndoe'
  email: string; // 'john@doe'
  profile_url: string; // 'https://www.johndoe.com'
  is_online: boolean; // true
  full_name: string; // 'John Doe'
}
