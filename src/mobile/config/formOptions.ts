/**
 * 表单选项配置文件
 * 集中管理所有表单的选项数据，便于统一修改和维护
 */

/**
 * 表单选项配置文件
 * 集中管理所有表单的选项数据，便于统一修改和维护
 * 根据日化香精类别+应用场景数据重新设计
 */

// 产品大类选项 - 根据日化香精类别重新设计
export const productCategoryOptions = [
  { label: '香水与香氛类', value: 'perfume_fragrance', description: '香水、香氛、古龙水等' },
  { label: '人体洗护类', value: 'body_care', description: '洗面奶、沐浴露、洗发水等' },
  { label: '面部与彩妆类', value: 'facial_cosmetics', description: '面霜、精华、彩妆等' },
  { label: '口腔护理类', value: 'oral_care', description: '牙膏、漱口水、口腔喷雾等' },
  { label: '家居织物护理类', value: 'home_fabric_care', description: '洗衣液、柔顺剂、衣物护理等' },
  { label: '家居清洁类', value: 'home_cleaning', description: '洗洁精、清洁剂、除味剂等' },
  { label: '宠物洗护类', value: 'pet_care', description: '宠物香波、护毛素、除臭喷雾等' },
  { label: '工业与其他用途类', value: 'industrial_other', description: '杀虫剂、加香剂、纸巾等' },
];

