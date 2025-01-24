import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full py-1 px-4 text-[#003366] dark:text-green-900 ring-1 ring-inset ring-[#003366] dark:ring-green-900'
      )}
      {...props}
    >
      <span className="font-mono text-base font-semibold" aria-hidden="true">
      </span>
      {/* <span className="ml-3 h-3.5 w-px bg-blue-600/20 dark:bg-white" /> */}
      <span className="ml-3 text-base font-semibold font-mono tracking-tighter">
        {children}
      </span>
    </h2>
  )
}
