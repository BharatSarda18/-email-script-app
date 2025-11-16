import { ExperinceTextEnum } from '@/enums/experinceTextEnum';
import { JobTypeEnum, JobTypeLabel } from '@/enums/jobTypeEnum';

/**
 * Get resume link based on job type from environment variables
 * @param jobType - The job type enum value
 * @returns The resume link URL for the specified job type
 */
export const getResumeLink = (jobType: JobTypeEnum): string => {
  switch (jobType) {
    case JobTypeEnum.FRONTEND:
      return process.env.NEXT_PUBLIC_RESUME_LINK_FRONTEND || '';
    case JobTypeEnum.BACKEND:
      return process.env.NEXT_PUBLIC_RESUME_LINK_BACKEND || '';
    case JobTypeEnum.FULLSTACK:
      return process.env.NEXT_PUBLIC_RESUME_LINK_FULLSTACK || '';
    default:
      return '';
  }
};

/**
 * Get experience text based on job type and current company
 * @param jobType - The job type enum value
 * @param currentCompany - The current company name
 * @returns The experience description text
 */
export const getExperienceText = (
  jobType: JobTypeEnum,
  currentCompany: string
): string => {
  switch (jobType) {
    case JobTypeEnum.FRONTEND:
      return ExperinceTextEnum.FRONTEND.replace(
        '${currentCompany}',
        currentCompany
      );
    case JobTypeEnum.BACKEND:
      return ExperinceTextEnum.BACKEND.replace(
        '${currentCompany}',
        currentCompany
      );
    case JobTypeEnum.FULLSTACK:
      return ExperinceTextEnum.FULLSTACK.replace(
        '${currentCompany}',
        currentCompany
      );
    default:
      return ExperinceTextEnum.DEFAULT.replace(
        '${currentCompany}',
        currentCompany
      );
  }
};

/**
 * Get role description based on job type
 * @param jobType - The job type enum value
 * @returns The role description text
 */
export const getRoleDescription = (jobType: JobTypeEnum): string => {
  switch (jobType) {
    case JobTypeEnum.FRONTEND:
      return JobTypeLabel.FRONTEND;
    case JobTypeEnum.BACKEND:
      return JobTypeLabel.BACKEND;
    case JobTypeEnum.FULLSTACK:
      return JobTypeLabel.FULLSTACK;
    default:
      return JobTypeLabel.FULLSTACK;
  }
};
