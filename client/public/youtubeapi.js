/**let params = {
  clientId: '561315511368-a43kqrt4nkgrcl2bns67s0n8fgni004e.apps.googleusercontent.com',
  clientSecret: '5nip2swdJDzm3Z2_C_HxfP-0',
  redirectUrl: 'http://localhost',
  key: 'AIzaSyCqxjWmGeGwXMCySbk4soaO6T1kGrS2a1A',
  scopes: 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl'
}; 

let youtube = new youtubeApi(params);**/

var maxVideos = 10;
   $(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: maxVideos,
      regionCode: 'US',
      key: 'AIzaSyCqxjWmGeGwXMCySbk4soaO6T1kGrS2a1A'},
      function(data){
        var output2;
        $.each(data.items, function(i, item){
          console.log(item);
          videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
                id = item.id;
          output2 = '<div id="outputVideos"><div>' +
                        '<a data-fancybox-type="iframe" class="fancyboxIframe" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" ><img src="' + thumb + '" class="img-responsive thumbnail" ></a>' +
                        '</div>' +
                        '<div class="input-group col-md-6">' +
                            '<h3 class="Vtitle"><a data-fancybox-type="iframe" class="fancyboxIframe" href="https://www.youtube.com/watch?v=' + id + '" target="_blank">' + videTitle + '</a></h3>'+
                        '</div><div  id="cTitle"><a href="https://www.youtube.com/channel/'+cID+'" target="_blank">'+channelTitle+'</a></div></div>' +
                    '<div class="clearfix"></div>';
          $('#trending').append(output2);
        })

      }
    );
});

