import {
  ProfileContainer,
  ProfileContent,
  ProfileContentHeader,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { UserInformationType } from '../..'

interface ProfileContainerHeaderProps {
  personalInfo: UserInformationType
}

export function ProfileContainerHeader({
  personalInfo,
}: ProfileContainerHeaderProps) {
  return (
    <ProfileContainer>
      <img src={personalInfo.img} alt="" />
      <div>
        <ProfileContentHeader>
          <h1>{personalInfo.name}</h1>
          <a href={personalInfo.githubLink} target="_blank" rel="noreferrer">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileContentHeader>

        <ProfileContent>
          <p>{personalInfo.bio}</p>

          <ul>
            <li>
              {' '}
              <FontAwesomeIcon icon={faGithub} />
              {personalInfo.login}
            </li>

            <li>
              <FontAwesomeIcon icon={faBuilding} />

              {personalInfo.company === null ? 'N/A' : personalInfo.company}
            </li>

            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {personalInfo.followers}{' '}
              {personalInfo.followers === 1 ? 'seguidor' : 'seguidores'}
            </li>
          </ul>
        </ProfileContent>
      </div>
    </ProfileContainer>
  )
}
