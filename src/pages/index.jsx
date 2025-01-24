import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faGitlab,
  faTwitter,
  faTelegram,
  faWhatsapp,
  faViber
} from '@fortawesome/free-brands-svg-icons'
import { CardEffect } from '@/components/CardEffect'
import { Banner } from '@/components/Banner'
import projects from '@/helper/projects'

export default function Home() {
  const [randomProjects, setRandomProjects] = useState(projects)

  useEffect(() => {
    setRandomProjects(projects.sort(() => 0.5 - Math.random()).slice(0, 3))
  }, [])
  return (
    <>
      <Head>
        <title>Vortex</title>
        <meta name="description" content="Vortex Website" />
      </Head>
      <Container className="mt-9">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 self-center">
          <video
  src="./video1.mp4"
  width={320}
  height={300}
  className="mx-auto scale-110"
  alt="Vortex Logo"
  style={{
    marginLeft: '40px',
    borderRadius: '15px',
    objectFit: 'cover', // Урезать видео
    objectPosition: 'center bottom', // Сместить внизу
  }}
  controls={false} // Отключаем элементы управления
  autoPlay // Видео будет запускаться автоматически
  muted // Молчит, если нужно
  loop // Можно добавить зацикливание
>
  Ваш браузер не поддерживает тег video.
</video>




          </div>
          <div className="mt-10 flex-1 sm:ml-10 lg:ml-0 lg:mt-0">
            <div className="max-w-xl">
              <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#003366] dark:text-green-700 sm:text-6xl md:text-5xl lg:text-6xl">
              VORTEX
              </h1>
              <p className="mt-4 font-mono text-xl leading-7 text-zinc-600 dark:text-zinc-400 ">
              Мы разрабатываем сайты, которые способствуют росту бизнеса,
               устраняя технические барьеры. Наши интеллектуальные чат-боты обеспечивают
               круглосуточную поддержку клиентов и автоматизируют коммуникацию,
                а веб-приложения повышают эффективность цифрового взаимодействия.
              </p>
              <div className="mt-6 ml-4 flex gap-6">
                <Link
                  aria-label="Contact by Mail"
                  className=" text-zinc-500 transition hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-700"
                  href="mailto: info@vortex.of.by"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                </Link>
                <Link
                  aria-label="Follow on Telegram"
                  className=" text-zinc-500 transition hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-700"
                  href="https://t.me/vortexby_bot"
                >
                  <FontAwesomeIcon icon={faTelegram} size="2xl" />
                </Link>
                <Link
                  aria-label="Follow on WhatsApp"
                  className=" text-zinc-500 transition hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-700"
                  href="https://wa.me/375291392222"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                </Link>
                <Link
                  aria-label="Join on Viber"
                  className=" text-zinc-500 transition hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-700"
                  href="viber://chat?number=%2B375291392222"
                >
                  <FontAwesomeIcon icon={faViber} size="2xl" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link href="/about" className="group relative inline-block text-lg">
            <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black">
              <span className="absolute inset-0 h-full w-full rounded-lg bg-white px-5 py-3"></span>
              <span className="absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#003366] transition-all duration-300 ease-in-out group-hover:-rotate-180 dark:bg-green-700"></span>
              <span className="relative font-mono text-xl font-black tracking-tighter">
                Узнать больше
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 mb-3 mr-2 h-14 w-full rounded-lg bg-[#003366] transition-all duration-200 ease-linear group-hover:m-0 dark:bg-green-700"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="grid grid-cols-12">
              <div className=" relative -left-2 top-2 hidden h-12 w-12 translate-x-px transform items-center justify-center rounded-full bg-[#003366] p-2 dark:bg-green-700 md:flex">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="scale-125 font-extrabold text-white dark:text-black"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M7.25 6a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5A.75.75 0 007.25 6zM12 6a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 0012 6zm4 .75a.75.75 0 011.5 0v9.5a.75.75 0 01-1.5 0v-9.5z"></path>
                  <path
                    fillRule="evenodd"
                    d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2H3.75zM3.5 3.75a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25V3.75z"
                  ></path>
                </svg>
              </div>
              <div className="col-span-8 mt-3 self-center lg:col-start-2 lg:-ml-6">
                <h1 className="font-mono text-3xl font-black capitalize tracking-tighter text-zinc-800 dark:text-white">
                  О нас
                </h1>
              </div>
            </div>

            <p className=" font-mono text-lg text-zinc-600 dark:text-zinc-400 ">
            Сэкономьте время, избегайте начала с нуля и создавайте впечатляющие 
            сайты и веб-приложения с легкостью.
             Оставляйте заявку на нашем сайте или воспользуйтесь Telegram, 
            опишите свою проблему и после короткого звонка мы начнем разработку.
            Упростите рабочий процесс и сотрудничайте с нами для создания индивидуальных решений, 
            которые идеально подходят для вашего бизнеса.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-evenly sm:gap-0">
            <Container.Inner>
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {randomProjects.map((project) => (
                  <span key={project.name}>
                    <CardEffect
                      heading={project.name}
                      logo={project.logo}
                      content={project.description}
                    />
                  </span>
                ))}
              </div>
            </Container.Inner>
          </div>
          <div className="mt-12 text-center">
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#003366] px-8 py-3 text-white focus:outline-none active:bg-[#003366] dark:bg-green-700 dark:text-zinc-900"
              href="/projects"
            >
              <span className="absolute right-0 flex-shrink-0 translate-x-full rounded-full border border-current bg-white p-1 text-black transition-transform group-hover:-translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="font-mono font-semibold transition-all group-hover:mr-6">
                View All Projects
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <Container.Outer className="mt-28">
        <Banner />
      </Container.Outer>
    </>
  )
}
