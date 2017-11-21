set names utf8;
drop database if exists kaggle;
create database kaggle CHARSET=UTF8;
use kaggle;

#用户表
create table kaggle_users(
  uid int primary key auto_increment,   #用户id , 主键 , 自增
  uname varchar(32),                    #用户名 ,
  upwd varchar(32),			#用户密码
  email varchar(64),			#用户邮箱
  phone varchar(16),			#用户手机号码
  user_name varchar(32),		#用户真实姓名
  user_id varchar(20),          #用户身份证号码
  gender bool,				#用户性别,1为男,0为女
  avatar varchar(256) default 'img/avatar/default_avatar.png' 		#用户头像
);


#插入测试数据(用户表)
insert into kaggle_users(uname,upwd,email,phone,user_name,user_id,gender) values("daxu","123456","xuxu@terna.com","15813213511","赵大旭",440402198304109236,1);


#游戏表
create table kaggle_games(
  gid int primary key auto_increment,   #游戏id , 主键 , 自增
  gname varchar(32)                    #游戏名 ,
);

#插入测试数据(游戏表)
insert into kaggle_games(gname) values("footersteeper");


#用户的游戏表
create table kaggle_users_games(
  kid int primary key auto_increment,   #id , 主键 , 自增
  uid int,				#用户的id
  gid int				#游戏的id
);

#插入测试数据(用户的游戏表)
insert into kaggle_users_games values(null,"1","1");


#用户的游戏表
create table games_scores(
  sid int primary key auto_increment,   #id , 主键 , 自增
  uid int,				#用户的id
  gid int,				#游戏的id
  time bigint,                          #记录时间
  score varchar(32)                     #游戏成绩
);

#插入测试数据(用户的游戏表)
insert into games_scores values(null,"1","1",1504527271528,"350/s");

#待完成:
#创建表--------游戏详细信息表
#创建表--------游戏图库
#创建表--------游戏地址表
#增加列--------游戏表增加销售量
#...