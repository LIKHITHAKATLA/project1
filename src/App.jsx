

import Navbar from './components/Navbar'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { MembershipIcon } from './components/MembershipIcon';
import { NationalIcon } from './components/NationalIcon';
import { ClubsIcon } from './components/ClubsIcon';
import { MemberIcon } from './components/MemberIcon';
import { EventBooking } from './components/EventBooking';
import { Wallet } from './components/Wallet';
import { Logo1 } from './components/Logo1';
import { Logo2 } from './components/Logo2';
import Logo3 from './components/Logo3';
import { Logo4 } from './components/Logo4'
import { Logo5 } from './components/Logo5'
import { Logo6 } from './components/Logo6'
import { Clubsicon2 } from './components/Clubicon2'
import { MainLogo } from './components/MainLogo'


const clientLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo3]

const cards = [
  {
    title: 'Membership\nOrganisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: <MembershipIcon />,
  },
  {
    title: 'National\nAssociations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: <NationalIcon />,
  },
  {
    title: 'Clubs And\nGroups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: <Clubsicon2 />,
  },
]

const stats = [
  { label: 'Members', value: '2,245,341', icon: <MemberIcon /> },
  { label: 'Clubs', value: '46,328', icon: <ClubsIcon /> },
  { label: 'Event Bookings', value: '828,867', icon: <EventBooking /> },
  { label: 'Payments', value: '1,926,436', icon: <Wallet /> },
]

