---
title: Başlarken
description: Beş dakikadan kısa bir sürede Menfis'i kurmaya başlayın
slug: getting-started
order: 1
---

Menfis botunun kurulumu kolaydır. Kendi sunucunuza göre ayarlayabilirsiniz. Hadi başlayalım!

## Botu Davet Et

Öncelikle, Menfis'i sunucunuza [davet](/invite) etmeniz gerekiyor. Yetkilendirme akışını takip edin ve Menfis'i eklemek istediğiniz sunucuyu seçin. Eğer bir sunucu görmüyorsanız, Sunucuyu Yönetme izninizin olduğundan emin olun.

Uygulamayı yetkilendirdikten sonra, Menfis üye listenizde görünecektir, ancak muhtemelen tüm kanalları görme veya mesajları yönetme izinleri olmadan. Hadi bunu düzeltelim!

## İzinleri Yönetme

Menfis'in davet bağlantısında yer alan izinler, tüm özelliklerin çalışması için yeterli olmalıdır. Ancak, bir kanalda veya kategoride `@everyone` için izinleri özellikle reddettiyseniz, Menfis belirli kanalları göremez veya bu işlemleri gerçekleştiremez.

Özel olarak ayarladığınız her kategori veya kanalda, "Menfis" rolüne veya bota o kanalı görme izni verdiğinizden emin olun. Bunu yapmak için, kanala veya kategoriye sağ tıklayın veya uzun basın ve sırasıyla "Kanalı Düzenle" veya "Kategoriyi Düzenle" seçeneğini seçin.

{% alert style="uyarı" %}

Menfis’in komutlarını kullanabilmeleri için aşağıdaki adımları mutlaka takip edin, aksi takdirde yetkilileriniz bu komutları kullanamaz!

{% /alert %}

Menfis, uygulama veya slash komutlarını kullanır. 

- **Genel komutlar** : `/yardım`, `/davet`, `/ping`, `/istatistik`, `/kurallar`
- **Yetkili komutları** : `/yetkili-bilgi`, `/yetkili-leaderbord`, `/id-sorgu`, `/partner-yasakla`, `/partner-yasak-list`, `/partner-yasak-kaldir`
- **Admin komutları** : `/kurulum`, `/ayarlar`, `/partner-sistem`, `/partner-sistem-sıfırla`, `/partner-text-ayarla`, `/partner-tepki`, `/sayaç-partner-ekle`, `/sayaç-partner-sil`

Bir komutun varsayılan olarak devre dışı olup olmadığını (yani yalnızca Yöneticilik izniyle kullanılabilir olduğunu) kontrol etmek için komuta tıklayın ve "Üyelerin bu komutu kullanabilmesi için sunucu izinlerine ihtiyaçları var" mesajını görüp görmediğinizi kontrol edin.

Discord'da izinleri yönetme konusunda yardıma ihtiyacınız varsa, [Discord'un izinler kılavuzuna](https://support.discord.com/hc/tr/articles/206029707-Setting-Up-Permissions-FAQ) göz atabilirsiniz.

## Kurulumu Yapmak

Artık sunucunuzda `/kurulum` komutunu çalıştırabilirsiniz. Bu komut, size birkaç kanalı seçmenizi isteyecektir. Bunun için Yöneticilik iznine ihtiyacınız olacak. Komut, genel bir mesaj gönderecektir, bu yüzden bunu özel bir kanalda çalıştırmanız en iyisidir. Buton kanalı, oto partner yapılcak kanalı seçiceğiniz izindir. Partner kanalı, partnerlerinizin olduğu kanaldır. Yetkili rol, partner yetkililerinizin olduğu roldür.

{% alert style="Örnek Kurulum" %}

`/kurulum buton-kanalı: #oto-partner partner-kanalı: #partnerler yetkili-rol: #partner-yetkili`

{% /alert %}

Kurulumdan sonra, `/ayarlar` komutunun altındaki çeşitli seçenekleri kullanarak Menfis'i daha da özelleştirebilirsiniz.

## Yardıma mı İhtiyacınız Var?

Herhangi bir konuda yardıma ihtiyacınız olursa, bize her zaman [destek sunucumuzda](/support) soru sorabilirsiniz veya
[SSS](/docs/introduction/faq) kısmına göz atabilirsiniz.
