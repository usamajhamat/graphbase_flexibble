
import { footerLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

type ColumnProps = {
  title: string
   Links: Array<string>
}

const FooterColumn = ({ title, Links }: ColumnProps) => (
  <div className="footer-column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {Links.map((link, index) => (
        <li key={index}>
          <Link href={`/${link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the World's Leading Community for creatives to share, grow, and get Hired
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn title={footerLinks[0].title} Links={footerLinks[0].links} />
            <div className='flex-1 flex flex-col gap-4'>
              <FooterColumn title={footerLinks[1].title} Links={footerLinks[1].links} />
              <FooterColumn title={footerLinks[2].title} Links={footerLinks[2].links} />
          </div>
          <FooterColumn title={footerLinks[3].title} Links={footerLinks[3].links} />
            <div className='flex-1 flex flex-col gap-4'>
              <FooterColumn title={footerLinks[4].title} Links={footerLinks[4].links} />
              <FooterColumn title={footerLinks[5].title} Links={footerLinks[5].links} />
          </div>
          <FooterColumn title={footerLinks[6].title} Links={footerLinks[6].links} />
        </div>
       </div>
       <div className='flexBetween footer_copyright'>
        <p>@ 2023 Flexibble. All rights Reserved</p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>10,214</span> Projects Submitted
        </p>
       </div>
    </footer>
  )
}

export default Footer
