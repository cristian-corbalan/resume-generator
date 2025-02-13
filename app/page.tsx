import Button from '@/components/button';
import HomeBannerImage from '@/public/home_banner.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-[40%_30%] content-center justify-center items-center">
      <div>
        <h1 className="font-bold text-8xl mb-6">InteractCV</h1>
        <p className="text-gray-800 dark:text-gray-300 mb-6 text-xl">
          Crea un CV profesional y visualmente atractivo de forma interactiva y sencilla. Llena formularios, personaliza
          el diseño y descarga un PDF listo para enviar. ¡Destaca desde el primer clic!
        </p>
        <Link href="builder">
          <Button>Crear mi Curriculum Vitae</Button>
        </Link>
      </div>
      <div>
        <Image src={HomeBannerImage} alt="Crear un curriculum viate nunca fue tan fácil como con InteractCV" />
      </div>
    </div>
  );
}
