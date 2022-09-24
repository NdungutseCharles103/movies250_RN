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
export const tvTabs: Tab[] = [
    {
      id: 10759,
      name: 'On Air',
      cat: 'on_the_air'
    },
    {
      id: 10762,
      name: 'Popular',
      cat: 'popular'
    },
    {
      id: 10763,
      name: 'Top Rated',
      cat: 'top_rated'
    },
    {
      id: 10764,
      name: 'Airing Today',
      cat: 'airing_today'
    },
    {
      id: 10765,
      name: 'latest',
      cat: 'latest'
    }
  ]