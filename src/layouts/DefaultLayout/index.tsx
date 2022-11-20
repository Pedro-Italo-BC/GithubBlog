import { Header } from '../../conponets/Header'
import { Outlet } from 'react-router-dom'

import { DefaultLayoutContainer, DefaultLayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  )
}
