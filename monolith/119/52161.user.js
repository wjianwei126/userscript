﻿// ==UserScript==
// @name            Plurk Smile Billy Pan edit v4.02
// @namespace       http://www.plurk.com/billypan
// @description     2009/03/10
// @include         http://www.plurk.com/*
// modified log:    
// author: Seven Yu (v 4.6，http://userscripts.org/scripts/show/32306)
// Changed : Billy Pan
// Blog:http://www.wretch.cc/blog/billypan101
// 這個版本整合進去了單鍵"Re-Plurk"功能!
// 讓我們一起換頭像，提醒世人3月10日是圖博抗暴50週年! Change Your Avatar to Support Free Tibet Campaigns! http://avatars.plurk.com/1725340-big5.jpg
// ==/UserScript==
// ********** Main Script ***********
var smileData = [];


smileData.push([
	'洋蔥頭',
	'http://cichikung.myweb.hinet.net/plurk/onion/',
	[
        '001.gif','002.gif','003.gif','004.gif','005.gif',  '006.gif','007.gif','008.gif','009.gif','010.gif',
        '011.gif','012.gif','013.gif','014.gif','015.gif',  '016.gif','017.gif','018.gif','019.gif','020.gif',
        '021.gif','022.gif','023.gif','024.gif','025.gif',  '026.gif','027.gif','028.gif','029.gif','030.gif',
        '031.gif','032.gif','033.gif','034.gif','035.gif',  '036.gif','037.gif','038.gif','039.gif','040.gif',
        '041.gif','042.gif','043.gif','044.gif','045.gif',  '046.gif','047.gif','048.gif','049.gif','050.gif',
        '051.gif','052.gif','053.gif','054.gif','055.gif',  '056.gif','057.gif','058.gif','059.gif','060.gif',
        '061.gif','062.gif','063.gif','064.gif','065.gif',  '066.gif','067.gif','068.gif','069.gif','070.gif',
        '071.gif','072.gif','073.gif','074.gif','075.gif',  '076.gif','077.gif','078.gif','079.gif','080.gif',
        '081.gif','082.gif','083.gif','084.gif','085.gif',  '086.gif','087.gif','088.gif','089.gif','090.gif',
        '092.gif','093.gif','094.gif','095.gif',  '096.gif','097.gif','098.gif','099.gif','100.gif',
        '101.gif','102.gif','103.gif','104.gif','105.gif',  '106.gif','107.gif','108.gif','109.gif','110.gif',
        '111.gif','112.gif','113.gif','114.gif','115.gif',  '116.gif','117.gif','118.gif','119.gif','120.gif',
        '121.gif','122.gif','123.gif','124.gif','125.gif',  '126.gif','127.gif','128.gif','129.gif'
	]
]);

