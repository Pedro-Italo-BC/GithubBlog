import { PostPageContainer } from './styles'
import { PostHeader } from './components/PostHeader'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

import { useEffect, useState } from 'react'

import { IssueType } from '../Home'

import { MainContent } from './components/MainContent'
const userName = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_GITHUB_REPO

export function PostPage() {
  const { id } = useParams()

  const [issueState, setIssueState] = useState<IssueType>({} as IssueType)
  const [isLoading, setIsLoading] = useState(true)

  console.log(id)

  async function getGithubIssue() {
    try {
      setIsLoading(true)

      const response = await api(`/repos/${userName}/${repoName}/issues/${id}`)

      setIssueState(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getGithubIssue()
  }, [])

  return (
    <PostPageContainer>
      <PostHeader data={issueState} isLoading={isLoading} />

      <MainContent body={issueState.body} />
    </PostPageContainer>
  )
}
