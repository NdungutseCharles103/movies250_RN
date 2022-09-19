export type Tab = {
    id: number;
    name: string
    cat: string
}

export  const homeTabs: Tab[] = [
    {
      id: 1,
      name: 'Trending',
      cat: 'now_playing'
    },
    {
      id: 1,
      name: 'Popular',
      cat: 'popular'
    },
    {
      id: 1,
      name: 'Comming Soon',
      cat: 'upcoming'
    },
    {
      id: 1,
      name: 'Top Rated',
      cat: 'top_rated'
    },
  ]

  export const movieTabs: Tab[] = [
    {
      id: 28,
      name: 'Action',
      cat: '28'
    },
    {
      id: 12,
      name: 'Adventure',
      cat: '12'
    },
    {
      id: 16,
      name: 'Animation',
      cat: '16'
    },
    {
      id: 35,
      name: 'Comedy',
      cat: '35'
    },
  ]