/**  作者：Lucson     此JS文件内部封装的内容为实际开发用的功能，方便以后使用 */

;(function(_){
 
    _.$ = function(selector){
         return new Base(selector);
   }

   _.$$ = Base.prototype;
   
   function Base(selector){
        this.elements = [];
        this.sliderElProperty = [];
        if(selector){
           this.el = this.get(selector);
           this.elements.push(this.get(selector)) 
        }
   }


    /**
     * 去除字符串所有空格
     */

    Base.prototype.clearAllTrim = function(str) {
        return str.replace(/\s/g,"");
    };
   
   Base.prototype.get = function(selector){
            if(selector.trim().indexOf("#") == 0){
               return  document.querySelector(selector);
            }else{
               return  document.querySelectorAll(selector);
            }
   }
   
   Base.prototype.getEle = function(el){
       for(var i =  0 ; i < el.length; i++){
           this.elements.push(el[i]);
      }
   };
   
   Base.prototype.getId = function(id){
       this.elements.push(document.getElementById(id));
       return this;
   };
   
   Base.prototype.getClassName = function(classname){
       this.getEle(document.getElementsByClassName(classname));
       return this;
   };
   
   Base.prototype.getTag = function(tagName){
       this.getEle( document.getElementsByTagName(tagName));
       return this;
   };

   Base.prototype.addClass = function(element,cName){
        if(!this.hasClass(element,cName)){
            element.className += " " +  cName;
        }
   };

   Base.prototype.removeCalss = function(element,cName){
    element.className = element.className.replace(cName," ");
   };

   Base.prototype.hasClass = function(element,cName){

        cName = cName.trim();
        return !!(element.className.match(new RegExp(cName)));
   };
   
   Base.prototype.root = function(){
       return document.documentElement || document.body;
   };


   /**
    * 
    * @param {显示隐藏的元素(可以是一个HTMLElement也可以是一个数组)} ShowElement 
    * @param {显示时点击的元素} targetElement 
    * @param {隐藏时点击的元素} hideTargetElement 
    */
   
   Base.prototype.clickMaskShow = function(ShowElement,targetElement,hideTargetElement){
   
       if(!ShowElement.length) ShowElement = [ShowElement];
   
       targetElement.onclick=function(){
        setToggle(ShowElement,"show");
       }
   
       hideTargetElement.onclick=function(){
           setToggle(ShowElement,"hide");
       }
   
       function setToggle(els,is){
           for(var  i = 0 ; i < els.length; i++)  els[i].style['display'] = is == 'show' ? 'block' : 'none'; 
       }
   
   }
   
   /**
    * 封装的自定义的右键菜单
    * 
    * @param {*} texts     显示的文本
    * @param {*} styles    设置的样式
    * @param {*} callback  点击事件的回调
    */
   
   Base.prototype.diyContextMenu = function(texts,styles,callback){
            var ul = document.createElement("ul");
            ul.id = "contextMenu";
            for(var i = 0 ; i < texts.length; i++){
                var li = document.createElement("li");
                li.className = "diyMenu";
                li.onclick = callback;
                var li_text = document.createTextNode(texts[i]);
                li.appendChild(li_text);
                ul.appendChild(li);
            }
            this.root().appendChild(ul);
            $().getId("contextMenu").css(styles.ul);
            $().getClassName("diyMenu").css(styles.li);
   
            if(styles.li.hover){
                var style = document.createElement("style");
                var liHoverStyle = "" ;
                liHoverStyle = ".diyMenu:hover{";
                for(var k in styles.li.hover){
                     var tempK = styles.li.hover[k];
                     for(var i = 0 ; i < k.length; i++ ){
                       if(k[i].charCodeAt() > 65 && k[i].charCodeAt()< 90){
                          k =  k.split(k[i]).join("-"+k[i].toLocaleLowerCase())
                       }
                     }
                     liHoverStyle +=  k +":"+tempK +";";
                }
                liHoverStyle += "}";
                style.innerText = liHoverStyle;
                document.head.appendChild(style);
            }
            this.root().oncontextmenu=function(e){
                   e.preventDefault();
                   $().getId("contextMenu").css({
                        display:"block",
                        left:e.clientX+"px",
                        top:e.clientY+"px"
                   });
            }
            this.root().onclick=function(){
               $().getId("contextMenu").css("display","none");
            }
   }
   
   /**
    * 
    * 设置CSS样式  第一个参数可以是对象可以是字符串
    * 
    * @param {*} name 
    * @param {*} value 
    * @returns 
    */
   
   Base.prototype.css = function(name,value,el){
         if(arguments[2] != undefined){
            for(var k in arguments[0]){
                arguments[2].style[k] = arguments[0][k];
            }
         }else{
            if(typeof arguments[0] != "object"){
                for(var i = 0 ; i < this.elements.length; i++){
                    this.elements[i].style[name] = value;
                }
             }else{
               for(var i = 0 ; i <  this.elements.length; i++){
                    for(var k in arguments[0]){
                        this.elements[i].style[k] = arguments[0][k];
                    }
               }  
             }
         }

            return this;
   };

   /**
    * 
    * 在Canvas中生成一个圆形图像
    * 
    * @param {圆形图像的信息} object
    *  
    */

   Base.prototype.drawCircleImageinCanvas = function(obj){

        var new_canvas = document.createElement("canvas");

        new_canvas.width = obj.canvasDesc.c_w;
        new_canvas.height =  obj.canvasDesc.c_h;

        var ctx = new_canvas.getContext("2d");

        ctx.drawImage(obj.img,obj.x,obj.y,obj.w,obj.h);

        obj.canvasDesc.ctx.fillStyle = ctx.createPattern(new_canvas,"no-repeat");

         // 坐标的 公式     X： 图像的X轴坐标+图像的宽度-图像宽度的一半 Y：图像的Y轴坐标+图像的高度-图像高度的一半

        obj.canvasDesc.ctx.arc((obj.x + obj.w) - (obj.w / 2),(obj.y + obj.h) - (obj.h / 2),obj.w / 2,0,Math.PI * 2 , true);

        obj.canvasDesc.ctx.fill();

   };


   /**
    * 创建元素
    * @param {创建的元素名称} elName 
    * @param {被追加的元素名称} targetEl 
    * @param {创建的元素的子标签} childObj 
    * @param {轮播时调用的} desc
    */
    Base.prototype.createElement = function(elName,targetEl,childObj,desc){
        desc.isBanner = desc.isBanner || false;
        this.sliderElProperty = [];
        var el = document.createElement(elName);
        if(desc.isBanner){
             this.addClass(el,"b_list");
             var nums = desc.isInfinite ? childObj.length + 1 : childObj.length;
             el.style.width = (nums) * childObj[0].li.child.a.child.img.width+"px";
             el.style.height = childObj[0].li.child.a.child.img.height+"px";
             this.css({
                 position:"absolute",
                 listStyle:"none",
                 transition:"all "+desc.transitionTime,
                 left:"0"
             },null,el);
        }else{
            this.addClass(el,desc.class);
        }
 
        if(childObj){
                 for(var i = 0 ; i < childObj.length; i++){
                     this.createElements(childObj[i]);
                     el.appendChild(this.sliderElProperty[0]);
                     var isEnd = 0;
                     do{
                         if(desc.isBanner) this.sliderElProperty[isEnd].appendChild(this.sliderElProperty[isEnd+1]);
                         isEnd++;
                     }while(isEnd < this.sliderElProperty.length - 1)
                     this.sliderElProperty = [];
                 }
        }
        targetEl.appendChild(el);

        if(desc.isInfinite && desc.isBanner){
         el.appendChild(el.firstElementChild.cloneNode(true));
     }

     return el;
        
};


/**
 * 创建多个子元素
 * @param {创建的元素的描述集合} childObj 
 * @returns 
 */
Base.prototype.createElements = function(childObj){
     var targetEl = null;
     for(var k in childObj){
         targetEl = document.createElement(k);
         if(k == "li"){
             this.css({float:"left"},null,targetEl);
         }
         if(childObj[k].id) targetEl.id = childObj[k].id;
         if(childObj[k].class) this.addClass(targetEl,childObj[k].class);
         if(childObj[k].style) this.css(childObj[k].style,null,targetEl);
         if(childObj[k].text)  targetEl.innerHTML = childObj[k].text;
         if(childObj[k].href)  targetEl.href = childObj[k].href;
         if(childObj[k].target)  targetEl.target = childObj[k].target;
         if(childObj[k].title)  targetEl.title = childObj[k].title;
         if(childObj[k].src) targetEl.src = childObj[k].src;
         if(childObj[k].alt)  targetEl.alt = childObj[k].alt;
         if(childObj[k].width)  targetEl.width = childObj[k].width;
         if(childObj[k].height)  targetEl.height = childObj[k].height;
         if(this.el){
             if(childObj['img']){
                 this.css({width:childObj['img'].width+"px",height: childObj['img'].height+"px" },null,this.el);
             }
         }
         if(!childObj[k]['child'])childObj[k].child = {};
         if(childObj[k]['child']){
             this.sliderElProperty.push(targetEl);
             this.createElements(childObj[k]['child']);
         }
     }


};



   /**
    * 轮播插件
    * @param {轮播需要的参数信息} slideObj 
    *    
    * {
    *   containerStyle: {
    *       borderRadius:"10px"
    *   },
    */

   Base.prototype.slider = function(desc,slideObj){
        var index = 0;
        var cIndex = 0;
        var timer = null;
        desc.timeout = desc.timeout || 3000;
        desc.transitionTime = desc.transitionTime || "0.5s";
        desc.circleBg = desc.circleBg || "black";
        desc.prevAndNextBg = desc.prevAndNextBg || "black";
        desc.isBanner = true;
        desc.isInfinite =  desc.isInfinite||false;
        this.css({
            position:"relative",
            overflow:"hidden",
            margin:"0 auto"
        },null,this.el);

        // 创建轮播容器
        this.createElement("ul",this.el,slideObj,desc);

        var temp_circle = [];

        for(var i = 0 ; i < slideObj.length; i++){
            temp_circle[i] = {li:{class:"b_circle_"}}
        }

        if(!desc.isInfinite){
                // 正常创建元素的使用方法 支持两层
            this.createElement("ul",this.el,temp_circle,{class:"b_circle"});

            $().getClassName("b_circle").css({textAlign:"center",listStyle:"none",width:"100%",height:"15px",position:"absolute",bottom:"10px",left:"0"
        });

            $().getClassName("b_circle_").css({cursor:"pointer",transition:"all .3s",margin:"0 5px",opacity:0.3,float:"none",display:"inline-block",borderRadius:"50%",background:desc.circleBg,width:"15px",height:"15px"
            });

            var els = $().getClassName("b_circle_").elements;

            this.css({opacity:0.6},null,els[0]);

            var that = this;

            for(var i = 0 ; i <　els.length; i++){
                    (function(num){
                        　els[i].onclick = function(){
                            cIndex = index;
                            index = num;
                            setCircle();
                            $().getClassName("b_list").css({left:-index*desc.imgWidth+"px"});
                        }
            })(i)
            }
        }

         var prev = this.createElement("div",this.el,null,{class:"b_prev"});
         prev.innerHTML = "&lt;"

         var next = this.createElement("div",this.el,null,{class:"b_next"});
         next.innerHTML = "&gt;"

         var that = this;
        
         set(prev,"left");
         set(next,"right");


         function set(el,direction){

            that.css({color:"white",fontSize:"40px",lineHeight:"80px",fontFamily:"楷体",textAlign:"center",
            width:"40px",height:"80px",position:"absolute",zIndex:99,backgroundColor:desc.prevAndNextBg,
            opacity:0.3,transition:"all .3s",top:"calc(50% - 80px / 2)",userSelect:"none",cursor:"pointer"},null,el);

            if(direction == "left"){
                that.css({left:"0"},null,el);
            }else{
                that.css({right:"0"},null,el);
            }
         }

         var head = $("head").el[0];
         
         head.appendChild(this.createEl("style"," div.b_prev:hover,div.b_next:hover{ opacity:0.6 !important; } ",{type:"text/css"}));

         prev.onclick = function(){
              cIndex = index;
              index -- ;
              
              if(index < 0){
                 index = desc.isInfinite ? slideObj.length : slideObj.length-1 ;
                 if(desc.isInfinite){
                    $().getClassName("b_list").css({transition:"none"});
                    setTimeout(function(){
                        cIndex = index;
                        index--;
                        trans();
                    },50)
                 }
              }

              if(!desc.isInfinite){
                setCircle();
              }
              $().getClassName("b_list").css({left:-index*desc.imgWidth+"px"});
        }

        next.onclick = function(){
            go();
       }


      function setCircle(){
            that.css({opacity:0.2},null,els[cIndex]);
            that.css({opacity:0.6},null,els[index]);
      }


      function trans(){
        $().getClassName("b_list").css({left:-index*desc.imgWidth+"px"});
        $().getClassName("b_list").css({transition:"all "+desc.transitionTime});
      }


      timer  = setInterval(go,desc.timeout);

      function go(){
        cIndex = index;
        index ++ ;

        var isInfinite = desc.isInfinite ? slideObj.length : slideObj.length - 1; 

        if(index > isInfinite){
            index = 0;
            if(desc.isInfinite){
             $().getClassName("b_list").css({transition:"none"});
                 setTimeout(function(){
                     cIndex = index;
                     index ++;   
                     trans();
                 },50)
            }
         }

         if(!desc.isInfinite){
             setCircle();
         }

         $().getClassName("b_list").css({left:-index*desc.imgWidth+"px"});
         
      }

      this.el.onmouseover = function(){
           clearInterval(timer);
      }

      this.el.onmouseout = function(){
        timer  = setInterval(go,desc.timeout);
      }

    };


    Base.prototype.html = function(htmlText){
         for(var i = 0 ; i < this.elements.length; i++){
            this.elements[i].innerHTML = htmlText;
         }
    }

    Base.prototype.createEl = function(tagName,txt,obj){
          var t = document.createElement(tagName);
          t.innerHTML = txt;
          for(var k in obj){
             t.setAttribute(k,obj[k]);
          }
          return t;
    };

   
   })(window);