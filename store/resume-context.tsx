'use client';

import { fakeResumeData, resumeDataEmptyValue } from '@/util/constants';
import { ResumeContextInterface, ResumeData, UpdateResumeKeyFn } from '@/util/resume';
import React, { createContext, useState } from 'react';

export const ResumeContext = createContext<ResumeContextInterface>({
  resumeData: resumeDataEmptyValue,
  updateResumeKey() {},
});

interface Props {
  children: React.ReactNode;
}

const ResumeContextProvider: React.FC<Props> = function ({ children }) {
  const [resumeInfo, setResumeInfo] = useState<ResumeData>(fakeResumeData);

  const handleUpdateResume: UpdateResumeKeyFn = function (key, value) {
    setResumeInfo((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const context: ResumeContextInterface = {
    resumeData: resumeInfo,
    updateResumeKey: handleUpdateResume,
  };

  return <ResumeContext.Provider value={context}>{children}</ResumeContext.Provider>;
};
export default ResumeContextProvider;
