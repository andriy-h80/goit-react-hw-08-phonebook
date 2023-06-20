import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, Username, ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonLogOut>
    </Wrapper>
  );
};
