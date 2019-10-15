import Layout from "../components/MyLayout";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
};

const PostLink = ({ post }) => (
  <li key={post.id}>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }  
        a {
          text-decoration:none;
          color: blue;
          font-family: 'Arial';
        }
        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

export default function Blog(){
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {
          getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))
        }
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
};

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;


// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog(){ 
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs"/>
//         <PostLink id="learn-nextjs"/>
//         <PostLink id="deploy-nextjs"/>
//       </ul>
//     </Layout>
//   );
// }