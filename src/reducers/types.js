export type Post = {
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number
}

export type Comment = {
  id: string,
  parentId: string,
  timestamp: string,
  body: string,
  author: string,
  voteScore: number
}

export type Category = {
  name: string,
  path: string
}
