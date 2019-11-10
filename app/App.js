import React, { Component } from 'react';
import Player from './Player';
var So = require('./StressedOut.mp3');
var Jb = require('./Justin.mp3');
var Drake = require('./Drake.mp3');
var Shm = require('./Shm.mp3');

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: So,
    bpm: 170
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: Jb,
    bpm: 100
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: Drake,
    bpm: 135
  },
  {
    title: 'Greyhound',
    artist: 'Swedish House Mafia',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Greyhoundsong.jpg',
    audioUrl: Shm,
    bpm: 123
  }
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


