# RecipeBlog-MongoDB-Node.js

Bu proje, MongoDB ve Node.js kullanılarak yapılmış bir yemek tarifi blogudur. Bu uygulama, kullanıcıların hesap oluşturmasına, giriş yapmasına ve yemek tarifleri paylaşmasına olanak tanır.

## Kurulum

1. Projeyi kendi bilgisayarınıza indirin veya klonlayın.
2. Projenin ana dizinine gidin ve `npm install` yazarak gerekli bağımlılıkları yükleyin.
3. Veritabanı için MongoDB Atlas hesabı oluşturun ve projenin `.env` dosyasında belirtilen veritabanı URL'sini (MONGODB_URI) güncelleyin.
4. Uygulamayı başlatmak için `npm start` yazın.

## Kullanım

Uygulama, `localhost:3000` adresinde çalışmaktadır. Tarayıcınızda bu adresi açarak uygulamaya erişebilirsiniz.

### Kayıt Olma ve Giriş Yapma

Kayıt olmadan önce, bir hesap oluşturmanız gerekmektedir. Ana sayfadaki "Sign Up" butonuna tıklayarak yeni bir hesap oluşturabilirsiniz. Kayıt olduktan sonra, "Log in" butonuna tıklayarak hesabınıza giriş yapabilirsiniz.

### Yemek Tarifleri

Hesabınıza giriş yaptıktan sonra, "New Recipe" butonuna tıklayarak yeni bir yemek tarifi ekleyebilirsiniz. Ayrıca, "Recipes" sayfasında diğer kullanıcıların paylaştığı yemek tariflerini görüntüleyebilirsiniz.

### Profil

Profil sayfanızda, hesap bilgilerinizi ve eklediğiniz yemek tariflerini görüntüleyebilirsiniz. Ayrıca, istediğiniz zaman hesabınızdan çıkış yapabilirsiniz.

## Katkıda Bulunma

Bu proje açık kaynak olarak geliştirilmiştir ve her türlü katkıda bulunmaya açıktır. Lütfen bir pull request göndermeden önce değişikliklerinizin test edildiğinden emin olun.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
