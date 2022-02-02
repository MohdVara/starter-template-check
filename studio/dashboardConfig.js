export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fa3649a0eb0fd8c907c2e9',
                  title: 'Sanity Studio',
                  name: 'starter-template-check-studio',
                  apiId: '8c9e2152-617e-42bd-a8a3-76eae26a1d69'
                },
                {
                  buildHookId: '61fa364966e68abf4778cf56',
                  title: 'Blog Website',
                  name: 'starter-template-check',
                  apiId: '3b3574f2-0bfd-48f7-9e0b-9341a9312293'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MohdVara/starter-template-check',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://starter-template-check.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
