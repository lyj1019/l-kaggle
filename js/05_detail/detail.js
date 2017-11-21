(()=>{
    $(function($) {
        // 你可以在这里继续使用$作为别名...

        function getDetailData(){
            return new Promise((resolve,reject)=>{
                let search = window.location.search;

                let andIndex = 0;
                let subStr ="";
                let gidIndex ="";
                let param = "";
                if(search.length<=0){
                    subStr="gid=1";

                }else{
                    gidIndex = search.lastIndexOf("gid=");
                    if(gidIndex<0){
                        subStr="gid=1";
                    }else{
                        andIndex = search.indexOf("&",gidIndex);
                        if(andIndex<0){
                            subStr = search.substring(gidIndex);
                        }else{
                            subStr = search.substring(gidIndex,andIndex);
                        }

                    }
                }
                param = subStr.substring(subStr.indexOf("=")+1);
                let gid = parseInt(param);
                console.log(gid);
                if(!(gid>0)){
                    gid=1;
                }
                console.log(search,gidIndex,andIndex,subStr);
                console.log("gid = "+gid);

                $.ajax({
                    url:"GET",
                    url:"data/05_detail/getdetail.php",
                    data:{gid:gid},
                    success(data){
                        console.log(data);
                        resolve(data);
                    }

                });

            })
        }


        //数据渲染
        function applyDataToDom(data){
            return new Promise((resolve,reject)=>{
                console.log(data);
                //转换上市时间格式
                let marketTime = data.details[0].market;
                console.log(marketTime);
                marketTime= (new Date(parseFloat(data.details[0].market))).toLocaleDateString();
                console.log(marketTime);

                /*
              *dateArray:对象数组 exp:data.terraces
              *objKey:对象数组中每一个对象的 所需 键 的 值 exp:
              * */
                let dateArrToMyStr = function(dateArray,objKey){
                    let str ="";
                    for(let tmp of dateArray){
                        str+=tmp[objKey]+" / ";
                    }
                    return str.substr(0,str.length-2);
                }

                //转换平台数组为字符串
                let terraceStr = dateArrToMyStr(data.terraces,"tname");
                //转换标签数组为字符串
                let labelStr = dateArrToMyStr(data.labels,"lname");


                let html ="";

                html=`
                    <div class="aside-container">
                        <div class="aside-logo">
                            <img src=${data.details[0].logo} alt=""/>
                        </div>
                        <div class="aside-title">
                            <h1>${data.details[0].gname}</h1>
                        </div>
                        <div class="aside-row">
                            <b>简介 :</b><span>${data.details[0].abs}</span>
                        </div>
                        <div class="aside-row">
                            <b>上市时间 :</b><span>${marketTime}</span>
                        </div>
                        <div class="aside-row">
                            <b>平台 :</b><span>${terraceStr}</span>
                        </div>
                        <div class="aside-row">
                            <b>价格 :</b><span>¥ ${data.details[0].price}</span>
                        </div>
                        <div class="aside-row">
                            <b>标签 :</b><span>${labelStr}</span>
                        </div>

                `;
                //如果是手游,则侧边栏多加有一行放二维码
                if(data.phone_qr){
                    html+=`
                        <div class="aside-row phone">
                            <b class="on">Android</b><b>IOS</b>
                        </div>
                        <div class="aside-row phone_qr">
                            <img src="${data.phone_qr[0].android}" alt="" class="on"/>
                            <img src="${data.phone_qr[0].ios}" alt=""/>
                        </div>
                    `;
                }
                html +="</div>";
                $("#aside").html(html);

                html="";

                html =`
                    <div class="logo">
                            <img src=${data.details[0].logo} alt=""/>
                        </div><div class="base-info">
                            <p class="base-title"><b>${data.details[0].gname}</b></p>
                            <div class="clear">
                                <div class="info-left">
                                    <p><b>简介 :</b> ${data.details[0].abs}</p>
                                    <!--<hr/>-->
                                    <p><b>平台 :</b> ${terraceStr}</p>
                                </div><div class="info-right">
                                    <p><b>上架时间 :</b> ${marketTime}</p>
                                    <!--<hr/>-->
                                    <p><b>价格 :</b> ¥ ${data.details[0].price}</p>
                                </div>
                            </div>
                            <div class="base-tips">
                                <h3>标签 : </h3>

                `;
               for(let tmp of data.labels){
                   html+= `<span>${tmp.lname}</span>`;
               }
                html+=`
                     </div>
                    </div>
                `;
                $("#floor_info").html(html);
                html="";

                $("#intr").html(data.details[0].intr);
                html="";

                let smHtml ="";
                for(let tmp of data.imgs){
                    html+=`
                        <div class="mg-pic">
                            <img src=${tmp.pic} alt=""/>
                        </div>
                    `;
                    smHtml+=`
                        <img src="${tmp.pic}" alt="" class="sm-pic"/>
                    `;
                }
                html+=`
                    <div class="md-btn-left"></div>
                    <div class="md-btn-right"></div>

                 `
                $("#md_content").html(html);
                $(".mg-pic").eq(0).addClass("show");

                html="";
                //如果配置为null,则此楼层不改变,否则改变
                if(data.specs){
                    html="";
                    let index = data.specs[0].ishigh==0?0:1;
                    html=`
                        <tr>
                                <td>
                                    <b>CPU</b>
                                </td>
                                <td>${data.specs[index].cpu}</td>
                                <td>
                                    <b>CPU</b>
                                </td>
                                <td>${data.specs[1-index].cpu}</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>显卡</b>
                                </td>
                                <td>${data.specs[index].graphics}</td>
                                <td>
                                    <b>显卡</b>
                                </td>
                                <td>${data.specs[1-index].graphics}</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>内存</b>
                                </td>
                                <td>${data.specs[index].memory}</td>
                                <td>
                                    <b>内存</b>
                                </td>
                                <td>${data.specs[1-index].memory}</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>硬盘</b>
                                </td>
                                <td>${data.specs[index].hardpan}</td>
                                <td>
                                    <b>硬盘</b>
                                </td>
                                <td>${data.specs[1-index].hardpan}</td>
                            </tr>
                    `;
                    $("#specs_body").html(html);
                    html="";
                }

                //如果是手游,则此楼层不改变,否则改变
                if(data.phone_qr){
                    $("#pc_download").addClass("display-none")
                    html="";
                    html=`
                        <h1>Android</h1>
                        <div class="qr-img">
                            <img src="${data.phone_qr[0].android}" alt=""/>
                        </div>
                    `
                    $(".qr-container.android").html(html);
                    html=`
                        <h1>IOS</h1>
                        <div class="qr-img">
                            <img src="${data.phone_qr[0].ios}" alt=""/>
                        </div>
                    `;
                    $(".qr-container.ios").html(html);
                    html="";
                    $(".qr-container").removeClass("display-none");
                }else{
                    $("#pc_download").removeClass("display-none")
                    $(".qr-container").addClass("display-none");
                }

                $("#sm_content").html(smHtml).css("width",data.imgs.length*220);




                resolve();
            });
        }


        let bindEvent= function(){
            //侧边栏的二维码切换
            (()=>{
                let $btns = $(".aside-row.phone>b");
                let $imgs = $(".aside-row.phone_qr>img");
                if($btns.length>0){
                    $btns.click(function(){
                        let $this = $(this);
                        let index = $(this).index();
                        $btns.removeClass("on");
                        $imgs.removeClass("on");
                        $this.addClass("on");
                        $imgs.eq(index).addClass("on")
                    })
                }

            })();

            //游戏截图部分的图片切换
            (()=>{
                let smImgs = $("#sm_content>img");
                let mdImgs = $(".mg-pic");
                let $left = $(".md-btn-left");
                let $right = $(".md-btn-right");
                if(smImgs.length>0){
                    smImgs.click(function(){
                        let $this = $(this);
                        let index = $(this).index();
                        mdImgs.removeClass("show");
                        mdImgs.eq(index).addClass("show")
                    })
                }
                $left.click(function(){
                    let index = $(".mg-pic.show").index();
                    if(index>0){
                        mdImgs.eq(index).removeClass("show");
                        mdImgs.eq(index-1).addClass("show")
                    }
                });
                $right.click(function(){
                    let index = $(".mg-pic.show").index();
                    if(index<mdImgs.length-1){
                        mdImgs.eq(index).removeClass("show");
                        mdImgs.eq(index+1).addClass("show")
                    }
                })
            })();

            //楼层滚动
            (()=>{
                let openScroll = true;
                let ctrs = $(".floor-ctr");
                let $w = $(window);
                let $fixed = $(".floor-ctr.fixed")
                let floors = [$(".floor-intr"),$(".floor-pic"),$(".floor-spec"),$(".floor-down")];
                //console.log(ctrs)
                $(".floor-ctr").each(function(){
                    //console.log($(this).children());
                    $(this).children().click(function(){
                        //console.log(this);
                        let $this = $(this);
                        let index = $this.index();
                        //console.log(parseInt(floors[index].offset().top));
                        let offsetTop = parseInt(floors[index].offset().top)-120;
                        //console.log(offsetTop);
                        $w.scrollTop(offsetTop)
                    })
                })

                $w.scroll(function(){
                    //console.log((parseInt(floors[0].offset().top) + 80));
                    if( parseInt($w.scrollTop()) > (parseInt(floors[0].offset().top)+80)){
                        $fixed.addClass("show");
                        //console.log(123333333)
                    }else{
                        $fixed.removeClass("show")
                    }
                })
            })()

        }




        getDetailData().then(function(data){
            //这里做数据渲染
            applyDataToDom(data)
        }).then(function(){
            //这里做事件(特效)绑定
            bindEvent()
            console.log("i am here")
        });


    });
})();