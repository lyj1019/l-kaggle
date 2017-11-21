(()=>{
	$.ajax({
		type:"GET",
		url:"header.html",
		success:function(data){
			$("#header").html(data);
		},
		error:function(){
			console.log("header error");
		}
	})
})();

(()=>{
	var uname = "";			//用户名
	var pwd = "";			//密码密码
	var email = "";			//邮箱
	var user_name="";		//真实姓名
	var user_id="";		//身份证
	var phone = "";			//电话
	var gender = 1;			//性别
	var img = null;			//头像文件


	/*
	*检查input内容是否符合所输入的正则表达式的要求,不符合则将错误信息输出到指定地方
	*
	*只有一个错误信息的是选填,两个错误信息是必填
	*
	*$txt - 当前input
	*reg  - 正则表达式
	*prop1 - 第一个错误信息
	*prop2 - 如果只有一个错误信息,默认为false,否则为第二个
	*/
	function vali($txt,reg,prop1,prop2=false){
		var $vali_msg = $txt.nextAll(".vali_msg")
		var $error_msg = $txt.nextAll(".error_msg")

		$vali_msg.html("").removeClass("error right show");
		$error_msg.html("").removeClass("show");
		
		if(prop2){
			if($txt.val().length==0){
				$vali_msg.html("×").addClass("error show");
				$error_msg.html("× "+prop1).addClass("show");
				return false;
			}else{
				if(reg.test($txt.val())){
					$vali_msg.html("√").addClass("show right");
					return true;
				}else{
					$vali_msg.html("×").addClass("error show");
					$error_msg.html("× "+prop2).addClass("show");
					return false;
								
				}

			}	
		}else{
			if($txt.val().length==0){
				return true;
			}else{
				if(reg.test($txt.val())){
					$vali_msg.html("√").addClass("show right");
					return true;
				}else{
					$vali_msg.html("×").addClass("error show");
					$error_msg.html("× "+prop1).addClass("show");
					return false;
				}

			}	
		}
			
	}

	/*
	*验证两次密码输入是否一致
	*
	*依赖于vali();
	*/
	function vali_pwd(){
		var $pwd1=$("[id=upwd]");
		var $pwd2=$("#upwd2");
		var $span2=$pwd2.nextAll(".vali_msg");
		var $span1=$pwd1.nextAll(".vali_msg");
		var $msg=$pwd2.nextAll(".error_msg");
		$span2.removeClass("right error show").html("");
		$msg.removeClass("show").html("");
		if(vali(
				$pwd1,
				/^\w{6,16}$/,
				"密码不能为空",
				"必须是在6~16位字符,且不能以数字开头"
			)){
			if($pwd1.val()==$pwd2.val()){
				$span2.addClass("right show").html("√");
				return true;
			}else{
				$span2.addClass("error show").html("×");
				$msg.addClass("show").html("两次密码不一致");
				return false;
			}
		}else{
			return vali(
				$pwd1,
				/^\w{6,16}$/,
				"密码不能为空",
				"必须是在6~16位字符,且不能以数字开头"
			)
		}

	}

function vailUnameToServer($txt,$span,$msg,fn){
	$span.removeClass("right error show").html("");
	$msg.removeClass("show").html("");
	$.get("data/02_register/vali.php",{uname:$txt.val()}).then(data=>{
		if(data){
			$span.addClass("error show").html("×");
			$msg.addClass("show").html("× 用户名已存在");

		}else{
			$span.addClass("right show").html("√");
			uname =$txt.val();
			if(fn){
				fn();
			}
		}
	})
}
//	验证用户名是否符合要求
	$("#uname").blur(e=>{
		var $txt = $(e.target);
		var $span = $txt.nextAll(".vali_msg")
		var $msg = $txt.nextAll(".error_msg")
		let canPost= vali(
			$txt,
			/^[A-Za-z][\w.]{2,15}$/,
			"用户名不能为空",
			"用户名必须是在3~16位英文字符"
		)
		
		//当用户名符合vail()的要求时		
		//验证用户名是否"已存在"	
		//$.get发送请求
		if(canPost){
			vailUnameToServer($("#uname"),$span,$msg);

		}
		
		
	});

//	验证密码是否符合要求
	$("#upwd").blur(e=>{

		vali(
			$(e.target),
			/^\w{6,16}$/,
			"密码不能为空",
			"必须是在6~16位字符,且不能以数字开头"
		);
		vali_pwd();
		pwd = $(e.target).val()
	});

//	验证两次密码是否一致
	$("#upwd2").blur(e=>{
		vali_pwd();
	});

//	验证邮箱格式是否符合要求
	$("#email").blur(e=>{

		vali(
			$(e.target),
			/^[\w.]+@[\w.]+$/,
			"邮箱不能为空",
			"邮箱格式不正确"
		);
		email=$(e.target).val();

	});

//	验证手机号码是否符合要求
	$("#phone").blur(e=>{
		vali(
			$(e.target),
			/^(86|0086)?1[34578]\d{9}$/,
			"手机号码格式不正确"
		);
		phone=$(e.target).val();
	})

//	验证真实姓名格式是否符合要求
	$("#user_name").blur(e=>{
		vali(
			$(e.target),
			/^([\u4300-\u9fa5]{2,6})|([A-Za-z\s._-]{3,20})$/,
			"请填写真实姓名"
		);
		user_name=$(e.target).val()
	})

//	验证身份证号码格式是否符合要求
	$("#user_id").blur(e=>{
		vali(
			$(e.target),
			/^\d{6}((19[56789]\d)|(2[01]\d{2}))((0[123456789])|(1[012]))(([012]\d)|(3[01]))\d{4}(x{0,1})$/,
			"请填写真实的身份证号"
		);
		user_id = $(e.target).val();
	})
	
//	为性别sex赋值
	$("[name=sex]").change(function(e){
		gender = parseInt(e.target.value);
		console.log(gender);
	})
	
	
//	模拟执行选择头像
	$("#btn_file").click(()=>{
		$("#file").click();
	})
	
//	验证是否同意
	$("#agree").click(function(){
		var $this = $(this);
		var $msg=$this.nextAll(".error_msg")
		$msg.removeClass("show").html("");
		if(!$("#agree")[0].checked){
			$msg.addClass("show").html("× 请同意");
		}
	})
	
//	用于展开选填的表单
	$("#toggle").click(function(){
		$(this).toggleClass("out");
		$(".form.not-must").toggleClass("out");
	})

	//预览显示图片
	$("#file").change(function(e){
		var tmp_img =$(this).get(0).files[0]
		if(tmp_img){
			if(tmp_img.type.indexOf("image")==-1){
				alert("头像格式不正确")
				return;
			}
		}
		img  =tmp_img;
		if(!img){
			return;
		}
		var pic = webkitURL.createObjectURL(img);
		//$("footer").append(`<img src="${img}">`)
		console.log(img)
		$(this).nextAll("[data-show_msg=file_name]").html(img.name);
		$("#img").children().attr("src",pic);
	})

//	提交表单按钮
	$("#submit").click(()=>{
		let canPost = true;
		//验证必填项,是否已经完成验证
		console.log(canPost)
		canPost = canPost&&vali(
			$("#uname"),
			/^[A-Za-z][\w.]{2,15}$/,
			"用户名不能为空",
			"用户名必须是在3~16位英文字符"
		);
		console.log(canPost)
		canPost = canPost&&vali(
			$("#upwd"),
			/^\w{6,16}$/,
			"密码不能为空",
			"必须是在6~16位字符,且不能以数字开头"
		);
		console.log(canPost)
		canPost = canPost&&vali_pwd();
		console.log(canPost)
		canPost = canPost&&vali(
			$("#email"),
			/^[\w.]+@[\w.]+$/,
			"邮箱不能为空",
			"邮箱格式不正确"
		);
		console.log(canPost)
		canPost =canPost&&vali(
			$("#phone"),
			/^(86|0086)?1[34578]\d{9}$/,
			"手机号码格式不正确"
		);
		console.log(canPost)
		canPost=canPost&&vali(
			$("#user_name"),
			/^([\u4300-\u9fa5]{2,6})|([A-Za-z\s._-]{3,20})$/,
			"请填写真实姓名"
		);
		console.log(canPost)
		canPost=canPost&&vali(
			$("#user_id"),
			/^\d{6}((19[56789]\d)|(2[01]\d{2}))((0[123456789])|(1[012]))(([012]\d)|(3[01]))\d{4}(x{0,1})$/,
			"请填写真实的身份证号"
		);
		console.log(canPost)
		if(!canPost){
			return
		}
		console.log(canPost)
		if(!$("#agree")[0].checked){
			$("#agree").nextAll(".error_msg").addClass("show").html("× 请同意");
			return;
		}
		console.log(canPost)

		vailUnameToServer($("#uname"),$("#uname").nextAll(".vali_msg"),$("#uname").nextAll(".error_msg"),function(){
			console.log(123);
			var data={};
				//验证是否同意

//		$ajax
				data = new FormData();
				data.append("uname",uname);
				data.append("upwd",pwd);
				data.append("email",email);
				data.append("user_name",user_name);
				data.append("user_id",user_id);
				data.append("phone",phone);
				data.append("gender",gender);
				if(img){
					//data= {
					//	uname: uname,
					//	pwd : pwd,
					//	email : email,
					//	user_name:user_name,
					//	user_id:user_id,
					//	phone :phone,
					//	gender :gender,
					//	img :img
					//	}
					data.append("img",img);
				}
				console.log(data);
				console.dir(data);
				console.log(String(data));
				$.ajax({
					type:"POST",
					url:"data/02_register/register.php",
					contentType:false,
					processData:false,
					//cache:false,
					//async:true,
					data:data,
					success:function(data){
						if(data>=1){
							console.log("here")
							$(".msg-for-success").addClass("show")
							let sec_b = $(".msg-for-success .time");
							let index = 5;
							let timer = setInterval(()=>{
								sec_b.html(index);
								index--;
								if(index<0){
									clearInterval(timer);
									location.href="index.html"
								}
							},1000)
						}
					},
					error:function(){
						alert("出错了")
					}
				})
			});




	})
})()