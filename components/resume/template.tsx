'use client';

import ResumeSection from '@/components/resume/section';
import { ResumeContext } from '@/store/resume-context';
import React, { useContext } from 'react';

const Template: React.FC = function () {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="bg-gray-50 text-gray-950 max-w-[1030px] min-h-[1457px]">
      <header className="p-10 pb-4">
        <h1 className="font-bold text-4xl mb-2">{resumeData.name}</h1>
        <p className="font-medium text-2xl">{resumeData.title}</p>
      </header>
      <main className="px-10 pt-6 flex gap-8">
        <div className="w-8/12">
          <ResumeSection title="Resumen">
            <p>{resumeData.resume}</p>
          </ResumeSection>
          <ResumeSection title="Experiencia">
            {resumeData.workExperience.map((work) => {
              return (
                <article key={work.role} className="mb-4">
                  <h3 className="font-bold text-lg mb-1">
                    {work.role}, {work.company}
                  </h3>
                  <p className="font-light mb-1.5">
                    {work.startDate.getFullYear()} -{' '}
                    {work.endDate === 'present' ? 'Present' : work.endDate.getFullYear()} · {work.location}
                  </p>
                  <h4 className="font-bold mb-2">Responsabilidades</h4>
                  <ul className="pl-4 list-disc whitespace-pre-line">{work.responsibilities}</ul>
                </article>
              );
            })}
          </ResumeSection>
          <ResumeSection title="Educación">
            <ul className="pl-4">
              {resumeData.education.map((education) => {
                return (
                  <li key={education.degree} className="mb-2">
                    <h3 className="font-medium text-lg mb-1.5">
                      {education.degree} en {education.school}
                    </h3>
                    <p className="font-light">
                      {education.startDate.getFullYear()} -{' '}
                      {education.endDate === 'present' ? 'Present' : education.endDate.getFullYear()} [
                      {education.location}]
                    </p>
                  </li>
                );
              })}
            </ul>
          </ResumeSection>
        </div>
        <div className="w-4/12">
          <ResumeSection title="Contacto">
            <ul>
              <li>{resumeData.country}</li>
              <li>{resumeData.phone}</li>
              <li>{resumeData.email}</li>
              <li>{resumeData.website}</li>
            </ul>
          </ResumeSection>
          <ResumeSection title="Habilidades">
            <ul className="list-disc pl-4">
              {resumeData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </ResumeSection>
          <ResumeSection title="Idiomas">
            <ul>
              {resumeData.languages.map((language) => (
                <li key={language.name}>
                  {language.name}
                  {language.level ? `(${language.level})` : ''}
                </li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </main>
    </div>
  );
};
export default Template;
