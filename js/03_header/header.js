
(()=>{
		console.log(123);
		$.ajax({
			type: "GET",
			url: "data/session.php",
			success:function(data){
                console.log(data);
                if(data>0){
				    $(".header-user").removeClass("show");
				    $(".user-avatar").addClass("show");
				    $.ajax({
                        type:"GET",
                        url:"data/03_login/getavatar.php",
                        success:function(data){
                            $(".user-avatar .avatar").html(`<img src="${data.avatar}"> `);
                        },
                        error:function(){
                            console.log("avatar error");
                        }
                    })
                }
			},
			error:function(){
                console.log(1234444);
			}
		})

})();

(()=>{
	let doLogin =  $(".doing-login")
	$("#login").click(function(e){
		e.stopPropagation();
		doLogin.toggleClass("show");
		document.getElementById("do-login-uname").focus();
	})

	doLogin.on("click",function(){
		doLogin.removeClass("show");

	})
	doLogin.children().on("click",(e)=>{
		e.stopPropagation();
	})

	let $uname = $("#do-login-uname")
	let $upwd = $("#do-login-upwd")
	let u ="";
	let p ="";

	$("#do-login-submit").click(function(){
		if($uname.val().length>0){
			u =$uname.val();
		}else{
			return;
		}

		if($upwd.val().length>0){
			p =$upwd.val();
		}else{
			return;
		}

		console.log("come here")
		$.ajax({
			type:"GET",
			url:"data/03_login/login.php",
			data:{
				uname:u,
				upwd:p
			},
			success:function(data){
				console.log(data);
                //location.reload(true);
				if(data.uid<0){
					$(".do-login-error").addClass("show");
				}else{
					getHtml();
				}
			},
			error:function(){
				alert("internet error")
			}

		})
	})
})();

(()=>{
	$("#register").click(()=>{
		location.href="register.html";
	})
	$("#header .logo").click(()=>{
		location.href="index.html";
	})

})();

(()=>{
	let userList = $(".user-list");
	$(".user-avatar").mouseover(
		function () {
			userList.addClass("show");
		}).mouseout(
		function () {
			userList.removeClass("show");
		}
	)
	$(".logout").click(()=>{
		$.ajax({
			type:"GET",
			url:"data/logout.php",
			success:data=>{
				if(data<0){
					getHtml();
				}
			},
			error:function(){
				console.log("logout false");
			}
		})
	})
})();