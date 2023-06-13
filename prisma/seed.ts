import { PrismaClient } from '@prisma/client';

import { roleSeeder } from '../src/api/role/role.seeder';
import { userSeeder, userByRoleSeeder } from '../src/api/user/user.seeder';
import { companiesSeeder } from '../src/api/company/company.seeder';

const prisma = new PrismaClient();

async function main() {
  // Crear muchos roles
  const createRoles = await prisma.role.createMany({
    data: roleSeeder,
    skipDuplicates: true,
  });

  const createUsers = await prisma.user.createMany({
    data: userSeeder,
    skipDuplicates: true,
  });

  const createUsersByRole = await prisma.userRole.createMany({
    data: userByRoleSeeder,
    skipDuplicates: true,
  });

  const createCompanies = await prisma.company.createMany({
    data: companiesSeeder,
    skipDuplicates: true,
  });

  console.log({ createRoles, createUsers, createUsersByRole, createCompanies });
}

main()
  .then(() => {
    console.log('Seed complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
