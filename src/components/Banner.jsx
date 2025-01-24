import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section aria-label="Баннер" className="scroll-mt-14 bg-[#003366] dark:bg-green-700 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <Pattern className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Повышайте бизнес с помощью наших решений по разработке сайтов и чат-ботов
            </h2>
            <p className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Узнайте, как наши индивидуальные сайты и умные чат-боты могут улучшить поддержку клиентов, повысить эффективность и улучшить взаимодействие с пользователями. Давайте работать вместе, чтобы вывести ваше цифровое присутствие на новый уровень!
            </p>
            <div className="mt-5">
              <Link href="/contact" legacyBehavior>
                <a className="group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none font-mono font-semibold">
                  Связаться с нами
                </a>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
