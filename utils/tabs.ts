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
