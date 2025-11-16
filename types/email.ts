export interface UserDetails {
  yourName: string;
  currentCompany: string;
  role: string;
  targetCompany: string;
  resumeLink: string;
  linkedIn: string;
  jobLink?: string;
}

export interface Recipient {
  email: string;
  name: string;
}