smileData.push([
	'悠嘻猴',
	'http://cichikung.myweb.hinet.net/plurk/monkey/',
	[
        'm001.gif','m002.gif','m003.gif','m004.gif','m005.gif','m006.gif','m007.gif','m008.gif','m009.gif','m010.gif',
        'm011.gif','m012.gif','m013.gif','m014.gif','m015.gif','m016.gif','m017.gif','m018.gif','m019.gif',
        'm020.gif','m021.gif','m022.gif','m023.gif','m024.gif','m025.gif','m026.gif','m027.gif','m028.gif',
        'm029.gif','m030.gif','m031.gif','m032.gif','m033.gif','m034.gif','m035.gif','m036.gif','m037.gif',
        'm038.gif','m039.gif','m040.gif','m041.gif','m042.gif','m043.gif','m044.gif','m045.gif','m046.gif',
        'm047.gif','m048.gif','m049.gif','m050.gif','m051.gif','m052.gif','m053.gif','m054.gif','m055.gif',
        'm056.gif','m057.gif','m058.gif','m059.gif','m060.gif','m061.gif','m062.gif','m063.gif','m064.gif',
        'm065.gif','m066.gif','m067.gif','m068.gif','m069.gif','m070.gif','m071.gif','m072.gif','m073.gif',
        'm074.gif','m075.gif','m076.gif','m077.gif','m078.gif','m079.gif','m080.gif','m081.gif','m082.gif',
        'm083.gif','m084.gif','m085.gif','m086.gif','m087.gif','m088.gif','m089.gif','m090.gif','m091.gif',
        'm092.gif','m093.gif','m094.gif','m095.gif','m096.gif','m097.gif','m098.gif','m099.gif','m100.gif',
        'm101.gif','m102.gif','m103.gif','m104.gif','m105.gif','m106.gif','m107.gif','m108.gif','m109.gif',
        'm110.gif','m111.gif','m112.gif','m113.gif','m114.gif','m115.gif','m116.gif','m117.gif','m118.gif',
        'm119.gif','m120.gif','m121.gif','m122.gif','m123.gif','m124.gif','m125.gif','m126.gif','m127.gif',
        'm128.gif','m129.gif','m130.gif','m131.gif','m132.gif','m133.gif','m134.gif','m135.gif','m136.gif',
        'm137.gif','m138.gif','m139.gif','m140.gif','m141.gif','m142.gif','m143.gif','m144.gif','m145.gif',
        'm146.gif','m147.gif','m148.gif','m149.gif','m150.gif','m151.gif','m152.gif','m153.gif','m154.gif',
        'm155.gif','m156.gif','m157.gif','m158.gif','m159.gif','m160.gif','m161.gif','m162.gif','m163.gif',
        'm164.gif','m165.gif','m166.gif','m167.gif','m168.gif','m169.gif','m170.gif','m171.gif','m172.gif',
        'm173.gif','m174.gif','m175.gif','m176.gif','m177.gif','m178.gif','m179.gif','m180.gif','m181.gif',
        'm182.gif','m183.gif','m184.gif','m185.gif','m186.gif','m187.gif','m188.gif','m189.gif','m190.gif',
        'm191.gif','m192.gif','m193.gif','m194.gif','m195.gif','m196.gif','m197.gif','m198.gif','m199.gif',
        'm200.gif','m201.gif','m202.gif','m203.gif','m204.gif','m205.gif','m206.gif','m207.gif','m208.gif',
        'm209.gif','m210.gif','m211.gif','m212.gif','m213.gif','m214.gif','m215.gif','m216.gif','m217.gif',
        'm218.gif','m219.gif','m220.gif','m221.gif','m222.gif'
	]
]);

smileData.push([
	'就醬',
	'http://cichikung.myweb.hinet.net/plurk/jojan/',
	[
        'm001.gif','m002.gif','m003.gif','m004.gif','m005.gif','m006.gif','m007.gif','m008.gif','m009.gif','m010.gif',
        'm011.gif','m012.gif','m013.gif','m014.gif','m015.gif','m016.gif','m017.gif'
   	]
]);

smileData.push([
	'米滷蛋+',
	'http://s466.photobucket.com/albums/rr23/billypan101/ludan/',
	[
        '1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif',
        '11.gif','12.gif','13.gif','14.gif','15.gif','16.gif','17.gif','18.gif','19.gif',
        '20.gif','21.gif','22.gif','23.gif','24.gif','25.gif','26.gif','27.gif','28.gif',
        '29.gif','30.gif','31.gif','32.gif','33.gif','34.gif','35.gif','36.gif','37.gif',
        '38.gif','39.gif','40.gif','41.gif','42.gif','43.gif','44.gif','45.gif','46.gif',
        '47.gif','48.gif','49.gif','50.gif','51.gif','52.gif','53.gif','54.gif','55.gif',
        '56.gif','57.gif','58.gif','59.gif','60.gif','61.gif','62.gif','63.gif','64.gif',
        '65.gif','66.gif','67.gif','68.gif','69.gif','70.gif','71.gif','72.gif','73.gif',
        '74.gif','75.gif','76.gif','77.gif','78.gif','79.gif','80.gif','81.gif','82.gif',
        '83.gif','84.gif','85.gif','86.gif','87.gif','88.gif','89.gif','90.gif','91.gif',
        '92.gif','93.gif','94.gif','95.gif','96.gif','97.gif','98.gif','99.gif','100.gif',
        '101.gif','102.gif','103.gif','104.gif','105.gif','106.gif','107.gif','108.gif','109.gif',
        '110.gif','111.gif','112.gif','113.gif','114.gif',
	]
]);


