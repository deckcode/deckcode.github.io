var searchFunc=function(t,r,s){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),t=document.getElementById(r),n=document.getElementById(s);t.addEventListener("input",function(){var o='<ul class="search-result-list">',h=this.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="",this.value.trim().length<=0||(e.forEach(function(t){var n,e,r,s=!0,a=t.title.trim().toLowerCase(),i=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),c=t.url,l=-1,u=-1;""!=a&&""!=i&&h.forEach(function(t,e){n=a.indexOf(t),l=i.indexOf(t),n<0&&l<0?s=!1:(l<0&&(l=0),0==e&&(u=l))}),s&&(o+="<li><a href='"+c+"' class='search-result-title'>"+a+"</a>",e=t.content.trim().replace(/<[^>]+>/g,""),0<=u&&(c=u+80,(t=u-20)<0&&(t=0),0==t&&(c=100),c>e.length&&(c=e.length),r=e.substr(t,c),h.forEach(function(t){var e=new RegExp(t,"gi");r=r.replace(e,'<em class="search-keyword">'+t+"</em>")}),o+='<p class="search-result">'+r+"...</p>"),o+="</li>")}),o+="</ul>",n.innerHTML=o)})}})};