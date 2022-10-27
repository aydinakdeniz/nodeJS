# RESTful API


# RESTful API'ler nasıl çalışır?

Bir RESTful API'nin temel işlevi, internette gezinmeyle aynıdır. İstemci, bir kaynağa ihtiyaç duyduğunda API'yi kullanarak sunucu ile iletişime geçer. API geliştiricileri, istemcinin REST API'yi nasıl kullanması gerektiğini sunucu uygulamasının API belgelerinde açıklar. Herhangi bir REST API çağrısına yönelik genel adımlar şunlardır:

1. İstemci, sunucuya bir istek gönderir. İstemci, isteği sunucunun anlayacağı şekilde biçimlendirmek için API belgelerine uyar.

2. Sunucu, istemcinin kimliğini doğrular ve istemcinin bu istekte bulunma hakkı olduğunu onaylar.

3. Sunucu, isteği alır ve dahili olarak işler.

4. Sunucu, istemciye bir yanıt verir. Yanıt, istemciye isteğin başarılı olup olmadığını söyleyen bilgileri içerir. Yanıt aynı zamanda, istemcinin talep ettiği bilgileri de içerir.

REST API isteği ve yanıt ayrıntıları, API geliştiricilerinin API'yi nasıl tasarladığına bağlı olarak küçük farklılıklar gösterir.



# Hakkında

1. Node.js Express özelliği sayesinde localhost sunucu kurulumu yapılmıştır.

2. Nodemon özelliği kullanılmıştır. ("server":"nodemon index.js")

3. data.js dosyasında bilgi tutulmuştur.

4. Belirli adres tekrarlarında Router yönlendirmesi yapılmıştır. Düzenli kod yapısı sağlanmıştır. (server.use("/aktorler",aktorlerRouter)

5. Aktör ekleme, silme, güncelleme özellikleri eklenmiştir. Postman uygulamasıyla kontrol edilebilir.
