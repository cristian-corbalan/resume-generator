export interface Language {
  name: string;
  level: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | 'present';
  responsibilities: string;
}

export interface Education {
  degree: string;
  location: string;
  school: string;
  startDate: Date;
  endDate: Date | 'present';
}

export interface ResumeData {
  name: string;
  title: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  resume: string;
  workExperience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
}

export interface ResumeContextInterface {
  resumeData: ResumeData;
  updateResumeKey: UpdateResumeKeyFn;
}

export type ResumeDataKeys = keyof ResumeContextInterface['resumeData'];
export type UpdateResumeKeyFn = (key: ResumeDataKeys, value: unknown) => void;
