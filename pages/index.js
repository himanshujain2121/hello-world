
import Link from 'next/link'
import {useRouter} from 'next/router'

function Home() {

  const router = useRouter(); 
  const handleClick = () => {
    console.log('placing your order')
    router.push('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a >Blog</a>
      </Link>
      
      <Link href='/product'>
       <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
      <Link href='/users'>
        <a >Users</a>
      </Link>
      <Link href='/posts'>
        <a >Post</a>
      </Link>
    </div>

  )
}

export default Home