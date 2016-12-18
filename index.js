import React, { Component }  from 'react';
import {
  View
} from 'react-native';

export default class Line extends Component {
  static propTypes = {
    from: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired,
    }),
    to: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired,
    }),
    borderStyle: React.PropTypes.string,
    borderWidth: React.PropTypes.number,
    borderColor: React.PropTypes.string
  };

  render() {
    let from = this.props.from;
    let to = this.props.to;
    let borderStyle = this.props.borderStyle || 'solid';
    let borderWidth = this.props.borderWidth || '1';
    let borderColor = this.props.borderColor || '#000000';
    let len = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
    let angle = Math.atan2((to.y-from.y), (to.x-from.x));

    const style = {
      position: 'absolute',
      transform: [
        {translateX: (from.x - .5 * len * (1 - Math.cos(angle)))},
        {translateY: (from.y + .5 * len * Math.sin(angle))},
        {rotate: angle+'rad'}
      ],
      width: len,
      height: 0,
      borderStyle: borderStyle,
      borderWidth: borderWidth,
      borderColor:  borderColor,
    };

    return (
      <View style={style}/>
    );
  }
}