smileData.push([
	'痞克狐',
	'http://s466.photobucket.com/albums/rr23/billypan101/pixfox/',
	[
		'tba-logo.gif','b01.gif','b02.gif','b03.gif','b04.gif','b05.gif','b06.gif','b07.gif','b08.gif','b09.gif',
        'b10.gif','b11.gif','b12.gif','b13.gif','b14.gif','b15.gif','b16.gif',
        ]
]);


smileData.push([
	'小橘',
	'http://s.blog.xuite.net/_image/emotion/hastart/',
	[
	'm1.gif','m2.gif','m3.gif','m4.gif','m5.gif','m6.gif','m7.gif','m8.gif','m9.gif','m10.gif',
        'm11.gif','m12.gif','m13.gif','m14.gif','m15.gif','m16.gif','m17.gif','m18.gif','m19.gif',
        'm20.gif','m21.gif','m22.gif','m23.gif','m24.gif','m25.gif','m26.gif','m27.gif','m28.gif',
        'm29.gif','m30.gif','m31.gif','m32.gif','m33.gif','m34.gif','m35.gif','m36.gif','m37.gif',
        'm38.gif','m39.gif','m40.gif','m41.gif','m42.gif','m43.gif','m44.gif','m45.gif','m46.gif',
        'm47.gif','m48.gif','m49.gif','m50.gif','m51.gif','m52.gif','m53.gif','m54.gif','m55.gif',
        'm56.gif','m57.gif','m58.gif','m59.gif','m60.gif','m61.gif','m62.gif','m63.gif','m64.gif',
        'm65.gif','m66.gif','m67.gif','m68.gif','m69.gif','m70.gif','m71.gif','m72.gif','m73.gif',
        'm74.gif','m75.gif','m76.gif','m77.gif','m78.gif','m79.gif','m80.gif','m81.gif','m82.gif',
        'm83.gif','m84.gif','m85.gif','m86.gif','m87.gif','m88.gif','m89.gif','m90.gif',
        ]
]);

smileData.push([
	'布咕雞',
	'http://cichikung.myweb.hinet.net/plurk/mie/',
	[
		'001.gif','002.gif','003.gif','004.gif','005.gif','006.gif','007.gif','008.gif','009.gif','010.gif',
		'011.gif','012.gif','013.gif','014.gif','015.gif','016.gif','017.gif','018.gif','019.gif','020.gif',
		'021.gif','022.gif','023.gif','024.gif','025.gif','026.gif','027.gif','028.gif','029.gif','030.gif',
		'031.gif','032.gif','033.gif','034.gif','035.gif','036.gif','037.gif','038.gif','039.gif','040.gif',
		'041.gif','042.gif','043.gif','044.gif','045.gif','046.gif','047.gif','048.gif','049.gif','050.gif'
	]
]);	

smileData.push([
	'兔斯基',
	'http://s466.photobucket.com/albums/rr23/billypan101/rabbit/',
	[
	'01.gif','02.gif','03.gif','04.gif','05.gif','06.gif','07.gif','08.gif','09.gif','10.gif',
        '11.gif','12.gif','13.gif','14.gif','15.gif','16.gif','17.gif','18.gif','19.gif',
        '20.gif','21.gif','22.gif','23.gif','24.gif','25.gif','26.gif','27.gif','28.gif',
        '29.gif','30.gif','31.gif','32.gif','33.gif','34.gif','35.gif','36.gif','37.gif',
        '38.gif','39.gif','40.gif','41.gif','42.gif','43.gif','44.gif','45.gif','46.gif',
        '47.gif','48.gif','49.gif','50.gif','51.gif','52.gif','53.gif','54.gif','55.gif',
        '56.gif','57.gif','58.gif','59.gif','60.gif','61.gif','62.gif','63.gif','64.gif',
        '65.gif','66.gif','67.gif','68.gif','69.gif','70.gif','71.gif','72.gif','73.gif',
        
        ]
]);

smileData.push([
	'兔斯基+',
	'http://s466.photobucket.com/albums/rr23/billypan101/rabbit-kai/',
	[
	'1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif',
        '11.gif','12.gif','13.gif','14.gif','15.gif','16.gif','17.gif','18.gif','19.gif',
        '20.gif','21.gif','22.gif','23.gif','24.gif','25.gif','26.gif','27.gif','28.gif',
        '29.gif','30.gif','31.gif','32.gif','33.gif',
        ]
]);

