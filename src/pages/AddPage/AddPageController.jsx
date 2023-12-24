import AddPageView from "./AddPageView";
import Model from "./AddPageModel";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPageController = () => {
  // form gönderilince calışır
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verileri alıp post objesi oluştur
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    formData.id = v4();
    // api ye veriyi kaydet
    Model.createPost(formData)
      //kullanıcıyı anasayfaya yönlendir
      .then(() =>{
        toast.success("Post ekleme başarılı")
        navigate("/")})

      .catch(()=>toast.error("Post Gönderirken hata oluştu"))
  };

  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
