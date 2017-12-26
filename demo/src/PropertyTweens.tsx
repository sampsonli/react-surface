import * as React from 'react';
import {Box} from './Box';
import * as Color from 'color';

export class PropertyTweens extends React.Component {
  render () {
    return tests.map((properties, index) => (
      <Box key={index} properties={properties}/>
    ));
  }
}

const tests = [
  [{name: 'backgroundColor', off: Color.rgb('#ff0000'), on: Color.rgb('#00ff00')}],
  [{name: 'width', off: 100, on: 120}],
  [{name: 'height', off: 100, on: 120}],
  [{name: 'margin', off: 0, on: 10}],
  [{name: 'flex', off: 0.01, on: 1}],
  [{name: 'padding', off: 0, on: 10}],
  [{name: 'top', off: 0, on: 20}],
  [{name: 'right', off: 0, on: 20}],
  [{name: 'bottom', off: 0, on: 20}],
  [{name: 'left', off: 0, on: 20}],
  [{name: 'border', off: 0, on: 20}],
  [{name: 'borderColor', off: Color.rgb('#ff0000'), on: Color.rgb('#0000ff')}],
  [{name: 'transform.rotation', off: 0, on: Math.PI}],
  [{name: 'transform.skewX', off: 0, on: Math.PI}],
  [{name: 'transform.skewY', off: 0, on: Math.PI}],
  [{name: 'transform.x', off: 0, on: 25}],
  [{name: 'transform.y', off: 0, on: 25}],
  [{name: 'transform.scaleX', off: 1, on: 0.5}],
  [{name: 'transform.scaleY', off: 1, on: 0.5}],
  [{name: 'minWidth', off: 0, on: 300}],
  [{name: 'minHeight', off: 0, on: 300}],
  [{name: 'maxWidth', off: 0, on: 150}],
  [{name: 'maxHeight', off: 0, on: 150}],
];
