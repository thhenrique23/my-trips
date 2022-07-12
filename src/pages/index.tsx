import { GetStaticProps } from 'next'
import HomeTemplate from '@/templates/Home'
import { GetPlacesQuery } from '@/graphql/generated/graphql'
import { GET_PLACES } from '@/graphql/queries'
import client from '@/graphql/client'

export default function Home({ places }: GetPlacesQuery) {
  return <HomeTemplate places={places}></HomeTemplate>
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
