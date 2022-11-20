import { HomeContainer, IssuesList, ListContainer } from './styles'

import { ProfileContainerHeader } from './components/ProfileContainerHeader/index'
import { IssueItemList } from './components/IssueItemList/index'

import { useEffect, useState, useCallback } from 'react'

import { SearchArea } from './components/SearchArea'

import { api } from '../../lib/axios'

const userName = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_GITHUB_REPO

export interface IssueType {
  title: string
  body: string
  created_at: Date
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export interface UserInformationType {
  img: string
  name: string
  githubLink: string
  company: string | null
  followers: number
  login: string
  bio: string
}

export function Home() {
  const [issuesList, setIssuesList] = useState<IssueType[]>([])

  const [personalInfo, setPersonalInfo] = useState<UserInformationType>(
    {} as UserInformationType,
  )

  const getUserInformation = useCallback(async () => {
    const response = await api.get(`/users/${userName}`)

    const data = response.data
    // console.log(response.data)

    setPersonalInfo({
      name: data.name,
      company: data.company,
      followers: data.followers,
      githubLink: data.html_url,
      img: data.avatar_url,
      login: data.login,
      bio: data.bio,
    })
  }, [])

  const getGithubIssues = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
    )
    setIssuesList(response.data.items)
  }, [])

  useEffect(() => {
    getUserInformation()
    getGithubIssues()
  }, [])

  console.log(issuesList)

  return (
    <HomeContainer>
      <ProfileContainerHeader personalInfo={personalInfo} />

      <SearchArea
        getUserInformation={getGithubIssues}
        issuesLength={issuesList.length}
      />

      <ListContainer>
        <IssuesList>
          {issuesList.map((value) => {
            return <IssueItemList key={value.number} value={value} />
          })}
        </IssuesList>
      </ListContainer>
    </HomeContainer>
  )
}
