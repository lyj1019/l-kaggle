//banner
(()=>{
    $.ajax({
        type:"GET",
        url:"data/04_shopmain/getbanner.php",
        success:data=>{
            console.log(data);
            let html = "";
            for(let tmp of data){
                html+=`
                    <div class="banner-img">
                        <img src="${tmp.shop_p}" alt=""/>
                        <div class="banner-name">
                            <div class="banner-title">
                                ${tmp.gname}
                            </div>
                            <div class="banner-subtitle">
                                ${tmp.abs}
                            </div>
                            <div class="banner-download">
                                <a href="detail.html?gid=${tmp.gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                    </div>
                `
            }
            html+=`
                <div class="banner-img">
                        <img src="${data[0].shop_p}" alt=""/>
                        <div class="banner-name">
                            <div class="banner-title">
                                ${data[0].gname}
                            </div>
                            <div class="banner-subtitle">
                                ${data[0].abs}
                            </div>
                            <div class="banner-download">
                                <a href="detail.html?gid=${data[0].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                    </div>
            `;
            $("#data_banner").html(html);
            let $banner = $(".banner");
            let WIDTH = parseInt($(".banner-img").css("width"));
            let $btns = $(".banner-btns-item");
            let $left = $(".banner-left");
            let $right = $(".banner-right");
            let timer = null;
            let openEvent = true;
            let $wrap = $("#banner");
            let LENGTH = $(".banner-img").length

            $banner.css({
                transition:"all .3s linear",
                left:0,
                width:LENGTH*WIDTH+"px"
            });
            function getLeft(){
                console.log(parseInt($banner.css("left")));
                return parseInt($banner.css("left"));
            }
            function move(left=-1){
                $banner.css("left",getLeft()+WIDTH*(left))
            }
            function moveback(left=0){
//			isOk=false;
                $banner.css("transition","none");
                $banner.css("left",left);
                setTimeout(()=>{
                    $banner.css("transition","all .3s linear");
                },10)
            }
            function open(){
                setTimeout(()=>{
                    openEvent=true;
                },500)
            }
            function changeDot(){
                setTimeout(function(){
                    $btns.removeClass("on");
                    let index = (-getLeft())/WIDTH
                    if(index>=3) index=0;
                    console.log(index);
                    $btns.eq(index).addClass("on");
                },500)

            }

            $left.click(function(){
                if(openEvent){
                    openEvent=false

                    if(getLeft()>=0){
                        moveback(-WIDTH*(LENGTH-1))
                        setTimeout(()=>{move(1)},20)
                    }else{
                        move(1);
                    }
                    open();
                    changeDot();
                }
            })

            $right.click(function(){
                if(openEvent){
                    openEvent=false

                    if(getLeft()<=-WIDTH*(LENGTH-1)){
                        moveback()
                        setTimeout(()=>{move()},20)
                    }else{
                        move();
                    }
                    open();
                    changeDot();
                }
            })
            function startBanner(){
                timer=setInterval(function(){
                    if(openEvent){
                        openEvent=false
                        if(getLeft()<=-WIDTH*(LENGTH-1)){
                            moveback()
                            setTimeout(()=>{move()},20)
                        }else{
                            move();
                        }
                        open();
                        changeDot();
                        //console.log(WIDTH*(LENGTH-1))
                    }
                },3000)
            }
            startBanner();
            $wrap.mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                startBanner();
            })
            $btns.mouseenter(function(){
                if(openEvent){
                    let bIndex = $(this).index();
                    let index = (-getLeft())/WIDTH;
                    if(bIndex>index){
                        openEvent=false;
                        if(bIndex==2 && index==0){
                            moveback(-WIDTH*(LENGTH-1))
                            setTimeout(()=>{move(1)},20)
                        }else{
                            move();
                        }
                        open();
                        changeDot();
                    }else if(bIndex<index){
                        openEvent=false;
                        if(bIndex==0&&index==2){
                            move()
                            setTimeout(()=>{moveback()},400);
                        }else{
                            move(1);
                        }
                        open();
                        changeDot();
                    }
                }

            })




        }
    });
})();
//(()=>{
//    let banner = document.getElementsByClassName("banner")[0];
//    let items = document.getElementsByClassName("banner-btns-item");//类数组对象
//    let left_btn = document.getElementsByClassName("banner-left")[0];
//    let right_btn = document.getElementsByClassName("banner-right")[0];
//    let LENGTH = banner.children.length;
//    let WIDTH = 1200;
//    let TOTALWIDTH = WIDTH*LENGTH;
//    let timer = null;
//    banner.style.left=0;
//    banner.style.width = TOTALWIDTH+"px";
//    banner.style.transition = "all .3s linear";
//    let openInterval = true;
//    let openBtn = true;
//
//
//    function openEvent(){
//        setTimeout(()=>{
//            openBtn=true;
//        },500)
//    }
//
//    function getIndex(){
//        return parseInt((parseInt(banner.style.left)/WIDTH)*(-1)+1)
//    }
//    //方向direction : 1 : 向右  , -1 : 向左
//    function bannerMove(direction){
//        banner.style.left = (parseInt(banner.style.left)+(WIDTH*direction))+"px";
//    };
//
//    function bannerBack(){
//        banner.style.transition = "none";
//        banner.style.left=0;
//        //console.log("here");
//        setTimeout(function(){
//            banner.style.transition = "all .3s linear";
//        },20);
//
//    };
//    function bannerReBack(){
//        console.log("hello")//第一张到第三张
//        banner.style.transition = "none";
//        //console.log("here");
//        setTimeout(function(){
//            banner.style.left=-(TOTALWIDTH-WIDTH)+"px";
//
//            setTimeout(function(){
//                banner.style.transition = "all .3s linear";
//                setTimeout(function(){
//                    bannerMove(1);
//                },20)
//            },20);
//        },20);
//    }
//    function createInterval(){
//        timer = setInterval(function(){
//            if(openInterval){
//                let index = getIndex()
//                clearItemsOn()
//                if(index==3){
//                    index=0;
//                }
//                addItemsOn(index)
//                console.log()
//                bannerMove(-1);
//                if(parseInt(banner.style.left) <= -(TOTALWIDTH-WIDTH)){
//                    setTimeout(bannerBack,500);
//                    //console.log("back");
//                }
//            }
//
//        },3000);
//    }
//    createInterval();
//
//    function clearItemsOn(){
//        for(let item of items){
//            item.classList.remove("on");
//        }
//    }
//    function addItemsOn(i){
//        items[i].classList.add("on");
//    }
//
//    $(banner).parent().mouseenter(function(){
//        clearInterval(timer);
//        openInterval=false;
//        console.log(openInterval)
//        timer = null;
//    }).mouseleave(()=>{
//        openInterval=true;
//        createInterval();
//        console.log(openInterval)
//    });
//
//    left_btn.onclick=function(){
//        if(openBtn){
//            openBtn=false;
//            let index = getIndex()
//            if(index<=3){
//                clearItemsOn();
//                bannerMove(-1);
//            }
//            if(index<3){
//                addItemsOn(index);
//            }
//            if(index==3){
//                addItemsOn(0)
//                setTimeout(bannerBack,300);
//            }
//        }
//        openEvent()
//    };
//    right_btn.onclick=function(){
//        if(openBtn){
//            openBtn=false;
//            let index = getIndex()-1;
//            console.log(index);
//            clearItemsOn();
//            if(index>0){
//                bannerMove(1);
//            }else if(index==0){
//                bannerReBack()
//
//            }
//            if(index!==0){
//                addItemsOn(index-1)
//            }else if(index==0){
//                addItemsOn(2)
//            }
//        }
//        openEvent()
//
//
//    };
//    function itemsEvent(){
//        for(let item of items){
//            $(item).mouseenter(function(){
//                let $this = $(this);
//                let btnIndex=0;//要删除"on"的元素下标
//                let onIndex =$this.index();//要添加"on"的元素下标
//                if(openBtn){
//                    openBtn=false;
//                    if(!$this.hasClass("on")){
//                        btnIndex = $this.siblings(".on").index();
//                        //console.log($this.siblings(".on"));
//                        //console.log(btnIndex)
//                        clearItemsOn();
//                        $this.addClass("on");
//                        if(onIndex+1 == btnIndex){
//                            bannerMove(1)
//                        }else if(onIndex-1 == btnIndex){
//                            bannerMove(-1)
//                        }else if(onIndex-2 ==btnIndex){
//                            bannerReBack();
//                        }else if(onIndex+2 ==btnIndex){
//                            bannerMove(-1)
//                            setTimeout(bannerBack,500);
//
//                        }
//
//
//                    }
//
//                }
//
//                openEvent();
//
//            })
//        }
//    }
//    itemsEvent();
//})();


