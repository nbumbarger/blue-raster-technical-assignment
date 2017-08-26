import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createMap } from '../actions';

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode));
    }
  };
};

export class Home extends Component {
  componentDidMount () {
    if (!this.props.mapCtrl) {
      this.props.createMap(this.refs.mapView);
    }
  }

  render () {
    return (
      <section className='page__home'>
        <div ref='mapView' className='map-view'></div>
      </section>
    );
  }
}

Home.propTypes = {
  createMap: PropTypes.func,
  mapCtrl: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
