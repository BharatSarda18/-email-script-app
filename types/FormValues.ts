import { JobTypeEnum } from '@/enums/jobTypeEnum';
import { Recipient, UserDetails } from '@/types/email';

export interface FormValues {
  recipients: Recipient[];
  jobType: JobTypeEnum;
  userDetails: UserDetails;
}
