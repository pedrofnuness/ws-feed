import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="Pedro Nunes" 
        content="What an awesome app!!"
      />
      <Post 
        author="Bill Gates"
        content="We most care for the planet."
      />
      <Post />
    </div>
  )
}

 