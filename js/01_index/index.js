

//锟斤拷平台楼锟斤拷
// terrace
(()=>{
   let dh = function (deg){
      return deg*Math.PI/180
   }
   let cans = $(".can-item");
   let timer = null;
   let items = $(".terrace-item");

   items.mouseenter(function(){
      var $this = $(this);
      if(this.children.length<=0) return;
      if(this.children[0].children.length<=0) return;
      if(this.children[0].children[0].nodeName!="CANVAS")return;
    //   console.log(this.children[0].children[0].nodeName);

      let ctx = this.children[0].children[0].getContext("2d");
      ctx.clearRect(0,0,180,180)
      let n=-90;
      timer=setInterval(()=>{
         n+=5;
         ctx.beginPath();
         ctx.clearRect(90,90,75,dh(-90));
         ctx.arc(90,90,75,dh(-90),dh(n));
         ctx.lineWidth="6";
         ctx.strokeStyle="#20beff";
         ctx.stroke();

         ctx.beginPath();
         ctx.clearRect(90,90,75,dh(0),dh(90));
         ctx.arc(90,90,75,dh(90),dh(n+180));
         ctx.lineWidth="6";
         ctx.strokeStyle="#20beff";
         ctx.stroke();
         if(n>90){
            clearInterval(timer)
            timer=null;
            $this.children(".terrace-item-shield").addClass("show")
            $this.find(".item-logo-move").addClass("left")
            
            setTimeout(()=>{
              ctx.beginPath();
              ctx.clearRect(90,90,75,dh(-90));
              ctx.arc(90,90,75,dh(-90),dh(270));
              ctx.lineWidth="6";
              ctx.strokeStyle="#fff";
              ctx.stroke();
            },300)
            
         }

      },10);
   }).mouseleave(function(){
      var $this = $(this);
      if(timer){
         clearInterval(timer);
         timer=null;
        //  console.log("clear timer")
        //  console.log(timer)
      }
      console.log("out")
      console.log(this)
      if(this.children.length<=0) return;
      if(this.children[0].children.length<=0) return;
      if(this.children[0].children[0].nodeName!="CANVAS")return;
    //   console.log(this.children[0].children[0].nodeName);

      let ctx = this.children[0].children[0].getContext("2d");
      ctx.clearRect(0,0,180,180)
      $this.children(".terrace-item-shield").removeClass("show");
      $this.find(".item-logo-move").removeClass("left")
    //   console.log($(this).children(".terrace-item-shield"))
   })



})();

//hot
(()=>{
    $.ajax({
        type:"GET",
        url:"data/01_index/gethot.php",
        success:(data)=>{
            //console.log(data);
            let html = "";
            for(let tmp of data){
                html+=`
                    <div class="hot-item">
                        <div class="hot-item-pic">
                            <img src="${tmp.index_pic}" alt=""/>
                        </div>
                        <div class="hot-item-introduce">
                            <br/>
                            <h2>${tmp.gname}</h2>
                            <p class="hot-item-introduce-subtitle">${tmp.abs}</p>
                        </div>
                        <div class="hot-item-cover">
                            <a href="detail.html?gid=${tmp.gid}"><button class="btn">下载</button></a>
                        </div>
                    </div>
                `;
            }
            $("#hot-container").html(html);
            let items = $(".hot-item");
            console.log(items);
            let covers = $(".hot-item-cover")
            items.mouseenter(function(){
                let index = $(this).index();
                let cover = covers.eq(index);
                console.log(index,cover);
                cover.addClass("show")
            }).mouseleave(function(){
                let index = $(this).index();
                let cover = covers.eq(index);
                console.log(index,cover);
                cover.removeClass("show")
            })
        }
    })



})();


