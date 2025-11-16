import { JobTypeEnum } from '@/enums/jobTypeEnum';
import { getExperienceText, getRoleDescription } from './helpers';
import { UserDetails, Recipient } from '@/types/email';

export function getEmailTemplate(
  userDetails: UserDetails,
  recipient: Recipient,
  jobType: JobTypeEnum
): string {
  const {
    yourName,
    currentCompany,
    role,
    targetCompany,
    resumeLink,
    linkedIn,
    jobLink,
  } = userDetails;

  const experienceText = getExperienceText(jobType, currentCompany);
  const roleDescription = getRoleDescription(jobType);

  return `<p>Hi ${recipient.name},</p>

<p>I hope you're doing well.</p>

<p>
I came across an exciting opportunity for <b>${role}</b> at <b>${targetCompany}</b> and wanted to express my keen interest in it.
</p>

<p>
${experienceText}
</p>

<p>
I would love the opportunity to contribute to ${targetCompany}'s mission and would appreciate it if you could consider my profile for the role.
</p>

<p>
I've attached my <a href="${resumeLink}"><b>Resume</b></a> and <a href="${linkedIn}"><b>LinkedIn</b></a>${jobLink ? `, along with the <a href="${jobLink}"><b>Job Opening</b></a>` : ''} for your quick reference.
</p>

<p>
Thank you for your time and consideration. Looking forward to hearing from you!
</p>

<p>
Warm regards,<br>
<b>${yourName}</b><br>
${roleDescription}<br>
${linkedIn}<br>
${process.env.PORTFOLIO_URL || ''}<br>
${process.env.CONTACT_PHONE || ''} | ${process.env.CONTACT_EMAIL || ''}
</p>`;
}
