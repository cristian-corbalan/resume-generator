import ResumeSection from '@/components/resume/section';

export default function BuilderPage() {
  return (
    <div className="bg-gray-50 text-gray-950 max-w-[1030px] min-h-[1457px]">
      <header className="p-10 pb-4">
        <h1 className="font-bold text-4xl mb-2">FULL NAME</h1>
        <p className="font-medium text-2xl">TITLE</p>
      </header>
      <main className="px-10 pt-6 flex gap-8">
        <div className="w-8/12">
          <ResumeSection title="Resumen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur doloremque obcaecati qui
              reprehenderit! Architecto assumenda atque beatae cum cupiditate, delectus est illum, iure libero pariatur
              repellat repellendus, sapiente sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur doloremque obcaecati qui
              reprehenderit! Architecto assumenda atque beatae cum cupiditate, delectus est illum, iure libero pariatur
              repellat repellendus, sapiente sunt.
            </p>
          </ResumeSection>
          <ResumeSection title="Experiencia">
            <article>
              <h3 className="font-bold text-lg mb-1">ROLE AND COMPANY</h3>
              <p className="font-light mb-1.5">
                Month Year - Present · 1 yr 8 mos [City, Country] [Industry or business, Type of company]
              </p>
              <h4 className="font-bold mb-2">Responsabilidades</h4>
              <ul className="pl-4 list-disc">
                <li>Item 01</li>
                <li>Item 02</li>
                <li>Item 03</li>
              </ul>
            </article>
          </ResumeSection>
          <ResumeSection title="Educación">
            <ul className="pl-4">
              <li className="mb-2">
                <h3 className="font-medium text-lg mb-1.5">Education Title at School, University, Center…</h3>
                <p className="font-light">Month Year - Month Year [City, Country]</p>
              </li>
              <li className="mb-2">
                <h3 className="font-medium text-lg mb-1.5">Education Title at School, University, Center…</h3>
                <p className="font-light">Month Year - Month Year [City, Country]</p>
              </li>
            </ul>
          </ResumeSection>
        </div>
        <div className="w-4/12">
          <ResumeSection title="Contacto">
            <ul>
              <li>COUNTRY</li>
              <li>PHONE</li>
              <li>E-mail</li>
              <li>WEBSITE</li>
            </ul>
          </ResumeSection>
          <ResumeSection title="Habilidades">
            <ul>
              <li>SKILL</li>
              <li>SKILL</li>
              <li>SKILL</li>
              <li>SKILL</li>
              <li>SKILL</li>
            </ul>
          </ResumeSection>
          <ResumeSection title="Idiomas">
            <ul>
              <li>IDIOM (LEVEL)</li>
              <li>IDIOM (LEVEL)</li>
            </ul>
          </ResumeSection>
        </div>
      </main>
    </div>
  );
}
