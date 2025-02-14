import Template from '@/components/resume/template';
import ResumeContextProvider from '@/store/resume-context';

export default function BuilderPage() {
  return (
    <ResumeContextProvider>
      <Template />
    </ResumeContextProvider>
  );
}
