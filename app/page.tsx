import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' 
      style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[40px] text-white font-semibold'>
            Você pode fazer de tudo com 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {" "}
              Desenvolvimento Web!
            </span>
          </h1>
          <p className='text-gray-200 hidden md:block'>
            Transforme ideias em realidade! Como desenvolvedor front-end, eu trago sua visão para a vida digital, 
            criando experiências incríveis na web.
          </p>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            
            <Link href="/my-skills" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-white max-w-[200px]'>
              Saiba Mais
            </Link>

            <Link href="/my-projects" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-white max-w-[200px]'>
              <div className='absolute rounde-[20px] z-[1] bg-white inset-0 opacity-0 '/>
              Projetos
            </Link>

            <Link href="/contact-me" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-white max-w-[200px]'>
              <div className='absolute rounde-[20px] z-[1] bg-white inset-0 opacity-0 '/>
             Contato
            </Link>


          </div>
        </div>
      </div>
      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
            <Link href="/my-skills" className='rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              Saiba Mais
            </Link>
            <Link href="/my-skills" className='rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              Projetos
            </Link>
            <Link href="/my-skills" className='rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
             Contato
            </Link>


          </div>
          <div className='absolute bottom-0 right-0 z-[10]'>
          <Image 
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className='absolute right-55 top-40'
          />
          <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
          </div>
          <div className='absolute bottom-0 z-[5] w-full h-auto'>
            <Image 
              src="/trees.webp"
              alt="trees"
              width={2000}
              height={2000}
            />
          </div>
          <Image 
            src="/stars.png"
            alt="stars"
            height={300}
            width={300}
            className='absolute top-10 left-0 z-[10]'
            />
    </main>
  );
}
