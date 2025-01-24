import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import BlackLogo from '@/images/fotor.png'

export default function About() {
  return (
    <>
      <Head>
        <title>О нас - Vinokurov Studio</title>
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
          </div>
          <div className="lg:pl-20">
          </div>
        </div>
      </Container>
    </>
  )
}
