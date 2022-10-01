import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        tr: 'PHP frameworkü olan Laravel ile modern ve gelişmiş web siteleri ve uygulamaları yapıyorum.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
