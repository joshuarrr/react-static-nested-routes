import {page1, page2, projects} from './data/data.js'

export default {
  getSiteProps: () => ({
    title: 'React Static - Nested Routes',
  }),

  getRoutes: () => {
    const projectsData = JSON.parse(JSON.stringify(projects))

    return [
      {
        path: `/page-1`,
        getProps: () => ({
          data: JSON.parse(JSON.stringify(page1))
        }),
      },
      {
        path: `/page-2`,
        getProps: () => ({
          data: JSON.parse(JSON.stringify(page2))
        }),
      },
      {
        path: `/projects`,
        getProps: () => ({
          projects: projectsData,
        }),
        children: projectsData.projects.map(project => ({
          path: `/${project.slug}`,
          getProps: () => ({
            projects: projectsData,
            project,
          }),
        })),
      },
      {
        path: '404',
        is404: true,
        component: 'src/pages/Nowhere',
      },
    ]
  },
  devServer: {
    port: 5000,
    host: '127.0.0.1',
  },
}
