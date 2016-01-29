document.body.innerHTML = document.body.innerHTML.replace(/urlbutton/g, '<span class="label label-default" style="background-color:green">url</span>');
document.body.innerHTML = document.body.innerHTML.replace(/slidesbutton/g, '<span class="label label-default" style="background-color:red">slides</span>');


var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}
