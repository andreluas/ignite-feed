import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andreluas.png",
      name: "André Almeida",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW da Rocketseat. Deem uma olhada lá",
      },
      { type: "link", content: "nlwproject.rocket/nlw" },
    ],
    publishedAt: new Date("2023-05-26 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Faala dev" },
      {
        type: "paragraph",
        content:
          "A resolução do projeto da semana passada já está no nosso canal do YouTube, e o desafio já está no ar xD",
      },
      { type: "link", content: "rocketseat.com/challenge" },
    ],
    publishedAt: new Date("2023-05-24 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
