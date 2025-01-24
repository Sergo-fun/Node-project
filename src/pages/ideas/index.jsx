import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas'

function Article({ article }) {
  return (
    <article className="mt-5 sm:mt-0 md:grid md:grid-flow-col md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/ideas/2024/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Подробнее</Card.Cta>
      </Card>
    </article>
  )
}

export default function Ideas({ articles }) {
  return (
    <>
      <Head>
        <title>Список идей</title>
        <meta name="description" content="Список идей от Vortex" />
      </Head>
      <Container className="mt-20 mb-28">
        <div>
          <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Добро пожаловать в мир инноваций вместе с <b>Vortex</b>. Мы предлагаем
            вам уникальные возможности для создания и воплощения проектов, которые
            помогут бизнесу эффективно работать в онлайне. Наш список идей — это
            ваш стартовый пункт, чтобы начать создавать чат-ботов, веб-приложения
            или интеграции с Telegram. Подключайтесь к нашей команде и превращайте
            свои идеи в реальность!
          </p>
        </div>
        <Container.Inner>
          <div className="mt-10 flex justify-center sm:mt-20">
            <div className="grid gap-6 gap-y-8 md:grid-flow-col md:grid-rows-4">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
           
          </div>
        </Container.Inner>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
    },
  }
}
