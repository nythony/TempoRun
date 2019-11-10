import React, { Component } from 'react';
import Player from './Player';
import { Pedometer } from "expo-sensors"; 

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
  state = {
    isPedometerAvailable: "checking",
    prevTime: Date.now(),
    prevStepCount: 0,
    cadence: 150
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      var curTime = Date.now();
      var prevTime = this.state.prevTime;
      var timeDelta = curTime - prevTime;
      var currentStepCount = result.steps;
      var prevStepCount = this.state.prevStepCount;
      if (timeDelta >= 5000){
        this.setState({
          cadence: (currentStepCount-prevStepCount)/(timeDelta / 1000.0 / 60.0),
          prevStepCount: currentStepCount,
          prevTime: curTime
        });
      }
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return <Player tracks={TRACKS} isPedometerAvailable={this.state.isPedometerAvailable} cadence = {this.state.cadence}/>
  }
}


