import { MainContentContainer } from './styles'

import ReactMarkdown from 'react-markdown'

import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface MainContentProps {
  body: string
}

export function MainContent({ body }: MainContentProps) {
  return (
    <MainContentContainer>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <Prism
                children={String(children).replace(/\n$/, '')}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </MainContentContainer>
  )
}
