import FeatureLayer from 'esri/layers/FeatureLayer';
import SimpleRenderer from 'esri/renderers/SimpleRenderer';
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';
import TextSymbol from 'esri/symbols/TextSymbol';

const polygonFactory = ({url, outFields, symbol, id}) => {
  return new FeatureLayer({
    id, url, outFields,
    renderer: new SimpleRenderer({
      symbol: new SimpleFillSymbol(symbol)
    })
  });
}

const iconPointFactory = ({url, outFields, symbol, id}) => {
  return new FeatureLayer({
    id, url, outFields,
    renderer: new SimpleRenderer({
      symbol: new TextSymbol(symbol)
    })
  });
}

export const dcBoundary = {
  name: 'Washington DC Boundary',
  layer: polygonFactory({
    id: 'dcBoundary',
    url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Administrative_Other_Boundaries_WebMercator/MapServer/10/query?outFields=*&where=1%3D1',
    outFields: [],
    symbol: {
      color: [0, 100, 127, 0.1],
      style: 'solid',
      outline: {
        color: [0, 100, 127, 0.9],
        width: 2
      }
    }
  })
}

export const crime = {
  name: 'Crime',
  url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Recreation_WebMercator/MapServer/9/query?outFields=*&where=1%3D1',
  attributes: ['REPORT_DAT', 'SHIFT', 'OFFENSE', 'USE_TYPE']
}

export const parks = {
  name: 'Parks and Recreation Areas',
  layer: polygonFactory({
    id: 'parks',
    url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Recreation_WebMercator/MapServer/9/query?outFields=*&where=1%3D1',
    outFields: ['NAME', 'ADDRESS', 'USE_TYPE'],
    symbol: {
      color: [0, 125, 0, 0.5],
      style: 'solid',
      outline: {
        color: [0, 175, 0, 0.6],
        width: 1
      }
    }
  })
}

export const schools = {
  name: 'Public Schools',
  layer: iconPointFactory({
    id: 'schools',
    url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5/query?outFields=*&where=1%3D1',
    outFields: ['NAME', 'ADDRESS', 'FACUSE', 'LEVEL_'],
    symbol: {
      color: [255, 255, 255, 0.6],
      text: '\uea01',
      font: {
        size: 8,
        family: 'collecticons'
      }
    }
  })
}

export const police = {
  name: 'Police Stations',
  layer: iconPointFactory({
    id: 'police',
    url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/11/query?outFields=*&where=1%3D1',
    outFields: ['NAME', 'ADDRESS'],
    symbol: {
      color: [0, 200, 255, 1],
      text: '\uea09',
      font: {
        size: 10,
        family: 'collecticons'
      }
    }
  })
}
