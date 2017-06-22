//alert("plugin begin!");
function removeById(time){
    setTimeout(function(){
        //remove Ads by id
        var ad_ids=["layerd","layerd_google","google_ads_frame","google_ads_frame1","google_ads_frame5","layout_ads","google_image_div","adContent"];
        for(var count=0;count<ad_ids.length;count++){
            ad_id=ad_ids[count];
            //console.log("begin to remove Ads by id:"+ad_id);
            try{
                var node=document.getElementById(ad_id);
                if(node!=null){
                    console.log("remove Ads by id:"+ad_id);
                    node.parentNode.removeChild(node);
                    node.parentElement.removeChild(node);
                }
            }catch(err){
                console.log("error occurs when: remove Ads by id:"+ad_id);
            }
        }
    },time);
}
function removeByClass(time){
    setTimeout(function(){
        //remove Ads by class
        var ad_classes=["J_adv","GoogleActiveViewClass","adsbygoogle"];
        for(var count=0;count<ad_classes.length;count++){
            ad_class=ad_classes[count];
            //console.log("begin to remove Ads by class:"+ad_class);
            try{
                var nodes=document.getElementsByClassName(ad_class);
                var ads_num=nodes.length;
                for(var i=0;i<ads_num;i++)
                {
                    nodes=document.getElementsByClassName(ad_class);
                    if(nodes.length>0){
                        console.log("remove:"+i);
                        nodes[0].parentNode.removeChild(nodes[0]);
                    }
                }
            }catch(err){
                console.log("error occurs when: remove Ads by class:"+ad_class);
            }
        }
    },time);
}
function removeIFrame(time){
    var toUse=false;
    if(toUse==true){
        setTimeout(function(){
            //remove Ads by tag
            var ad_tags=["iframe"];
            for(var count=0;count<ad_tags.length;count++){
                ad_tag=ad_tags[count];
                //console.log("begin to remove Ads by tag:"+ad_tag);
                try{
                    var nodes=document.getElementsByTagName(ad_tag);
                    var ads_num=nodes.length;
                    for(var i=0;i<ads_num;i++)
                    {
                        nodes=document.getElementsByTagName(ad_tag);
                        if(nodes.length>0){
                            console.log("remove:"+i);
                            nodes[0].parentNode.removeChild(nodes[0]);
                        }
                    }
                }catch(err){
                    console.log("error occurs when: remove Ads by tag:"+ad_tag);
                }
            }
        },time);
    }
}
removeById(3000);
removeById(6000);
removeByClass(3000);
removeByClass(6000);
removeIFrame(3000);
removeIFrame(6000);
console.log("Anti Ads plugin works!");
//chrome.browserAction.onClicked.addListener(
//  function(tab) { //tab对象表示当前（用户点击browser action的时候）处于活动状态的tab
//    chrome.tabs.executeScript({
//      //设置活动状态的tab显示的页面的document对象的属性
//      code: 'document.body.style.backgroundColor="red"'//通过JS代码
//    });
//    chrome.tabs.executeScript({file: "background.js"});//通过JS文件
//});
//alert("plugin end!");
