import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const ResumeSection: React.FC<Props> = function ({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection;
