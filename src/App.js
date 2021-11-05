
import InputForm from "./components/InputForm.jsx";
import "./App.css";
import Post from "./components/Post";
import PostsContainer from "./components/PostsContainer.jsx";
import { useState } from 'react'
const data = [
  {
    name: "John Snow",
    text: "Hello world!",


  },
  {
    name: "Gandalf White",
    text: "You shall not pass!!!"
  },
  {
    name: "Lorem Impus",
    text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking"
  }
]

function App() {

  const [posts, setPosts] = useState(data.map((obj, i) => <Post key={i} data={obj} />))

  return (
    <div className="App w-full flex flex-col">
      <InputForm setPosts={setPosts} />
      <PostsContainer>
        {posts}
      </PostsContainer>
    </div>
  );
}

export default App;