smileData.push([
	'MSN動態',
	'http://www.addemoticons.com/emoticon/animated/',
	[
	'AddEmoticons0421.gif','AddEmoticons0422.gif','AddEmoticons0423.gif','AddEmoticons0424.gif','AddEmoticons0425.gif',
	'AddEmoticons0426.gif','AddEmoticons0427.gif','AddEmoticons0428.gif','AddEmoticons0429.gif','AddEmoticons04210.gif',
	'AddEmoticons04211.gif','AddEmoticons04212.gif','AddEmoticons04213.gif','AddEmoticons04214.gif','AddEmoticons04215.gif',
	'AddEmoticons04216.gif','AddEmoticons04217.gif','AddEmoticons04218.gif','AddEmoticons04219.gif','AddEmoticons04220.gif',
	'AddEmoticons04221.gif','AddEmoticons04222.gif','AddEmoticons04223.gif','AddEmoticons04224.gif','AddEmoticons04225.gif',
	'AddEmoticons04226.gif','AddEmoticons04227.gif','AddEmoticons04228.gif','AddEmoticons04229.gif','AddEmoticons04230.gif',
	'AddEmoticons04231.gif','AddEmoticons04232.gif','AddEmoticons04233.gif','AddEmoticons04234.gif','AddEmoticons04235.gif',
	'AddEmoticons04236.gif','AddEmoticons04237.gif','AddEmoticons04238.gif','AddEmoticons04239.gif','AddEmoticons04240.gif',
	'AddEmoticons04241.gif','AddEmoticons04242.gif','AddEmoticons04243.gif','AddEmoticons04244.gif','AddEmoticons04245.gif',
	'AddEmoticons04246.gif','AddEmoticons04247.gif','AddEmoticons04248.gif','AddEmoticons04249.gif','AddEmoticons04250.gif',
	'AddEmoticons04251.gif','AddEmoticons04252.gif','AddEmoticons04253.gif','AddEmoticons04254.gif','AddEmoticons04255.gif',
	'AddEmoticons04256.gif','AddEmoticons04257.gif','AddEmoticons04258.gif','AddEmoticons04259.gif','AddEmoticons04260.gif',
	'AddEmoticons04261.gif','AddEmoticons04262.gif','AddEmoticons04263.gif','AddEmoticons04264.gif','AddEmoticons04265.gif',
	'AddEmoticons04266.gif','AddEmoticons04267.gif','AddEmoticons04268.gif','AddEmoticons04269.gif','AddEmoticons04270.gif',
	'AddEmoticons04271.gif','AddEmoticons04272.gif','AddEmoticons04273.gif','AddEmoticons04274.gif','AddEmoticons04275.gif',
	'AddEmoticons04276.gif','AddEmoticons04277.gif','AddEmoticons04278.gif','AddEmoticons04279.gif','AddEmoticons04280.gif',
	'AddEmoticons04281.gif','AddEmoticons04282.gif','AddEmoticons04283.gif','AddEmoticons04284.gif','AddEmoticons04285.gif',
	'AddEmoticons04286.gif','AddEmoticons04287.gif'
	]
]);

smileData.push([
	'張君雅',
	'http://kevin357.myweb.hinet.net/2009/a01/',
	[
		'a0101.gif','a0102.gif','a0103.gif','a0104.gif','a0105.gif','a0106.gif',
		'a0107.gif','a0108.gif','a0109.gif','a0110.gif','a0111.gif','a0112.gif',
	        'a0113.gif','a0114.gif','a0115.gif','a0116.gif','a0117.gif','a0118.gif',
                'a0119.gif','a0120.gif','a0121.gif'
        ]
]);


smileData.push([
	'搞笑貓',
	'http://s466.photobucket.com/albums/rr23/billypan101/scat/',
	[
	'1.gif','2.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif',
        '11.gif','12.gif','13.gif','14.gif','15.gif',
 ]
]);

