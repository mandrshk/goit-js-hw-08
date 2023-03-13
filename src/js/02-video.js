
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new  Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
  });

  const getCurrentTime = function (currentTime) {
    const time = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(time));
  }

  player.on('timeupdate', throttle(getCurrentTime, 1000));

  player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0 );
  
  player
  .setColor('#aabbaa')
  .then(function (color) {
    console.log('The new color value: #aabbaa');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
