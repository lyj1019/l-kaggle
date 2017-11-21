/**
 * Created by web-01 on 2017/11/1.
 */
(()=>{
    let url ="data/06_list/list.php?";
    let terraceStr = "";
    let labelStr = ""

    let findClicked = function($elem){
        let str =""
        $elem.each(function(){
            let $this = $(this);
            if($this.hasClass("clicked")){
                str+=","+$this.data("id");
            }
        })
        str=str.slice(1);
        return str
    }

    let getListData = function(url){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:"GET",
                url:url,
                success:(data)=>{
                    if(data){
                        resolve(data);
                    }
                }
            })
        })
    };
    let applyDataToDom =function(data){
        return new Promise((resolve,reject)=>{
            //console.log(data);
            let html ="";

            for(let tmp of data.data){
                html+=`
                        <div class="section-item">
                            <div class="section-item-container clear">
                                <div class="item-logo">
                                    <img src="${tmp.logo}" alt=""/>
                                </div>
                                <div class="item-content">
                                    <div class="item-title">
                                        ${tmp.gname}
                                    </div>
                                    <div class="item-abs">
                                        ${tmp.abs}
                                    </div>
                                    <div class="item-tips">
                                        <span class="item-label"><b>平台:</b>${tmp.label}</span>
                                        <span class="item-terrace"><b>标签:</b>${tmp.terrace}</span>
                                    </div>
                                    </div>
                                    <div class="item-download">
                                        <a href="detail.html?gid=${tmp.gid}" class="btn">
                                            点击下载
                                        </a>
                                    </div>
                                </div>
                                <div class="item-intr">
                                    ${tmp.intr}
                                </div>
                        </div>
                    `
            }
            $("#section").html(html);


            html="";
            if(data.pno==1){
                html+=`<li class="page-item cannot" data-pno="${data.pno}">上一页</li>`
            }else{
                html+=`<li class="page-item" data-pno="${data.pno-1}">上一页</li>`
            }
            //当前为倒数第二页时,多显示前一个页码,即倒数第4页
            if(data.pno>=data.pageCount-1 && data.pno-3<=data.pageCount && data.pno-3>0){
                html+=`<li class="page-item" data-pno="${data.pno-3}">${data.pno-3}</li>`
            }
            //当前为最后一页时,多显示前一个页码 , 即倒数第5页
            if(data.pno>=data.pageCount&&data.pno-4<=data.pageCount && data.pno-4>0){
                html+=`<li class="page-item" data-pno="${data.pno-4}">${data.pno-4}</li>`
            }

            if(data.pno-2>0){
                html +=`<li class="page-item" data-pno="${data.pno-2}">${data.pno-2}</li>`;
            }
            if(data.pno-1>0){
                html +=`<li class="page-item" data-pno=${data.pno-1}">${data.pno-1}</li>`;
            }
            html+=`<li class="page-item on" data-pno="${data.pno}">${data.pno}</li>`;
            if(data.pno<=data.pageCount-1){
                html +=`<li class="page-item" data-pno="${data.pno+1}">${data.pno+1}</li>`;
            }
            if(data.pno<=data.pageCount-2) {
                html += `<li  class="page-item" data-pno="${data.pno+2}">${data.pno + 2}</li>`;
            }
            //当前页为前两页时,多显示后一页,即第4页
            if(data.pno<=2&&data.pno+3<=data.pageCount){
                html+=`<li class="page-item" data-pno="${data.pno+3}">${data.pno+3}</li>`
            }
            //当前页为第一页时,多显示后一页,即第5页
            if(data.pno<=1&&data.pno+4<=data.pageCount){
                html+=`<li class="page-item" data-pno="${data.pno+4}">${data.pno+4}</li>`
            }
            if(data.pno==data.pageCount){
                html+=`<li class="page-item cannot" data-pno="${data.pno}">下一页</li>`
            }else{
                html+=`<li class="page-item" data-pno="${data.pno+1}">下一页</li>`
            }
            $("#pages").html(html)

            html=""
            for(let tmp of data.data){
                let marketTime = tmp.market;
                marketTime= (new Date(parseFloat(marketTime))).toLocaleDateString();
                html+=`
                        <div class="aside-container display-none">
                            <div class="aside-logo">
                                <img src="${tmp.logo}" alt=""/>
                            </div>
                            <div class="aside-title">
                                <h1>${tmp.gname}</h1>
                            </div>
                            <div class="aside-row">
                                <b>简介 :</b><span>${tmp.abs}</span>
                            </div>
                            <div class="aside-row">
                                <b>上市时间 :</b><span>${marketTime}</span>
                            </div>
                            <div class="aside-row">
                                <b>价格 :</b><span>¥ ${tmp.price}</span>
                            </div>
                            <div class="aside-row download">
                                <a href="detail.html?gid=${tmp.gid}">点击下载</a>
                            </div>
                            <div class="close">X</div>
                        </div>
                    `
            }

            $("#aside").html(html);
            resolve();
        })
    };
    (()=>{
        $(function($) {
            //let bindEvent= function(){
            //    console.log(456);
            //
            //}
            getListData(url).then(function(data){
                //这里做数据渲染
                applyDataToDom(data)
            }).then(function(){
                //这里做事件(特效)绑定
                //bindEvent()
                //console.log("i am here")
                // 事件绑定改为 ---事件代理,绑定在父元素上,利用冒泡
            });

            //顶层导航栏点击事件
            //每点击一次都要重新加载数据
            getListData("data/06_list/list_nav.php").then(function(data){
                //这里做数据渲染

                return new Promise((resolve,reject)=>{
                    let html = "";
                    html=`
                        <span class="nav-row-title">平台:</span>
                        <span class="nav-row-items all clicked">ALL</span>
                    `;
                    for(let tmp of data.terraces){
                        html+=` <span class="nav-row-items other" data-id="${tmp.tid}">${tmp.tname}</span> `
                    }
                    $("#nav-terrace").html(html);

                    html="";
                    html=`
                        <span class="nav-row-title">标签:</span>
                        <span class="nav-row-items all clicked">ALL</span>
                    `;
                    for(let tmp of data.labels){
                        html+=` <span class="nav-row-items other" data-id="${tmp.lid}">${tmp.lname}</span> `
                    }
                    $("#nav-label").html(html);
                    resolve();
                })
            }).then(function(){
                //这里做事件绑定
                let clickOpen = true;
                function openClick(){
                    //setTimeout(()=>{
                        clickOpen=true;
                    //},100)
                }
                $(".nav-row-items.other").click(function(){
                    if(clickOpen){
                        clickOpen=false;
                        let $this = $(this)
                        let $items = $this.parent().children(".nav-row-items.other");
                        let allClicked=true;
                        let noClicked = true;
                        $this.toggleClass("clicked");
                        if($this.hasClass("clicked")){
                            $this.siblings(".all").removeClass("clicked")
                        }
                        $items.each(function(){
                            let $this = $(this);
                            allClicked = allClicked && $this.hasClass("clicked")
                            noClicked = noClicked && !$this.hasClass("clicked")
                        })
                        if(allClicked){
                            $items.removeClass("clicked");
                            $this.siblings(".all").addClass("clicked")
                        }
                        if(noClicked){
                            $items.removeClass("clicked");
                            $this.siblings(".all").addClass("clicked")
                        }

                        let tStr =""
                        tStr=findClicked($("#nav-terrace").children(".nav-row-items.other"))

                        let lStr =""
                        lStr=findClicked($("#nav-label").children(".nav-row-items.other"))

                        labelStr="&label="+lStr;
                        terraceStr="&terrace="+tStr;


                        let thisUrl ="data/06_list/list.php?";
                        if(labelStr.length>7){
                            //console.log(labelStr);
                            thisUrl+=labelStr;
                        }
                        if(terraceStr.length>9){
                            thisUrl+=terraceStr;
                        }
                        url=thisUrl;
                        getListData(thisUrl).then(function(data){

                            applyDataToDom(data)
                        }).then(function(){
                            openClick();
                        });

                    }



                })
                $(".nav-row-items.all").click(function(){
                    if(clickOpen){
                        clickOpen=false;
                        let $this = $(this)
                        $this.addClass("clicked");
                        if($this.hasClass("clicked")){
                            $this.nextAll().removeClass("clicked")
                        }
                        let tStr =""
                        tStr=findClicked($("#nav-terrace").children(".nav-row-items.other"))

                        let lStr =""
                        lStr=findClicked($("#nav-label").children(".nav-row-items.other"))

                        labelStr="&label="+lStr;
                        terraceStr="&terrace="+tStr;


                        let thisUrl ="data/06_list/list.php?";
                        if(labelStr.length>7){
                            console.log(labelStr);
                            thisUrl+=labelStr;
                        }
                        if(terraceStr.length>9){
                            thisUrl+=terraceStr;
                        }
                        url=thisUrl;
                        getListData(thisUrl).then(function(data){

                            applyDataToDom(data)
                        }).then(function(){
                            openClick();
                        });
                    }
                })
            });
        });

    })();