//楼层----scrollTop
(()=>{
    // let header = $(".floor-header");
    // let header_items = $(".shopping-header-item");
    // // function createMyDom($dom){
    // //     this.myDom = $dom;
    // //     this.height = parseInt($dom.css("height"));
    // //     this.offsetTop = $dom[0].offsetTop-104;//这个值要+40
    // // }
    // let openScroll = true;
    // let timer = null;
    // let floors =[
    //     new createMyDom($(".floor-banner")),
    //     new createMyDom($(".floor-pc")),
    //     new createMyDom($(".floor-internet")),
    //     new createMyDom($(".floor-host")),
    //     new createMyDom($(".floor-phone")),
    // ];
    // window.onscroll=function(){
    //     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //     //console.log(scrollTop);
    //     if(scrollTop>=300){
    //         header.addClass("fixed");
    //     }else{
    //         header.removeClass("fixed");
    //     }
    //     if(scrollTop>500&&scrollTop<1000){

    //     }
    //     for(let item of header_items){
    //         item.classList.remove("on");
    //     }
    //     for(let i=0;i<header_items.length;i++){
    //         console.log(i)
    //         if(scrollTop>=floors[i].offsetTop&&scrollTop<=floors[i].offsetTop+floors[i].height){
    //             header_items[i].classList.add("on")
    //         }
    //     }


    // //    hot -- 0
    // //    pc -- 543
    // //    internet -- 1208
    // //    host -- 1867
    // //    phone -- 2532
    // }

    // for(let i=1;i<header_items.length;i++){
    //     header_items[i].onclick=function(){
    //         console.log("i am here")
    //         if(openScroll){
    //             let $this = $(this);
    //             $this.addClass("target");
    //             timer = setInterval(function(){
    //                 openScroll=false;

    //                 console.log("now is here")
    //                 if(document.documentElement.scrollTop<floors[i].offsetTop+40){
    //                     document.documentElement.scrollTop+=10;
    //                     // console.log(document.documentElement.scrollTop)
    //                     if(document.documentElement.scrollTop>=floors[i].offsetTop+40){
    //                         clearInterval(timer);
    //                         timer=null;
    //                         openScroll=true;
    //                         $this.removeClass("target")
    //                         console.log("clear1")
    //                     }
    //                 }
    //                 if(document.documentElement.scrollTop>floors[i].offsetTop+40){
    //                     document.documentElement.scrollTop-=10;
    //                     // console.log(document.documentElement.scrollTop)
    //                     if(document.documentElement.scrollTop<=floors[i].offsetTop+40){
    //                         clearInterval(timer);
    //                         timer=null;
    //                         openScroll=true;
    //                         $this.removeClass("target")
    //                         console.log("clear2")
    //                     }
    //                 }
    //                 if(document.body.scrollTop>floors[i].offsetTop+40){
    //                     document.body.scrollTop.scrollTop-=10;
    //                     // console.log(document.body.scrollTop.scrollTop)
    //                     if(document.body.scrollTop<=floors[i].offsetTop+40){
    //                         clearInterval(timer);
    //                         timer=null;
    //                         openScroll=true;
    //                         $this.removeClass("target")
    //                         console.log("clear3")
    //                     }
    //                 }
    //                 if(document.body.scrollTop<floors[i].offsetTop+40){
    //                     document.body.scrollTop.scrollTop+=10;
    //                     if(document.body.scrollTop>=floors[i].offsetTop+40){
    //                         clearInterval(timer);
    //                         timer=null;
    //                         openScroll=true;
    //                         $this.removeClass("target")
    //                         console.log("clear4")
    //                     }
    //                 }

    //             },1)


    //         }

    //     }
    // }
    // header_items[0].onclick=function(){
    //     if(openScroll){
    //         let $this = $(this);
    //         $this.addClass("target");
    //         timer = setInterval(function(){
    //             openScroll=false;
    //             if(document.documentElement.scrollTop>0){
    //                 document.documentElement.scrollTop-=10;
    //                 if(document.documentElement.scrollTop<=0){
    //                     clearInterval(timer);
    //                     timer=null;
    //                     openScroll=true;
    //                     $this.removeClass("target")
    //                 }
    //             }
    //             if(document.body.scrollTop>0){
    //                 document.body.scrollTop.scrollTop-=10;
    //                 if(document.body.scrollTop<=0){
    //                     clearInterval(timer);
    //                     timer=null;
    //                     openScroll=true;
    //                     $this.removeClass("target")
    //                 }
    //             }
    //         },1)
    //     }

    // }

    let $header = $(".floor-header");
    let $header_items = $(".shopping-header-item");
    let $w = $(window);
    function createMyDom($dom,oTop){
        this.myDom = $dom;
        this.oTop = oTop;
    }
    let openScroll = true;
    let timer = null;
    let floors =[
        new createMyDom($(".floor-banner"),0),
        new createMyDom($(".floor-pc"),539),
        new createMyDom($(".floor-internet"),1202),
        new createMyDom($(".floor-host"),1867),
        new createMyDom($(".floor-phone"),2532),
    ];
    // //    hot -- 0
    // //    pc -- 543
    // //    internet -- 1208
    // //    host -- 1867
    // //    phone -- 2532
    // let floors =[
    //     $(".floor-banner"),
    //     $(".floor-pc"),
    //     $(".floor-internet"),
    //     $(".floor-host"),
    //     $(".floor-phone"),
    // ];
    // console.log(floors);
    // console.log(floors[0].ost);
    // console.log($(".floor-banner").scrollTop());
    $w.scroll(function(){
        let st = $w.scrollTop();
        console.log(st);
        if(openScroll){
            if(st>=300){
                $header.addClass("fixed");
            }else{
                $header.removeClass("fixed");
            }
            
            $header_items.each(function(i){
                let $this = $(this);
                // console.log($this)
                $this.removeClass("on");
                // if(i>0){
                    if(st>=floors[i].oTop-90 && st<=floors[i].oTop+floors[i].myDom.outerHeight()-90){
                        $this.addClass("on");
                    }   
                // }else{
                    // if(st>=0 && st<=floors[i].outerHeight()){
                        // $this.addClass("on");
                    // }
                // }
                
            });
            
           
            
        }
    })

    $header_items.each(function(i){
        $(this).click(function(){
            if(openScroll){
                let $this = $(this);
                let st =$w.scrollTop();
                $this.addClass("target");
                timer = setInterval(function(){
                    openScroll=false;
                    if(st>floors[i].oTop){
                        st-=10;
                        //console.log(st);
                        $w.scrollTop(st)
                        if(st<=floors[i].oTop){
                            clearInterval(timer);
                            timer=null;
                            openScroll=true;
                            $this.removeClass("target")
                        }
                    }
                    if(st<floors[i].oTop){
                        st+=10;
                        //console.log(st);
                        $w.scrollTop(st)
                        if(st>=floors[i].oTop){
                            clearInterval(timer);
                            timer=null;
                            openScroll=true;
                            $this.removeClass("target")
                        }
                    }
                },1)
            }
        })

    })
                
})();


