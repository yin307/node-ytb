const ytdl = require('ytdl-core');
const fs = require('fs')
ytdl.getInfo('https://www.youtube.com/watch?v=J8hMS_FkhBY').then(info => {
    console.log(info.formats);

    let response = [];

	info.formats    

});

// ytdl('https://www.youtube.com/watch?v=J8hMS_FkhBY').pipe(fs.createWriteStream('./video/downloaded.mp4'));
