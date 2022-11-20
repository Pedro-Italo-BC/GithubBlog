import { IssueItemContainer } from './styles'

import { NavLink } from 'react-router-dom'

import { IssueType } from '../..'
import { useFormatteDateToNow } from '../../../../hooks/useFormatteDateToNow'

interface IssueItemListProps {
  value: IssueType
}

export function IssueItemList({ value }: IssueItemListProps) {
  const date = useFormatteDateToNow(`${value.created_at}`)
  return (
    <IssueItemContainer>
      <NavLink to={`/postpage/${value.number}`}>
        <div>
          <header>
            <h3>{value.title}</h3>

            <span>{date}</span>
          </header>
          <p>{value.body === null ? 'Nâo há nada aqui hehe' : value.body}</p>
        </div>
      </NavLink>
    </IssueItemContainer>
  )
}
