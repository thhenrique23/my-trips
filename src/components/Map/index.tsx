import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[-8.4844765, -34.9996923]}
      zoom={3}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, location, slug }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
            key={id}
            position={[latitude, longitude]}
            title={name}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