// 产品子类选项（根据大类筛选）- 根据日化香精类别重新设计
export const productSubCategoryOptions = {
  perfume_fragrance: [
    { label: '香水', value: 'perfume', description: '约会/社交、商务正式、夜晚派对、日常通勤' },
    { label: '淡香精', value: 'eau_de_parfum', description: '约会/社交、日常通勤、商务正式' },
    { label: '淡香水', value: 'eau_de_toilette', description: '日常通勤、春夏清爽、校园/年轻人群' },
    { label: '古龙水', value: 'cologne', description: '运动后清爽、男士日常、夏季降温' },
    { label: '香体喷雾/香氛喷雾', value: 'body_spray', description: '运动后快速补香、外出旅行随身、办公室提神' },
    { label: '固体香膏/香珠/香薰石', value: 'solid_fragrance', description: '差旅便携、包内/车内香氛、低调补香' },
    { label: '香薰藤条/香薰蜡烛/扩香器用香精', value: 'home_fragrance', description: '卧室助眠、客厅迎宾、SPA冥想、节日氛围' },
  ],
  body_care: [
    { label: '洗面奶', value: 'facial_cleanser', description: '男士控油、女士温和保湿、敏感肌修护、晨间醒肤、夜间深层清洁' },
    { label: '洁面泡沫', value: 'foam_cleanser', description: '懒人按压出泡、青少年祛痘、旅行便携' },
    { label: '洁面啫喱', value: 'gel_cleanser', description: '男士剃须前清洁、油皮清爽、夏季降温' },
    { label: '卸妆产品', value: 'makeup_remover', description: '舞台浓妆、日常防晒卸除、眼唇局部、敏感肌无泪' },
    { label: '沐浴露', value: 'shower_gel', description: '留香持久、运动后清爽、男士控油、女士嫩肤、助眠香氛、旅行便携' },
    { label: '沐浴油', value: 'shower_oil', description: '秋冬滋养、干敏肌修护、SPA级仪式感' },
    { label: '沐浴啫喱', value: 'shower_gel_clear', description: '夏季清凉、儿童泡泡浴、情侣共享' },
    { label: '香皂', value: 'soap', description: '男士复古、酒店差旅、手工冷制护肤' },
    { label: '浴盐', value: 'bath_salt', description: '运动后放松、泡脚解乏、泡澡仪式感' },
    { label: '洗发水', value: 'shampoo', description: '男士去屑、女士修护染烫、运动汗味去除、孕期温和、冬季抗静电' },
    { label: '护发素', value: 'conditioner', description: '日常顺滑、染烫修护、免洗便捷' },
    { label: '发膜', value: 'hair_mask', description: '沙龙级深度修护、旅行便携、免蒸懒人' },
    { label: '头皮精华', value: 'scalp_serum', description: '防脱固发、敏感舒缓、男士控油、夜间修护' },
    { label: '干发喷雾', value: 'dry_shampoo', description: '免洗急救、懒人蓬松、产后坐月子' },
    { label: '身体乳', value: 'body_lotion', description: '秋冬高保湿、男士清爽、孕妇淡纹、睡前助眠、香氛同款' },
    { label: '身体霜', value: 'body_cream', description: '极干燥修护、夜间密集滋养、户外极寒' },
    { label: '身体油', value: 'body_oil', description: '孕期防纹、SPA按摩、晒后修护' },
    { label: '足部护理霜', value: 'foot_cream', description: '干裂修护、运动舒缓、睡前放松' },
    { label: '私处护理液', value: 'intimate_wash', description: '日常温和、经期清爽、运动后抑菌、孕期专用' },
    { label: '止汗剂', value: 'deodorant', description: '商务会议、运动健身、夏日腋下、无香不撞色' },
    { label: '腋下除臭剂', value: 'antiperspirant', description: '青少年体味、男士重汗、女士香体' },
  ],
  facial_cosmetics: [
    { label: '面霜', value: 'face_cream', description: '日常保湿、夜间修护、男士清爽、抗老紧致、敏感肌屏障' },
    { label: '精华', value: 'serum', description: '熬夜急救、美白淡斑、男士控油、旅行安瓶' },
    { label: '爽肤水', value: 'toner', description: '二次清洁、湿敷补水、男士须后镇静、敏感肌舒缓' },
    { label: '乳液', value: 'lotion', description: '晨间轻薄、男士多效合一、学生党平价' },
    { label: '眼霜', value: 'eye_cream', description: '熬夜黑眼圈、抗老紧致、男士清爽、妆前不搓泥' },
    { label: '防晒霜', value: 'sunscreen', description: '户外高倍、通勤轻薄、男士运动、儿童物理、敏感肌无酒精' },
    { label: '粉底液', value: 'foundation', description: '职场持妆、婚礼高清、学生平价、男士自然' },
    { label: '气垫', value: 'cushion', description: '随身补妆、懒人快速、旅行便携、韩妆水光' },
    { label: '遮瑕膏', value: 'concealer', description: '舞台浓妆、痘印遮盖、黑眼圈急救' },
    { label: '唇膏', value: 'lipstick', description: '日常润色、职场低调、约会' },
    { label: '唇釉', value: 'lip_gloss', description: '派对显色、学生平价、镜面嘟嘟唇' },
    { label: '腮红', value: 'blush', description: '日系元气、欧美修容、淡雅自然' },
    { label: '眼影', value: 'eyeshadow', description: '日常大地、派对闪片、新手四色' },
    { label: '睫毛膏', value: 'mascara', description: '约会浓密、职场自然、防水游泳' },
    { label: '卸妆水', value: 'makeup_remover_water', description: '日常淡妆、学生平价、敏感肌温和' },
    { label: '卸妆油', value: 'makeup_remover_oil', description: '浓妆速溶、SPA级按摩、男士防晒' },
    { label: '卸妆膏', value: 'makeup_remover_balm', description: '出差固体不洒、干手可用、懒人乳化' },
    { label: '卸妆巾', value: 'makeup_remover_wipes', description: '旅行便携、健身房即用、露营懒人' },
  ],
  oral_care: [
    { label: '牙膏', value: 'toothpaste', description: '美白亮齿、抗敏修护、儿童无氟、男士去烟渍、孕妇温和' },
    { label: '漱口水', value: 'mouthwash', description: '约会、职场饭后、正畸专用、无酒精温和' },
    { label: '口腔喷雾', value: 'oral_spray', description: '商务会议、火锅后急救、吸烟后遮盖' },
    { label: '牙粉', value: 'tooth_powder', description: '家用美白、男士烟渍、古风复古' },
    { label: '牙贴', value: 'tooth_whitening_strips', description: '婚礼前急救、一周密集美白、敏感型' },
    { label: '口腔清洁片', value: 'oral_cleaning_tablets', description: '旅行便携、假牙/保持器清洁、露营无牙刷' },
  ],
  home_fabric_care: [
    { label: '洗衣液', value: 'laundry_detergent', description: '日常机洗、母婴专用、运动速干衣去汗渍' },
    { label: '洗衣粉', value: 'laundry_powder', description: '乡村大桶机洗、工装重污、经济型批量洗' },
    { label: '洗衣凝珠', value: 'laundry_pods', description: '出差旅行一颗搞定、懒人计量、浓缩留香' },
    { label: '柔顺剂', value: 'fabric_softener', description: '毛巾蓬松、婴儿衣物亲肤、冬季防静电' },
    { label: '衣物留香珠', value: 'fabric_freshener', description: '约会心机香、运动汗味遮盖、衣柜持久散香' },
    { label: '衣物预涂/去渍笔', value: 'stain_remover', description: '餐厅油渍急救、咖啡溅洒即时处理' },
    { label: '衣物喷雾除味', value: 'fabric_deodorizer', description: '火锅/烟味去除、梅雨天防霉味' },
    { label: '衣物干洗剂/喷雾', value: 'dry_cleaner', description: '西装/大衣免水洗、出差酒店快清' },
    { label: '衣物彩漂/漂白剂', value: 'bleach', description: '白衬衫去黄、彩色衣物护色增艳' },
    { label: '真丝/羊毛专用洗', value: 'delicate_detergent', description: '高端面料护理、冬季毛衣缩水防护' },
    { label: '婴儿尿布清洗剂', value: 'diaper_detergent', description: '新生儿便渍去除、无残留安全' },
    { label: '运动鞋专用清洗剂', value: 'sneaker_cleaner', description: '帆布/网面/皮革鞋面深层去泥渍' },
    { label: '鞋袜除臭喷雾', value: 'shoe_deodorizer', description: '健身房鞋柜、军训球鞋即时除味' },
  ],
  home_cleaning: [
    { label: '洗洁精', value: 'dish_soap', description: '母婴果蔬、重油污锅具、可降解露营' },
    { label: '洁厕剂', value: 'toilet_cleaner', description: '马桶尿垢去黄、挂壁长效除菌、酒店客房快洁' },
    { label: '浴室清洁剂', value: 'bathroom_cleaner', description: '淋浴玻璃门水渍、瓷砖缝霉斑、酒店浴室翻新' },
    { label: '多功能浴室喷雾', value: 'bathroom_spray', description: '懒人一步除菌+除味、宝宝浴盆安全清洁' },
    { label: '木质地板清洁剂', value: 'wood_floor_cleaner', description: '宠物家庭除爪渍、地暖环境养护' },
    { label: '瓷砖/大理石清洁剂', value: 'tile_cleaner', description: '厨房重油污、玄关鞋底黑印' },
    { label: '复合地板清洁剂', value: 'laminate_cleaner', description: '快干免冲洗、老人防滑需求' },
    { label: '厨房重油污清洁剂', value: 'kitchen_degreaser', description: '抽油烟机厚油、烧烤后焦渍、餐厅后厨' },
    { label: '厨房台面除菌喷雾', value: 'kitchen_sanitizer', description: '生肉砧板消毒、宝宝辅食台面安全' },
    { label: '玻璃/镜面清洁剂', value: 'glass_cleaner', description: '高层外窗水痕、车窗内雾气、化妆镜指纹' },
    { label: '不锈钢清洁剂', value: 'stainless_steel_cleaner', description: '水槽水渍、电梯面板手印、咖啡机外壳' },
    { label: '水垢清除剂', value: 'limescale_remover', description: '电热水壶除垢、花洒出水恢复' },
    { label: '管道疏通剂', value: 'drain_cleaner', description: '厨房油污堵塞、浴室毛发堵塞、酒店应急疏通' },
    { label: '冰箱除味剂/清洁喷雾', value: 'fridge_deodorizer', description: '剩菜异味、海鲜串味、母婴冰箱安全' },
    { label: '微波炉/烤箱清洁泡腾片', value: 'oven_cleaner', description: '焦糊残渣软化、学生宿舍懒人清洁' },
    { label: '空调清洁剂', value: 'ac_cleaner', description: '换季拆洗、母婴房除菌、出租房入住前消毒' },
    { label: '地毯/沙发清洁剂', value: 'carpet_cleaner', description: '宠物尿渍、红酒派对渍、酒店客房翻新' },
    { label: '玻璃灶具/陶瓷面板清洁剂', value: 'stovetop_cleaner', description: '烧焦糖渍、电磁炉黑圈' },
    { label: '家具护理蜡/喷雾', value: 'furniture_polish', description: '实木桌面养护、皮质沙发滋润、钢琴漆抛光' },
    { label: '银器/金属擦亮剂', value: 'metal_polish', description: '餐具氧化发黑、奖杯/首饰恢复光泽' },
    { label: '防霉胶条/除霉啫喱', value: 'mold_remover', description: '洗衣机胶圈霉斑、浴室硅胶发黑' },
    { label: '垃圾处理器清洁球', value: 'garbage_disposal_cleaner', description: '厨房下水道异味、碎骨残渣分解' },
  ],
  pet_care: [
    { label: '宠物香波（犬用）', value: 'dog_shampoo', description: '长毛柔顺、短毛控油、驱虫除蚤、幼犬无泪' },
    { label: '宠物香波（猫用）', value: 'cat_shampoo', description: '低敏无香、去油去黑下巴、应激安抚' },
    { label: '宠物护毛素', value: 'pet_conditioner', description: '长毛打结、比赛级蓬松、冬季抗静电' },
    { label: '宠物除臭喷雾', value: 'pet_deodorizer', description: '便后遮味、猫砂盆、狗窝除味、车载宠物区' },
    { label: '宠物湿巾', value: 'pet_wipes', description: '遛狗擦脚、眼部泪痕、旅行便携' },
  ],
  industrial_other: [
    { label: '杀虫剂/驱蚊液', value: 'insect_repellent', description: '户外露营、婴儿无香、车载驱蚊' },
    { label: '橡胶/塑料/涂料加香', value: 'industrial_fragrance', description: '汽车内饰、玩具安全、家居建材' },
    { label: '纸巾/湿巾/卫生巾', value: 'paper_products', description: '婴儿手口、女性经期、旅行便携' },
    { label: '鞋用除臭剂', value: 'shoe_deodorant', description: '运动鞋汗味、皮鞋闷味、鞋柜整体除味' },
    { label: '鞋垫香精', value: 'shoe_insoles', description: '防臭长效、军训/军旅、冬季保暖香型' },
  ],
};