smileData.push([
	'小白熊',
	'http://s641.photobucket.com/albums/uu133/mark5468/wb/',
	[
	'001.gif','002.gif','003.gif','004.gif','005.gif','006.gif','007.gif','008.gif',
        '009.gif','010.gif','011.gif','012.gif','013.gif','014.gif','015.gif','016.gif',
        '017.gif','018.gif','019.gif','020.gif','021.gif','022.gif','023.gif','024.gif','025.gif','026.gif','027.gif','028.gif',
        '029.gif','030.gif','031.gif','032.gif','033.gif','034.gif','035.gif','036.gif',
        '037.gif','038.gif','039.gif','040.gif','041.gif','042.gif','043.gif','044.gif',
	'045.gif','046.gif','047.gif','048.gif','049.gif','050.gif','051.gif','052.gif',
        '053.gif','054.gif','055.gif','056.gif','057.gif','058.gif','059.gif','060.gif',
        '061.gif','062.gif','063.gif','064.gif','065.gif','066.gif','067.gif','068.gif',
        '069.gif','070.gif','071.gif','072.gif','073.gif','074.gif','075.gif','076.gif',
        '077.gif','078.gif','079.gif','080.gif','081.gif','082.gif','083.gif','084.gif',
        '085.gif','086.gif','087.gif','088.gif','089.gif','090.gif','092.gif',        
        '093.gif','094.gif','095.gif','096.gif','097.gif','098.gif','099.gif','100.gif',
        '101.gif','102.gif','103.gif','104.gif','105.gif','106.gif','107.gif','108.gif',
        '109.gif','110.gif','111.gif','112.gif','113.gif','114.gif','115.gif','116.gif',
        '117.gif','118.gif','119.gif','120.gif','121.gif','122.gif','123.gif','124.gif',
        '125.gif','126.gif','127.gif','128.gif','129.gif','130.gif','131.gif','132.gif',
        '133.gif','134.gif','135.gif','136.gif','137.gif','138.gif','139.gif','140.gif',
        '141.gif','142.gif','143.gif','144.gif','145.gif','146.gif','147.gif','148.gif',
        '149.gif','150.gif','151.gif','152.gif','153.gif','154.gif','155.gif'


	]
]);



smileData.push([
	'軍曹',
	'http://s466.photobucket.com/albums/rr23/billypan101/keroro/',
	[
        '1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif',
        '11.gif','12.gif','13.gif','14.gif','15.gif','16.gif','17.gif','18.gif','19.gif',
        '20.gif','21.gif','22.gif','23.gif','24.gif','25.gif','26.gif','27.gif','28.gif',
        '29.gif','last.gif','10.gif',
	]
]);



smileData.push([
	'彎彎',
	'http://cichikung.myweb.hinet.net/plurk/wan/',
	[
		'000.gif','001.gif','002.gif','003.gif','004.gif','005.gif','006.gif','007.gif','008.gif','009.gif','010.gif',
		'011.gif','012.gif','013.gif','014.gif','015.gif','016.gif','017.gif','018.gif','019.gif','020.gif',
		'021.gif','022.gif','023.gif','024.gif','025.gif','026.gif','027.gif','028.gif','029.gif','030.gif',
		'031.gif','032.gif','033.gif','034.gif','035.gif','036.gif','037.gif','038.gif','039.gif','040.gif',
		'041.gif','042.gif','043.gif','044.gif','045.gif','046.gif','047.gif','048.gif','049.gif','050.gif',
		'051.gif','052.gif','053.gif','054.gif',
	]
]);



smileData.push([
        '新洋蔥1',
        'http://s670.photobucket.com/albums/vv69/mark5419/yan1/',
        [
        '001.gif','002.gif','003.gif','004.gif','005.gif','006.gif','007.gif','008.gif','009.gif','010.gif',
        '011.gif','012.gif','013.gif','014.gif','015.gif','016.gif','017.gif','018.gif','019.gif','020.gif',
        '021.gif','022.gif','023.gif','024.gif','025.gif','026.gif','027.gif','028.gif','029.gif','030.gif',
        '031.gif','032.gif','033.gif','034.gif','035.gif','036.gif','037.gif','038.gif','039.gif','040.gif',
        '041.gif','042.gif','043.gif','044.gif','045.gif','046.gif','047.gif','048.gif','049.gif','050.gif',
        '051.gif','052.gif','053.gif','054.gif','055.gif','056.gif','057.gif','058.gif','059.gif','060.gif',
        '061.gif','062.gif','063.gif','064.gif','065.gif','066.gif','067.gif','068.gif','069.gif','070.gif',
        '071.gif','072.gif','073.gif','074.gif','075.gif','076.gif','077.gif','078.gif','079.gif','080.gif',
        '081.gif','082.gif','083.gif','084.gif','085.gif','086.gif','087.gif','088.gif','089.gif','090.gif',
        '091.gif','092.gif','093.gif','094.gif','095.gif','096.gif','097.gif','098.gif','099.gif','100.gif',
        '101.gif','102.gif','103.gif','104.gif','105.gif','106.gif',
        ]
]);