/*
(()=>{
    $.ajax({
        type:"GET",
        url:"data/04_shopmain/getfloors.php",
        success:data=>{
            console.log(data);
            let html = "";
            html=`
                <div class="content-main">
                    <div class="content-main-img">
                        <img src="${data.pc[0].logo}" alt=""/>
                        <div class="main-cover"></div>
                        <div class="main-cover-fff"></div>
                        <div class="main-cover-dl">
                            <a href="detail.html?gid=${data.pc[0].gid}"><button class="btn">点击下载</button></a>
                        </div>
                    </div>
                    <div class="content-details">

                        <h1>${data.pc[0].gname}</h1>
                        <p>${data.pc[0].abs}</p>
                    </div>

                </div>
                <div class="content-sub">
                    <div class="content-sub-first-row clear">
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.pc[1].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.pc[1].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>


                            <div class="content-details">
                                <h1>${data.pc[1].gname}</h1>
                                <p>${data.pc[1].abs}</p>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.pc[2].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.pc[2].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>
                            <div class="content-details">
                                <h1>${data.pc[2].gname}</h1>
                                <p>${data.pc[2].abs}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub-last-row clear">
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.pc[3].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.pc[3].gname}</h1>
                                <a href="detail.html?gid=${data.pc[3].logo}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.pc[4].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.pc[4].gname}</h1>
                                <a href="detail.html?gid=${data.pc[4].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.pc[5].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.pc[5].gname}</h1>
                                <a href="detail.html?gid=${data.pc[5].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            $("#floor_pc").html(html);



            html=`
                <div class="content-main">
                    <div class="content-main-img">
                        <img src="${data.net[0].logo}" alt=""/>
                        <div class="main-cover"></div>
                        <div class="main-cover-fff"></div>
                        <div class="main-cover-dl">
                            <a href="detail.html?gid=${data.net[0].gid}"><button class="btn">点击下载</button></a>
                        </div>
                    </div>
                    <div class="content-details">

                        <h1>${data.net[0].gname}</h1>
                        <p>${data.net[0].abs}</p>
                    </div>

                </div>
                <div class="content-sub">
                    <div class="content-sub-first-row clear">
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.net[1].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.net[1].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>


                            <div class="content-details">
                                <h1>${data.net[1].gname}</h1>
                                <p>${data.net[1].abs}</p>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.net[2].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.net[2].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>
                            <div class="content-details">
                                <h1>${data.net[2].gname}</h1>
                                <p>${data.net[2].abs}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub-last-row clear">
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.net[3].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.net[3].gname}</h1>
                                <a href="detail.html?gid=${data.net[3].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.net[4].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.net[4].gname}</h1>
                                <a href="detail.html?gid=${data.net[4].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.net[5].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.net[5].gname}</h1>
                                <a href="detail.html?gid=${data.net[5].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            $("#floor_net").html(html);


            html=`
                <div class="content-main">
                    <div class="content-main-img">
                        <img src="${data.host[0].logo}" alt=""/>
                        <div class="main-cover"></div>
                        <div class="main-cover-fff"></div>
                        <div class="main-cover-dl">
                            <a href="detail.html?gid=${data.host[0].gid}"><button class="btn">点击下载</button></a>
                        </div>
                    </div>
                    <div class="content-details">

                        <h1>${data.host[0].gname}</h1>
                        <p>${data.host[0].abs}</p>
                    </div>

                </div>
                <div class="content-sub">
                    <div class="content-sub-first-row clear">
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.host[1].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.host[1].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>


                            <div class="content-details">
                                <h1>${data.host[1].gname}</h1>
                                <p>${data.host[1].abs}</p>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.host[2].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.host[2].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>
                            <div class="content-details">
                                <h1>${data.host[2].gname}</h1>
                                <p>${data.host[2].abs}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub-last-row clear">
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.host[3].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.host[3].gname}</h1>
                                <a href="detail.html?gid=${data.host[3].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.host[4].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.host[4].gname}</h1>
                                <a href="detail.html?gid=${data.host[4].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.host[5].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.host[5].gname}</h1>
                                <a href="detail.html?gid=${data.host[5].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            $("#floor_host").html(html);



            html=`
                <div class="content-main">
                    <div class="content-main-img">
                        <img src="${data.phone[0].logo}" alt=""/>
                        <div class="main-cover"></div>
                        <div class="main-cover-fff"></div>
                        <div class="main-cover-dl">
                            <a href="detail.html?gid=${data.phone[0].gid}"><button class="btn">点击下载</button></a>
                        </div>
                    </div>
                    <div class="content-details">

                        <h1>${data.phone[0].gname}</h1>
                        <p>${data.phone[0].abs}</p>
                    </div>

                </div>
                <div class="content-sub">
                    <div class="content-sub-first-row clear">
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.phone[1].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.phone[1].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>


                            <div class="content-details">
                                <h1>${data.phone[1].gname}</h1>
                                <p>${data.phone[1].abs}</p>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data.phone[2].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data.phone[2].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>
                            <div class="content-details">
                                <h1>${data.phone[2].gname}</h1>
                                <p>${data.phone[2].abs}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub-last-row clear">
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.phone[3].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.phone[3].gname}</h1>
                                <a href="detail.html?gid=${data.phone[3].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.phone[4].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.phone[4].gname}</h1>
                                <a href="detail.html?gid=${data.phone[4].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data.phone[5].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data.phone[5].gname}</h1>
                                <a href="detail.html?gid=${data.phone[5].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            $("#floor_phone").html(html);

            //floor-common
            (()=>{
                $(".content-main-img").mouseenter(function(){
                    let $this = $(this)
                    $this.children(".main-cover-fff").addClass("show");
                    $this.children(".main-cover-dl").addClass("show");
                }).mouseleave(function(){
                    let $this = $(this)
                    $this.children(".main-cover-fff").removeClass("show");
                    $this.children(".main-cover-dl").removeClass("show");
                })
                $(".main-cover").mouseenter(function(){
                    let $this = $(this)
                    $this.addClass("show")
                }).mouseleave(function(){
                    let $this = $(this)
                    $this.removeClass("show")
                })

                $(".sub-img-container").mouseenter(function(){
                    let $this = $(this);
                    //$this.children(".sub-first-img").removeClass("show");
                    $this.children(".sub-img-back").addClass("show");
                }).mouseleave(function(){
                    let $this = $(this);

                    $this.children(".sub-img-back").removeClass("show");

                    //$this.children(".sub-first-img").addClass("show");
                })

                $(".content-sub-item").mouseenter(function(){
                    let $this = $(this);
                    $this.children(".last-item-cover").addClass("show");
                }).mouseleave(function(){
                    let $this = $(this);
                    $this.children(".last-item-cover").removeClass("show");
                })
            })();
        }
    })
})();
 */

