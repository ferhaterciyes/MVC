import { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

// controller bileşeninde arayüz (jsx) codu yazılmaz
const ListPageController = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    Model.getPosts().then((res) => setPosts(res));
  }, []);

  return <ListPageView isOpen={isOpen} setIsOpen={setIsOpen} posts={posts} />;
};

export default ListPageController;
