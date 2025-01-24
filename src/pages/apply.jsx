import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { TimelineElement } from '@/components/TimelineElement'

export default function About() {
  return (
    <>
      <Head>
        <title>
          Заявка
        </title>
        <meta
          name="description"
          content="How to apply for GSOC"
        />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>
          Мы обсудим ваш проект, определим ключевые моменты и предложим несколько вариантов решения. Затем мы приступим к разработке, чтобы воплотить вашу идею в реальность. Процесс будет прозрачным и понятным на каждом этапе, от начала до реализации. Просто оставьте заявку!
          </p>
        </div>
        <Container.Inner className='mt-16'>
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
            <TimelineElement
              title="Присоединятесь в телеграмм"
              description="Переходите в нашего чат-бота в Telegram! Там вы сможете рассчитать стоимость вашего проекта, задать любые вопросы и ознакомиться с подробной информацией о наших услугах. Удобный интерфейс и быстрая связь сделают процесс простым и прозрачным. Начните прямо сейчас — ваш проект уже ждет своего старта!"
              button="Перейти в телеграмм"
              link='https://t.me/vortexby_bot'
            />
            <TimelineElement
              title="Свяжитесь с нами напрямую"
              description="Вы можете просто позвонить нам, и мы сразу же вас проконсультируем! Ответим на ваши вопросы, обсудим ваш проект и предложим лучшие решения. Звоните прямо сейчас: +375 29 139 22 22 — мы всегда на связи, чтобы помочь вам!"
              classCondition='hidden'
            />
            
          </ol>

          <div className="mt-20 relative block rounded-3xl dark:bg-white/70 bg-zinc-400/20 p-8 pb-16 shadow-xl">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 font-mono">Форма заявки</h1>

            <form action="mailto:info@vortex.of.by" method="post" enctype="text/plain">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="border border-gray-300 p-3 rounded-lg font-mono"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  className="border border-gray-300 p-3 rounded-lg font-mono"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Электронная почта"
                  className="border border-gray-300 p-3 rounded-lg font-mono"
                />
                <textarea
                  name="description"
                  placeholder="Описание"
                  className="border border-gray-300 p-3 rounded-lg font-mono"
                  rows="4"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-white dark:bg-black dark:text-white text-black px-8 py-3 rounded-lg focus:outline-none hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-transform transform hover:scale-105 font-mono font-bold text-lg"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </Container.Inner>
      </Container>
    </>
  )
}