//sort
(()=>{
    $.ajax({
        type:"GET",
        data:{key:"down"},
        url:"data/01_index/getsort.php",
        success:data=>{
            console.log(data);
            let html = "";
            for(let tmp of data){
                html+=`
                    <div class="sort-detail-row">
                            <div class="sort-detail-row-pic">
                                <img src="${tmp.logo}" alt=""/>
                            </div>
                            <div class="sort-detail-row-container">
                                <p class="sort-detail-row-title">${tmp.gname}</p>
                                <p class="sort-detail-row-content">${tmp.abs}</p>
                            </div>
                            <div class="sort-detail-row-download">
                                <a href="detail.html?gid=${tmp.gid}"><button class="btn">下载</button></a>
                            </div>
                        </div>
                `;
            }
            $("#down_sort").html(html);
        }
    });
    $.ajax({
        type:"GET",
        data:{key:"praise"},
        url:"data/01_index/getsort.php",
        success:data=>{
            console.log(data);
            let html = "";
            for(let tmp of data){
                html+=`
                    <div class="sort-detail-row">
                            <div class="sort-detail-row-pic">
                                <img src="${tmp.logo}" alt=""/>
                            </div>
                            <div class="sort-detail-row-container">
                                <p class="sort-detail-row-title">${tmp.gname}</p>
                                <p class="sort-detail-row-content">${tmp.abs}</p>
                            </div>
                            <div class="sort-detail-row-download">
                                <a href="detail.html?gid=${tmp.gid}"><button class="btn">下载</button></a>
                            </div>
                        </div>
                `;
            }
            $("#praise_sort").html(html);
        }
    })
    $.ajax({
        type:"GET",
        data:{key:"market"},
        url:"data/01_index/getsort.php",
        success:data=>{
            console.log(data);
            let html = "";
            for(let tmp of data){
                html+=`
                    <div class="sort-detail-row">
                            <div class="sort-detail-row-pic">
                                <img src="${tmp.logo}" alt=""/>
                            </div>
                            <div class="sort-detail-row-container">
                                <p class="sort-detail-row-title">${tmp.gname}</p>
                                <p class="sort-detail-row-content">${tmp.abs}</p>
                            </div>
                            <div class="sort-detail-row-download">
                                <a href="detail.html?gid=${tmp.gid}"><button class="btn">下载</button></a>
                            </div>
                        </div>
                `;
            }
            $("#new_sort").html(html);
        }
    })


    let subtitles = $(".floor-sort .subtitle");
    let sortDetails = $(".sort-detail")
    console.log(subtitles);
    subtitles.mouseenter(function(){
        let index = $(this).index()-1;
        let sortDetail = sortDetails.eq(index);
        console.log(index,sortDetail);
        sortDetails.removeClass("show")
        sortDetail.addClass("show");
    })
})();




// introduce
(()=>{
  let $lis = $(".second-left-ul").children();
  let $details = $(".second-right")
  $lis.mouseenter(function(){
    let $this = $(this);
    let index = $this.index();
    $details.children().removeClass("show");
    $details.children(":eq("+index+")").addClass("show");
  })
})();


//    锟矫伙拷锟斤拷一锟轿癸拷锟斤拷锟斤拷应楼锟斤拷时锟斤拷锟诫动锟斤拷
// 婊氳疆浜嬩欢
(()=>{
   window.onload = function(){
      let isHere_terrace = true;
      let isHere_hot = true;
      let isHere_sort = true;
      let isHere_partner = true;
      let $title_more=$(".title-more");
      $title_more.find(".more-item:nth-child(1)").addClass("left-to-mid");
      $title_more.find(".more-item:nth-child(2)").addClass("bot-to-mid");
      $title_more.find(".more-item:nth-child(3)").addClass("right-to-mid");
      $(".second-left").addClass("left-to-mid");
      $(".second-right").addClass("right-to-mid");
      $(".title-container").addClass("top-to-mid");
      

      window.onscroll = function() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //console.log(scrollTop);

        if(isHere_hot){
          if(scrollTop>=1350){
            console.log("come here");
            $(".hot-item:nth-child(even)").addClass("bot-to-mid");
            $(".hot-item:nth-child(odd)").addClass("top-to-mid");
            isHere_hot=false;
          }
          
          
        }

        if(isHere_terrace){
            var n = parseInt(scrollTop);
            if(scrollTop>=650){
                $(".terrace-item:nth-child(even)").addClass("top-to-mid");
                $(".terrace-item:nth-child(odd)").addClass("bot-to-mid");
                $(".terrace-container").addClass("show")
                isHere = false;
                console.log(scrollTop)

            }
        }

        if(isHere_sort){
          if(scrollTop>=1950){
            $(".sort-container").addClass("transparent-to-show")
            isHere_sort=false;
          
          }
        }

        if(isHere_partner){
          if(scrollTop>=2650){
            $(".partner-row:nth-child(odd)").addClass("left-to-mid")
            $(".partner-row:nth-child(even)").addClass("right-to-mid")
            isHere_partner=false;
          
          }
        }
        
        
        // 400-600    --- floor-introduce
        // let canGo = true;
        
        // if(scrollTop>=470 && scrollTop<=530){
        //   if(canGo){
        //     document.body.scrollTop=500;
        //     console.log("change")
        //     console.log(scrollTop)
            
        //     console.log(canGo);
        //   }
        //   canGo=false;
        // }else{
        //   canGo=true;
        //   console.log(canGo)
        // }
      
        
      }
   }

})();