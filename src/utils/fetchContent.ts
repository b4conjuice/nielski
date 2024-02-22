import fetcher from '@/utils/fetcher'

export type Content = {
  markdown: string
}

export default async function fetchContent(url: string) {
  return await fetcher<Content>(url)
}
