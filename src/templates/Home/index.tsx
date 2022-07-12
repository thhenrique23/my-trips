import LinkWrapper from '@/components/LinkWrapper'
import { GetPlacesQuery } from '@/graphql/generated/graphql'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function HomeTemplate({ places }: GetPlacesQuery) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.thaleshenrique.com.br"
        openGraph={{
          url: 'https://my-trips.thaleshenrique.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
