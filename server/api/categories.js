import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        tr: 'Web Geliştirme',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        tr: 'Uygulama',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        tr: 'Web Tasarım',
      },
    },
  ]
})
