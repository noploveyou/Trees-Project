const imagesRequire = {
    'null': require('../../public/assets/palntImages/NoImage.png'),    // หากไม่มีรูปภาพ
    '00002.jpg': require('../../public/assets/palntImages/taorang/00002.jpg'),
    '00003.jpg': require('../../public/assets/palntImages/taorang/00003.jpg'),
    '00004.jpg': require('../../public/assets/palntImages/taorang/00004.jpg'),
    '00007.jpg': require('../../public/assets/palntImages/planglangkhuad/00007.jpg'),
    '00008.jpg': require('../../public/assets/palntImages/planglangkhuad/00008.jpg'),
    '00010.jpg': require('../../public/assets/palntImages/po/00010.jpg'),
    '00011.jpg': require('../../public/assets/palntImages/po/00011.jpg'),
    '00014.jpg': require('../../public/assets/palntImages/sok/00014.jpg'),
    '00015.jpg': require('../../public/assets/palntImages/sok/00015.jpg'),
    '00017.jpg': require('../../public/assets/palntImages/sailham/00017.jpg'),
    '00018.jpg': require('../../public/assets/palntImages/sailham/00018.jpg'),
    '00019.jpg': require('../../public/assets/palntImages/sailham/00019.jpg'),
    '00022.jpg': require('../../public/assets/palntImages/saibaihoiku/00022.jpg'),
    '00023.jpg': require('../../public/assets/palntImages/saibaihoiku/00023.jpg'),
    '00024.jpg': require('../../public/assets/palntImages/saibaihoiku/00024.jpg'),
    '00028.jpg': require('../../public/assets/palntImages/saibaiyaw/00028.jpg'),
    '00029.jpg': require('../../public/assets/palntImages/saibaiyaw/00029.jpg'),
    '00031.jpg': require('../../public/assets/palntImages/kradon/00031.jpg'),
    '00032.jpg': require('../../public/assets/palntImages/kradon/00032.jpg'),
    '00036.jpg': require('../../public/assets/palntImages/kradungngathai/00036.jpg'),
    '00038.jpg': require('../../public/assets/palntImages/kradungngathai/00038.jpg'),
    '00039.jpg': require('../../public/assets/palntImages/katinnarong/00039.jpg'),
    '00040.jpg': require('../../public/assets/palntImages/katinnarong/00040.jpg'),
    '00041.jpg': require('../../public/assets/palntImages/katinnarong/00041.jpg'),
    '00043.jpg': require('../../public/assets/palntImages/kraton/00043.jpg'),
    '00044.jpg': require('../../public/assets/palntImages/kraton/00044.jpg'),
    '00047.jpg': require('../../public/assets/palntImages/krating/00047.jpg'),
    '00048.jpg': require('../../public/assets/palntImages/krating/00048.jpg'),
    '00049.jpg': require('../../public/assets/palntImages/krating/00049.jpg'),
    '00050.jpg': require('../../public/assets/palntImages/krating/00050.jpg'),
    '00052.jpg': require('../../public/assets/palntImages/krang/00052.jpg'),
    '00053.jpg': require('../../public/assets/palntImages/krang/00053.jpg'),
    '00055.jpg': require('../../public/assets/palntImages/kanoon/00055.jpg'),
    '00056.jpg': require('../../public/assets/palntImages/kanoon/00056.jpg'),
    '00058.jpg': require('../../public/assets/palntImages/kanoon/00058.jpg'),
    '00059.jpg': require('../../public/assets/palntImages/khoi/00059.jpg'),
    '00061.jpg': require('../../public/assets/palntImages/khoi/00061.jpg'),
    '00066.jpg': require('../../public/assets/palntImages/jamjure/00066.jpg'),
    '00068.jpg': require('../../public/assets/palntImages/jamjure/00068.jpg'),
    '00070.jpg': require('../../public/assets/palntImages/chompupuntip/00070.jpg'),
    '00071.jpg': require('../../public/assets/palntImages/chompupuntip/00071.jpg'),
    '00073.jpg': require('../../public/assets/palntImages/chompumameaw/00073.jpg'),
    '00078.jpg': require('../../public/assets/palntImages/chompumameaw/00078.jpg'),
    '00079.jpg': require('../../public/assets/palntImages/chompumameaw/00079.jpg'),
    '00080.jpg': require('../../public/assets/palntImages/tabagna/00080.jpg'),
    '00082.jpg': require('../../public/assets/palntImages/tabagna/00082.jpg'),
    '00083.jpg': require('../../public/assets/palntImages/tabagna/00083.jpg'),
    '00085.jpg': require('../../public/assets/palntImages/takobfalung/00085.jpg'),
    '00086.jpg': require('../../public/assets/palntImages/takobfalung/00086.jpg'),
    '00087.jpg': require('../../public/assets/palntImages/takobfalung/00087.jpg'),
    '00089.jpg': require('../../public/assets/palntImages/takobfalung/00089.jpg'),
    '00091.jpg': require('../../public/assets/palntImages/teenped/00091.jpg'),
    '00092.jpg': require('../../public/assets/palntImages/teenped/00092.jpg'),
    '00095.jpg': require('../../public/assets/palntImages/nontree/00095.jpg'),
    '00100.jpg': require('../../public/assets/palntImages/nontree/00100.jpg'),
    '00102.jpg': require('../../public/assets/palntImages/prongyeepoon/00102.jpg'),
    '00103.jpg': require('../../public/assets/palntImages/prongyeepoon/00103.jpg'),
    '00104.jpg': require('../../public/assets/palntImages/pradoopa/00104.jpg'),
    '00105.jpg': require('../../public/assets/palntImages/pradoopa/00105.jpg'),
    '00108.jpg': require('../../public/assets/palntImages/plamkhuad/00108.jpg'),
    '00109.jpg': require('../../public/assets/palntImages/plamkhuad/00109.jpg'),
    '00111.jpg': require('../../public/assets/palntImages/plamkhuad/00111.jpg'),
    '00113.jpg': require('../../public/assets/palntImages/plamnumpu/00113.jpg'),
    '00116.jpg': require('../../public/assets/palntImages/plamnumpu/00116.jpg'),
    '00119.jpg': require('../../public/assets/palntImages/plamhangjingjok/00119.jpg'),
    '00120.jpg': require('../../public/assets/palntImages/plamhangjingjok/00120.jpg'),
    '00121.jpg': require('../../public/assets/palntImages/peepkasalong/00121.jpg'),
    '00122.jpg': require('../../public/assets/palntImages/peepkasalong/00122.jpg'),
    '00123.jpg': require('../../public/assets/palntImages/peepkasalong/00123.jpg'),
    '00129.jpg': require('../../public/assets/palntImages/maduea/00129.jpg'),
    '00130.jpg': require('../../public/assets/palntImages/maduea/00130.jpg'),
    '00131.jpg': require('../../public/assets/palntImages/maduea/00131.jpg'),
    '00132.jpg': require('../../public/assets/palntImages/makham/00132.jpg'),
    '00133.jpg': require('../../public/assets/palntImages/makham/00133.jpg'),
    '00134.jpg': require('../../public/assets/palntImages/makham/00134.jpg'),
    '00136.jpg': require('../../public/assets/palntImages/mapraw/00136.jpg'),
    '00137.jpg': require('../../public/assets/palntImages/mapraw/00137.jpg'),
    '00138.jpg': require('../../public/assets/palntImages/mapraw/00138.jpg'),
    '00142.jpg': require('../../public/assets/palntImages/mamuang/00142.jpg'),
    '00143.jpg': require('../../public/assets/palntImages/mamuang/00143.jpg'),
    '00144.jpg': require('../../public/assets/palntImages/mahokkanee/00144.jpg'),
    '00146.jpg': require('../../public/assets/palntImages/mahokkanee/00146.jpg'),
    '00147.jpg': require('../../public/assets/palntImages/yangna/00147.jpg'),
    '00148.jpg': require('../../public/assets/palntImages/yangna/00148.jpg'),
    '00151.jpg': require('../../public/assets/palntImages/rachapruek/00151.jpg'),
    '00152.jpg': require('../../public/assets/palntImages/rachapruek/00152.jpg'),
    '00154.jpg': require('../../public/assets/palntImages/sondinsor/00154.jpg'),
    '00155.jpg': require('../../public/assets/palntImages/sondinsor/00155.jpg'),
    '00156.jpg': require('../../public/assets/palntImages/sontalay/00156.jpg'),
    '00157.jpg': require('../../public/assets/palntImages/sontalay/00157.jpg'),
    '00159.jpg': require('../../public/assets/palntImages/sak/00159.jpg'),
    '00160.jpg': require('../../public/assets/palntImages/sak/00160.jpg'),
    '00162.jpg': require('../../public/assets/palntImages/sara/00162.jpg'),
    '00163.jpg': require('../../public/assets/palntImages/sara/00163.jpg'),
    '00164.jpg': require('../../public/assets/palntImages/sara/00164.jpg'),
    '00165.jpg': require('../../public/assets/palntImages/sara/00165.jpg'),
    '00167.jpg': require('../../public/assets/palntImages/mharkkheaw/00167.jpg'),
    '00169.jpg': require('../../public/assets/palntImages/mharkkheaw/00169.jpg'),
    '00173.jpg': require('../../public/assets/palntImages/mhaklueng/00173.jpg'),
    '00174.jpg': require('../../public/assets/palntImages/mhaklueng/00174.jpg'),
    '00175.jpg': require('../../public/assets/palntImages/mhaklueng/00175.jpg'),
    '00177.jpg': require('../../public/assets/palntImages/mhakdang/00177.jpg'),
    '00178.jpg': require('../../public/assets/palntImages/mhakdang/00178.jpg'),
    '00180.jpg': require('../../public/assets/palntImages/mhaknuan/00180.jpg'),
    '00181.jpg': require('../../public/assets/palntImages/mhaknuan/00181.jpg'),
    '00185.jpg': require('../../public/assets/palntImages/hukawang/00185.jpg'),
    '00186.jpg': require('../../public/assets/palntImages/hukawang/00186.jpg'),
    '00188.jpg': require('../../public/assets/palntImages/phikul/00188.jpg'),
    '00189.jpg': require('../../public/assets/palntImages/phikul/00189.jpg'),
    '00190.jpg': require('../../public/assets/palntImages/phikul/00190.jpg'),
    '00192.jpg': require('../../public/assets/palntImages/makhamted/00192.jpg'),
    '00193.jpg': require('../../public/assets/palntImages/makhamted/00193.jpg'),
    '00194.jpg': require('../../public/assets/palntImages/makhamted/00194.jpg'),
    '00195.jpg': require('../../public/assets/palntImages/makhamted/00195.jpg'),
    '00196.jpg': require('../../public/assets/palntImages/intaninnam/00196.jpg'),
    '00197.jpg': require('../../public/assets/palntImages/intaninnam/00197.jpg'),
    '00198.jpg': require('../../public/assets/palntImages/intaninnam/00198.jpg'),
    '00200.jpg': require('../../public/assets/palntImages/painumtao/00200.jpg'),
    '00201.jpg': require('../../public/assets/palntImages/painumtao/00201.jpg'),
    '00202.jpg': require('../../public/assets/palntImages/leadmungkon/00202.jpg'),
    '00203.jpg': require('../../public/assets/palntImages/leadmungkon/00203.jpg'),
    '00204.jpg': require('../../public/assets/palntImages/pairuak/00204.jpg'),
    '00205.jpg': require('../../public/assets/palntImages/pairuak/00205.jpg'),
    '00206.jpg': require('../../public/assets/palntImages/phayasut/00206.jpg'),
    '00207.jpg': require('../../public/assets/palntImages/phayasut/00207.jpg'),
    '00208.jpg': require('../../public/assets/palntImages/intaninbok/00208.jpg'),
    '00209.jpg': require('../../public/assets/palntImages/intaninbok/00209.jpg'),
    '00210.jpg': require('../../public/assets/palntImages/kana/00210.jpg'),
    '00211.jpg': require('../../public/assets/palntImages/kana/00211.jpg'),
    '00212.jpg': require('../../public/assets/palntImages/kana/00212.jpg'),
    '00213.jpg': require('../../public/assets/palntImages/hangnokyoong/00213.jpg'),
    '00214.jpg': require('../../public/assets/palntImages/hangnokyoong/00214.jpg'),
    '00217.jpg': require('../../public/assets/palntImages/sara/00217.jpg'),
    '00218.jpg': require('../../public/assets/palntImages/sara/00218.jpg'),
    '00219.jpg': require('../../public/assets/palntImages/sara/00219.jpg'),
    '00220.jpg': require('../../public/assets/palntImages/supunniga/00220.jpg'),
    '00221.jpg': require('../../public/assets/palntImages/supunniga/00221.jpg'),
    '00222.jpg': require('../../public/assets/palntImages/supunniga/00222.jpg'),
    '00223.jpg': require('../../public/assets/palntImages/teenped/00223.jpg'),
    '00224.jpg': require('../../public/assets/palntImages/teenped/00224.jpg'),
    '00225.jpg': require('../../public/assets/palntImages/teenped/00225.jpg'),
    '00226.jpg': require('../../public/assets/palntImages/teenped/00226.jpg'),
    '00227.jpg': require('../../public/assets/palntImages/kohdia/00227.jpg'),
    '00228.jpg': require('../../public/assets/palntImages/kohdia/00228.jpg'),
    '00229.jpg': require('../../public/assets/palntImages/kohdia/00229.jpg'),
    '00230.jpg': require('../../public/assets/palntImages/kheelek/00230.jpg'),
    '00231.jpg': require('../../public/assets/palntImages/kheelek/00231.jpg'),
    '00232.jpg': require('../../public/assets/palntImages/kheelek/00232.jpg'),
    '00233.jpg': require('../../public/assets/palntImages/leelawadee/00233.jpg'),
    '00234.jpg': require('../../public/assets/palntImages/leelawadee/00234.jpg'),
    '00235.jpg': require('../../public/assets/palntImages/leelawadee/00235.jpg'),
    '00236.jpg': require('../../public/assets/palntImages/malakopharung/00236.jpg'),
    '00237.jpg': require('../../public/assets/palntImages/malakopharung/00237.jpg'),
    '00238.jpg': require('../../public/assets/palntImages/malakopharung/00238.jpg'),
    '00239.jpg': require('../../public/assets/palntImages/malakopharung/00239.jpg'),
    '00240.jpg': require('../../public/assets/palntImages/junpha/00240.jpg'),
    '00241.jpg': require('../../public/assets/palntImages/junpha/00241.jpg'),
    '00242.jpg': require('../../public/assets/palntImages/kaew/00242.jpg'),
    '00243.jpg': require('../../public/assets/palntImages/kaew/00243.jpg'),
    '00244.jpg': require('../../public/assets/palntImages/kaew/00244.jpg'),
    '00245.jpg': require('../../public/assets/palntImages/nuadplamueg/00245.jpg'),
    '00246.jpg': require('../../public/assets/palntImages/nuadplamueg/00246.jpg'),
    '00247.jpg': require('../../public/assets/palntImages/nuadplamueg/00247.jpg'),
    '00248.jpg': require('../../public/assets/palntImages/seetrung/00248.jpg'),
    '00249.jpg': require('../../public/assets/palntImages/seetrung/00249.jpg'),
    '00250.jpg': require('../../public/assets/palntImages/seetrung/00250.jpg'),
    '00251.jpg': require('../../public/assets/palntImages/seetrung/00251.jpg'),
    '00252.jpg': require('../../public/assets/palntImages/sangjun/00252.jpg'),
    '00253.jpg': require('../../public/assets/palntImages/sangjun/00253.jpg'),
    '00254.jpg': require('../../public/assets/palntImages/numtaoindia/00254.jpg'),
    '00255.jpg': require('../../public/assets/palntImages/numtaoindia/00255.jpg'),
    '00256.jpg': require('../../public/assets/palntImages/numtaoindia/00256.jpg'),
    '00257.jpg': require('../../public/assets/palntImages/numtaoindia/00257.jpg'),
    '00258.jpg': require('../../public/assets/palntImages/luengindia/00258.jpg'),
    '00259.jpg': require('../../public/assets/palntImages/luengindia/00259.jpg'),
    '00260.jpg': require('../../public/assets/palntImages/luengindia/00260.jpg'),
    '00261.jpg': require('../../public/assets/palntImages/pahilueng/00261.jpg'),
    '00262.jpg': require('../../public/assets/palntImages/pahilueng/00262.jpg'),
    '00263.jpg': require('../../public/assets/palntImages/chumhedted/00263.jpg'),
    '00264.jpg': require('../../public/assets/palntImages/chumhedted/00264.jpg'),
    '00265.jpg': require('../../public/assets/palntImages/chumhedted/00265.jpg'),
    '00266.jpg': require('../../public/assets/palntImages/chumhedted/00266.jpg'),
    '00267.jpg': require('../../public/assets/palntImages/donya/00267.jpg'),
    '00268.jpg': require('../../public/assets/palntImages/donya/00268.jpg'),
    '00270.jpg': require('../../public/assets/palntImages/hookrajong/00270.jpg'),
    '00271.jpg': require('../../public/assets/palntImages/kradon/00271.jpg'),
    '00272.jpg': require('../../public/assets/palntImages/kradon/00272.jpg'),
    '1001.jpg': require('../../public/assets/palntImages/kradungngathai/1001.jpg'),
    '1002.jpg': require('../../public/assets/palntImages/kradon/1002.jpg'),
    '1003.jpg': require('../../public/assets/palntImages/katinnarong/1003.jpg'),
    '1004.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1005.jpg': require('../../public/assets/palntImages/kraton/1005.jpg'),
    '1006.jpg': require('../../public/assets/palntImages/krating/1006.jpg'),
    '1007.jpg': require('../../public/assets/palntImages/krang/1007.jpg'),
    '1008.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1009.jpg': require('../../public/assets/palntImages/kanoon/1009.jpg'),
    '1010.jpg': require('../../public/assets/palntImages/khoi/1010.jpg'),
    '1011.jpg': require('../../public/assets/palntImages/kheelek/1011.jpg'),
    '1012.jpg': require('../../public/assets/palntImages/kana/1012.jpg'),
    '1013.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1014.jpg': require('../../public/assets/palntImages/junpha/1014.jpg'),
    '1015.jpg': require('../../public/assets/palntImages/jamjure/1015.jpg'),
    '1016.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1017.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1018.jpg': require('../../public/assets/palntImages/chompupuntip/1018.jpg'),
    '1019.jpg': require('../../public/assets/palntImages/chompumameaw/1019.jpg'),
    '1020.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1021.jpg': require('../../public/assets/palntImages/takobfalung/1021.jpg'),
    '1022.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1023.jpg': require('../../public/assets/palntImages/tabagna/1023.jpg'),
    '1024.jpg': require('../../public/assets/palntImages/teenped/1024.jpg'),
    '1025.jpg': require('../../public/assets/palntImages/taorang/1025.jpg'),
    '1026.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1027.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1028.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1029.jpg': require('../../public/assets/palntImages/saibaiyaw/1029.jpg'),
    '1030.jpg': require('../../public/assets/palntImages/saibaihoiku/1030.jpg'),
    '1031.jpg': require('../../public/assets/palntImages/sailham/1031.jpg'),
    '1032.jpg': require('../../public/assets/palntImages/nontree/1032.jpg'),
    '1033.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1034.jpg': require('../../public/assets/palntImages/prongyeepoon/1034.jpg'),
    '1035.jpg': require('../../public/assets/palntImages/pradoopa/1035.jpg'),
    '1036.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1037.jpg': require('../../public/assets/palntImages/plamkhuad/1037.jpg'),
    '1038.jpg': require('../../public/assets/palntImages/plamnumpu/1038.jpg'),
    '1039.jpg': require('../../public/assets/palntImages/plamhangjingjok/1039.jpg'),
    '1040.jpg': require('../../public/assets/palntImages/peepkasalong/1040.jpg'),
    '1041.jpg': require('../../public/assets/palntImages/planglangkhuad/1041.jpg'),
    '1042.jpg': require('../../public/assets/palntImages/painumtao/1042.jpg'),
    '1043.jpg': require('../../public/assets/palntImages/pairuak/1043.jpg'),
    '1044.jpg': require('../../public/assets/palntImages/pahilueng/1044.jpg'),
    '1045.jpg': require('../../public/assets/palntImages/phayasut/1045.jpg'),
    '1046.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1047.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1048.jpg': require('../../public/assets/palntImages/phikul/1048.jpg'),
    '1049.jpg': require('../../public/assets/palntImages/po/1049.jpg'),
    '1050.jpg': require('../../public/assets/palntImages/makham/1050.jpg'),
    '1051.jpg': require('../../public/assets/palntImages/makhamted/1051.jpg'),
    '1052.jpg': require('../../public/assets/palntImages/maduea/1052.jpg'),
    '1053.jpg': require('../../public/assets/palntImages/mapraw/1053.jpg'),
    '1054.jpg': require('../../public/assets/palntImages/mamuang/1054.jpg'),
    '1055.jpg': require('../../public/assets/palntImages/mahokkanee/1055.jpg'),
    '1056.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1057.jpg': require('../../public/assets/palntImages/yangna/1057.jpg'),
    '1058.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1059.jpg': require('../../public/assets/palntImages/rachapruek/1059.jpg'),
    '1060.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1061.jpg': require('../../public/assets/palntImages/seetrung/1061.jpg'),
    '1062.jpg': require('../../public/assets/palntImages/sondinsor/1062.jpg'),
    '1063.jpg': require('../../public/assets/palntImages/sontalay/1063.jpg'),
    '1064.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1065.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1066.jpg': require('../../public/assets/palntImages/sak/1066.jpg'),
    '1067.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1068.jpg': require('../../public/assets/palntImages/sara/1068.jpg'),
    '1069.jpg': require('../../public/assets/palntImages/sara/1069.jpg'),
    '1070.jpg': require('../../public/assets/palntImages/sok/1070.jpg'),
    '1071.jpg': require('../../public/assets/palntImages/nuadplamueg/1071.jpg'),
    '1072.jpg': require('../../public/assets/palntImages/mharkkheaw/1072.jpg'),
    '1073.jpg': require('../../public/assets/palntImages/mhakdang/1073.jpg'),
    '1074.jpg': require('../../public/assets/palntImages/mhaknuan/1074.jpg'),
    '1075.jpg': require('../../public/assets/palntImages/mhaklueng/1075.jpg'),
    '1076.jpg': require('../../public/assets/palntImages/NoImage.png'),
    '1077.jpg': require('../../public/assets/palntImages/hangnokyoong/1077.jpg'),
    '1078.jpg': require('../../public/assets/palntImages/hukawang/1078.jpg'),
    '1079.jpg': require('../../public/assets/palntImages/intaninnam/1079.jpg'),
    '1080.jpg': require('../../public/assets/palntImages/intaninbok/1080.jpg'),
    '1081.jpg': require('../../public/assets/palntImages/leadmungkon/1081.jpg'),
    '1082.jpg': require('../../public/assets/palntImages/supunniga/1082.jpg'),
    '1083.jpg': require('../../public/assets/palntImages/teenped/1083.jpg'),
    '1084.jpg': require('../../public/assets/palntImages/kohdia/1084.jpg'),
    '1085.jpg': require('../../public/assets/palntImages/leelawadee/1085.jpg'),
    '1086.jpg': require('../../public/assets/palntImages/malakopharung/1086.jpg'),
    '1087.jpg': require('../../public/assets/palntImages/kaew/1087.jpg'),
    '1088.jpg': require('../../public/assets/palntImages/sangjun/1088.jpg'),
    '1089.jpg': require('../../public/assets/palntImages/numtaoindia/1089.jpg'),
    '1090.jpg': require('../../public/assets/palntImages/luengindia/1090.jpg'),
    '1091.jpg': require('../../public/assets/palntImages/chumhedted/1091.jpg'),
    '1092.jpg': require('../../public/assets/palntImages/donya/1092.jpg'),
    '1093.jpg': require('../../public/assets/palntImages/hookrajong/1093.jpg'),
};

export default imagesRequire;