// 应用场景选项（根据子类筛选）- 根据日化香精类别重新设计
export const applicationScenarioOptions = {
  // 香水与香氛类
  perfume: [
    { label: '约会/社交', value: 'dating_social', description: '约会和社交场合使用' },
    { label: '商务正式', value: 'business_formal', description: '商务正式场合使用' },
    { label: '夜晚派对', value: 'night_party', description: '夜晚派对场合使用' },
    { label: '日常通勤', value: 'daily_commute', description: '日常通勤使用' },
  ],
  eau_de_parfum: [
    { label: '约会/社交', value: 'dating_social', description: '约会和社交场合使用' },
    { label: '日常通勤', value: 'daily_commute', description: '日常通勤使用' },
    { label: '商务正式', value: 'business_formal', description: '商务正式场合使用' },
  ],
  eau_de_toilette: [
    { label: '日常通勤', value: 'daily_commute', description: '日常通勤使用' },
    { label: '春夏清爽', value: 'spring_summer_fresh', description: '春夏季节清爽使用' },
    { label: '校园/年轻人群', value: 'campus_young', description: '校园和年轻人群使用' },
  ],
  cologne: [
    { label: '运动后清爽', value: 'post_sports_fresh', description: '运动后清爽使用' },
    { label: '男士日常', value: 'men_daily', description: '男士日常使用' },
    { label: '夏季降温', value: 'summer_cooling', description: '夏季降温使用' },
  ],
  body_spray: [
    { label: '运动后快速补香', value: 'post_sports_quick', description: '运动后快速补香' },
    { label: '外出旅行随身', value: 'travel_portable', description: '外出旅行随身携带' },
    { label: '办公室提神', value: 'office_refresh', description: '办公室提神使用' },
  ],
  solid_fragrance: [
    { label: '差旅便携', value: 'travel_convenient', description: '差旅便携使用' },
    { label: '包内/车内香氛', value: 'bag_car_fragrance', description: '包内或车内香氛' },
    { label: '低调补香', value: 'subtle_refresh', description: '低调补香使用' },
  ],
  home_fragrance: [
    { label: '卧室助眠', value: 'bedroom_sleep', description: '卧室助眠使用' },
    { label: '客厅迎宾', value: 'living_room_welcome', description: '客厅迎宾使用' },
    { label: 'SPA冥想', value: 'spa_meditation', description: 'SPA冥想使用' },
    { label: '节日氛围', value: 'festival_atmosphere', description: '节日氛围营造' },
  ],
  
  // 人体洗护类
  facial_cleanser: [
    { label: '男士控油', value: 'men_oil_control', description: '男士控油清洁' },
    { label: '女士温和保湿', value: 'women_gentle_moisture', description: '女士温和保湿清洁' },
    { label: '敏感肌修护', value: 'sensitive_repair', description: '敏感肌修护清洁' },
    { label: '晨间醒肤', value: 'morning_refresh', description: '晨间醒肤清洁' },
    { label: '夜间深层清洁', value: 'night_deep_clean', description: '夜间深层清洁' },
  ],
  foam_cleanser: [
    { label: '懒人按压出泡', value: 'lazy_foam', description: '懒人按压出泡清洁' },
    { label: '青少年祛痘', value: 'teen_acne', description: '青少年祛痘清洁' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携清洁' },
  ],
  gel_cleanser: [
    { label: '男士剃须前清洁', value: 'men_pre_shave', description: '男士剃须前清洁' },
    { label: '油皮清爽', value: 'oily_skin_fresh', description: '油皮清爽清洁' },
    { label: '夏季降温', value: 'summer_cooling', description: '夏季降温清洁' },
  ],
  makeup_remover: [
    { label: '舞台浓妆', value: 'stage_makeup', description: '舞台浓妆卸除' },
    { label: '日常防晒卸除', value: 'daily_sunscreen', description: '日常防晒卸除' },
    { label: '眼唇局部', value: 'eye_lip_local', description: '眼唇局部卸除' },
    { label: '敏感肌无泪', value: 'sensitive_tear_free', description: '敏感肌无泪卸除' },
  ],
  shower_gel: [
    { label: '留香持久', value: 'long_last_fragrance', description: '留香持久沐浴' },
    { label: '运动后清爽', value: 'post_sports_fresh', description: '运动后清爽沐浴' },
    { label: '男士控油', value: 'men_oil_control', description: '男士控油沐浴' },
    { label: '女士嫩肤', value: 'women_soft_skin', description: '女士嫩肤沐浴' },
    { label: '助眠香氛', value: 'sleep_fragrance', description: '助眠香氛沐浴' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携沐浴' },
  ],
  shower_oil: [
    { label: '秋冬滋养', value: 'autumn_winter_nourish', description: '秋冬滋养沐浴' },
    { label: '干敏肌修护', value: 'dry_sensitive_repair', description: '干敏肌修护沐浴' },
    { label: 'SPA级仪式感', value: 'spa_ritual', description: 'SPA级仪式感沐浴' },
  ],
  shower_gel_clear: [
    { label: '夏季清凉', value: 'summer_cooling', description: '夏季清凉沐浴' },
    { label: '儿童泡泡浴', value: 'kids_bubble_bath', description: '儿童泡泡浴' },
    { label: '情侣共享', value: 'couple_shared', description: '情侣共享沐浴' },
  ],
  soap: [
    { label: '男士复古', value: 'men_vintage', description: '男士复古香皂' },
    { label: '酒店差旅', value: 'hotel_travel', description: '酒店差旅香皂' },
    { label: '手工冷制护肤', value: 'handmade_cold_process', description: '手工冷制护肤香皂' },
  ],
  bath_salt: [
    { label: '运动后放松', value: 'post_sports_relax', description: '运动后放松泡澡' },
    { label: '泡脚解乏', value: 'foot_soak_relief', description: '泡脚解乏' },
    { label: '泡澡仪式感', value: 'bath_ritual', description: '泡澡仪式感' },
  ],
  shampoo: [
    { label: '男士去屑', value: 'men_dandruff', description: '男士去屑洗发' },
    { label: '女士修护染烫', value: 'women_repair_dye', description: '女士修护染烫' },
    { label: '运动汗味去除', value: 'sports_sweat_remove', description: '运动汗味去除' },
    { label: '孕期温和', value: 'pregnancy_gentle', description: '孕期温和洗发' },
    { label: '冬季抗静电', value: 'winter_anti_static', description: '冬季抗静电' },
  ],
  conditioner: [
    { label: '日常顺滑', value: 'daily_smooth', description: '日常顺滑护发' },
    { label: '染烫修护', value: 'dye_repair', description: '染烫修护' },
    { label: '免洗便捷', value: 'no_rinse_convenient', description: '免洗便捷护发' },
  ],
  hair_mask: [
    { label: '沙龙级深度修护', value: 'salon_deep_repair', description: '沙龙级深度修护' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携发膜' },
    { label: '免蒸懒人', value: 'no_steam_lazy', description: '免蒸懒人发膜' },
  ],
  scalp_serum: [
    { label: '防脱固发', value: 'anti_hair_loss', description: '防脱固发精华' },
    { label: '敏感舒缓', value: 'sensitive_soothing', description: '敏感舒缓精华' },
    { label: '男士控油', value: 'men_oil_control', description: '男士控油精华' },
    { label: '夜间修护', value: 'night_repair', description: '夜间修护精华' },
  ],
  dry_shampoo: [
    { label: '免洗急救', value: 'no_rinse_emergency', description: '免洗急救喷雾' },
    { label: '懒人蓬松', value: 'lazy_volume', description: '懒人蓬松喷雾' },
    { label: '产后坐月子', value: 'postpartum_confinement', description: '产后坐月子使用' },
  ],
  body_lotion: [
    { label: '秋冬高保湿', value: 'autumn_winter_moisture', description: '秋冬高保湿身体乳' },
    { label: '男士清爽', value: 'men_fresh', description: '男士清爽身体乳' },
    { label: '孕妇淡纹', value: 'pregnancy_stretch_mark', description: '孕妇淡纹身体乳' },
    { label: '睡前助眠', value: 'bedtime_sleep', description: '睡前助眠身体乳' },
    { label: '香氛同款', value: 'fragrance_matching', description: '香氛同款身体乳' },
  ],
  body_cream: [
    { label: '极干燥修护', value: 'extreme_dry_repair', description: '极干燥修护身体霜' },
    { label: '夜间密集滋养', value: 'night_intensive_nourish', description: '夜间密集滋养' },
    { label: '户外极寒', value: 'outdoor_extreme_cold', description: '户外极寒防护' },
  ],
  body_oil: [
    { label: '孕期防纹', value: 'pregnancy_prevent_stretch', description: '孕期防纹身体油' },
    { label: 'SPA按摩', value: 'spa_massage', description: 'SPA按摩身体油' },
    { label: '晒后修护', value: 'post_sun_repair', description: '晒后修护身体油' },
  ],
  foot_cream: [
    { label: '干裂修护', value: 'crack_repair', description: '干裂修护足霜' },
    { label: '运动舒缓', value: 'sports_soothing', description: '运动舒缓足霜' },
    { label: '睡前放松', value: 'bedtime_relax', description: '睡前放松足霜' },
  ],
  intimate_wash: [
    { label: '日常温和', value: 'daily_gentle', description: '日常温和护理' },
    { label: '经期清爽', value: 'period_fresh', description: '经期清爽护理' },
    { label: '运动后抑菌', value: 'post_sports_antibacterial', description: '运动后抑菌护理' },
    { label: '孕期专用', value: 'pregnancy_special', description: '孕期专用护理' },
  ],
  deodorant: [
    { label: '商务会议', value: 'business_meeting', description: '商务会议止汗' },
    { label: '运动健身', value: 'sports_fitness', description: '运动健身止汗' },
    { label: '夏日腋下', value: 'summer_armpit', description: '夏日腋下止汗' },
    { label: '无香不撞色', value: 'fragrance_free', description: '无香不撞色止汗' },
  ],
  antiperspirant: [
    { label: '青少年体味', value: 'teen_body_odor', description: '青少年体味除臭' },
    { label: '男士重汗', value: 'men_heavy_sweat', description: '男士重汗除臭' },
    { label: '女士香体', value: 'women_fragrance_body', description: '女士香体除臭' },
  ],
  
  // 面部与彩妆类
  face_cream: [
    { label: '日常保湿', value: 'daily_moisture', description: '日常保湿面霜' },
    { label: '夜间修护', value: 'night_repair', description: '夜间修护面霜' },
    { label: '男士清爽', value: 'men_fresh', description: '男士清爽面霜' },
    { label: '抗老紧致', value: 'anti_aging_firming', description: '抗老紧致面霜' },
    { label: '敏感肌屏障', value: 'sensitive_barrier', description: '敏感肌屏障面霜' },
  ],
  serum: [
    { label: '熬夜急救', value: 'overnight_emergency', description: '熬夜急救精华' },
    { label: '美白淡斑', value: 'whitening_spot', description: '美白淡斑精华' },
    { label: '男士控油', value: 'men_oil_control', description: '男士控油精华' },
    { label: '旅行安瓶', value: 'travel_ampoule', description: '旅行安瓶精华' },
  ],
  toner: [
    { label: '二次清洁', value: 'double_cleansing', description: '二次清洁爽肤水' },
    { label: '湿敷补水', value: 'mask_hydration', description: '湿敷补水爽肤水' },
    { label: '男士须后镇静', value: 'men_post_shave', description: '男士须后镇静爽肤水' },
    { label: '敏感肌舒缓', value: 'sensitive_soothing', description: '敏感肌舒缓爽肤水' },
  ],
  lotion: [
    { label: '晨间轻薄', value: 'morning_lightweight', description: '晨间轻薄乳液' },
    { label: '男士多效合一', value: 'men_multi_effect', description: '男士多效合一乳液' },
    { label: '学生党平价', value: 'student_affordable', description: '学生党平价乳液' },
  ],
  eye_cream: [
    { label: '熬夜黑眼圈', value: 'overnight_dark_circles', description: '熬夜黑眼圈眼霜' },
    { label: '抗老紧致', value: 'anti_aging_firming', description: '抗老紧致眼霜' },
    { label: '男士清爽', value: 'men_fresh', description: '男士清爽眼霜' },
    { label: '妆前不搓泥', value: 'pre_makeup_no_pilling', description: '妆前不搓泥眼霜' },
  ],
  sunscreen: [
    { label: '户外高倍', value: 'outdoor_high_spf', description: '户外高倍防晒' },
    { label: '通勤轻薄', value: 'commute_lightweight', description: '通勤轻薄防晒' },
    { label: '男士运动', value: 'men_sports', description: '男士运动防晒' },
    { label: '儿童物理', value: 'kids_physical', description: '儿童物理防晒' },
    { label: '敏感肌无酒精', value: 'sensitive_alcohol_free', description: '敏感肌无酒精防晒' },
  ],
  foundation: [
    { label: '职场持妆', value: 'workplace_long_wear', description: '职场持妆粉底' },
    { label: '婚礼高清', value: 'wedding_hd', description: '婚礼高清粉底' },
    { label: '学生平价', value: 'student_affordable', description: '学生平价粉底' },
    { label: '男士自然', value: 'men_natural', description: '男士自然粉底' },
  ],
  cushion: [
    { label: '随身补妆', value: 'portable_touch_up', description: '随身补妆气垫' },
    { label: '懒人快速', value: 'lazy_quick', description: '懒人快速气垫' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携气垫' },
    { label: '韩妆水光', value: 'korean_dewy', description: '韩妆水光气垫' },
  ],
  concealer: [
    { label: '舞台浓妆', value: 'stage_makeup', description: '舞台浓妆遮瑕' },
    { label: '痘印遮盖', value: 'acne_cover', description: '痘印遮盖遮瑕' },
    { label: '黑眼圈急救', value: 'dark_circles_emergency', description: '黑眼圈急救遮瑕' },
  ],
  lipstick: [
    { label: '日常润色', value: 'daily_tint', description: '日常润色唇膏' },
    { label: '职场低调', value: 'workplace_subtle', description: '职场低调唇膏' },
    { label: '约会', value: 'dating', description: '约会唇膏' },
  ],
  lip_gloss: [
    { label: '派对显色', value: 'party_vibrant', description: '派对显色唇釉' },
    { label: '学生平价', value: 'student_affordable', description: '学生平价唇釉' },
    { label: '镜面嘟嘟唇', value: 'glossy_pout', description: '镜面嘟嘟唇釉' },
  ],
  blush: [
    { label: '日系元气', value: 'japanese_energetic', description: '日系元气腮红' },
    { label: '欧美修容', value: 'western_contour', description: '欧美修容腮红' },
    { label: '淡雅自然', value: 'elegant_natural', description: '淡雅自然腮红' },
  ],
  eyeshadow: [
    { label: '日常大地', value: 'daily_earth', description: '日常大地眼影' },
    { label: '派对闪片', value: 'party_glitter', description: '派对闪片眼影' },
    { label: '新手四色', value: 'beginner_quad', description: '新手四色眼影' },
  ],
  mascara: [
    { label: '约会浓密', value: 'dating_volumizing', description: '约会浓密睫毛膏' },
    { label: '职场自然', value: 'workplace_natural', description: '职场自然睫毛膏' },
    { label: '防水游泳', value: 'waterproof_swimming', description: '防水游泳睫毛膏' },
  ],
  makeup_remover_water: [
    { label: '日常淡妆', value: 'daily_light_makeup', description: '日常淡妆卸妆水' },
    { label: '学生平价', value: 'student_affordable', description: '学生平价卸妆水' },
    { label: '敏感肌温和', value: 'sensitive_gentle', description: '敏感肌温和卸妆水' },
  ],
  makeup_remover_oil: [
    { label: '浓妆速溶', value: 'heavy_makeup_dissolve', description: '浓妆速溶卸妆油' },
    { label: 'SPA级按摩', value: 'spa_massage', description: 'SPA级按摩卸妆油' },
    { label: '男士防晒', value: 'men_sunscreen', description: '男士防晒卸妆油' },
  ],
  makeup_remover_balm: [
    { label: '出差固体不洒', value: 'travel_solid_no_spill', description: '出差固体不洒卸妆膏' },
    { label: '干手可用', value: 'dry_hand_usable', description: '干手可用卸妆膏' },
    { label: '懒人乳化', value: 'lazy_emulsify', description: '懒人乳化卸妆膏' },
  ],
  makeup_remover_wipes: [
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携卸妆巾' },
    { label: '健身房即用', value: 'gym_ready', description: '健身房即用卸妆巾' },
    { label: '露营懒人', value: 'camping_lazy', description: '露营懒人卸妆巾' },
  ],
  
  // 口腔护理类
  toothpaste: [
    { label: '美白亮齿', value: 'whitening_bright', description: '美白亮齿牙膏' },
    { label: '抗敏修护', value: 'sensitive_repair', description: '抗敏修护牙膏' },
    { label: '儿童无氟', value: 'kids_fluoride_free', description: '儿童无氟牙膏' },
    { label: '男士去烟渍', value: 'men_smoke_stain', description: '男士去烟渍牙膏' },
    { label: '孕妇温和', value: 'pregnancy_gentle', description: '孕妇温和牙膏' },
  ],
  mouthwash: [
    { label: '约会', value: 'dating', description: '约会漱口水' },
    { label: '职场饭后', value: 'workplace_after_meal', description: '职场饭后漱口水' },
    { label: '正畸专用', value: 'orthodontic_special', description: '正畸专用漱口水' },
    { label: '无酒精温和', value: 'alcohol_free_gentle', description: '无酒精温和漱口水' },
  ],
  oral_spray: [
    { label: '商务会议', value: 'business_meeting', description: '商务会议口腔喷雾' },
    { label: '火锅后急救', value: 'hotpot_emergency', description: '火锅后急救口腔喷雾' },
    { label: '吸烟后遮盖', value: 'smoking_cover', description: '吸烟后遮盖口腔喷雾' },
  ],
  tooth_powder: [
    { label: '家用美白', value: 'home_whitening', description: '家用美白牙粉' },
    { label: '男士烟渍', value: 'men_smoke_stain', description: '男士烟渍牙粉' },
    { label: '古风复古', value: 'vintage_retro', description: '古风复古牙粉' },
  ],
  tooth_whitening_strips: [
    { label: '婚礼前急救', value: 'pre_wedding_emergency', description: '婚礼前急救牙贴' },
    { label: '一周密集美白', value: 'weekly_intensive_whitening', description: '一周密集美白牙贴' },
    { label: '敏感型', value: 'sensitive_type', description: '敏感型牙贴' },
  ],
  oral_cleaning_tablets: [
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携口腔清洁片' },
    { label: '假牙/保持器清洁', value: 'denture_retainer_clean', description: '假牙/保持器清洁片' },
    { label: '露营无牙刷', value: 'camping_no_toothbrush', description: '露营无牙刷清洁片' },
  ],
  
  // 家居织物护理类
  laundry_detergent: [
    { label: '日常机洗', value: 'daily_machine_wash', description: '日常机洗洗衣液' },
    { label: '母婴专用', value: 'mother_baby_special', description: '母婴专用洗衣液' },
    { label: '运动速干衣去汗渍', value: 'sports_quick_dry_sweat', description: '运动速干衣去汗渍洗衣液' },
  ],
  laundry_powder: [
    { label: '乡村大桶机洗', value: 'rural_bucket_machine', description: '乡村大桶机洗洗衣粉' },
    { label: '工装重污', value: 'workwear_heavy_stain', description: '工装重污洗衣粉' },
    { label: '经济型批量洗', value: 'economic_bulk_wash', description: '经济型批量洗洗衣粉' },
  ],
  laundry_pods: [
    { label: '出差旅行一颗搞定', value: 'travel_one_pod', description: '出差旅行一颗搞定洗衣凝珠' },
    { label: '懒人计量', value: 'lazy_measurement', description: '懒人计量洗衣凝珠' },
    { label: '浓缩留香', value: 'concentrated_fragrance', description: '浓缩留香洗衣凝珠' },
  ],
  fabric_softener: [
    { label: '毛巾蓬松', value: 'towel_fluffy', description: '毛巾蓬松柔顺剂' },
    { label: '婴儿衣物亲肤', value: 'baby_clothing_gentle', description: '婴儿衣物亲肤柔顺剂' },
    { label: '冬季防静电', value: 'winter_anti_static', description: '冬季防静电柔顺剂' },
  ],
  fabric_freshener: [
    { label: '约会心机香', value: 'dating_secret_fragrance', description: '约会心机香衣物留香珠' },
    { label: '运动汗味遮盖', value: 'sports_sweat_cover', description: '运动汗味遮盖衣物留香珠' },
    { label: '衣柜持久散香', value: 'wardrobe_long_fragrance', description: '衣柜持久散香衣物留香珠' },
  ],
  stain_remover: [
    { label: '餐厅油渍急救', value: 'restaurant_oil_emergency', description: '餐厅油渍急救去渍笔' },
    { label: '咖啡溅洒即时处理', value: 'coffee_spill_instant', description: '咖啡溅洒即时处理去渍笔' },
  ],
  fabric_deodorizer: [
    { label: '火锅/烟味去除', value: 'hotpot_smoke_remove', description: '火锅/烟味去除衣物喷雾' },
    { label: '梅雨天防霉味', value: 'rainy_mold_prevention', description: '梅雨天防霉味衣物喷雾' },
  ],
  dry_cleaner: [
    { label: '西装/大衣免水洗', value: 'suit_coat_no_water', description: '西装/大衣免水洗干洗剂' },
    { label: '出差酒店快清', value: 'travel_hotel_quick_clean', description: '出差酒店快清干洗剂' },
  ],
  bleach: [
    { label: '白衬衫去黄', value: 'white_shirt_yellow_remove', description: '白衬衫去黄漂白剂' },
    { label: '彩色衣物护色增艳', value: 'color_clothing_protect', description: '彩色衣物护色增艳漂白剂' },
  ],
  delicate_detergent: [
    { label: '高端面料护理', value: 'luxury_fabric_care', description: '高端面料护理专用洗' },
    { label: '冬季毛衣缩水防护', value: 'winter_sweater_shrink_protect', description: '冬季毛衣缩水防护专用洗' },
  ],
  diaper_detergent: [
    { label: '新生儿便渍去除', value: 'newborn_stain_remove', description: '新生儿便渍去除清洗剂' },
    { label: '无残留安全', value: 'no_residue_safe', description: '无残留安全清洗剂' },
  ],
  sneaker_cleaner: [
    { label: '帆布/网面/皮革鞋面深层去泥渍', value: 'canvas_mesh_leather_deep_clean', description: '帆布/网面/皮革鞋面深层去泥渍清洗剂' },
  ],
  shoe_deodorizer: [
    { label: '健身房鞋柜', value: 'gym_shoe_cabinet', description: '健身房鞋柜除臭喷雾' },
    { label: '军训球鞋即时除味', value: 'military_sneakers_instant', description: '军训球鞋即时除味喷雾' },
  ],
  
  // 家居清洁类
  dish_soap: [
    { label: '母婴果蔬', value: 'mother_baby_fruits', description: '母婴果蔬洗洁精' },
    { label: '重油污锅具', value: 'heavy_grease_pots', description: '重油污锅具洗洁精' },
    { label: '可降解露营', value: 'biodegradable_camping', description: '可降解露营洗洁精' },
  ],
  toilet_cleaner: [
    { label: '马桶尿垢去黄', value: 'toilet_urine_yellow_remove', description: '马桶尿垢去黄洁厕剂' },
    { label: '挂壁长效除菌', value: 'wall_mounted_long_antibacterial', description: '挂壁长效除菌洁厕剂' },
    { label: '酒店客房快洁', value: 'hotel_room_quick_clean', description: '酒店客房快洁洁厕剂' },
  ],
  bathroom_cleaner: [
    { label: '淋浴玻璃门水渍', value: 'shower_glass_water_stain', description: '淋浴玻璃门水渍浴室清洁剂' },
    { label: '瓷砖缝霉斑', value: 'tile_grout_mold', description: '瓷砖缝霉斑浴室清洁剂' },
    { label: '酒店浴室翻新', value: 'hotel_bathroom_renovation', description: '酒店浴室翻新清洁剂' },
  ],
  bathroom_spray: [
    { label: '懒人一步除菌+除味', value: 'lazy_one_step_antibacterial_deodorize', description: '懒人一步除菌+除味浴室喷雾' },
    { label: '宝宝浴盆安全清洁', value: 'baby_bath_safe_clean', description: '宝宝浴盆安全清洁喷雾' },
  ],
  wood_floor_cleaner: [
    { label: '宠物家庭除爪渍', value: 'pet_family_claw_stain', description: '宠物家庭除爪渍木质地板清洁剂' },
    { label: '地暖环境养护', value: 'floor_heating_maintenance', description: '地暖环境养护木质地板清洁剂' },
  ],
  tile_cleaner: [
    { label: '厨房重油污', value: 'kitchen_heavy_grease', description: '厨房重油污瓷砖清洁剂' },
    { label: '玄关鞋底黑印', value: 'entrance_shoe_black_mark', description: '玄关鞋底黑印瓷砖清洁剂' },
  ],
  laminate_cleaner: [
    { label: '快干免冲洗', value: 'quick_dry_no_rinse', description: '快干免冲洗复合地板清洁剂' },
    { label: '老人防滑需求', value: 'elderly_anti_slip', description: '老人防滑需求复合地板清洁剂' },
  ],
  kitchen_degreaser: [
    { label: '抽油烟机厚油', value: 'range_hood_thick_oil', description: '抽油烟机厚油厨房清洁剂' },
    { label: '烧烤后焦渍', value: 'bbq_burnt_stain', description: '烧烤后焦渍厨房清洁剂' },
    { label: '餐厅后厨', value: 'restaurant_back_kitchen', description: '餐厅后厨厨房清洁剂' },
  ],
  kitchen_sanitizer: [
    { label: '生肉砧板消毒', value: 'raw_meat_cutting_board', description: '生肉砧板消毒厨房台面除菌喷雾' },
    { label: '宝宝辅食台面安全', value: 'baby_food_surface_safe', description: '宝宝辅食台面安全除菌喷雾' },
  ],
  glass_cleaner: [
    { label: '高层外窗水痕', value: 'high_rise_window_water', description: '高层外窗水痕玻璃清洁剂' },
    { label: '车窗内雾气', value: 'car_window_fog', description: '车窗内雾气玻璃清洁剂' },
    { label: '化妆镜指纹', value: 'makeup_mirror_fingerprint', description: '化妆镜指纹玻璃清洁剂' },
  ],
  stainless_steel_cleaner: [
    { label: '水槽水渍', value: 'sink_water_stain', description: '水槽水渍不锈钢清洁剂' },
    { label: '电梯面板手印', value: 'elevator_panel_handprint', description: '电梯面板手印不锈钢清洁剂' },
    { label: '咖啡机外壳', value: 'coffee_machine_exterior', description: '咖啡机外壳不锈钢清洁剂' },
  ],
  limescale_remover: [
    { label: '电热水壶除垢', value: 'electric_kettle_descale', description: '电热水壶除垢水垢清除剂' },
    { label: '花洒出水恢复', value: 'shower_head_water_restore', description: '花洒出水恢复水垢清除剂' },
  ],
  drain_cleaner: [
    { label: '厨房油污堵塞', value: 'kitchen_grease_clog', description: '厨房油污堵塞管道疏通剂' },
    { label: '浴室毛发堵塞', value: 'bathroom_hair_clog', description: '浴室毛发堵塞管道疏通剂' },
    { label: '酒店应急疏通', value: 'hotel_emergency_unclog', description: '酒店应急疏通管道疏通剂' },
  ],
  fridge_deodorizer: [
    { label: '剩菜异味', value: 'leftover_odor', description: '剩菜异味冰箱除味剂' },
    { label: '海鲜串味', value: 'seafood_cross_odor', description: '海鲜串味冰箱除味剂' },
    { label: '母婴冰箱安全', value: 'mother_baby_fridge_safe', description: '母婴冰箱安全除味剂' },
  ],
  oven_cleaner: [
    { label: '焦糊残渣软化', value: 'burnt_residue_soften', description: '焦糊残渣软化微波炉清洁泡腾片' },
    { label: '学生宿舍懒人清洁', value: 'student_dorm_lazy_clean', description: '学生宿舍懒人清洁泡腾片' },
  ],
  ac_cleaner: [
    { label: '换季拆洗', value: 'seasonal_disassembly', description: '换季拆洗空调清洁剂' },
    { label: '母婴房除菌', value: 'mother_baby_room_antibacterial', description: '母婴房除菌空调清洁剂' },
    { label: '出租房入住前消毒', value: 'rental_pre_occupancy_disinfection', description: '出租房入住前消毒空调清洁剂' },
  ],
  carpet_cleaner: [
    { label: '宠物尿渍', value: 'pet_urine_stain', description: '宠物尿渍地毯清洁剂' },
    { label: '红酒派对渍', value: 'wine_party_stain', description: '红酒派对渍地毯清洁剂' },
    { label: '酒店客房翻新', value: 'hotel_room_renovation', description: '酒店客房翻新地毯清洁剂' },
  ],
  stovetop_cleaner: [
    { label: '烧焦糖渍', value: 'burnt_sugar_stain', description: '烧焦糖渍玻璃灶具清洁剂' },
    { label: '电磁炉黑圈', value: 'induction_cooker_black_ring', description: '电磁炉黑圈陶瓷面板清洁剂' },
  ],
  furniture_polish: [
    { label: '实木桌面养护', value: 'solid_wood_table_maintenance', description: '实木桌面养护家具护理蜡' },
    { label: '皮质沙发滋润', value: 'leather_sofa_moisturize', description: '皮质沙发滋润家具护理蜡' },
    { label: '钢琴漆抛光', value: 'piano_lacquer_polish', description: '钢琴漆抛光家具护理蜡' },
  ],
  metal_polish: [
    { label: '餐具氧化发黑', value: 'tableware_oxidation_black', description: '餐具氧化发黑银器擦亮剂' },
    { label: '奖杯/首饰恢复光泽', value: 'trophy_jewelry_restore_luster', description: '奖杯/首饰恢复光泽金属擦亮剂' },
  ],
  mold_remover: [
    { label: '洗衣机胶圈霉斑', value: 'washing_machine_rubber_mold', description: '洗衣机胶圈霉斑防霉胶条' },
    { label: '浴室硅胶发黑', value: 'bathroom_silicone_black', description: '浴室硅胶发黑除霉啫喱' },
  ],
  garbage_disposal_cleaner: [
    { label: '厨房下水道异味', value: 'kitchen_drain_odor', description: '厨房下水道异味垃圾处理器清洁球' },
    { label: '碎骨残渣分解', value: 'bone_residue_decompose', description: '碎骨残渣分解垃圾处理器清洁球' },
  ],
  
  // 宠物洗护类
  dog_shampoo: [
    { label: '长毛柔顺', value: 'long_hair_smooth', description: '长毛柔顺犬用香波' },
    { label: '短毛控油', value: 'short_hair_oil_control', description: '短毛控油犬用香波' },
    { label: '驱虫除蚤', value: 'parasite_flea_removal', description: '驱虫除蚤犬用香波' },
    { label: '幼犬无泪', value: 'puppy_tear_free', description: '幼犬无泪犬用香波' },
  ],
  cat_shampoo: [
    { label: '低敏无香', value: 'low_sensitive_fragrance_free', description: '低敏无香猫用香波' },
    { label: '去油去黑下巴', value: 'oil_black_chin_remove', description: '去油去黑下巴猫用香波' },
    { label: '应激安抚', value: 'stress_soothing', description: '应激安抚猫用香波' },
  ],
  pet_conditioner: [
    { label: '长毛打结', value: 'long_hair_tangle', description: '长毛打结宠物护毛素' },
    { label: '比赛级蓬松', value: 'competition_fluffy', description: '比赛级蓬松宠物护毛素' },
    { label: '冬季抗静电', value: 'winter_anti_static', description: '冬季抗静电宠物护毛素' },
  ],
  pet_deodorizer: [
    { label: '便后遮味', value: 'post_defecation_cover', description: '便后遮味宠物除臭喷雾' },
    { label: '猫砂盆', value: 'cat_litter_box', description: '猫砂盆宠物除臭喷雾' },
    { label: '狗窝除味', value: 'dog_house_deodorize', description: '狗窝除味宠物除臭喷雾' },
    { label: '车载宠物区', value: 'car_pet_area', description: '车载宠物区宠物除臭喷雾' },
  ],
  pet_wipes: [
    { label: '遛狗擦脚', value: 'walk_dog_wipe_feet', description: '遛狗擦脚宠物湿巾' },
    { label: '眼部泪痕', value: 'eye_tear_stain', description: '眼部泪痕宠物湿巾' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携宠物湿巾' },
  ],
  
  // 工业与其他用途类
  insect_repellent: [
    { label: '户外露营', value: 'outdoor_camping', description: '户外露营杀虫剂/驱蚊液' },
    { label: '婴儿无香', value: 'baby_fragrance_free', description: '婴儿无香杀虫剂/驱蚊液' },
    { label: '车载驱蚊', value: 'car_mosquito_repellent', description: '车载驱蚊杀虫剂/驱蚊液' },
  ],
  industrial_fragrance: [
    { label: '汽车内饰', value: 'car_interior', description: '汽车内饰橡胶/塑料/涂料加香' },
    { label: '玩具安全', value: 'toy_safety', description: '玩具安全橡胶/塑料/涂料加香' },
    { label: '家居建材', value: 'home_building_materials', description: '家居建材橡胶/塑料/涂料加香' },
  ],
  paper_products: [
    { label: '婴儿手口', value: 'baby_hand_mouth', description: '婴儿手口纸巾/湿巾/卫生巾' },
    { label: '女性经期', value: 'female_menstruation', description: '女性经期纸巾/湿巾/卫生巾' },
    { label: '旅行便携', value: 'travel_portable', description: '旅行便携纸巾/湿巾/卫生巾' },
  ],
  shoe_deodorant: [
    { label: '运动鞋汗味', value: 'sneakers_sweat_odor', description: '运动鞋汗味鞋用除臭剂' },
    { label: '皮鞋闷味', value: 'leather_shoes_stuffy', description: '皮鞋闷味鞋用除臭剂' },
    { label: '鞋柜整体除味', value: 'shoe_cabinet_overall_deodorize', description: '鞋柜整体除味鞋用除臭剂' },
  ],
  shoe_insoles: [
    { label: '防臭长效', value: 'anti_odor_long_last', description: '防臭长效鞋垫香精' },
    { label: '军训/军旅', value: 'military_training_service', description: '军训/军旅鞋垫香精' },
    { label: '冬季保暖香型', value: 'winter_warm_fragrance', description: '冬季保暖香型鞋垫香精' },
  ],
};



// 香调类型选项
export const fragranceTypeOptions = [
  { label: '花香调', value: 'floral', description: '以花朵香气为主' },
  { label: '果香调', value: 'fruity', description: '以水果香气为主' },
  { label: '木质调', value: 'woody', description: '以木材香气为主' },
  { label: '东方调', value: 'oriental', description: '以香料和树脂为主' },
  { label: '海洋调', value: 'marine', description: '以海洋清新为主' },
  { label: '柑橘调', value: 'citrus', description: '以柑橘类水果为主' },
  { label: '绿叶调', value: 'green', description: '以植物绿叶为主' },
  { label: '皮革调', value: 'leather', description: '以皮革香气为主' },
  { label: '美食调', value: 'gourmand', description: '以美食香气为主' },
  { label: '混合调', value: 'mixed', description: '多种香调混合' },
];

// 香气特点选项
export const fragranceCharacteristicsOptions = [
  { label: '前调', value: 'top_notes', description: '香水最初闻到的香气' },
  { label: '中调', value: 'middle_notes', description: '香水的主体香气' },
  { label: '后调', value: 'base_notes', description: '香水的基调香气' },
  { label: '前中后', value: 'all_notes', description: '完整的香调层次' },
];

// 颜色需求选项（改为单选）
export const colorRequirementOptions = [
  { label: '有颜色', value: 'colored', description: '产品有颜色要求' },
  { label: '无色透明', value: 'colorless', description: '产品无色透明' },
];

// 原料要求选项
export const rawMaterialRequirementOptions = [
  { label: '纯天然', value: 'natural', description: '要求使用天然原料' },
  { label: '有机认证', value: 'organic', description: '要求有机认证原料' },
  { label: 'Vegan', value: 'vegan', description: '要求Vegan认证原料' },
  { label: 'Halal', value: 'halal', description: '要求Halal认证原料' },
  { label: '无动物测试', value: 'cruelty_free', description: '要求无动物测试' },
  { label: '无防腐剂', value: 'preservative_free', description: '要求无防腐剂' },
  { label: '无乙苯及其衍生物', value: 'fragrance_free', description: '要求无乙苯及其衍生物' },
  { label: '无酒精', value: 'alcohol_free', description: '要求无酒精' },
];

// 法规要求选项
export const regulatoryRequirementOptions = [
  { label: '中国', value: 'china', description: '符合中国法规要求' },
  { label: '欧盟+CMR', value: 'eu_cmr', description: '符合欧盟+CMR法规' },
  { label: '美国', value: 'usa', description: '符合美国法规要求' },
  { label: '澳大利亚', value: 'australia', description: '符合澳大利亚法规' },
  { label: '新西兰', value: 'new_zealand', description: '符合新西兰法规' },
  { label: '菲律宾', value: 'philippines', description: '符合菲律宾法规' },
  { label: '日本', value: 'japan', description: '符合日本法规要求' },
  { label: '韩国', value: 'korea', description: '符合韩国法规要求' },
  { label: '东南亚', value: 'southeast_asia', description: '符合东南亚法规' },
  { label: '全球通用', value: 'global', description: '符合全球主要市场法规' },
];

// 仿香或创香选项
export const fragranceTypeOptions2 = [
  { label: '仿香', value: 'imitation', description: '仿制现有香水' },
  { label: '创香', value: 'original', description: '原创香水设计' },
  { label: '改良香', value: 'improved', description: '在现有基础上改良' },
];

// 小样规格选项
export const sampleSpecificationOptions = [
  { label: '5g', value: '5g', description: '5克小样' },
  { label: '10g', value: '10g', description: '10克小样' },
  { label: '30g', value: '30g', description: '30克小样' },
  { label: '50g', value: '50g', description: '50克小样' },
  { label: '100g', value: '100g', description: '100克小样' },
  { label: '200g', value: '200g', description: '200克小样' },
  { label: '500g', value: '500g', description: '500克小样' },
];

// 目标市场选项
export const targetMarketOptions = [
  { label: '女性市场', value: 'female', description: '主要面向女性消费者' },
  { label: '男性市场', value: 'male', description: '主要面向男性消费者' },
  { label: '中性市场', value: 'unisex', description: '男女通用市场' },
  { label: '年轻群体', value: 'young', description: '18-35岁年轻群体' },
  { label: '成熟群体', value: 'mature', description: '35岁以上成熟群体' },
  { label: '高端市场', value: 'luxury', description: '高端奢侈品市场' },
  { label: '大众市场', value: 'mass', description: '大众消费市场' },
  { label: '专业市场', value: 'professional', description: '专业香水爱好者' },
];

// 特殊要求选项
export const requirementsOptions = [
  { label: '持久度要求', value: 'longevity', description: '要求香水持久度' },
  { label: '扩散度要求', value: 'sillage', description: '要求香水扩散度' },
  { label: '季节性要求', value: 'seasonal', description: '针对特定季节设计' },
  { label: '包装要求', value: 'packaging', description: '特殊包装设计需求' },
  { label: '成本控制', value: 'cost', description: '严格控制成本' },
  { label: '环保要求', value: 'eco', description: '环保材料要求' },
  { label: '过敏原控制', value: 'allergen', description: '控制过敏原成分' },
  { label: '有机认证', value: 'organic', description: '需要有机认证' },
];

// 反馈类型选项
export const feedbackTypeOptions = [
  { label: '产品反馈', value: 'product', description: '关于产品本身的反馈' },
  { label: '服务反馈', value: 'service', description: '关于客户服务的反馈' },
  { label: '建议意见', value: 'suggestion', description: '改进建议和意见' },
  { label: '投诉问题', value: 'complaint', description: '投诉和问题反馈' },
  { label: '功能需求', value: 'feature', description: '新功能需求' },
  { label: '使用体验', value: 'experience', description: '使用体验分享' },
];

// 满意度调查选项
export const satisfactionOptions = [
  { label: '香味持久度', value: 'longevity', description: '香水在皮肤上的持续时间' },
  { label: '香味扩散度', value: 'sillage', description: '香水在空气中的扩散范围' },
  { label: '包装设计', value: 'packaging', description: '产品包装的美观和实用性' },
  { label: '价格合理性', value: 'price', description: '产品价格的合理性' },
  { label: '客户服务', value: 'service', description: '客户服务的质量' },
  { label: '整体体验', value: 'experience', description: '整体使用体验' },
  { label: '产品创新性', value: 'innovation', description: '产品的创新程度' },
  { label: '品牌形象', value: 'brand', description: '品牌形象的满意度' },
];

// 项目状态选项
export const projectStatusOptions = [
  { label: '需求收集', value: 'requirements', description: '正在收集项目需求' },
  { label: '方案设计', value: 'design', description: '正在设计香水方案' },
  { label: '样品制作', value: 'sampling', description: '正在制作香水样品' },
  { label: '测试评估', value: 'testing', description: '正在进行测试评估' },
  { label: '客户反馈', value: 'feedback', description: '等待客户反馈' },
  { label: '方案调整', value: 'adjustment', description: '根据反馈调整方案' },
  { label: '最终确认', value: 'confirmation', description: '等待最终确认' },
  { label: '项目完成', value: 'completed', description: '项目已完成' },
];

// 预算范围选项
export const budgetRangeOptions = [
  { label: '低预算 (< 10万)', value: 'low', description: '10万元以下' },
  { label: '中预算 (10-50万)', value: 'medium', description: '10-50万元' },
  { label: '高预算 (50-100万)', value: 'high', description: '50-100万元' },
  { label: '豪华预算 (> 100万)', value: 'luxury', description: '100万元以上' },
];

// 项目规模选项
export const projectScaleOptions = [
  { label: '小型项目', value: 'small', description: '1-3个月完成' },
  { label: '中型项目', value: 'medium', description: '3-6个月完成' },
  { label: '大型项目', value: 'large', description: '6-12个月完成' },
  { label: '超大型项目', value: 'xlarge', description: '12个月以上' },
];

// 香调层次选项
export const noteLayerOptions = [
  { label: '前调 (Top Notes)', value: 'top', description: '香水最初闻到的香气' },
  { label: '中调 (Middle Notes)', value: 'middle', description: '香水的主体香气' },
  { label: '后调 (Base Notes)', value: 'base', description: '香水的基调香气' },
];

// 评分维度选项
export const ratingDimensionOptions = [
  { label: '整体评分', value: 'overall', description: '对香水的整体印象' },
  { label: '香味评分', value: 'fragrance', description: '香味的质量和表现' },
  { label: '包装评分', value: 'packaging', description: '包装设计和质量' },
  { label: '价格评分', value: 'price', description: '价格合理性' },
  { label: '持久度', value: 'longevity', description: '香水持久度' },
  { label: '扩散度', value: 'sillage', description: '香水扩散度' },
  { label: '复杂度', value: 'complexity', description: '香调层次复杂度' },
  { label: '独特性', value: 'uniqueness', description: '香水的独特性' },
];

// 导出所有选项的映射
export const formOptions = {
  productCategory: productCategoryOptions,
  productSubCategory: productSubCategoryOptions,
  applicationScenario: applicationScenarioOptions,
  fragranceType: fragranceTypeOptions,
  fragranceCharacteristics: fragranceCharacteristicsOptions,
  colorRequirement: colorRequirementOptions,
  rawMaterialRequirement: rawMaterialRequirementOptions,
  regulatoryRequirement: regulatoryRequirementOptions,
  fragranceType2: fragranceTypeOptions2,
  sampleSpecification: sampleSpecificationOptions,
  targetMarket: targetMarketOptions,
  requirements: requirementsOptions,
  feedbackType: feedbackTypeOptions,
  satisfaction: satisfactionOptions,
  projectStatus: projectStatusOptions,
  budgetRange: budgetRangeOptions,
  projectScale: projectScaleOptions,
  noteLayer: noteLayerOptions,
  ratingDimension: ratingDimensionOptions,
};

export default formOptions;
