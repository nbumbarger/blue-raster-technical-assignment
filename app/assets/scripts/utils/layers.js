import FeatureLayer from 'esri/layers/FeatureLayer';
import SimpleRenderer from 'esri/renderers/SimpleRenderer';
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';

const polygonFactory = ({url, outFields, symbol}) => {
  return new FeatureLayer({
    url,
    outFields,
    renderer: new SimpleRenderer({
      symbol: new SimpleFillSymbol(symbol)
    })
  });
}

export const dcBoundary = {
  name: 'Washington DC Boundary',
  layer: polygonFactory({
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
  url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Recreation_WebMercator/MapServer/9/query?outFields=*&where=1%3D1',
  attributes: ['NAME', 'ADDRESS', 'USE_TYPE']
}

export const schools = {
  name: 'Public Schools',
  url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5/query?outFields=*&where=1%3D1',
  attributes: ['NAME', 'ADDRESS', 'FACUSE', 'LEVEL_']
}

export const police = {
  name: 'Police Stations',
  url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/11/query?outFields=*&where=1%3D1',
  attributes: ['NAME', 'ADDRESS']
}
