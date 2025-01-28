import {useEffect, useState} from "react";

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const getAllPosts = async () => {
  const results = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await results.json()
  return data as Post[]
}

const getPostById = async (id: number | undefined) => {
  const foundPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await foundPost.json()
  return data as Post
}

const PostsView = () => {

  const [posts, setPosts] = useState<Post[]>()

  const [postID, setPostId] = useState<number>()

  const handleClick = async () => {
    const results = await getPostById(postID)
    setPosts([results])
    console.log('handleClick()')
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts()
      setPosts(data)
    }
    fetchPosts()

  }, [])

  useEffect(() => {
    const fetch = async (id: number | undefined) => {
      const data = await getPostById(id)
      setPosts([data])
    }
    fetch(postID)
  }, [postID]);


  return (
      <>
        <input value={postID} onChange={(e) => {
          setPostId(parseInt(e.target.value))
        }
        } type={'number'}/>
        <button onClick={handleClick}>Pobierz</button>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Post id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Body
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">


          {posts?.map(({id, title, body}) => { //map must be above the return because it returns JSX
            return (
                <tr key={id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {body}
                  </td>
                </tr>
            )
          })
          }
          </tbody>
        </table>

      </>
  );
};

export default PostsView;
