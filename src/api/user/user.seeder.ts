import { hashPasswordSync } from '../../auth/utils/bcrypt';
import { roleSeeder } from '../role/role.seeder';

export const userSeeder = [
  {
    id: 'cliudgpga0000yqh4plghlo7m',
    email: 'k@lo.com',
    firstName: 'khriztian',
    lastName: 'moreno',
    password: hashPasswordSync('1234'),
    avatar: 'https://picsum.photos/200',
    isActive: true,
  },
  {
    id: 'cliudgpga0001yqh4nrxvewib',
    email: 'mafe@lo.com',
    firstName: 'mafe',
    lastName: 'serna',
    password: hashPasswordSync('1234'),
    avatar: 'https://picsum.photos/200',
    isActive: false,
  },
];

export const userByRoleSeeder = [
  // user 1 -> khriztian
  {
    userId: userSeeder[0].id,
    roleId: roleSeeder[0].id,
  },
  {
    userId: userSeeder[0].id,
    roleId: roleSeeder[1].id,
  },
  // user 2 -> mafe
  {
    userId: userSeeder[1].id,
    roleId: roleSeeder[1].id,
  },
];
