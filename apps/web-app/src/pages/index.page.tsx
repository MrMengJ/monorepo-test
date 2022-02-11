import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Entry: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return null;
};

export default Entry;
