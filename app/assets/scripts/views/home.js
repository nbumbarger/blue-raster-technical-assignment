import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoBox from '../components/info-box'

import { createMap, updateSelectedFeature } from '../actions';

export class Home extends Component {
  componentDidMount () {
    this.props.dispatch(createMap(this.refs.mapView));
  }

  componentWillReceiveProps (nextProps) {
    const { mapCtrl, dispatch } = nextProps;
    mapCtrl.on('click', (event) => {
      mapCtrl.hitTest(event)
      .then((response) => {
        dispatch(updateSelectedFeature(response.results[0].graphic))
      })
    });
  }

  render () {
    const { layer, attributes } = this.props.selectedFeature
    return (
      <section className='page__home'>
        {layer
          ? ( <InfoBox
                type={layer.id}
                attributes={attributes}
              />)
          : ''}
        <div ref='mapView' className='map-view'></div>
      </section>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  mapCtrl: PropTypes.object,
  selectedFeature: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl,
    selectedFeature: state.map.selectedFeature
  };
};

export default connect(mapStateToProps)(Home);
