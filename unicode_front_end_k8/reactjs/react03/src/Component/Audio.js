import React, { Component } from "react";
import Color from "./Color";

export class Audio extends Component {
  constructor() {
    super();
    this.audioRef = React.createRef();
    this.state = {
      isPlay: false,
    };
  }

  handlePlay = () => {
    let status = this.state.isPlay;
    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
      status = true;
    } else {
      this.audioRef.current.pause();
      status = false;
    }

    this.setState({ isPlay: status });
  };

  handleChangeVolume = (e) => {
    const volume = e.target.dataset.vol;
    this.audioRef.current.volume = volume / 100;
  };

  render() {
    const { isPlay } = this.state;
    return (
      <div>
        <audio src="/mp3/yeu-voi-vang-remix.mp3" controls ref={this.audioRef} />
        <hr />
        <button type="button" onClick={this.handlePlay}>
          {isPlay ? "Pause" : "Play"}
        </button>
        <button type="button" data-vol={0} onClick={this.handleChangeVolume}>
          Mute
        </button>
        <button type="button" data-vol={50} onClick={this.handleChangeVolume}>
          50%
        </button>
        <button type="button" data-vol={100} onClick={this.handleChangeVolume}>
          100%
        </button>
      </div>
    );
  }
}

export default Color(Audio);
