import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'
import projects from '@/helper/projects'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Услуги</title>
        <meta name="description" content="About AOSSIE's Projects" />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>
            Чат-боты могут быть интегрированы с различными платформами, такими как Telegram, WhatsApp, VK и Instagram, что позволяет автоматизировать коммуникацию с клиентами и обеспечивать более быстрые отклики на запросы. Для сайтов, в зависимости от нужд проекта, можно использовать такие технологии как JavaScript, TypeScript, а также конструкторы WordPress, Tilda. При необходимости, могут быть использованы REST API и базы данных для хранения и обработки информации.
          </p>
        </div>
        <div className='mt-16'>
          <SectionHeading>Наши услуги:</SectionHeading>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 mt-3'></p>
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-12 mb-16">
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/20 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-white/10 dark:shadow-white/10">
                  <Image
                    src={project.logo}
                    alt="Project Logo"
                    className='p-2'
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-2xl font-semibold font-mono text-zinc-800 dark:text-zinc-100">
                  {project.name}
                </h2>
                <Card.Description>{project.description}</Card.Description>
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
