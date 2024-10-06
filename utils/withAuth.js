import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const userId = localStorage.getItem('user_id'); // Get user ID from local storage
      if (!userId) {
        // If user is not logged in, redirect to login page
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
