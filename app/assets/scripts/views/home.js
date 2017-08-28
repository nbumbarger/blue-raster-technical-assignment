import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoBox from '../components/info-box';
import FilterControl from '../components/filter-control';

import {
  createMap,
  populateFilters,
  updateSelectedFeature } from '../actions';

export class Home extends Component {
  componentDidMount () {
    this.props.dispatch(createMap(this.refs.mapView));
    this.props.dispatch(populateFilters());
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
    const { filters, activeFilters, selectedFeature, dispatch } = this.props;
    const { layer, attributes } = selectedFeature;
    return (
      <section className='page__home'>
      {filters
        ?  <FilterControl
            filters={filters}
            activeFilters={activeFilters}
            dispatch={dispatch} />
        : ''}
        {layer
          ? <InfoBox type={layer.id} attributes={attributes} />
          : ''}
        <div ref='mapView' className='map-view'></div>
      </section>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  mapCtrl: PropTypes.object,
  filters: PropTypes.object,
  activeFilters: PropTypes.object,
  selectedFeature: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl,
    selectedFeature: state.map.selectedFeature,
    filters: state.map.filters,
    activeFilters: state.map.activeFilters
  };
};

export default connect(mapStateToProps)(Home);