(()=>{
    let floorEvent = function(){
        $(".content-main-img").mouseenter(function(){
            let $this = $(this)
            $this.children(".main-cover-fff").addClass("show");
            $this.children(".main-cover-dl").addClass("show");
        }).mouseleave(function(){
            let $this = $(this)
            $this.children(".main-cover-fff").removeClass("show");
            $this.children(".main-cover-dl").removeClass("show");
        })
        $(".main-cover").mouseenter(function(){
            let $this = $(this)
            $this.addClass("show")
        }).mouseleave(function(){
            let $this = $(this)
            $this.removeClass("show")
        })

        $(".sub-img-container").mouseenter(function(){
            let $this = $(this);
            //$this.children(".sub-first-img").removeClass("show");
            $this.children(".sub-img-back").addClass("show");
        }).mouseleave(function(){
            let $this = $(this);

            $this.children(".sub-img-back").removeClass("show");

            //$this.children(".sub-first-img").addClass("show");
        })

        $(".content-sub-item").mouseenter(function(){
            let $this = $(this);
            $this.children(".last-item-cover").addClass("show");
        }).mouseleave(function(){
            let $this = $(this);
            $this.children(".last-item-cover").removeClass("show");
        })
    }

    let getFloor = function(key,id){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type: "GET",
                url: "data/04_shopmain/getonefloor.php",
                data:{key:key},
                success: data=> {
                    console.log(data);
                    let html = "";
                    html = `
                <div class="content-main">
                    <div class="content-main-img">
                        <img src="${data[0].logo}" alt=""/>
                        <div class="main-cover"></div>
                        <div class="main-cover-fff"></div>
                        <div class="main-cover-dl">
                            <a href="detail.html?gid=${data[0].gid}"><button class="btn">点击下载</button></a>
                        </div>
                    </div>
                    <div class="content-details">

                        <h1>${data[0].gname}</h1>
                        <p>${data[0].abs}</p>
                    </div>

                </div>
                <div class="content-sub">
                    <div class="content-sub-first-row clear">
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data[1].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data[1].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>


                            <div class="content-details">
                                <h1>${data[1].gname}</h1>
                                <p>${data[1].abs}</p>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="sub-img-container">
                                <div class="sub-first-img">
                                    <img src="${data[2].logo}" alt=""/>
                                </div>
                                <div class="sub-img-back">
                                    <a href="detail.html?gid=${data[2].gid}"><button class="btn">点击下载</button></a>
                                </div>
                            </div>
                            <div class="content-details">
                                <h1>${data[2].gname}</h1>
                                <p>${data[2].abs}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub-last-row clear">
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data[3].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data[3].gname}</h1>
                                <a href="detail.html?gid=${data[3].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data[4].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data[4].gname}</h1>
                                <a href="detail.html?gid=${data[4].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>
                        <div class="content-sub-item">
                            <div class="last-item-img">
                                <img src="${data[5].logo}" alt=""/>
                            </div>
                            <div class="last-item-cover">
                                <h1>${data[5].gname}</h1>
                                <a href="detail.html?gid=${data[5].gid}"><button class="btn">点击下载</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            `;
                    $(id).html(html);
                    resolve();
                }
            })
        });

    }
    getFloor("pc_g","#floor_pc").then(floorEvent);
    getFloor("net","#floor_net").then(floorEvent);
    getFloor("host","#floor_host").then(floorEvent);
    getFloor("phone","#floor_phone").then(floorEvent);
})()