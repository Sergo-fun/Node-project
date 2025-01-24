import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link' // Не забыть импортировать Link

import { Container } from '@/components/Container'
import BlackLogo from '@/images/camp.png'

export default function About() {
  return (
    <>
      <Head>
        <title>О нас</title>
        <meta
          name="description"
          content="О нас - Vinokurov Studio"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={BlackLogo}
                alt="Логотип Vinokurov Studio"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-none object-contain"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-black font-mono tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Vortex
            </h1>
            <div className="mt-6 space-y-7 text-base font-mono text-zinc-600 dark:text-zinc-400">
              <p>
                Мы — динамично развивающаяся компания, предоставляющая услуги по созданию сайтов, чат-ботов, веб-приложений для Telegram, которые помогают бизнесу эффективно работать в онлайне.
              </p>
              <p>
                Реализуем проекты для клиентов, которым важны инновации, креативность и надёжность. Наша миссия — создавать технологичные решения, которые действительно работают.
              </p>
              <p>
                Vortex открыта для сотрудничества. Мы с удовольствием поможем воплотить ваши идеи в реальность, будь то интеграция Telegram, разработка ботов или создание сайта. Давайте работать вместе!
              </p>
            </div>
            {/* Добавленная кнопка */}
            <Link href="https://t.me/vortexby_bot" passHref className="group relative inline-block text-lg mt-8">
              <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 transition-all duration-500 ease-in-out transform group-hover:translate-x-6 group-hover:text-white dark:group-hover:text-black">
                <span className="absolute inset-0 h-full w-full rounded-lg bg-white px-5 py-3"></span>
                <span className="absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#003366] transition-all duration-300 ease-in-out group-hover:-rotate-180 dark:bg-green-900"></span>
                <span className="relative font-mono text-xl font-black tracking-tighter">
                  Перейти в телеграмм бота
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 mb-3 mr-2 h-14 w-full rounded-lg bg-[#003366] transition-all duration-200 ease-linear group-hover:m-0 dark:bg-green-900"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
          <div className="lg:pl-20">
          </div>
        </div>
      </Container>
    </>
  )
}
