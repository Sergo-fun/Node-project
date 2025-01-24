import Link from 'next/link'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faTelegram, faTwitter, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#003366] dark:hover:text-green-900"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-5 text-md font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">О нас</NavLink>
                <NavLink href="/projects">Услуги</NavLink>
                <NavLink href="/ideas">Цены</NavLink>
                <NavLink href="/apply">Оставить заявку</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2025 Vortex. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link aria-label="Contact by Mail" className=' text-zinc-400 hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-900 transition' href='mailto:info@vortex.of.by'>
                  <FontAwesomeIcon icon={faEnvelope} size='xl' />
                </Link>
                <Link aria-label="Follow on Telegram" className=' text-zinc-400 hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-900 transition' href='https://t.me/vortexby_bot'>
                  <FontAwesomeIcon icon={faTelegram} size='xl' />
                </Link>
                <Link aria-label="Follow on WhatsApp" className=' text-zinc-400 hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-900 transition' href='https://wa.me/375291392222'>
                  <FontAwesomeIcon icon={faWhatsapp} size='xl' />
                </Link>
                <Link aria-label="Join on Viber" className=' text-zinc-400 hover:text-[#003366] dark:text-zinc-400 dark:hover:text-green-900 transition' href='viber://chat?number=%2B375291392222'>
                  <FontAwesomeIcon icon={faViber} size='xl' />
                </Link>
                </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
