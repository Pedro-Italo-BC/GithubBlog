import {
  PostHeaderContainer,
  PostHeaderContainerHeader,
  PostHeaderContent,
} from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavLink } from 'react-router-dom'

import { IssueType } from '../../../Home'
import { useFormatteDateToNow } from '../../../../hooks/useFormatteDateToNow'

interface PostHeaderProps {
  data: IssueType
  isLoading: boolean
}

export function PostHeader({ data, isLoading }: PostHeaderProps) {
  console.log(data)

  const date = useFormatteDateToNow(`${data.created_at}`)
  return (
    <PostHeaderContainer>
      {!isLoading && (
        <>
          <PostHeaderContainerHeader>
            <NavLink to={'/'}>{'<'} VOLTAR</NavLink>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
            </a>
          </PostHeaderContainerHeader>

          <PostHeaderContent>
            <h1>{data.title}</h1>
            <ul>
              <li>
                {' '}
                <FontAwesomeIcon icon={faGithub} />
                {data.user.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDay} />
                {date}
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
                {data.comments}{' '}
                {data.comments === 1 ? 'Comentário' : 'Comentários'}
              </li>
            </ul>
          </PostHeaderContent>
        </>
      )}
    </PostHeaderContainer>
  )
}
