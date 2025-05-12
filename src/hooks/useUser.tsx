import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_user } from '../redux/features/auth-slice';
import { User } from '../interfaces/auth';
// import { useNavigate } from 'react-router-dom';

export const useUser = () => {
  //   const navigate = useNavigate();
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const dispatch = useDispatch();
  const { user: userData }: { user: User } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    dispatch(get_user());
    setIsLoadingUser(false);
  }, [dispatch]);

  //   const verifyLoggedUser = () => {
  //     if (user?.email) navigate('/login');
  //   };

  return {
    isLoadingUser,
    userData,
    // verifyLoggedUser,
  };
};
