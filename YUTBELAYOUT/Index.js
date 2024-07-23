document.getElementById("menu-icon")
        .addEventListener("click", function () {
          document.getElementById("sidebar").classList.toggle("hidden");
        });

function myfun(){
 window.open("https://studio.youtube.com/channel/UC6LVxfYTAl22nVp0uG1_Wfw/livestreaming");
}






const videos = [
    { src: "https://www.youtube.com/embed/FXwb8sHf5rM?si=cKCQEdeZlbAtlnb0", title: "Video Title 1", description: "Description for video 1" },
    { src: "https://www.youtube.com/embed/MKD2gqVUwJw?si=Lr6gVlzMtwaZlUpD", title: "Video Title 2", description: "Description for video 2" },
    { src: "https://www.youtube.com/embed/MKD2gqVUwJw?si=Lr6gVlzMtwaZlUpD", title: "Video Title 3", description: "Description for video 3" },
    { src: "https://www.youtube.com/embed/qJGR9lLcRc0?si=KddHHqRG6fcITjfF", title: "Video Title 4", description: "Description for video 4" },
    { src: "https://www.youtube.com/embed/sample_video_5", title: "Video Title 5", description: "Description for video 5" },
    { src: "https://www.youtube.com/embed/sample_video_6", title: "Video Title 6", description: "Description for video 6" },
    { src: "https://www.youtube.com/embed/sample_video_7", title: "Video Title 7", description: "Description for video 7" }
  ];

  const container = document.getElementById('video-container');

  videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    
    const iframe = document.createElement('iframe');
    iframe.width = "350";
    iframe.height = "200";
    iframe.src = video.src;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    const title = document.createElement('h4');
    title.textContent = video.title;

    const description = document.createElement('p');
    description.textContent = video.description;

    videoItem.appendChild(iframe);
    videoItem.appendChild(title);
    videoItem.appendChild(description);
    container.appendChild(videoItem);
  });