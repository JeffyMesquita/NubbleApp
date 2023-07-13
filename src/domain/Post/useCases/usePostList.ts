import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.currentPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.currentPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    loading,
    error,
    postList,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
