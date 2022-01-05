import { useEffect, useState } from 'react'

import { IArticle } from 'lib/types'
import { getArticles, getArticlesByCategory } from 'lib/utils/blog/getArticles'

export const useArticles = (category?: 'alma' | 'cuerpo' | 'espiritu') => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      const data = !category ? await getArticles() : await getArticlesByCategory(category)
      setIsLoading(false)

      if (!data) setError('Hubo un error en los Eventos')
      else setArticles(data)
    })()
  }, [])

  return {
    articles,
    articlesIsLoading: isLoading,
    articlesError: error
  }
}
