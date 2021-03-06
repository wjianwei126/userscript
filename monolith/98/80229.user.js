// ==UserScript==
// @name           Facebook Sunda Beta
// @namespace      http://sarwasunda.blogspot.com/
// @description    Replaces Bahasa Indonesia words to Basa Sunda on Facebook | Mengganti Facebook ke bahasa Sunda | Facebook rasa Sunda
// @author   	   Sukma Gemala
// @copyright      sarwasunda
// @license        http://creativecommons.org/licenses/by-nc-sa/3.0/us/
// @homepage	   http://userscripts.org/scripts/show/80229
// @chrome         https://chrome.google.com/webstore/detail/facebook-sunda/ojicabfalmelogpemjjnknmmghpfhnke
// @updateURL	   https://userscripts.org/scripts/source/80229.user.js
// @date           20140223
// @time           2215
// @version        2014.02.23.2215
// @lastdate       20130126
// @lasttime       1437
// @lastversion    2013.01.26.1437
// @include        http://www.facebook.com/*
// @include        http://facebook.com/*
// @include        http://*.facebook.com/
// @include        https://www.facebook.com/*
// @include        https://facebook.com/*
// @include        https://*.facebook.com/

// Syntax: 'Search word' : 'Replace word',
//303 /461/620/713/925
// ==/UserScript==
//
// nu robah:taya nu robah, angger ngaco. pangangguran we ieu mah hayang ngapdet

//Sukma Gemala - flyout navi //
document=window.document;
var a=document.createElement('div');
a.setAttribute('class', 'rfloat'); 
var sarwa = '<div class="uiSelector mls uiSelectorRight">';
sarwa +='<div class="wrap">';
sarwa +='<a class="uiButtonNoText" role="button" href="#" aria-haspopup="1" data-length="30" rel="toggle">';
sarwa +='<span class="imgWrap"><img class="uiProfilePhotoSmall img" src="http://sphotos-f.ak.fbcdn.net/hphotos-ak-ash3/148284_3893339744654_260950765_n.jpg" alt="fb-sunda"></span>';
sarwa +='</a>';
sarwa +='<div class="uiSelectorMenuWrapper uiToggleFlyout">';
sarwa +='<div class="uiMenu -cx-PRIVATE-uiContextualDialog__content">';
sarwa +='<table cellpadding="0" cellspacing="0" style="margin:5px auto 5px; width:250px;text-align:center"><tbody>';
sarwa +='<tr><td valign="middle" style="text-align:center"><a href="http://sarwasunda.blogspot.com/2010/06/facebook-basa-sunda.html" title="Facebook dina Basa Sunda" target="_blank"><div class="permalinkHeaderInfo fsl fwb fcb">Facebook Sunda</div></a></td></tr>';
sarwa +='<tr><td valign="middle" style="text-align:center"><div class="pageByline fsm fwn fcg">v 20140223.2215</div></td></tr>';
sarwa +='<tr><td valign="bottom" style="text-align: center;padding-top: 5px;padding-bottom: 5px;"><iframe rel="async-post" frameborder="0" scrolling="no" allowtransparency="true" style="border: medium none; overflow: hidden; width: 130px; height: 20px;" src="/plugins/like.php?action=like&amp;layout=button_count&amp;href=http%3A%2F%2Fsarwasunda.blogspot.com%2F2010%2F06%2Ffacebook-basa-sunda.html&amp;show_faces=false&amp;width=130&amp;colorscheme=light&amp;height=20"></iframe></td></tr>';
sarwa +='<tr><td valign="bottom" style="text-align:center"><a href="/plugins/recommendations.php?site=http%3a%2f%2fsarwasunda.blogspot.com%2f&amp;height=300&amp;width=250&amp;header=false&amp;colorscheme=light&amp;border_color=%23fff&amp;rel_dialog=1" target="iframe2" title="Ketak Sobat">Ketak</a>';
sarwa +=' | <a href="http://www.facebook.com/sukma.gemala" data-hovercard="/ajax/hovercard/user.php?id=1613869364" aria-owns="js_2" aria-controls="js_2" aria-haspopup="true" id="js_1">Kuncen</a>';
sarwa +=' | <a href="/dialog/feed?app_id=151984158209331&link=http://sarwasunda.blogspot.com&picture=http://4.bp.blogspot.com/-2ufEGSmYGmc/TOQa0VUlJII/AAAAAAAAA2E/FlkWOLBAJcE/s128/ff.PNG&name=Facebook%20Sunda&caption=mangga%20anggo%20sareng%20bagikeun&description=aplikasi%20Facebook%20Sunda%20pikeun%20ngaganti%20basa %20dina%20pesbuk%20ku%20basa%20Sunda&redirect_uri=http://www.facebook.com/" target="_blank" title="Status via SarwaSunda">Status</a>';
sarwa +=' | <a href="/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FSarwa-Sunda%2F176208019077276&amp;width=250&amp;height=300&amp;colorscheme=light&amp;show_faces=true&amp;border_color=%23fff&amp;stream=false&amp;header=false" data-hovercard="/ajax/hovercard/page.php?id=176208019077276" target="iframe2">Nyunda</a>';
sarwa +='</td></tr>';
sarwa +='<tr><td></tbody></table>';
sarwa +='<iframe id="iframe2" allowtransparency="true" border="0" frameborder="0" height="310" marginheight="0" marginwidth="0" scrolling="no" width="250" style="margin-left:-4px" src=""></iframe>';
sarwa +='</div></div></div></div>';
a.innerHTML = sarwa;var b=document.getElementById('headNav');
b.insertBefore(a, b.firstChild);

