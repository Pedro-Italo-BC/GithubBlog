import { SearchContent } from './styles'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputType = zod.infer<typeof SearchSchema>

interface SearchAreaProps {
  getUserInformation: (query?: string) => Promise<void>
  issuesLength: number
}

export function SearchArea({
  getUserInformation,
  issuesLength,
}: SearchAreaProps) {
  const { register, handleSubmit } = useForm<SearchFormInputType>({
    resolver: zodResolver(SearchSchema),
  })

  function handleSearchIssues(data: SearchFormInputType) {
    getUserInformation(data.query)
  }
  return (
    <SearchContent onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h2>Publicações</h2>
        <span>
          {issuesLength} {issuesLength === 1 ? 'publicação' : 'publicações'}
        </span>
      </header>

      <input
        type="text"
        placeholder="Buscar  conteúdo"
        {...register('query')}
      />
    </SearchContent>
  )
}
