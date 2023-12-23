// sadece jsx codu yazılır
const ListPageView = ({ posts }) => {



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
              <p className="text-yellow-500">{post.user}</p>
            </div>
            <p className="mt-4 text-slate-300">{post.text}</p>
          </div>
        ))
      )}
    </main>
  );
};

export default ListPageView;