var zGbl_DOM_ChangeTimer                = '';
var bGbl_ChangeEventListenerInstalled   = false;

window.addEventListener ("load", MainAction, false);

function MainAction ()
{
    if (!bGbl_ChangeEventListenerInstalled)
    {
        bGbl_ChangeEventListenerInstalled   = true;
        document.addEventListener ("DOMSubtreeModified", HandleDOM_ChangeWithDelay, false);
    }

//Sukma Gemala - vocabulary //
var words={"brubah":"robah","mmang":"memang","menghbur":"ngahibur","kta":"urang","qta":"urang","dri":"ti","yg":"anu","kmu":"anjeun","qmu":"anjeun","gw":"kuring","eloh":"maneh","cpee":"cape","trmksh":"nuhun","thanks":"nuhun","udh":"geus","slalu":"salawasna","mnkin":"meureun","smkin":"mingkin","mkin":"mingkin","lm knl":"salam piwanoh","shabat":"sobat","tk mengerti":"pikeun ngarti","untk":"pikeun","utk mu":"pikeun anjeun","elo":"maneh","bgt":"pisan","dlu":"heula","dtutup":"ditutup","dttup":"ditutup",
"bsok":"isukan","bcok":"isukan","smbil":"bari","mgang":"nyekel","pgang":"nyekel","cmua":"kabeh","skrang":"ayeuna","ath":"atuh","hyngn":"hayangeun","mrn":"meureun","dai":"deui","daih":"deuih","kmha":"kumaha","dha":"da","bbturan":"babaturan","mneh":"maneh","nte":"ente","aenx":"aing","ikh":"ih","ukh":"uh","jx c":"jeung si","dhha":"da","jlmma":"jalma","jlma":"jalma","th":"teh","bngt":"beungeut","sma skli":"pisan","mni":"meni","sampe":"nepi","nyokap":"indung","bokap":"bapa","lu":"maneh","elu":"maneh",
"gue":"kuring","abis":"tos","met pagi":"wilujeng enjing","kegatelan":"ateul","bokin":"kabogoh","bokinn":"kabogoh","kagak ada":"euweuh","kagak":"henteu","kamoe":"anjeun","bilang":"nyarita","acara apa yang akan anda adakan":"rek ngayakeun acara naon","untuk mulai saling berhubungan":"pikeun ngamimitian silaturahim","membantu anda terhubung dan":"mantuan anjeun ngaitkeun tali silaturahim sarta","jalin hubungan kembali dengannya":"kaitkeun deui duduluran","jadilah orang pertama":"sok jadi nu tiheula",
"berhubungan dengan mereka":"macangkrama jeung aranjeuna","pesan untuk diteruskan":"pesen nu rek dikirimkeun deui","teruskan pesan":"kirimkeun deui pesen","berganti status":"ngaganti statusna","berganti":"baganti","balas":"bales","pindahkan":"pindahkeun","ke pesan masuk":"kana pesen asup","hapus":"pupus","di waktu":"dina waktu","di saat":"nalika","di kala":"dina waktu","sayang kamu":"nyaah ka anjeun","rindu kamu":"sono ka anjeun","cinta kamu":"bogoh ka anjeun","sahabat setia":"sobat nu satia","mengaktifkan":"ngahurungkeun",
"menerima":"nampa","berikan nama pada":"bere ngaran pikeun","perangkat":"parabot","sedang":"eukeur","kamu":"anjeun","mengubah":"ngarobah","dalam bahasa":"dina basa","dalam nama":"dina ngaran","nya.":"na.","ingat sama":"inget ka","suka sama":"resep ka","benci sama":"ijid ka","galau sama":"lieur ka","bilangin":"bejakeun","ditandai dalam":"ditandaan dina","di album":"dina album","bersama":"bareng","bukan berarti":"lain hartina","menghilangkan":"ngaleungitkeun","menghilang":"lieur ka","segala":"sagala",
"kesenangan":"kesenangan","aja":"wae","sambil":"bari","nyolek":"noel","punyanya":"bogana","minjem":"nginjeum","setengah":"satengah","agak":"rada","cemburu":"timburu","benci":"ijid","ruangan":"rohangan","ruangan":"rohang","tinggal di":"nganjrek di","menikah":"nikah","bertunangan":"tunangan","rumit":"pajurawet","bekerja":"digawe","disempatkan":"diseumat","favorit":"pangaresep","percakapan":"wangkongan","arsipkan":"arsipkeun","pintasan keyboard":"panumbu kibod","masukan":"pamanggih","mengalami masalah":"ngalaman aya rereged",
"tinggalkan sebuah komentar":"tulis pairan","mengalami":"ngalaman","kapan2":"iraha2","dikirim lewat":"dikirim ngaliwatan","bermasalah":"keuna ku rereged","memudahkan":"ngentengkeun","ditemani":"dibaturan","mengirim":"ngirimkeun","seseorang":"hiji jalma","mengetahui":"mikanyaho","apakah teman":"naha sobat","saya kirimkan":"ku kuring kirimkeun","Pelajari lebih lanjut":"Imeutan leuwih jero","pengiriman":"ngirimkeun","mulai":"mimitina","populer":"kawentar","melaporkan sesuatu":"ngalaporkeun hiji hal",
"melaporkan":"ngalaporkeun","meliputi":"ngawengku","mengungkap":"muka","mengunjungi":"ngalongok","menyunting":"ngaropea","mengungkapkan":"ngedalkeun","ungkapkanlah":"sok kedalkeun","ungkapkan":"kedalkeun","ruangnya":"rohangna","ruangmu":"rohang anjeun","cintamu":"cinta anjeun","cintaku":"cinta kuring","rasakan":"rasakeun","rasanya":"rasana","takut":"sieun","maka":"mangka","gelisah":"guligah","pintu":"panto","hatinya":"hatena","hatiku":"hate kuring","kubuka":"kuring muka","hatiku":"hate kuring","kututup":"kuring nutup",
"kutatap":"kuring neuteup","kupandang":"kuring nilik","kurasakan":"kuring ngarasa","tak usah":"teu kudu","tak lain":"teu salah","selalu":"salawasna","mengunci":"ngonci","bersembunyi":"nyumput","tersembunyi":"nyamuni","gundahnya":"guligahna","gundah":"guligah","memperbarui":"ngiwarikeun","disarankan":"disarankeun","cerita":"carita","bersama-sama":"babarengan","yang kita lewati":"nu ku urang sanghareupan","bergabung":"ngagabung","gabung ke":"ngagabung kana","Ikuti Kiriman":"tuturkeun","komentari":"tulis pairan",
"digunakan":"dipake","rating":"r\u00e9ting","peringkat":"r\u00e9ngking","dan":"jeung","apakah":"naha","bukankah":"lain","mempunyai":"ngabogaan","memiliki":"ngabogaan","sejenisnya":"nu sarupa","apakah konten":"naha konten","yang lalu":"nu kaliwat","pula":"oge","tak":"teu","masa lalu":"mangsa nu kaliwat","waktu lalu":"waktu nu kaliwat","minggu lalu":"minggu kamari","bulan lalu":"bulan kamari","tahun lalu":"taun kamari","yang anda pilih":"nu dipilih ku anjeun","yang anda masukkan":"nu diasupkeun ku anjeun",
"yang anda maksud":"nu dimaksud ku anjeun","yang anda isikan":"nu dieusikeun ku anjeun","yang anda ambil":"nu dicokot ku anjeun","yang anda":"nu ku anjeun","untuk itu":"ku kituna","ulang tahun":"milangkala","tingkat lanjut":"ngundak","tingkah laku":"paripolah","tidak selalu":"tara salawasna","tidak mungkin":"mustahil","tidak cukup":"teu mahi","tidak benar":"salah","tidak apa-apa":"teu nanaon","tidak akan":"moal","tidak ada":"taya","tetap masuk":"tetep asup","terus terang":"balaka","terulang kembali":"deudeuieun",
"tertimbun longsor":"kaurugan","tertarik pada":"resep ka","terlebih lagi":"oge","terlebih dulu":"leuwih tiheula","terlebih dahulu":"leuwih tiheula","terima kasih":"hatur nuhun","terhubung dengan":"hubungan jeung","terakhir kali":"panungtungan","tepuk tangan":"keprok","tempat tinggal":"padumukan","temannya teman":"sobatna sobat","teman-teman":"babaturan","teman dari teman":"sobatna sobat","teliti lebih dahulu":"taliti heula","teliti dahulu":"taliti heula","tambahkan sebagai":"jadikeun","membuat ku":"ngajadikeun kuring",
"membuat aku":"ngajadikeun kuring","membuatku":"ngajadikeun kuring","membuatnya":"ngajadikeun","membuat mereka":"ngajadikeun maranehna","membuat kamu":"ngajadikeun anjeun","membuatmu":"ngajadikeun anjeun","ingin":"hayang","semuanya":"kabehanana","seperti dulu":"kawas bareto","sepele":"teu sabaraha","takkan":"moal","tak peduli":"teu paduli","tak mungkin":"mustahil","tak akan":"moal","tahun lalu":"taun ka tukang","tahun baru":"taun anyar","surat kabar":"serat kabar","sumber air":"cinyusu","suka sama":"resep ka",
"suka sama suka":"pada-pada resep","suka cita":"bungah","sudut pandang":"paniten","suami-istri":"salaki-pamajikan","situs web":"ramatloka","siapa-siapa saja":"saha wae","setiap kali":"unggal","sesuai sekali":"luyu pisan","sesuai abjad":"luyu jeung abjad","serba-serbi":"rupa-rupa","serba serbi":"rupa-rupa","sepakbola":"maen bal","senin pukul":"senen tabuh","senang hati":"gumbira","selasa pukul":"salasa tabuh","selamat tinggal":"wilujeng kantun","selamat jalan":"wilujeng angkat","selamat datang":"wilujeng sumping",
"selamat berbahagia":"wilujeng ngambah kabagjaan","selain itu":"sajaba ti eta","sehari-hari":"sapopoe","sedang berlangsung":"keur lumangsung","sebagian besar":"kalolobaan","sebagai contoh":"contona","saya seorang":"kuring teh","saya kira":"disangka ku kuring","sampai kapan pun":"nepi ka iraha wae","salah satunya":"salah sahijina","salah satu":"salah sahiji","sabtu pukul":"saptu tabuh","saat ini":"ayeuna","saat coba":"waktu nyobaan","rumah tangga":"laki-rabi","rabu pukul":"rebo tabuh","pertama kali":"mimiti",
"perlu untuk":"perlu","perangkat lunak":"sopwer","penurunan berat":"nurunkeun beurat","pengalaman":"pangalaman","pencarian orang":"pamaluruhan jalma","pencari teman":"pamaluruh sobat","pemotongan hewan":"pameuncitan sato","paling tidak":"sahenteuna","paling baru":"panganyarna","pada umumnya":"umumna","pada diri":"ka diri","orang-orangnya":"jalma-jalmana","orang-orang":"pirang-pirang jalma","orang yang":"jalma nu","orang yang mungkin anda kenal":"sugan wanoh...","orang utan":"orang utan","orang tuanya":"kolotna",
"orang tua":"kolot","orang tua":"kolot","orang menyukai":"urang mikaresep","orang menyukai ini":"urang mikaresep ieu","orang lainnya":"urang liana","orang lain":"batur","oleh-oleh":"oleh-oleh","oleh sebab itu":"kusabab kitu","oleh karena itu":"ku kituna","nyaman sekali":"tumaninah pisan","ngobrol dengan teman2":"ngadu bako","nggak mungkin":"mustahil","ngefans sama":"nge-fans ka","mulailah berhubungan":"mimitian pidulur","mulai sms":"mimitian sms","mulai dari":"ti mimiti","minggu pukul":"minggu tabuh",
"merujuk pada":"gugon ka","menulis di":"nulis dina","menit yang lalu":"menit nu kaliwat","meninggal dunia":"tilar dunya","menikah sejak":"ngadahup ti","menikah dengan":"ngadahup ka","mengindonesia":"nga-indonesia","mengambil alih":"ngahak","mencari tahu":"mikanyaho","mencolek":"noel","mata air":"cinyusu","masukkan kembali":"asupkeun deui","masing-masing":"sewang-sewang","masih banyak lagi":"rea-rea deui","mana pun":"mana wae oge","malam hari":"jero peuting","mafia wars game":"perang mafia","luka berat":"tatu parna",
"luar biasa":"rongkah","lihat semua":"tilik >>","lihat ke":"ilikan ka","lebih lanjut":"saterusna","lebih dulu":"leuwih tiheula","lebih dahulu":"leuwih tiheula","lebih baik":"leuwih hade","lama-kelamaan":"lila-lila","lalu lintas":"patalimarga","laki-laki":"lalaki","lain kali":"waktu sejen","lagi-lagi":"kitu deui","kurun waktu":"waktu","kiriman terdahulu":"kiriman heubeul","kiriman dinding":"kiriman dina bilik","kiri-kanan":"kenca-katuhu","kini berteman dengan":"kiwari nyobat jeung","kerjasama":"gawe babarengan",
"kerja sama":"gawe babarengan","kemudian hari":"poe kahareupnakeun","kelebihan teknik":"kaunggulan teknik","ke dalam":"kana jero","kabar":"wartos","keluarga":"kulawarga","teman dekat":"sobat dalit","umpan halaman":"Dulang Kacaloka","kawan-kawan":"parakanca","berpacaran":"bobogohan","nya.":"na.","kata-kata":"kekecapan","kata sandi":"sandi kecap","kata hati":"kereteg hate","karena itu":"ku kituna","kamis pukul":"kemis tabuh","kali ini":"ayeuna","kadang-kadang":"sakapeung","kabar serupa":"beja nu sarupa",
"kabar berita":"harewos bojong","kabar berita":"harewos bojong","ka diska":"kana diska","jum'at pukul":"juma'ah tabuh","jenis kelamin":"gender","jangan-jangan":"boa-boa","itu adalah":"eta teh","ini adalah":"ieu teh","indah sekali":"endah pisan","ibu kota":"puseur dayeuh","hutan lindung":"leuweung tutupan","hati-hati":"ati-ati","hati-hati":"ati-ati","hari itu":"poe eta","hari ini":"poe ieu","hari bersejarah":"poe nu boga ajen sajarah","harap tunggu":"tungguan","harap bersabar":"sing sabar","hapus dari teman":"baeudan",
"hanya":"ukur","hanya dengan":"ukur ku","halaman lain":"kacaloka liana","foto dinding":"potret na bilik","efek samping":"efek samping","ditandai dalam":"ditandaan dina","disebutkan bahwa":"nyebutkeun yen","dibagikan orang lain":"dibagikeun ku batur","diam-diam":"rerencepan","di waktu mendatang":"dina waktu nu bakal datang","di sekitar":"sabudeureun","di sebuah":"dina hiji","di dinding":"dina bilik","di dalamnya":"di jerona","di dalam":"di jero","di bawah":"di handapeun","di bawah umur":"can sawawa",
"dengan teliti":"kalayan tarapti","dengan teknik":"make tehnik","dengan sendirinya":"ku sorangan","dengan nol":"ku enol","dengan menyarankan":"ku ngasongkeun","dengan lebih banyak":"kalayan leuwih loba","dengan demikian":"ku kituna","dengan cara":"make cara","dari program":"tina program","dari pada":"tibatan","dari kotak":"tina kotak","dari komputer":"tina komputer","dari induk":"tina indung","dari daftar":"tina daptar","dalam rangka":"dina raraga","dalam negeri":"jero nagara","dalam kehidupan":"dina kahirupan",
"dalam album":"dina album","cukup untuk":"mahi keur","copot program":"piceun program","colek kembali":"toel deui","cari tahu":"piwanoh","cari orang":"teangan jalma","cantik sekali":"geulis pisan","cantik jelita":"geulis kawanti-wanti","bulu tangkis":"badminton","buat kamu":"pikeun anjeun","buat iklan":"masang iklan","buat anda":"pikeun anjeun","buah tangan":"oleh-oleh","buah kain":"lambar lawon","buah dada":"pinareup","blokir orang ini":"blokir","beruntung sekali":"untung pisan","berulang tahun":"tepung taun",
"berterus terang":"balaka","berterimakasih sekali":"nganuhunkeun pisan","berteman dengan":"nyobat jeung","bertekuk lutut":"taluk","bertahun-tahun":"mangtaun-taun","berkata-kata":"kedal ucap","berkat anda":"kulantaran anjeun","berita populer":"wartos populer","berikut ini":"di handap ieu","beri tahu":"bejaan","berhubungan kelamin":"sapatemon","berhubungan intim":"sapatemon","berhubungan badan":"sapatemon","bergabung ke":"ngagabung jeung","belakangan ini":"kadieunakeun","bekerja sama":"digawe babarengan",
"baru saja":"cikeneh","barangsiapa":"sing saha","barang siapa":"sing saha","banjir bandang":"caah rongkah","baik sekali":"alus pisan","bahasa asing":"basa kosta","badan pengawasan":"badan pengawasan","badan kesehatan":"badan kasehatan","atas terjadinya":"kana kajadian","atas segala":"tina sagala","apakah ini":"naha ieu teh","apa yang anda pikirkan":"mikiran naon","apa pun":"naon wae","kabar berita":"wartos","anda sedang":"anjeun keur","anda masukkan":"diasupkeun ku anjeun","anda lewatkan":"diliwat ku anjeun",
"anda lakukan":"dipigawe ku anjeun","anda kerjakan":"dipigawe ku anjeun","anak-anak":"barudak","ambil bagian":"miluan","ambil alih":"cekel","alat undang":"pangulem","akun lain":"akun sejen","akan tetapi":"tapi","akan dapat":"bakalan","ada kemungkinan":"jigana","ada banyak orang":"rea","yuk":"sok","yg":"anu","yen":"bahwa","yang":"nu","video":"vidio","usulkan":"usulkeun","upload":"unggahkeun","untuk":"pikeun","undangan":"ondangan","undang":"ondang","topik":"jejer","tiga":"tilu","tidak":"teu","tetapkan":"tangtukeun",
"tertunda":"katunda","tertentu":"nu tangtu","tersembunyi":"nu nyumput","tersedia":"disayagikeun","tersebut":"kasebut","tersebar":"sumebar","termasuk":"kaasup","terlihat":"katempo","terkirim":"dikirimkeun","terkecil":"pangleutikna","terkait":"patali","terhubung":"nyambung","tergabung":"ngagabung","terdahulu":"heubeul","tercepat":"panggancangna","terbesar":"pangbadagna","terbaru":"panganyarna","batasi":"watesan","batalkan":"bolaykeun","terbaik":"panghadena","teratas":"pangluhurna","terakhirnya":"panungtungna",
"tentang":"ngeunaan","temukan":"paluruh","temannya":"sobatna","teman":"sobat","telah":"geus","tautannya":"panumbuna","tautan":"panumbu","tandai":"tandaan","tampilkan":"tembrakeun","tampil":"midang","tambahkan":"tambahkeun","tambahan":"panambah","tahun":"taun","sunting":"ropea","sunting":"ropea","suka":"resep","sudah":"geus","suara":"sora","statusnya":"statusna","sore":"pasosore","sini":"dieu","silahkan":"sok","siapa":"saha","siapa pun":"saha wae","setelah":"sanggeus","sesuatu":"taeun","sesuaikan":"saluyukeun",
"seribu":"sarebu","sepupu":"kapilanceuk/adi","sepuluh":"sapuluh","seperti":"saperti","seorang":"saurang","senin":"senen","sendiri":"sorangan","semua":"kabeh","semenit":"samenit","sembunyikan":"sumputkeun","sembilan":"salapan","semakin":"mingkin","selengkapnya":"salengkepna","selasa":"salasa","selanjutnya":"satuluyna","sekolahnya":"sakolana","sekolahmu":"sakola anjeun","sekolah":"sakola","sekitarnya":"sabudeureuna","sekitar":"kira-kira","sekarang":"ayeuna","sekalipun":"sok sanajan","sejam":"sajam",
"sehingga":"nepikeun ka","sehari":"sapoe","sederhana":"basajan","secara":"sacara","sebuah":"hiji","seberapa":"sabaraha","sebelumnya":"samemehna","sebelas":"sabelas","sebagian":"sabagian","sebagai":"salaku","saya":"kuring","satu":"hiji","sarankan":"asorkeun","sangat":"kacida","sana":"ditu","sampai":"nepi","sama":"sarua","saja":"wae","sabtu":"saptu","saat":"nalika","rindu":"sono","ribu":"rebu","rabu":"rebo","pusat":"puseur","profilnya":"propilna","pikirkan":"pikirkeun","petunjuk":"pituduh","pesan":"pesen",
"perusahaan":"pausahaan","pertemanan":"sosobatan","pertanyaan":"patalekan","pernah":"kungsi","permintaan":"pameredih","permainan":"kaulinan","peristiwa":"kajadian","perempuan":"awewe","perbarui":"kiwarikeun","penyuntingan":"ropeaan","penyaring":"panyaring","penuh":"pinuh","pengguna":"pamake","pengendalian":"pangadalian","pengembang":"pamekar","pengaturan":"panataan","penelusur":"panyungsi","pendukung":"pangrojong","pencarian":"pamaluruhan","pencarian":"pamaluruh","pencari":"pamaluruh","penanda":"pananda",
"pemiliknya":"nu bogana","pemilik":"nu boga","pemberitahuan":"iber","pembaruan":"kiwarian","pelajari":"piwanoh","peduli":"paduli","pedih":"peurih","pasangan":"bebene","pandangan":"teuteupan","pamerkan":"tembongkeun","paman":"mamang","pakai":"pake","pagi":"isuk","pada":"dina","orangtua":"kolot","orang":"jalma","oleh":"ku","obrolan":"ngadu bako","nomor":"nomer","nol":"enol","nenek":"nini","nama":"ngaran","mungkinkah":"naha mungkin","mungkin":"kawasna","misalnya":"misalna","mirip":"sarupa","minta":"menta",
"merekomendasikan":"ngasorkeun","mereka":"arinyana","menyukai":"mikaresep","menyimpan":"neundeun","menyesuaikan":"nyaluyukeun","menyarankan":"nyarankeun","menjadi":"jadi","meninggalkan":"ninggalkeun","mengontrol":"ngontrol","mengomentari":"mairan","mengobrol":"ngadu bako","mengisinya":"ngeusian eta","mengirimi":"ngirim","mengimpor":"ngimpor","menghidupkan":"ngahirupkeun","menggunakan":"make","mengganti":"ngaganti","mengendalikan":"ngadalikeun","mengenalinya":"wanoh ka inyana","mengenali":"mikawanoh",
"mengelola":"ngokolakeun","mengapa":"naha","menemukan":"manggihan","menelusuri":"ngotektak","mendaftarlah":"mangga daptar","mendaftar":"daptar","mencari":"neangan","mencakup":"ngawengku","menawarkan":"nawaran","menangkan":"rebut","menampilkan":"nembrakeun","menambahkan":"nambahan","memutuskan":"nangtukeun","memuat...":"dipulut...","memuat":"medalkeun","memiliki":"ngabogaan","memilih":"milih","membicarakan":"madungdengkeun","memberikan":"maparin","memberi":"mere","membantu":"mantuan","membagikan":"ngabagikeun",
"mematikan":"mareuman","memasukkan":"ngasupkeun","memasukan":"ngasupkeun","memainkan":"maenkeun","melindungi":"nyalindungan","melihat":"ningali","melalui":"ngaliwatan","melakukannya":"migawena","mau":"hayang","masuk":"asup","makin":"mingkin","mainkan":"paenkeun","main":"maen","lupa":"teu inget","lihat":"tilik","lho":"lur","lengkap":"lengkep","lelaki":"lalaki","lebih":"leuwih","laporkan":"laporkeun","lampirkan":"seselkeun","lampau":"heubeul","lainnya":"liana","lain":"lian","lagi":"deui","lacak":"sungsi",
"kutipan":"cutatan","kunjungilah":"sok longok","kunjungi":"longok","komentari":"tulis pairan","komentari":"bales","komentar":"pairan","kini":"danget ieu","khusus":"husus","ketika":"nalika","ketersediaan":"kasayagian","ketentuan":"katangtuan","kesukaan":"pangaresep","kesemua":"sakabeh","kesalahan":"kasalahan","keponakan":"alo","kepadanya":"ka inyana","kepada":"ka","kendalikan":"kadalikeun","kendali":"kadali","kenapa":"ku naon","kenali":"piwanoh","kenal":"wanoh","kembali":"balik deui","kemarin":"kamari",
"kemampuan":"kamampuh","keluar":"kaluar","kelola":"atur","kebijakan":"kawijakan","keamanan":"kaamanan","ke":"ka","katanya":"majarkeun teh","kata":"kecap","karier":"karir","karena":"lantaran","kamis":"kemis","kami":"kuring saparakanca","kakek":"aki","jum'at":"juma'ah","juga":"oge","jika":"mun","jelajahi":"sungsi","jadikan":"jadikeun","itulah":"eta pisan","itu":"eta","ini":"ieu","hubungkan":"kaitkeun","hingga":"nepi ka","hati":"ati","harus":"kudu","hari":"poe","halaman":"kacaloka","gunakan":"pake",
"gratis":"haratis","fotonya":"potretna","foto":"potret","favoritmu":"karesep anjeun","entahlah":"teuinglah","entah":"teuing","enam":"genep","empat":"opat","email":"surelek","dukungan":"rojongan","dukung":"rojong","diterapkan":"diterapkeun","ditandai":"ditandaan","ditambahkan":"ditambahkeun","diperbarui":"dikiwarikeun","dipelajari":"dipiwanoh","dindingnya":"bilikna","dinding":"bilik","dilihat":"ditempo","dikunjungi":"dilongok","dikomentari":"dipairan","dikenali":"dipiwanoh","dijelajahi":"disungsi",
"didukung":"dirojong","dibuat":"dijieun","dibagikan":"dibagikeun","dia":"inyana","dialah":"nya inyana","diakah":"naha inyana","diriku":"diri kuring","dirinya":"dirina","diri sendiri":"diri sorangan","simpan":"teundeun","depan":"hareup","dengan":"reujeung","delapan":"dalapan","daripada":"tibatan","dari":"ti","dapatkan":"pibanda","dapat":"bisa","dan":"jeung","damai":"damey","dalam":"jeroeun","daftar":"daptar","colekan":"tual-toel","colek":"toel","cobalah":"cobaan","catatan":"catetan","cari":"teangan",
"buat":"jieun","boleh":"meunang","biarkan":"antep","besok":"isukan","berteman":"nyobat","bertanggal":"tanggalna","bersponsor":"aya sponsoran","bersekolah":"sakola","bersama":"babarengan","berlangganan":"ngalanggan","berlaku":"lumaku","berita":"warta","beriklan":"masang iklan","beri":"bere","berdasarkan":"dumasar kana","berbagi":"babagi","berbagai":"rupa-rupa","berapa":"sabaraha","beranda":"tepas","bepergian":"iinditan","bendera":"bandera","benda":"barang","bencilah":"sok ngewa","bencikah":"naha ngewa",
"benci":"ngewa","belum":"acan","belakangnya":"tukangna","belakangan":"panungtungan","belakang":"tukang","bekasnya":"urutna","bekas":"urut","begitulah":"nya kitu","begitukah":"naha kitu","begitu":"kitu","beginilah":"nya kieu","beginikah":"naha kieu","begini":"kieu","beberapa":"sababaraha","batasi":"watesan","batasnya":"watesna","batas":"wates","barulah":"kakara","barusan":"bieu","baru":"anyar","banyak":"loba","bantuan":"pitulung","bantu":"tulungan","bangga":"reueus","bahwa":"yen","bahasa":"basa","bagikan":"bagikeun",
"bagilah":"sok bagi","bagi":"pikeun","bagaimanakah":"kumaha","bagaimana":"kumaha","bacalah":"sok baca","ataupun":"atawa","ataukah":"atawa","atau":"atawa","asyik":"edun","apakah":"naon","apa":"naon","anu":"taeun tea","angkatan":"entragan","anda":"anjeun","anak":"budak","albumnya":"albumna","aku":"kuring","aktivitas":"pamolah","akan":"bakal","ajukan":"asongkeun","agar":"sangkan","adalah":"teh","ada":"aya","ya":"enya","tidak":"henteu","tekan":"pencet","tahun":"taun","":""};
//JoeSimmons prepareRegex //
String.prototype.prepareRegex = function() {
return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
};

function isOkTag(tag) {
return (",pre,blockquote,code,input,button,textarea".indexOf(","+tag) == -1);
}

var regexs=new Array(),
	replacements=new Array();
for(var word in words) {
if(word != "") {
regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b", 'gi'));
replacements.push(words[word]);
}
}

var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="";
for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
	if(isOkTag(this_text.parentNode.tagName.toLowerCase()) && (text=this_text.textContent)) {
	for(var x=0,l=regexs.length; x<l; x++) {
	text = text.replace(regexs[x], replacements[x]);
	this_text.textContent = text;
	}
	}
}

}

function HandleDOM_ChangeWithDelay (zEvent)
{
    if (typeof zGbl_DOM_ChangeTimer == "number")
    {
        clearTimeout (zGbl_DOM_ChangeTimer);
        zGbl_DOM_ChangeTimer = '';
    }
    zGbl_DOM_ChangeTimer     = setTimeout (function() { MainAction (); }, 3333); //-- 333 millidetik
}