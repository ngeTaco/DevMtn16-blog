import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import TopicList from './Components/TopicList/TopicList.jsx';
import Post from './Components/Post/Post.jsx';
import postData from './data/post_data.json';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='/topics' element={<TopicList />} loader={() => postData} />
      <Route path='/post/:id' element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
