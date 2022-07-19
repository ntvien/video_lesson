import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  Slider,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
// import Orientation from 'react-native-orientation';

const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
  let h = 0,
    i = 0,
    s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // zero padding
  let zero = function (v) {
    return v >> 0 < 10 ? '0' + v : v;
  };
  return [zero(h), zero(i), zero(s)].join(':');
}

export default class VideoLesson extends Component {
  static navigationOptions = {
    headerTitle: 'Video Lesson',
  };

  constructor(props) {
    super(props);
    this.state = {
      // videoUrl: "",
      // videoCover: "",
      videoWidth: screenWidth,
      videoHeight: (screenWidth * 9) / 16,
      showVideoCover: true,
      showVideoControl: false,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      playFromBeginning: false,
    };
  }

  render() {
    const {item, index} = this.props;
    console.log('ưeeeê', item);
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <View
          style={{
            width: this.state.videoWidth,
            height: this.state.videoHeight,
            backgroundColor: '#000000',
          }}>
          <Video
            ref={ref => (this.videoPlayer = ref)}
            // source={{uri: this.state.videoUrl}}
            source={{
              uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={!this.state.isPlaying}
            resizeMode={'contain'}
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            onLoadStart={this._onLoadStart}
            onLoad={this._onLoaded}
            onProgress={this._onProgressChanged}
            onEnd={this._onPlayEnd}
            onError={this._onPlayError}
            onBuffer={this._onBuffering}
            style={{
              width: this.state.videoWidth,
              height: this.state.videoHeight,
            }}
          />
          {this.state.showVideoCover ? (
            <Image
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.state.videoWidth,
                height: this.state.videoHeight,
              }}
              resizeMode={'cover'}
              source={{uri: this.state.videoCover}}
            />
          ) : null}
          <TouchableWithoutFeedback
            onPress={() => {
              this.hideControl();
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.state.videoWidth,
                height: this.state.videoHeight,
                backgroundColor: this.state.isPlaying
                  ? 'transparent'
                  : 'rgba(0, 0, 0, 0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {this.state.isPlaying ? null : (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.onPressPlayButton();
                  }}>
                  <Image
                    style={styles.playButton}
                    source={require('../../../image/icon_video_play.png')}
                  />
                </TouchableWithoutFeedback>
              )}
            </View>
          </TouchableWithoutFeedback>
          {this.state.showVideoControl ? (
            <View style={[styles.control, {width: this.state.videoWidth}]}>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  this.onControlPlayPress();
                }}>
                <Image
                  style={styles.playControl}
                  source={
                    this.state.isPlaying
                      ? require('../../../image/icon_control_pause.png')
                      : require('../../../image/icon_control_play.png')
                  }
                />
              </TouchableOpacity>
              <Text style={styles.time}>
                {formatTime(this.state.currentTime)}
              </Text>
              <Slider
                style={{flex: 1}}
                maximumTrackTintColor={'#999999'}
                minimumTrackTintColor={'#00c06d'}
                thumbImage={require('../../../image/icon_control_slider.png')}
                value={this.state.currentTime}
                minimumValue={0}
                maximumValue={this.state.duration}
                onValueChange={currentTime => {
                  this.onSliderValueChanged(currentTime);
                }}
              />
              <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  // this.onControlShrinkPress();
                }}>
                <Image
                  style={styles.shrinkControl}
                  source={
                    this.state.isFullScreen
                      ? require('../../../image/icon_control_shrink_screen.png')
                      : require('../../../image/icon_control_full_screen.png')
                  }
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            title={'Start playing'}
            onPress={() => {
              this.playVideo();
            }}
          />
          <Button
            title={'Pause playback'}
            onPress={() => {
              this.pauseVideo();
            }}
          />
          <Button
            title={'switch video'}
            onPress={() => {
              this.switchVideo(
                'http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4',
                0,
              );
            }}
          />
        </View>
      </View>
    );
  }

  /// -------Video component callback event-------

  _onLoadStart = () => {
    console.log('Video starts to load');
  };

  _onBuffering = () => {
    console.log('Video buffering...');
  };

  _onLoaded = data => {
    console.log('Video loading complete');
    this.setState({
      duration: data.duration,
    });
  };

  _onProgressChanged = data => {
    console.log('Video progress update');
    if (this.state.isPlaying) {
      this.setState({
        currentTime: data.currentTime,
      });
    }
  };

  _onPlayEnd = () => {
    console.log('Video playback ends');
    this.setState({
      currentTime: 0,
      isPlaying: false,
      playFromBeginning: true,
    });
  };

  _onPlayError = () => {
    console.log('Video playback failed');
  };

  ///-------Control click event-------

  /// Controls showing and hiding the player toolbar
  hideControl() {
    if (this.state.showVideoControl) {
      this.setState({
        showVideoControl: false,
      });
    } else {
      this.setState(
        {
          showVideoControl: true,
        },
        // Auto hide toolbar after 5 seconds
        () => {
          setTimeout(() => {
            this.setState({
              showVideoControl: false,
            });
          }, 5000);
        },
      );
    }
  }

  /// Clicked the play button in the middle of the player
  onPressPlayButton() {
    let isPlay = !this.state.isPlaying;
    this.setState({
      isPlaying: isPlay,
      showVideoCover: false,
    });
    if (this.state.playFromBeginning) {
      this.videoPlayer.seek(0);
      this.setState({
        playFromBeginning: false,
      });
    }
  }

  /// Clicked the play button on the toolbar
  onControlPlayPress() {
    this.onPressPlayButton();
  }

  /// The fullscreen button on the toolbar was clicked
  // onControlShrinkPress() {
  //   if (this.state.isFullScreen) {
  //     Orientation.lockToPortrait();
  //   } else {
  //     Orientation.lockToLandscape();
  //   }
  // }

  /// progress bar value change
  onSliderValueChanged(currentTime) {
    this.videoPlayer.seek(currentTime);
    if (this.state.isPlaying) {
      this.setState({
        currentTime: currentTime,
      });
    } else {
      this.setState({
        currentTime: currentTime,
        isPlaying: true,
        showVideoCover: false,
      });
    }
  }

  // The width and height will change when the screen is rotated,
  // which can be processed in the onLayout method, which is more timely than
  // monitoring the screen rotation to obtain the width and height changes.
  _onLayout = event => {
    // Get the width and height of the root View
    let {width, height} = event.nativeEvent.layout;
    console.log('通过onLayout得到的宽度：' + width);
    console.log('通过onLayout得到的高度：' + height);

    // Generally, the width is larger than the height under the horizontal screen of the device.
    // Here you can use this to judge the horizontal and vertical screens.
    let isLandscape = width > height;
    if (isLandscape) {
      this.setState({
        videoWidth: width,
        videoHeight: height,
        isFullScreen: true,
      });
    } else {
      this.setState({
        videoWidth: width,
        videoHeight: (width * 9) / 16,
        isFullScreen: false,
      });
    }
    // Orientation.unlockAllOrientations();
  };

  /// -------External call event method-------

  // Play the video and provide it to external calls
  playVideo() {
    this.setState({
      isPlaying: true,
      showVideoCover: false,
    });
  }

  /// Pause playback, available to external calls
  pauseVideo() {
    this.setState({
      isPlaying: false,
    });
  }

  /// Switch the video and specify the time when the video starts to play,
  // which is provided to external calls
  switchVideo(videoURL, seekTime) {
    this.setState({
      videoUrl: videoURL,
      currentTime: seekTime,
      isPlaying: true,
      showVideoCover: false,
    });
    this.videoPlayer.seek(seekTime);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  playButton: {
    width: 50,
    height: 50,
  },
  playControl: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  shrinkControl: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
  time: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  control: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
