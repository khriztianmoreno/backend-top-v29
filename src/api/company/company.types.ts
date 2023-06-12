import { Company as CompanyModel, Job as JobModel } from '@prisma/client';

export type Company = CompanyModel;

export interface CompanyWithJobs extends CompanyModel {
  jobs: JobModel[];
}
