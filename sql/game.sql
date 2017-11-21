set names utf8;
drop database if exists kaggle;
create database kaggle CHARSET=UTF8;
use kaggle;

#用户表
create table kaggle_users(
  uid int primary key auto_increment,   #用户id , 主键 , 自增
  uname varchar(32) default '',                    #用户名 ,
  upwd varchar(32) default '',			#用户密码
  email varchar(64) default '',			#用户邮箱
  phone varchar(16) default '',			#用户手机号码
  user_name varchar(32) default '',		#用户真实姓名
  user_id varchar(20) default '',          #用户身份证号码
  gender boolean ,				#用户性别,1为男,0为女
  avatar varchar(256) default 'img/avatar/default_avatar.png' 		#用户头像
);


#插入测试数据(用户表)
insert into kaggle_users(uname,upwd,email,phone,user_name,user_id,gender) values("daxu","123456","xuxu@terna.com","15813213511","赵大旭",440402198304109236,1);


#游戏表
create table kaggle_games(
  gid int primary key auto_increment,   #游戏id , 主键 , 自增
  gname varchar(32) default '',         #游戏名 ,
  abs varchar(16) default '',		#游戏简介
  intr varchar(512) default '',		#游戏介绍
  price decimal,			#游戏价格
  market bigint,			#上架时间
  sold int,				#销售量
  praise int,				#好评量
  down int				#下载量

);

