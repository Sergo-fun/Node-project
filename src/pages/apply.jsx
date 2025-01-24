import Head from 'next/head'
import { Container } from '@/components/Container'
import { useState } from 'react'

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectIdea: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Формируем ссылку для отправки письма
    const mailtoLink = `mailto:info@vortex.of.by?subject=Заявка на проект Vortex&body=Имя: ${formData.name}%0AEmail: ${formData.email}%0AТелефон: ${formData.phone}%0AИдея проекта: ${formData.projectIdea}`

    // Открываем почтовое приложение с предзаполненным письмом
    window.location.href = mailtoLink
    alert('Заявка отправлена! Проверьте почтовое приложение.')
  }

  return (
    <>
      <Head>
        <title>Подать заявку на проект</title>
        <meta name="description" content="Подайте заявку на участие в проекте Vortex для Google Summer of Code 2024" />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className="text-lg leading-7 font-mono text-gray-600 dark:text-gray-300">
            Заполните форму ниже, чтобы подать заявку и после этого мы свяжемся с вами в ближайшие 2 часа!
            
          </p>
        </div>

        <Container.Inner className="mt-16 max-w-2xl mx-auto"> {/* Сделано чуть шире */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                Ваш email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                Ваш телефон
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="projectIdea" className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                Идея проекта
              </label>
              <textarea
                name="projectIdea"
                id="projectIdea"
                value={formData.projectIdea}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                rows="4"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#003366] text-white dark:bg-green-700 px-8 py-3 focus:outline-none hover:bg-indigo-700 dark:hover:bg-green-600"
              >
                <span className="font-mono font-semibold text-center text-white">
                  Отправить заявку
                </span>
              </button>
            </div>
          </form>
        </Container.Inner>
      </Container>
    </>
  )
}