const blogs = [
  {
    title: `Creating Streamlined
Safeguarding Processes with
OneRen`,
    image: img5,
  },
  {
    title: `What are your safeguarding
responsibilities and how can
you manage them?`,
    image: img6,
  },
  {
    title: `Revamping the Membership
Model with Triathlon
Australia`,
    image: img7,
  },
]

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#18191F]">
      <Navbar />

      <main>
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 pb-12 pt-10 md:flex-row md:justify-between md:gap-16 md:px-12 md:pb-16 md:pt-16">
            <div className="max-w-[600px] text-center md:text-left">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#4D4D4D] md:text-6xl">
                Lessons and insights
                <span className="block text-[#4CAF4F]">from 8 years</span>
              </h1>
              <p className="mt-5 text-sm text-[#717171] md:text-base">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="mt-8 inline-flex rounded bg-[#4CAF4F] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#419946]">
                Register
              </button>
            </div>

            <div className="w-full max-w-[391px]">
              <img loading="eager" decoding="async" src={img1} alt="Business dashboard illustration" width={391} height={220} className="h-auto w-full object-contain" />
            </div>
          </div>

          <div className="flex justify-center gap-2 pb-7">
            <span className="h-2 w-2 rounded-full bg-[#4CAF4F]" />
            <span className="h-2 w-2 rounded-full bg-[#d0d4da]" />
            <span className="h-2 w-2 rounded-full bg-[#d0d4da]" />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-14 md:px-12">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#4D4D4D]">Our Clients</h2>
            <p className="mt-2 text-sm text-[#717171] md:text-base">We have been working with some Fortune 500+ clients</p>
          </div>

          <div className="mt-10 grid grid-cols-4 place-items-center gap-y-6 sm:grid-cols-7">
            {clientLogos.map((LogoComp, index) => (
              <span key={`logo-${index}`} className="inline-flex items-center justify-center">
                <LogoComp />
              </span>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="mx-auto max-w-[620px] text-4xl font-semibold leading-tight text-[#4D4D4D]">
              Manage your entire community
              <span className="block">in a single system</span>
            </h3>
            <p className="mt-3 text-sm text-[#717171] md:text-base">Who is Nextcent suitable for?</p>
          </div>

          <div className="mt-10 grid gap-18 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="mx-auto w-full max-w-[360px] rounded-lg border border-[#eff0f3] bg-white px-7 py-8 text-center shadow-[0_3px_10px_rgba(0,0,0,0.04)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] bg-[#E8F5E9] text-2xl">
                  {card.icon}
                </div>
                <h4 className="whitespace-pre-line text-2xl font-semibold text-[#4D4D4D]">{card.title}</h4>
                <p className="mt-3 text-sm leading-5 text-[#717171]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-4 pb-14 md:grid-cols-2 md:px-12">
          <div className="mx-auto w-full max-w-[420px]">
            <img loading="lazy" decoding="async" src={img2} alt="Two people managing profile" width={420} height={280} className="h-auto w-full object-contain" />
          </div>
          <div>
            <h3 className="text-[36px] font-semibold leading-tight text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h3>
            <p className="mt-5 text-[14px] leading-5 text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="mt-7 rounded bg-[#4CAF4F] px-8 py-3 text-[16px] font-medium text-white transition hover:bg-[#419946]">Learn More</button>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-2 md:px-12">
            <div>
              <h3 className="text-[36px] font-semibold leading-tight text-[#4D4D4D]">
                Helping a local
                <span className="block text-[#4CAF4F]">business reinvent itself</span>
              </h3>
              <p className="mt-3 text-sm text-[#18191F]">We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="inline-flex h-[31.12px] w-[46.78px] items-center justify-center">{item.icon}</span>
                  <div>
                    <p className="text-2xl font-semibold leading-8 text-[#4D4D4D] xl:text-3xl">{item.value}</p>
                    <p className="text-sm text-[#717171]">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-12">
          <div className="mx-auto w-full max-w-[420px]">
            <img loading="lazy" decoding="async" src={img3} alt="Mobile footer design illustration" width={420} height={280} className="h-auto w-full object-contain" />
          </div>
          <div>
            <h3 className="text-4xl font-semibold leading-tight text-[#4D4D4D]">How to design your site footer like we did</h3>
            <p className="mt-5 text-sm leading-5 text-[#717171]">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className="mt-7 rounded bg-[#4CAF4F] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#419946]">Learn More</button>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-[320px_1fr] md:px-12">
            <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-lg shadow-lg">
              <img loading="lazy" decoding="async" src={img4} alt="Customer testimonial" width={280} height={280} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm leading-6 text-[#717171]">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <p className="mt-5 text-2xl font-semibold text-[#4CAF4F]">Tim Smith</p>
              <p className="mt-1 text-sm text-[#89939E]">British Dragon Boat Racing Association</p>

              <div className="mt-7 flex flex-wrap items-center gap-6">
                {clientLogos.slice(0, 6).map((LogoComp, index) => (
                  <span key={`partner-${index}`} className="inline-flex items-center justify-center">
                    <LogoComp />
                  </span>
                ))}
                <a href="#" className="text-[20px] font-semibold text-[#4CAF4F]">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">Meet all customers <HiOutlineArrowLongRight className="shrink-0" /></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-14 md:px-12">
          <div className="text-center">
            <h3 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">Caring is the new marketing</h3>
            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-6 text-[#717171]">
              The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.title} className="mx-auto w-full max-w-[368px]">
                <img loading="lazy" decoding="async" src={blog.image} alt={blog.title} width={368} height={286} className="h-[286px] w-full rounded-[8px] object-cover" />
                <div className="relative z-10 mx-auto -mt-[96px] w-[calc(100%-16px)] max-w-[317px] rounded-[8px] bg-[#F5F7FA] px-4 pb-6 pt-4 text-center shadow-[0_8px_16px_rgba(171,190,209,0.4)] sm:px-6">
                  <p className="whitespace-pre-line text-[18px] font-semibold leading-[28px] text-[#717171]">{blog.title}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-[18px] font-semibold leading-[28px] text-[#4CAF4F]">
                    <span className="inline-flex items-center gap-2 whitespace-nowrap">Readmore <HiOutlineArrowLongRight className="shrink-0" /></span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F7FA] px-4 py-14 text-center md:px-12">
          <h3 className="mx-auto max-w-[760px] text-5xl font-semibold leading-tight text-[#263238]">Pellentesque suscipit fringilla libero eu.</h3>
          <button className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded bg-[#4CAF4F] px-8 py-3 text-[16px] font-medium text-white transition hover:bg-[#419946]">Get a Demo <HiOutlineArrowLongRight className="shrink-0" /></button>
        </section>
      </main>

      <footer className="bg-[#263238] px-4 py-16 text-white md:px-12">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-[350px_1fr_1fr_320px]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MainLogo />
              <span className="text-2xl font-bold leading-6 text-white">Nexcent</span>
            </div>
            <p className="mt-6 text-[14px] leading-[20px] text-[#D9DBE1]">Copyright © 2020 Nexcent ltd.</p>
            <p className="mt-2 text-[14px] leading-[20px] text-[#D9DBE1]">All rights reserved</p>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-4 text-sm text-white/90">
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/10 text-[#F5F7FA] hover:bg-white/20 focus:ring-2 focus:ring-[#4CAF4F] focus:outline-none"><FaInstagram /></a>
              <a href="#" aria-label="Dribbble" className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/10 text-[#F5F7FA] hover:bg-white/20 focus:ring-2 focus:ring-[#4CAF4F] focus:outline-none"><FaDribbble /></a>
              <a href="#" aria-label="Twitter" className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/10 text-[#F5F7FA] hover:bg-white/20 focus:ring-2 focus:ring-[#4CAF4F] focus:outline-none"><FaTwitter /></a>
              <a href="#" aria-label="YouTube" className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/10 text-[#F5F7FA] hover:bg-white/20 focus:ring-2 focus:ring-[#4CAF4F] focus:outline-none"><FaYoutube /></a>
            </div>
          </div>

          <div className="pt-1 text-center md:text-left">
            <h4 className="text-[20px] font-semibold leading-[28px]">Company</h4>
            <ul className="mt-4 space-y-3 text-[14px] leading-[20px] text-[#D9DBE1]">
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">About us</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Blog</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Contact us</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Pricing</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Testimonials</a></li>
            </ul>
          </div>

          <div className="pt-1 text-center md:text-left">
            <h4 className="text-[20px] font-semibold leading-[28px]">Support</h4>
            <ul className="mt-4 space-y-3 text-[14px] leading-[20px] text-[#D9DBE1]">
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Help center</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Terms of service</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Legal</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">Status</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[20px] font-semibold leading-[28px]">Stay up to date</h4>
              <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-2 justify-center md:justify-start w-full">
                <input name="email" aria-label="Email address" type="email" placeholder="Your email address" className="w-full sm:flex-1 max-w-[320px] md:max-w-[255px] lg:max-w-[320px] rounded-lg bg-[#515B60] px-4 py-2 text-[14px] text-[#D9DBE1] placeholder-[#BCC2C6] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]" />
                <button aria-label="Subscribe" className="inline-flex mt-2 sm:mt-0 h-10 w-10 min-w-[40px] items-center justify-center rounded bg-[#4CAF4F] text-white hover:bg-[#3e8b3f] focus:ring-2 focus:ring-[#387a36] focus:outline-none">
                  <RiTelegram2Line className="h-4 w-4" />
                </button>
              </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
