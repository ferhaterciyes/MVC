import PopUpController from "../../components/popup/PopUpController";

// sadece jsx codu yazılır
const ListPageView = ({ posts ,isOpen , setIsOpen }) => {



  return (
    <main className="container-sm md:px-30 px-5 lg:px-52 py-5">
      <h1>
        Gönderi Sayısı : <span className="font-bold">{posts?.length}</span>{" "}
      </h1>
      {!posts ? (
        <p>Yükleniyor ...</p>
      ) : (
        posts.map((post) => (
          <div
            className="bg-black my-5 p-5 rounded-md shadow shadow-[#ffffff36] hover:shadow-yellow-400 transition"
            key={post.id}
          >
            <div className="flex justify-between ">
              <h3>{post.title}</h3>
              <p onClick={()=>setIsOpen(post.user)} className="text-yellow-500 cursor-pointer">{post.user}</p>
            </div>
            <p className="mt-4 text-slate-300">{post.text}</p>
          </div>
        ))
      )}
      {isOpen && <PopUpController isOpen={isOpen} setIsOpen={setIsOpen} /> }
    </main>
  );
};

export default ListPageView;
