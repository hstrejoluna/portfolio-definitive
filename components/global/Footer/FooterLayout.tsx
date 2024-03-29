import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className="bottom-0 w-full bg-black py-12 text-center md:py-20">
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md text-white md:text-xl"
          value={footer}
        />
      )}
    </footer>
  )
}
