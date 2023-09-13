import { Badge, BanIcon, BarChart, BoxIcon, Building, DivideCircle, HelpCircle, LucideTruck, Router, Settings, StopCircle, Truck, User, UserIcon } from 'lucide-react'

import { NavLinkNested, Sidebar } from './components/sidebar'
import { SidebarContent } from './components/sidebar/content'
import { NavLink } from './components/sidebar/nav-link'
import { AppLayout } from './layouts/Application'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { IUploadImage } from './components/upload-image/types'
import { UploadImage } from './components/upload-image/SingleImage'

const schema = z.object({
  name: z.string()
})


function App() {
  const [image, setImage] = useState<IUploadImage>({ compressed: null, original: null })
  const profile = { role: 'Administrador', name: 'Kevin', lastname: 'blanco' }
  const form = useForm<z.infer<typeof schema>>()

  return (
    <AppLayout>
      <Sidebar
        logout={() => { }}
        profile={profile}
        theme={{ toggleTheme: () => { }, value: 'dark' }}
      >
        <SidebarContent>
          <NavLink
            to='/asd'
            pathname='/asd'
            label='Esto es un label muy largo asi que se va a cortar'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            pathname='/fino'
            label='Todo bien mi compa todo finoo aaaaa'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                to: '/fino',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 2',
                to: '/ecole',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 3',
                to: '/ecol3',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 4',
                to: '/ecol4',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 5',
                to: '/ecol5',
                icon: <User className='dark:text-white' />
              },
            ]}
          />

          <NavLink
            to='/ja'
            pathname='/'
            label='Eventos'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLink
            to='/xd'
            pathname='/'
            label='Lo que sea'
            icon={<Settings className='dark:text-white' size={20} />}
          />


          <NavLink
            to='/xd2'
            pathname='/'
            label='Lo que sea2'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            pathname='/fino'
            label='Epa'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Aja',
                to: '/fino',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 2',
                to: '/ecole',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 3',
                to: '/ecol3',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 4',
                to: '/ecol4',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 5',
                to: '/ecol5',
                icon: <User className='dark:text-white' />
              },
            ]}
          />
          <NavLink
            to='/xd3'
            pathname='/'
            label='Lo que sea3'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            label='Ajustes'
            pathname='/'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Ubicaciones',
                to: '/ajustes/ubicaciones/estados',
                icon: <Building className='dark:text-white' size={20} />
              },
              {
                label: 'Categorias',
                to: '/ajustes/categorias',
                icon: <HelpCircle className='dark:text-white' size={20} />
              },
              {
                label: 'Estados',
                to: '/ajustes/estados',
                icon: <BarChart className='dark:text-white' size={20} />
              },
              {
                label: 'Choferes',
                to: '/ajustes/choferes',
                icon: <Truck className='dark:text-white' size={20} />
              },
              {
                label: 'Flotas',
                to: '/ajustes/flotas',
                icon: <StopCircle className='dark:text-white' size={20} />
              },
              {
                label: 'Marcas de Medidores',
                to: '/ajustes/marcas-de-medidores',
                icon: <Badge className='dark:text-white' size={20} />
              },
              {
                label: 'Medidores',
                to: '/ajustes/medidores',
                icon: <Router className='dark:text-white' size={20} />
              },
              {
                label: 'Marcas de GPS',
                to: '/ajustes/marcas-de-gps',
                icon: <LucideTruck className='dark:text-white' size={20} />
              },
              {
                label: 'Dispositivos GPS',
                to: '/ajustes/dispositivos-gps',
                icon: <DivideCircle className='dark:text-white' size={20} />
              }
            ]}
          />

          <NavLink
            to='/almacenamiento'
            pathname='/'
            label='Almacenamiento'
            icon={<Settings className='dark:text-white' size={20} />}
          />
        </SidebarContent>
      </Sidebar>

      <div className='mx-auto max-w-4xl'>
        <UploadImage
          initialPreview='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
          setUploadImage={setImage}
        />
      </div>
    </AppLayout>
  )
}

export default App
