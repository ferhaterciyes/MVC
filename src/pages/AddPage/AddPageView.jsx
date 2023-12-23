
const AddPageView = ({handleSubmit}) => {




  return (
    <div className="h-[100vh] grid place-items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10  w-3/4 max-w-[700px] shadow shadow-purple-400 bg-black p-10 md:p-20 rounded-lg">
        <h1 className="text-center text-purple-300 text-xl">Yeni Gönderi Oluştur</h1>
        <div className="flex flex-col gap-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-white">Kullanıcı Adı</label>
            <input name="user" type="text"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Kullanıcı Adı" required />
        </div>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-white">Başlık</label>
            <input name="title" type="text"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="React Nedir ? " required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-white">Açıklama</label>
            <textarea name="text" type="text"className="bg-gray-50 border max-h-[300px] min-h-[150px] border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="..." required />
        </div>
        <button type="submit" className="bg-yellow-500 p-2 rounded-xl hover:bg-yellow-600 transition">Oluştur</button>
      </form>
    </div>
  )
}

export default AddPageView;