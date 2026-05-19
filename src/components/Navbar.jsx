import { useState } from 'react'
import { MainLogo } from './MainLogo'

const links = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <MainLogo />
          <span className="text-[20.66px] font-bold tracking-tight text-brand-dark">Nexcent</span>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-text-main transition hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-10 lg:flex">
          <a href="#" className="text-sm font-medium text-[#4CAF4F] transition hover:text-[#419946]">
            Login
          </a>
          <button className="rounded-md bg-[#4CAF4F] px-6 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#419946]">
            Sign up
          </button>
        </div>

        <button
          type="button"
          className="rounded border border-border-muted px-3 py-1.5 text-sm font-medium text-brand-dark lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-border-soft bg-surface px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-3 pt-4">
            {links.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-text-main">
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-[#4CAF4F]">
              Login
            </a>
            <button className="rounded-md bg-[#4CAF4F] px-6 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#419946]">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
