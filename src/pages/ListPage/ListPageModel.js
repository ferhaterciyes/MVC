import axios from "axios";

export default class ListPageModal {

 static async getPosts() {
    // apiden post verielrini alıp fonksiyonu gönderir
    const res = await axios.get("http://localhost:4000/posts");
    return res.data;
  }
}
