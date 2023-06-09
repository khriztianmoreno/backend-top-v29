import { User, UserWithRoles } from '../../api/user/user.types';
import { signToken } from '../auth.service';

export function createAuthResponse(input: User) {
  const payload = {
    id: input.id,
    email: input.email,
  };
  const token = signToken(payload);

  const user = input as UserWithRoles;

  const profile = {
    fullName: `${user.firstName} ${user.lastName}`,
    avatar: user.avatar,
    roles: user.roles.map(({ role }) => ({
      id: role.id,
      name: role.name,
    })),
  };

  return { token, profile };
}