smileData.push([
        '新洋蔥2',
        'http://s670.photobucket.com/albums/vv69/mark5419/yan2/',
        [
        '107.gif','108.gif','109.gif','110.gif','111.gif','112.gif','113.gif','114.gif','115.gif','116.gif',
        '117.gif','118.gif','119.gif','120.gif','121.gif','122.gif','123.gif','124.gif','125.gif','126.gif',
        '127.gif','128.gif','129.gif','130.gif','131.gif','132.gif','133.gif','134.gif','135.gif','136.gif',
        '137.gif','138.gif','139.gif','140.gif','141.gif','142.gif','143.gif','144.gif','145.gif','146.gif',
        '147.gif','148.gif','149.gif','150.gif','151.gif','152.gif','153.gif','154.gif','155.gif','156.gif',
        '157.gif','158.gif','159.gif','160.gif','161.gif','162.gif','163.gif','164.gif','165.gif','166.gif',
        '167.gif','168.gif','169.gif','170.gif','171.gif','172.gif','173.gif','174.gif','175.gif','176.gif',
        '177.gif','178.gif','179.gif','180.gif','181.gif','182.gif','183.gif','184.gif','185.gif','186.gif',
        '187.gif','188.gif','189.gif','190.gif','191.gif','192.gif','193.gif','194.gif','195.gif','196.gif',
        '197.gif','198.gif','199.gif','200.gif','201.gif','202.gif','203.gif','204.gif','205.gif','206.gif',
        '207.gif','208.gif','209.gif',
        ]
]);

smileData.push([
        'kuso',
        'http://s641.photobucket.com/albums/uu133/mark5468/kuso/',
        [
        '001.gif','002.gif','003.gif','004.gif','005.gif','006.gif','007.gif','008.gif','009.gif','010.gif',

        '011.gif','012.gif','013.gif','014.gif','015.gif','016.gif','017.gif','018.gif','019.gif','020.gif',

        '021.gif','022.gif','023.gif','024.gif','025.gif','026.gif','027.gif','028.gif','029.gif','030.gif',

        '031.gif','032.gif','033.gif','034.gif','035.gif','036.gif','037.gif','038.gif','039.gif','040.gif',

        '041.gif','042.gif','043.gif','044.gif','045.gif','046.gif','047.gif','048.gif','049.gif','050.gif',

	'051.gif','052.gif','053.gif','054.gif','055.gif','056.gif','057.gif','058.gif','059.gif','060.gif',

        '061.gif','062.gif','063.gif','064.gif','065.gif','066.gif','067.gif','068.gif','069.gif','070.gif',
        
        '071.gif','072.gif','073.gif','074.gif','075.gif','076.gif','077.gif','078.gif','079.gif','080.gif',
        
        '081.gif','082.gif','083.gif','084.gif','085.gif','086.gif','087.gif','088.gif','089.gif',
        
        '090.gif','091.gif','092.gif','093.gif','094.gif','095.gif','096.gif','097.gif',
        ]
]);