#插入测试数据(游戏表)
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down) 
values("恶灵附身2","我要捡垃圾!","《恶灵附身2》是由Tango Gameworks制作、Bethesda发行的一款恐怖动作冒险游戏，是生化危机之父——三上真司打造的《恶灵附身》的续作。","398.20","1508758463325","999","666","998");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("茶杯头","第一关怎么过!","《茶杯头》这款游戏中我们可以看到浓浓的上世纪30年代的卡通风格，在这款复古的横版过关游戏中玩家可以选择扮演茶杯头Cuphead或者Mugman，可以选择单人模式或者合作完成，在这款游戏中玩家将往返于奇异的世界，获得新的武器，习得强力的超级移动能力，同时也将在任务中发现隐藏的秘密。","99","150875846366","99999","99998","3999");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("中土世界：战争之影","我是兽人管理员!","《中土世界：战争之影》是由华纳发行，Monolith打造的获奖游戏《中土世界：暗影魔多》续作。","299","150875836366","19823","16750","19800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("NBA 2K17","买bug,送游戏!","《NBA 2K17》是一款2K Sports制作、2K Games发行的体育竞技游戏。","299","150875736366","17823","15750","13800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("漫威VS卡普空无限","花式炒冷饭!","《漫画英雄VS卡普空：无限》是由CAPCOM制作的格斗混战游戏。本作为大家带来各式单人模式以及丰富的多人模式游戏体验。除了单人模式、训练、任务，一个视觉惊人令人身临其境的故事模式将两个世界融合在一起，当然还有一个强大的幕后坏蛋。","299","150875636360","19823","19750","19800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("海贼王：无尽世界R","海贼王的男人!","本作是之前《海贼王：无尽航海SP》的续作，故事以路飞等人修行两年后的世界观为基础，展开了一段全新的冒险。另外，本次作品支持4人联机共同冒险。","199","150875706366","7823","5750","3800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("煮糊了","分手厨房,名不虚传!","《煮糊了》是由独立游戏开发商Ghost Town Games制作、Team17 Digital Ltd发行的一款动作冒险游戏。游戏支持最多四人同时游玩，玩家会在各种各样的厨房中制作各种料理。本游戏还有一大特点是两个玩家可以同时使用一个手柄进行游戏，这样一来只需要两个手柄就可以进行四人同时游戏。","111","150875846366","99998","99997","18996");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("生化危机7","我的手能挡电锯!","《生化危机7》是卡普空制作的动作游戏《生化危机》系列的第七部。本作的故事主要发生在美国南部的一间被废置的农舍，这里腐烂的墙身渗透着一股恐怖及孤独的氛围。《生化危机7》的到来标志着全新的恐怖求生体验，玩家的视觉切换为更骇人的虚拟实境“隔离视觉”模式。有赖RE工程部的努力，恐怖的写实感提升至一个全新的境界，玩家并没有任何退路可选，这一切让会你进入恐怖求生的新世界。","322","150875846266","27823","25750","23800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("魔性建筑","啊,我的手!","作为睡神飞工作室2017年系列游戏的开胃前菜，《魔性建筑工》的上线更多的是为去年做些总结，去年我做的游戏严重受限于成本原因，所以都非常简陋，要么手残要么烧脑，不是我要故意做成这样折磨大家，最本质的原因还是因为那样做起来更便宜，没钱的我也能做得出来。今后的游戏基本没有纯烧脑的了，尽量会向休闲对战的方向靠，另外两款在做的游戏由于需要实时联网对战，所以技术要求更高，成本和周期也会更长，大家还需要多等等，但肯定是值得等的，绝对好玩，不好玩你叫一面包车人来打我啊~~~","22","150875846266","7823","5750","3800");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("穿越火线","我要火麒麟!","《穿越火线》（Cross Fire，简称CF）是一款第一人称射击游戏的网络游戏，玩家扮演控制一名持枪战斗人员，与其他玩家进行械斗。本游戏由韩国Smile Gate开发，在韩国由Neowiz发行，其他国家的发行商需要与Neowiz来和开发商进行商议。该游戏在中国大陆由腾讯公司运营。","12","150875846266","7223","5250","3200");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("DOTA2","奖金最高的游戏!","《刀塔2》中每个英雄都有不同的攻击动作。在玩家发出攻击指令后，英雄的攻击伤害到达目标身上会有一定的延迟，近程英雄需要做出攻击的姿势，远程英雄在这之后还需要他的攻击弹道打到目标身上。这延迟的时间就是攻击点","12","150875846066","8223","6250","4200");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("龙之轰炸","炸你丫的!","《龙之轰炸》是由Ankama出品的一款益智休闲游戏，玩家需要操作巨龙的后裔小龙大闹人间，用自己小小的火焰弹轰炸一切。游戏的玩法致敬了《愤怒的小鸟》的弹弓设计，玩家需要通过拉动弹弓的手法来操作小龙移动。","18","150875845066","223","250","200");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("ICEY","艾希不是弓箭手吗!","《ICEY》是一款2D横版动作游戏，跟随旁白的指示，你将会通过ICEY的眼睛去看，去战斗并发掘在游戏中世界的真相。但其实，这也根本不是一款2D横版动作游戏，你也不会通过ICEY的眼睛去看，你也不会去探寻这个世界的真相。","12","150875844066","1223","1250","1200");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("英雄联盟","来啊,开黑啊!","《英雄联盟》是由美国Riot Games公司开发的3D竞技场战网游戏，其主创团队是由实力强劲的魔兽争霸系列游戏多人即时对战自定义地图（DOTA-Allstars）的开发团队，以及动视暴雪等著名游戏公司的美术、程序、策划人员组成，将DOTA的玩法从对战平台延伸到网络游戏世界。除了DOTA的游戏节奏、即时战略、团队作战外，《英雄联盟》拥有特色的英雄、自动匹配的战网平台，包括天赋树、召唤师系统、符文等元素，让玩家感受全新的英雄对战。","10","150875844066","11223","11250","11200");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("我的世界","这是别人的世界!","《我的世界手游》是一款由Mojang AB开发、国内由网易游戏代理的3D第一人称沙盒游戏。玩家可以在三维空间中自由地创造和破坏不同种类的方块，用想象力建立并探索一个专属于你的世界。游戏画风独特，主打积木马赛克风。游戏里玩家可以在单人或多人模式中通过摧毁或创造方块以创造精妙绝伦的建筑物和艺术，或者通过收集物品探索地图来完成游戏的主线任务，通过自己创造的作品来体验上帝般的感觉。《我的世界》能将你的想象力全都化为现实！","11","150875843066","10023","10030","10020");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("守望先锋","我半藏贼溜!","《守望先锋》暴雪首款团队射击游戏，国服压力测试将于5月5日至5月9日期间展开，所有玩家免费畅玩，现在预购，更可从5月3日起优先进入测试。超过20位个性鲜明的英雄将在世界各地的史诗级战场上激烈厮杀，加入《守望先锋》为未来而战，这个世界需要更多英雄！","198","150875843166","14023","14007","14020");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("绝地求生大逃杀","大吉大利,今晚吃鸡!","《绝地求生大逃杀》(PLAYERUNKNOWN’S BATTLEGROUNDS)是大逃杀类型的游戏，每一局游戏将有100名玩家参与，他们将被投放在绝地岛(battlegrounds)的上空，游戏开始跳伞时所有人都一无所有。","110","150875846366","99988","99987","99986");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("跑跑卡丁车","快速集气时代!","跑跑卡丁车 是韩国NEXON公司出品的一款休闲类赛车竞速游戏.与其他竞速游戏不同,跑跑卡丁车首次在游戏中添加了漂移键.游戏以 全民漂移 为宣传词,而角色则使用了泡泡堂中的人物,角色可以驾驶卡丁车在沙漠、城镇、森林、冰河、矿山、墓地等多种主题的赛道上进行游戏.除中国、韩国外,在泰国、越南等国家也有专门的服务器.","11","150875842066","11023","10130","10010");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("万象物语","买cg,送游戏!","《万象物语》是由龙渊网络与雷亚游戏联合研发的大型角色扮演游戏，故事讲述远古大地由创世巨龙「斯多利卡」所掌控，他创造了永夜国度以及永生者，永生者们必须遵从「斯多利卡」的安排而生存，直到名为「凡泰缇」的永生者觉醒决定反身对抗，最终让太阳得到释放，世界的元素开始有了循环，所有永生者都重新获得了所有生命都该有的礼物：衰老与死亡。","22","150875832066","11523","10530","5010");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("南方公园：完整破碎","这游戏有毒!","《南方公园：完整破碎》是2014年备受好评的《南方公园：真理之杖》的续作，本作将会把玩家带入犯罪猖獗的南方公园，玩家将扮演全新的小屁孩来到南方公园和斯坦、凯尔、肯尼还有卡特曼展开一段荒谬离谱的爆笑旅程。","52","150875832066","11523","10530","5010");
###
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("看门狗2","想犯罪,先学编程!","《看门狗2》是一款由Ubisoft制作并发行的动作冒险游戏。官方表示，为了保证新作的质量，他们希望《看门狗》的续作能够得到像《刺客信条2》那样的精雕细琢，让作品能够像前作那样充满新意时再开始续作的开发。同时，他们还保证，《看门狗2》将会继承前作的一切优点，系统自由度更高，让玩家可以用自己想要尝试的方式探索世界，具体表现为游戏的叙事和角色部分减少，创造元素更丰富，给玩家的选择性也会更多","152","150875832066","11523","10530","5010");
insert into kaggle_games(gname,abs,intr,price,market,sold,praise,down)
values("世界征服者4","看什么看,干你丫的!","《世界征服者4》是由EasyTech出品的一款策略游戏，是《世界征服者3》的续作。战争即将开始，率领你的军队去征服世界。","12","150875832066","11512","10500","7010");














#用户的游戏表
create table users_games(
  kid int primary key auto_increment,   #id , 主键 , 自增
  user_id int,				#用户的id
  game_id int				#游戏的id
);

#插入测试数据(用户的游戏表)
#insert into users_games values(null,"1","1");


#用户的收藏夹表
create table users_collect(
  cid int primary key auto_increment,   #id , 主键 , 自增
  user_id int,				#用户的id
  game_id int				#游戏的id
);

#插入测试数据(用户的游戏表)
#insert into users_collect values(null,"1","1");


#标签表
create table label(
  lid int primary key auto_increment,	#id
  lname varchar(8) default ''		#标签名
);
insert into label(lname) values("RPG");#1
insert into label(lname) values("射击");#2
insert into label(lname) values("moba");#3
insert into label(lname) values("卡牌");#4
insert into label(lname) values("益智");#5
insert into label(lname) values("恐怖");#6
insert into label(lname) values("动作");#7
insert into label(lname) values("冒险");#8
insert into label(lname) values("体育");#9
insert into label(lname) values("竞速");#10





#游戏的标签表
create table game_label(
  glid int primary key auto_increment,	#id
  game_id int,				#游戏id
  label_id int				#标签id
);
#插入测试数据(每个游戏写3~4个)
insert into game_label(game_id,label_id) values(1,1);
insert into game_label(game_id,label_id) values(1,2);
insert into game_label(game_id,label_id) values(1,5);
insert into game_label(game_id,label_id) values(1,6);
#####
insert into game_label(game_id,label_id) values(2,2);
insert into game_label(game_id,label_id) values(2,6);
insert into game_label(game_id,label_id) values(2,5);
#####
insert into game_label(game_id,label_id) values(3,1);
insert into game_label(game_id,label_id) values(3,7);
insert into game_label(game_id,label_id) values(3,8);
#####
insert into game_label(game_id,label_id) values(4,5);
insert into game_label(game_id,label_id) values(4,6);
insert into game_label(game_id,label_id) values(4,9);
#####
insert into game_label(game_id,label_id) values(5,7);
insert into game_label(game_id,label_id) values(5,2);
insert into game_label(game_id,label_id) values(5,9);
#####
insert into game_label(game_id,label_id) values(6,8);
insert into game_label(game_id,label_id) values(6,6);
insert into game_label(game_id,label_id) values(6,10);
#####
insert into game_label(game_id,label_id) values(7,6);
insert into game_label(game_id,label_id) values(7,7);
insert into game_label(game_id,label_id) values(7,8);
#####
insert into game_label(game_id,label_id) values(8,5);
insert into game_label(game_id,label_id) values(8,1);
insert into game_label(game_id,label_id) values(8,8);
insert into game_label(game_id,label_id) values(8,6);
#####
insert into game_label(game_id,label_id) values(9,5);
insert into game_label(game_id,label_id) values(9,6);
insert into game_label(game_id,label_id) values(9,7);
#####
insert into game_label(game_id,label_id) values(10,2);
insert into game_label(game_id,label_id) values(10,6);
insert into game_label(game_id,label_id) values(10,5);
#####
insert into game_label(game_id,label_id) values(11,3);
insert into game_label(game_id,label_id) values(11,5);
insert into game_label(game_id,label_id) values(11,7);
insert into game_label(game_id,label_id) values(11,8);
#####
insert into game_label(game_id,label_id) values(12,2);
insert into game_label(game_id,label_id) values(12,5);
insert into game_label(game_id,label_id) values(12,8);
#####
insert into game_label(game_id,label_id) values(13,1);
insert into game_label(game_id,label_id) values(13,8);
insert into game_label(game_id,label_id) values(13,2);
#####
insert into game_label(game_id,label_id) values(14,3);
insert into game_label(game_id,label_id) values(14,5);
insert into game_label(game_id,label_id) values(14,7);
#####
insert into game_label(game_id,label_id) values(15,5);
insert into game_label(game_id,label_id) values(15,6);
insert into game_label(game_id,label_id) values(15,8);
#####
insert into game_label(game_id,label_id) values(16,2);
insert into game_label(game_id,label_id) values(16,3);
insert into game_label(game_id,label_id) values(16,9);
#####
insert into game_label(game_id,label_id) values(17,2);
insert into game_label(game_id,label_id) values(17,7);
insert into game_label(game_id,label_id) values(17,8);
#####
insert into game_label(game_id,label_id) values(18,5);
insert into game_label(game_id,label_id) values(18,9);
insert into game_label(game_id,label_id) values(18,10);
#####
insert into game_label(game_id,label_id) values(19,5);
insert into game_label(game_id,label_id) values(19,8);
insert into game_label(game_id,label_id) values(19,1);
#####
insert into game_label(game_id,label_id) values(20,5);
insert into game_label(game_id,label_id) values(20,6);
insert into game_label(game_id,label_id) values(20,7);
#####
insert into game_label(game_id,label_id) values(21,5);
insert into game_label(game_id,label_id) values(21,6);
insert into game_label(game_id,label_id) values(21,7);
#####
insert into game_label(game_id,label_id) values(22,3);
insert into game_label(game_id,label_id) values(22,2);
insert into game_label(game_id,label_id) values(22,4);



#平台表
create table terrace(
  tid int primary key auto_increment,	#id
  tname varchar(8)			#平台名
);

#插入测试数据(平台表)
insert into terrace values(null,"PC");  #1
insert into terrace values(null,"PS4"); #2
insert into terrace values(null,"Xbox");#3
insert into terrace values(null,"Android");#4
insert into terrace values(null,"IOS"); #5





#游戏的平台表
create table game_terrace(
  gtid int primary key auto_increment,	#id
  game_id int,				#游戏id
  terrace_id int			#平台id
);
#插入测试数据
insert into game_terrace(game_id,terrace_id) values(1,1);
insert into game_terrace(game_id,terrace_id) values(1,2);
#
insert into game_terrace(game_id,terrace_id) values(2,1);
###
insert into game_terrace(game_id,terrace_id) values(3,1);
insert into game_terrace(game_id,terrace_id) values(3,2);
###
insert into game_terrace(game_id,terrace_id) values(4,1);
###
insert into game_terrace(game_id,terrace_id) values(5,2);
###
insert into game_terrace(game_id,terrace_id) values(6,2);
###
insert into game_terrace(game_id,terrace_id) values(7,1);
###
insert into game_terrace(game_id,terrace_id) values(8,1);
insert into game_terrace(game_id,terrace_id) values(8,2);
###
insert into game_terrace(game_id,terrace_id) values(9,4);
insert into game_terrace(game_id,terrace_id) values(9,5);
###
insert into game_terrace(game_id,terrace_id) values(10,1);
###
insert into game_terrace(game_id,terrace_id) values(11,1);
###
insert into game_terrace(game_id,terrace_id) values(12,4);
insert into game_terrace(game_id,terrace_id) values(12,5);
###
insert into game_terrace(game_id,terrace_id) values(13,4);
insert into game_terrace(game_id,terrace_id) values(13,5);
###
insert into game_terrace(game_id,terrace_id) values(14,1);
###
insert into game_terrace(game_id,terrace_id) values(15,4);
insert into game_terrace(game_id,terrace_id) values(15,5);
###
insert into game_terrace(game_id,terrace_id) values(16,1);
###
insert into game_terrace(game_id,terrace_id) values(17,1);
###
insert into game_terrace(game_id,terrace_id) values(18,1);
###
insert into game_terrace(game_id,terrace_id) values(19,4);
insert into game_terrace(game_id,terrace_id) values(19,5);
###
insert into game_terrace(game_id,terrace_id) values(20,1);
insert into game_terrace(game_id,terrace_id) values(20,2);
insert into game_terrace(game_id,terrace_id) values(20,3);
###
insert into game_terrace(game_id,terrace_id) values(21,1);
insert into game_terrace(game_id,terrace_id) values(21,2);
###
insert into game_terrace(game_id,terrace_id) values(22,4);
insert into game_terrace(game_id,terrace_id) values(22,5);








#游戏配置表
create table spec(
  sid int primary key auto_increment,	#id
  game_id int,				#游戏ID
  cpu varchar(128) default '',		#cpu
  graphics varchar(128) default '',	#显卡
  memory varchar(16) default '',	#内存
  hardpan varchar(16) default '',	#硬盘
  ishigh boolean			#是高配
);
#插入测试数据
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh) 
values(1,"Intel Core i5 2400K / AMD FX 8320 或更好","NVIDIA GeForce GTX 660 / AMD Radeon HD 7970 或更好","8 GB","40 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh) 
values(1,"Intel Core i7 4770 / AMD Ryzen 5 1600X 或更好","NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 8GB 或更好","16 GB","40 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(2,"Intel Core i3-530 / AMD Phenom II X4 805 或更好","NVIDIA GeForce GT 430 / ATI Radeon HD 6450","2 GB","2.3 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(2,"Intel Core i5-4430 / AMD FX-8370 或更好","NVIDIA GeForce GTX 770 / ATI Radeon R9 270","4 GB","2.3 GB","1");
###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(3,"Intel Core i5 2300 2.8GHz / AMD FX 4350 4.2GHz","NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 2GB显存","6 GB","70 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(3,"Intel Core i7 3770 3.4 GHz / AMD FX 8350 4.0GHz","NVIDIA GeForce GTX 970 / AMD Radeon RX 480 4GB显存","12 GB","70 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(4,"Intel Core i3-530 / AMD Phenom II X4 805 或更好","NVIDIA GeForce GT 430 / ATI Radeon HD 6450","4 GB","70 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(4,"Intel Core i5-4430 / AMD FX-8370 或更好","NVIDIA GeForce GTX 770 / ATI Radeon R9 270","12 GB","70 GB","1");


###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(5,"Intel Core i3 4160 3.6GHz","NVIDIA GeForce GTX 480 / 570 / 670或更好","6 GB","59 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(5,"Intel Core i5 4690K 3.5GHz / AMD FX 9370","NVIDIA GeForce GTX 960 / AMD Radeon R7 370","8 GB","70 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(7,"双核 2.4 GHz处理器","NVIDIA GeForce 8800 GT / AMD Radeon HD 6850","2 GB","2 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(7,"Intel Core i5 4690K 3.5GHz / AMD FX 9370","NVIDIA GeForce GTX 960 / AMD Radeon R7 370","4 GB","2 GB","1");


###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(8,"Intel Core i5-4460 2.70GHz / AMD FX-6300","NVIDIA GeForce GTX 760 / AMD Radeon R7 260x","8 GB","32 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(8,"Intel Core i5 4690K 3.5GHz / AMD FX 9370","NVIDIA GeForce GTX 960 / AMD Radeon R7 370","8 GB","32 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(10,"Intel Pentium 4","NVIDIA GeForce FX5200 / ATI Radeon 9系列","1 GB","5 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(10,"Intel Core 2 Duo / AMD Athlon 64 x2","NVIDIA GeForce 7300GT / ATI X1300","2 GB","5 GB","1");


###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(11,"Intel Core2 Duo E4600 @ 2.40GHz","GeForce 8800 GT Radeon HD 3870","2 GB","11 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(11,"Intel Core 2 Duo / AMD Athlon 64 x2","NVIDIA GeForce 7300GT / ATI X1300","4 GB","11 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(14,"Intel(R) P4/PE双核","NVIDIA GeForce 6600 （关闭特效）","2 GB","11 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(14,"Intel(R) Core(TM)2 Duo CPU","NVIDIA GeForce GT240 / ATI HD4670 （开特效）","4 GB","11 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(16,"Intel Core i3 或 AMD Phenom X3 865","Nvidia GeForce GTX 460, ATI Radeon HD 4850, 或 Intel HD Graphics 4400","2 GB","5 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(16,"Intel Core i5 或 AMD Phenom II X3, 2.8 GHz","Nvidia GeForce GTX 660 或ATI Radeon HD 7950","4 GB","5 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(17,"Intel Core i3-4340 / AMD FX-6300","nVidia GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB","6 GB","30 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(17,"Intel Core i5 或 AMD Phenom II X3, 2.8 GHz","Nvidia GeForce GTX 1080","12 GB","30 GB","1");


###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(18,"Pentium3 1.0GHz以上","Nvidia系列Geforce2 MX 以上","1 GB","3 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(18,"Pentium4 1.8GHz以上","Nvidia系列Geforce FX5200 以上","2 GB","3 GB","1");


###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(20,"Intel Core i5 2400 / AMD FX 4320 or equivalent","NVIDIA GeForce GTX 560Ti / AMD Radeon HD 7850（2GB显存或更高）","6 GB","30 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(20,"Intel Core i5-4690K / AMD FX-8350","NVIDIA GeForce GTX 670 / AMD Radeon R9 280X （或更高）","16 GB","30 GB","1");

###
#低
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(21,"Intel Core i5 2400S / AMD FX-6120","NVIDIA GeForce GTX 660 / AMD Radeon HD 7870","6 GB","50 GB","0");
#高
insert into spec(game_id,cpu,graphics,memory,hardpan,ishigh)
values(21,"Intel Core i5 3470 / AMD FX-8120","NVIDIA GeForce GTX 780、970、1060 / AMD Radeon R9 290","8 GB","50 GB","1");










#游戏图片表
create table game_pic(
  pid int primary key auto_increment,	#id
  game_id int,				#游戏id
  #sm varchar(258),			#小图路径
  #md varchar(258)			#中图路径
  pic varchar(258)			#图片路径

);
#插入测试数据
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/1.jpg");
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/2.jpg");
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/3.jpg");
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/4.jpg");
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/5.jpg");
insert into game_pic(game_id,pic) values(1,"img/data/TEW2/6.jpg");
###
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/1.jpg");
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/2.jpg");
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/3.jpg");
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/4.jpg");
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/5.jpg");
insert into game_pic(game_id,pic) values(2,"img/data/Cuphead/6.jpg");
###
insert into game_pic(game_id,pic) values(3,"img/data/MESOW/1.jpg");
insert into game_pic(game_id,pic) values(3,"img/data/MESOW/2.jpg");
insert into game_pic(game_id,pic) values(3,"img/data/MESOW/3.jpg");
insert into game_pic(game_id,pic) values(3,"img/data/MESOW/4.jpg");
insert into game_pic(game_id,pic) values(3,"img/data/MESOW/5.jpg");
###
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/1.jpg");
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/2.jpg");
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/3.jpg");
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/4.jpg");
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/5.jpg");
insert into game_pic(game_id,pic) values(4,"img/data/NBA2K17/6.jpg");
###
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/1.jpg");
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/2.jpg");
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/3.jpg");
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/4.jpg");
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/5.jpg");
insert into game_pic(game_id,pic) values(5,"img/data/MVCI/6.jpg");
###
insert into game_pic(game_id,pic) values(6,"img/data/OPUWR/1.jpg");
insert into game_pic(game_id,pic) values(6,"img/data/OPUWR/2.jpg");
insert into game_pic(game_id,pic) values(6,"img/data/OPUWR/3.jpg");
insert into game_pic(game_id,pic) values(6,"img/data/OPUWR/4.jpg");
insert into game_pic(game_id,pic) values(6,"img/data/OPUWR/5.jpg");
###
insert into game_pic(game_id,pic) values(7,"img/data/Overcooked/1.jpg");
insert into game_pic(game_id,pic) values(7,"img/data/Overcooked/2.jpg");
insert into game_pic(game_id,pic) values(7,"img/data/Overcooked/3.jpg");
insert into game_pic(game_id,pic) values(7,"img/data/Overcooked/4.jpg");
insert into game_pic(game_id,pic) values(7,"img/data/Overcooked/5.jpg");
###
insert into game_pic(game_id,pic) values(8,"img/data/RE7B/1.jpg");
insert into game_pic(game_id,pic) values(8,"img/data/RE7B/2.jpg");
insert into game_pic(game_id,pic) values(8,"img/data/RE7B/3.jpg");
insert into game_pic(game_id,pic) values(8,"img/data/RE7B/4.jpg");
insert into game_pic(game_id,pic) values(8,"img/data/RE78/5.jpg");
###
insert into game_pic(game_id,pic) values(9,"img/data/Builder-Duet/1.jpg");
insert into game_pic(game_id,pic) values(9,"img/data/Builder-Duet/2.jpg");
insert into game_pic(game_id,pic) values(9,"img/data/Builder-Duet/3.jpg");
insert into game_pic(game_id,pic) values(9,"img/data/Builder-Duet/4.jpg");
insert into game_pic(game_id,pic) values(9,"img/data/Builder-Duet/5.jpg");
###
insert into game_pic(game_id,pic) values(10,"img/data/CF/1.jpg");
insert into game_pic(game_id,pic) values(10,"img/data/CF/2.jpg");
insert into game_pic(game_id,pic) values(10,"img/data/CF/3.jpg");
insert into game_pic(game_id,pic) values(10,"img/data/CF/4.jpg");
insert into game_pic(game_id,pic) values(10,"img/data/CF/5.jpg");
insert into game_pic(game_id,pic) values(10,"img/data/CF/6.jpg");
###
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/1.jpg");
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/2.jpg");
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/3.jpg");
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/4.jpg");
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/5.jpg");
insert into game_pic(game_id,pic) values(11,"img/data/DOTA/6.jpg");
###
insert into game_pic(game_id,pic) values(12,"img/data/DragnBoom/1.jpg");
insert into game_pic(game_id,pic) values(12,"img/data/DragnBoom/2.jpg");
insert into game_pic(game_id,pic) values(12,"img/data/DragnBoom/3.jpg");
insert into game_pic(game_id,pic) values(12,"img/data/DragnBoom/4.jpg");
insert into game_pic(game_id,pic) values(12,"img/data/DragnBoom/5.jpg");
###
insert into game_pic(game_id,pic) values(13,"img/data/LCEY/1.jpg");
insert into game_pic(game_id,pic) values(13,"img/data/LCEY/2.jpg");
insert into game_pic(game_id,pic) values(13,"img/data/LCEY/3.jpg");
insert into game_pic(game_id,pic) values(13,"img/data/LCEY/4.jpg");
insert into game_pic(game_id,pic) values(13,"img/data/LCEY/5.jpg");
###
insert into game_pic(game_id,pic) values(14,"img/data/LOL/1.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/2.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/3.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/4.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/5.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/6.jpg");
insert into game_pic(game_id,pic) values(14,"img/data/LOL/7.jpg");
###
insert into game_pic(game_id,pic) values(15,"img/data/Minecraft/1.jpg");
insert into game_pic(game_id,pic) values(15,"img/data/Minecraft/2.jpg");
insert into game_pic(game_id,pic) values(15,"img/data/Minecraft/3.jpg");
insert into game_pic(game_id,pic) values(15,"img/data/Minecraft/4.jpg");
###
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/1.jpg");
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/2.jpg");
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/3.jpg");
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/4.jpg");
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/5.jpg");
insert into game_pic(game_id,pic) values(16,"img/data/Overwatch/6.jpg");
###
insert into game_pic(game_id,pic) values(17,"img/data/PKB/1.jpg");
insert into game_pic(game_id,pic) values(17,"img/data/PKB/2.jpg");
insert into game_pic(game_id,pic) values(17,"img/data/PKB/3.jpg");
insert into game_pic(game_id,pic) values(17,"img/data/PKB/4.jpg");
insert into game_pic(game_id,pic) values(17,"img/data/PKB/5.jpg");
insert into game_pic(game_id,pic) values(17,"img/data/PKB/6.jpg");
###
insert into game_pic(game_id,pic) values(18,"img/data/pp/1.jpg");
insert into game_pic(game_id,pic) values(18,"img/data/pp/2.jpg");
insert into game_pic(game_id,pic) values(18,"img/data/pp/3.jpg");
insert into game_pic(game_id,pic) values(18,"img/data/pp/4.jpg");
insert into game_pic(game_id,pic) values(18,"img/data/pp/5.jpg");
insert into game_pic(game_id,pic) values(18,"img/data/pp/6.jpg");
###
insert into game_pic(game_id,pic) values(19,"img/data/Sdorica/1.jpg");
insert into game_pic(game_id,pic) values(19,"img/data/Sdorica/2.jpg");
insert into game_pic(game_id,pic) values(19,"img/data/Sdorica/3.jpg");
insert into game_pic(game_id,pic) values(19,"img/data/Sdorica/4.jpg");
insert into game_pic(game_id,pic) values(19,"img/data/Sdorica/5.jpg");
###
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/1.jpg");
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/2.jpg");
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/3.jpg");
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/4.jpg");
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/5.jpg");
insert into game_pic(game_id,pic) values(20,"img/data/SPTF/6.jpg");
###
insert into game_pic(game_id,pic) values(21,"img/data/WD2/1.jpg");
insert into game_pic(game_id,pic) values(21,"img/data/WD2/2.jpg");
insert into game_pic(game_id,pic) values(21,"img/data/WD2/3.jpg");
insert into game_pic(game_id,pic) values(21,"img/data/WD2/4.jpg");
insert into game_pic(game_id,pic) values(21,"img/data/WD2/5.jpg");
insert into game_pic(game_id,pic) values(21,"img/data/WD2/6.jpg");
###
insert into game_pic(game_id,pic) values(22,"img/data/WC4/1.jpg");
insert into game_pic(game_id,pic) values(22,"img/data/WC4/2.jpg");
insert into game_pic(game_id,pic) values(22,"img/data/WC4/3.jpg");
insert into game_pic(game_id,pic) values(22,"img/data/WC4/4.jpg");





#游戏logo图表
create table game_logo(
  lid int primary key auto_increment,	#id
  game_id int,				#游戏id
  #sm varchar(258),			#小图路径
  #lg varchar(258)			#大图路径
  logo varchar(258)			#logo图路径

);
#插入测试数据
insert into game_logo(game_id,logo) values(1,"img/data/TEW2/logo.jpg");
#
insert into game_logo(game_id,logo) values(2,"img/data/Cuphead/logo.jpg");
#
insert into game_logo(game_id,logo) values(3,"img/data/MESOW/logo.jpg");
#
insert into game_logo(game_id,logo) values(4,"img/data/NBA2K17/logo.jpg");
#
insert into game_logo(game_id,logo) values(5,"img/data/MVCI/logo.jpg");
#
insert into game_logo(game_id,logo) values(6,"img/data/OPUWR/logo.jpg");
#
insert into game_logo(game_id,logo) values(7,"img/data/Overcooked/logo.jpg");
#
insert into game_logo(game_id,logo) values(8,"img/data/RE7B/logo.jpg");
#
insert into game_logo(game_id,logo) values(9,"img/data/Builder-Duet/logo.jpg");
#
insert into game_logo(game_id,logo) values(10,"img/data/CF/logo.jpg");
#
insert into game_logo(game_id,logo) values(11,"img/data/DOTA/logo.jpg");
#
insert into game_logo(game_id,logo) values(12,"img/data/DragnBoom/logo.jpg");
#
insert into game_logo(game_id,logo) values(13,"img/data/LCEY/logo.jpg");
#
insert into game_logo(game_id,logo) values(14,"img/data/LOL/logo.jpg");
#
insert into game_logo(game_id,logo) values(15,"img/data/Minecraft/logo.jpg");
#
insert into game_logo(game_id,logo) values(16,"img/data/Overwatch/logo.jpg");
#
insert into game_logo(game_id,logo) values(17,"img/data/PKB/logo.jpg");
#
insert into game_logo(game_id,logo) values(18,"img/data/pp/logo.jpg");
#
insert into game_logo(game_id,logo) values(19,"img/data/Sdorica/logo.jpg");
#
insert into game_logo(game_id,logo) values(20,"img/data/SPTF/logo.jpg");
#
insert into game_logo(game_id,logo) values(21,"img/data/WD2/logo.jpg");
#
insert into game_logo(game_id,logo) values(22,"img/data/WC4/logo.jpg");






#首页推荐表
create table index_hot(
  hid int primary key auto_increment,	#id
  game_id int,				#游戏id
  #game_name varchar(32),		#游戏名
  #abs varchar(16),			#简介
  pc_g	int default 0,			#pc游戏
  host	int default 0,			#主机游戏
  net	int default 0,			#网络游戏
  phone int default 0,			#手机游戏
  hot	int default 0,			#推荐游戏
  index_pic varchar(258) default '',	#(index页面)推荐用的图片
  shop_p varchar(258) default ''	#(shopmain页面)推荐用的图片
);

insert into index_hot(game_id,pc_g,host,net,phone,hot,index_pic,shop_p) values(2,1,0,0,0,1,"img/data/index/s1.jpg","img/data/index/l1.jpg");
insert into index_hot(game_id,pc_g,host,net,phone,hot,index_pic,shop_p) values(17,1,0,1,0,1,"img/data/index/s2.jpg","img/data/index/l2.jpg");
insert into index_hot(game_id,pc_g,host,net,phone,hot,index_pic,shop_p) values(7,1,0,0,0,1,"img/data/index/s3.jpg","img/data/index/l3.jpg");
###
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(3,1,1,0,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(8,1,1,0,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(21,1,1,0,0,0);
###
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(6,0,1,0,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(20,0,1,0,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(5,0,1,0,0,0);

###
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(9,0,0,0,1,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(12,0,0,0,1,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(13,0,0,0,1,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(15,0,0,0,1,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(19,0,0,0,1,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(22,0,0,0,1,0);
###
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(10,0,0,1,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(11,0,0,1,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(16,0,0,1,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(14,0,0,1,0,0);
insert into index_hot(game_id,pc_g,host,net,phone,hot) values(18,0,0,1,0,0);




#手游二维码图表
create table phone_qr(
  qid int primary key auto_increment,
  game_id int,                              #游戏id
  android varchar(256) default '',     # 安卓二维码
  ios varchar(256) default ''         #ios二维码
);
insert into phone_qr(game_id,android,ios) values(9,"img/data/Builder-Duet/AndroidQR.jpg","img/data/Builder-Duet/iosQR.jpg");
insert into phone_qr(game_id,android,ios) values(12,"img/data/DragnBoom/AndroidQR.jpg","img/data/DragnBoom/iosQR.jpg");
insert into phone_qr(game_id,android,ios) values(13,"img/data/LCEY/AndroidQR.jpg","img/data/LCEY/iosQR.jpg");
insert into phone_qr(game_id,android,ios) values(15,"img/data/Minecraft/AndroidQR.jpg","img/data/Minecraft/iosQR.jpg");
insert into phone_qr(game_id,android,ios) values(19,"img/data/Sdorica/AndroidQR.jpg","img/data/Sdorica/iosQR.jpg");
insert into phone_qr(game_id,android,ios) values(22,"img/data/WC4/AndroidQR.jpg","img/data/WC4/iosQR.jpg");