//这里是每个item(每个游戏)的事件
    (()=>{
        $("#section").on("click",".section-item-container",function(){

            let $this = $(this);
            let index = $this.parent().index();
            let $next = $this.next();
            console.log($this);
            console.log(index);
            if($next.hasClass("show")){
                $next.removeClass("show");
            }else{
                $this.parent().parent().children().children(".item-intr").removeClass("show");
                $next.addClass("show")
            }
            //console.log($this.parent().parent().children().children(".item-intr"));


            $("#aside").children().addClass("display-none");
            $("#aside").children().eq(index).removeClass("display-none");
        })
    })();
//关闭aside的事件
    (()=>{
        $("#aside").on("click",".close",function(){
            $(this).parent().addClass("display-none")
        })
    })();



//这里是page(页码)的事件
    (()=>{
        console.log("here");
        $("#pages").on("click","li",function(){
            let $this = $(this);
            console.log(this);
            console.log($this);
            console.log($this.data("pno"));
            let pno = parseInt($this.data("pno"));
            console.log(pno);
            if(!$this.hasClass("cannot")&&!$this.hasClass("on")){
                getListData(url+`&pno=${pno}`).then(function(data){
                    //这里做数据渲染
                    applyDataToDom(data)
                    $(window).scrollTop(0)
                })
            }

        })
    })();
})();