smileData.push([
        '小新',
        'http://shiehcho22.myweb.hinet.net/msn/shin/shin',
        [
        ' (0).gif',' (1).gif',' (2).gif',' (3).gif',' (4).gif',' (5).gif',' (6).gif',' (7).gif',

        ' (8).gif',' (9).gif',' (10).gif',' (11).gif',' (12).gif',' (13).gif',' (14).gif',' (15).gif',

        ' (16).gif',' (17).gif',' (18).gif',' (19).gif',' (20).gif',' (21).gif',' (22).gif',' (23).gif',

        ' (24).gif',' (25).gif',' (26).gif',' (27).gif',' (28).gif',' (29).gif',' (30).gif',' (31).gif',

        ' (32).gif',' (33).gif',' (34).gif',' (35).gif',' (36).gif',' (37).gif',' (38).gif',' (39).gif',

        ' (40).gif',' (41).gif',' (42).gif',' (43).gif',' (44).gif',' (45).gif',' (46).gif',' (47).gif',

        ' (48).gif',' (49).gif',' (50).gif',' (51).gif',' (52).gif',' (53).gif',' (54).gif',' (55).gif',

        ' (56).gif',' (57).gif',' (58).gif',' (59).gif',' (60).gif',' (61).gif',' (62).gif',' (63).gif',

        ' (64).gif',' (65).gif',' (66).gif',' (67).gif',' (68).gif',' (69).gif',' (70).gif',' (71).gif',

        ' (72).gif',' (73).gif',' (74).gif',' (75).gif',' (76).gif',' (77).gif',
        ]
]);


var isinit = false;
var currInput = null;
var rplreg = /\[(\d+) (\d+)\]/g;
var pageState = location.href.split('/')[3];

window.addEventListener('load', function()
{
    setTimeout(function()
    {
        var selImgs = document.getElementsByClassName('smily_holder');

        // bind key up event
        if(pageState == 'p')
            getById('input_permalink').addEventListener('keyup', replaceSmile, false);
        else
        {
             if (document.getElementById('input_big')) { getById('input_big').addEventListener('keyup', replaceSmile, false); }
            getById('input_small').addEventListener('keyup', replaceSmile, false);
        }

        // create tabs
        for(var i=0; i<selImgs.length; i++)
        {
            selImgs[i].setAttribute('ref', selImgs.length - i);
            selImgs[i].addEventListener('click', function()
            {
                isinit || setTimeout(init, 1000);
                currInput = pageState != 'p' ? this.getAttribute('ref') == 2 ? getById('input_big') : getById('input_small') : getById('input_permalink');
            }, false);
        }
    }, 2000);
}, false);


// init
function init()
{
    isinit = true;
    // init contents
    for(var i=0; i<smileData.length; i++)
    {
        addTab(i, smileData[i]);
    }
    // init css
    getById('emoticons_show').style.width  = '100%';
    getById('emoticons_show').style.height = '200px';
    getById('emoticons_show').style.overflow = 'auto';
}

function replaceSmile()
{
    if(rplreg.test(this.value))
        this.value = this.value.replace(rplreg, doReplace);
}

function doReplace(str, datid, smileid)
{
    arr = smileData[datid];
    if (typeof(arr) != 'undefined')
    {
        if(typeof(arr[2][smileid]) != 'undefined')
            str = ' ' + smileData[datid][1] + smileData[datid][2][smileid] + ' ';
    }
    return str;
}

function addTab(id, data)
{
    var myli = document.createElement('li');
    myli.className = 'emoticon_selecter';
    myli.innerHTML = '<a href="javascript:void 0;">'+data[0]+'</a>';
    myli.addEventListener('click', function()
    {
        addImages(this, id);
    }, false);

    getById('emoticons_tabs').getElementsByTagName('ul')[0].appendChild(myli);
}

function addImages(obj, ind)
{
    var showDiv = getById('emoticons_show');
    var lis = getById('emoticons_tabs').getElementsByTagName('li');
    for(var i=0; i<lis.length; i++)
        lis[i].className = 'emoticon_selecter';

    obj.className += ' current';

    var data = smileData[ind];
    var baseUrl = data[1];
    var str = '<div>';
    for(var i=0, dat = data[2], _url; i<dat.length; i++)
    {
        _url = baseUrl + dat[i];
        str += '<a href="javascript:void 0;"><img width="40" src="'+_url+'" alt="'+dat[i]+'" title="['+ind+' '+i+']" /></a>';

    }
    str += '</div>';
    showDiv.innerHTML = str;
    
    var imgs = showDiv.getElementsByTagName('img');
    for(var i=0; i<imgs.length; i++)
    {
        imgs[i].addEventListener('click', function()
        {
            currInput.value += ' ' + this.src + ' ';
            currInput.focus();
        }, false);
    }
}

function getById(oid)
{
    return document.getElementById(oid);
}
