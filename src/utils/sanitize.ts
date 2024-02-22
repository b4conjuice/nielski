import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

export default function sanitize(html: string) {
  const { window } = new JSDOM('')
  const DOMPurify = createDOMPurify(window)
  return DOMPurify.sanitize(html)
}
