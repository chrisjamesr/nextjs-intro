import Layout from "../components/MyLayout";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/show/[id]" as={`/show/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index

// const PostLink = ({ post }) => (
//   <li key={post.id}>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>
//       {`
//         li {
//           list-style: none;
//           margin: 5px 0;
//         }  
//         a {
//           text-decoration:none;
//           color: blue;
//           font-family: 'Arial';
//         }
//         a:hover {
//           opacity: 0.6;
//         }
//       `}
//     </style>
//   </li>
// );

// export default function Blog(){
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         {
//           getPosts().map(post => (
//             <PostLink key={post.id} post={post} />
//           ))
//         }
//       </ul>
//       <style jsx>{`
//         h1,
//         a {
//           font-family: 'Arial';
//         }

//         ul {
//           padding: 0;
//         }

//         li {
//           list-style: none;
//           margin: 5px 0;
//         }

//         a {
//           text-decoration: none;
//           color: blue;
//         }

//         a:hover {
//           opacity: 0.6;
//         }
//       `}</style>
//     </Layout>
//   )
// };