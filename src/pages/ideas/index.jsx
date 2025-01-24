import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas'

function Article({ article }) {
  return (
    <article className="flex flex-col">
      <Card className="flex-grow">
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
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
