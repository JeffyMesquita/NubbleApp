import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';
// import {User} from '../userTypes';

export function useUserGetById(id: number) {
  // const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<boolean | null>(null);
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
  });

  // const fetchUser = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const _user = await userService.getById(id);
  //     setUser(_user);
  //   } catch (err) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);

  return {user: data, isLoading, isError};
}
