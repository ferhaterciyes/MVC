import { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

// controller bileşeninde arayüz (jsx) codu yazılmaz
const ListPageController = () => {


  
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    Model.getPosts()
    .then((res) => setPosts(res));
  }, []);







  return <ListPageView posts={posts}/>;
};

export default ListPageController;
