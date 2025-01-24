import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';
import { useState, useEffect } from 'react';

export function Banner() {
  return (
    <section aria-label="Баннер" className="scroll-mt-14 bg-[#003366] dark:bg-green-900 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <Pattern className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Улчшайте бизнес с помощью наших решений по разработке сайтов и чат-ботов
            </h2>
            <p className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Узнайте, как наши индивидуальные сайты и умные чат-боты могут улучшить поддержку клиентов, повысить эффективность и улучшить взаимодействие с пользователями. Давайте работать вместе, чтобы вывести ваше цифровое присутствие на новый уровень!
            </p>
            <div className="mt-5">
              <Link href="https://t.me/pablo_revolucionarios" passHref className="group relative inline-block text-lg mt-8">
                <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 transition-all duration-500 ease-in-out transform group-hover:translate-x-6 group-hover:text-white dark:group-hover:text-black">
                  <span className="absolute inset-0 h-full w-full rounded-lg bg-white"></span>
                  <span className="absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#003366] transition-all duration-300 ease-in-out group-hover:-rotate-180 dark:bg-green-900"></span>
                  <span className="relative font-mono text-xl font-black tracking-tighter">
                    Связаться с менеджером
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 mb-3 mr-2 h-14 w-full rounded-lg bg-[#003366] transition-all duration-200 ease-linear group-hover:m-0 dark:bg-green-900"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}