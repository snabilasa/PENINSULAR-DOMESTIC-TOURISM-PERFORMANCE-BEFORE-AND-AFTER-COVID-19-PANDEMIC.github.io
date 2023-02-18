var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROJECTCARTOBASEMAP_1 = new ol.format.GeoJSON();
var features_PROJECTCARTOBASEMAP_1 = format_PROJECTCARTOBASEMAP_1.readFeatures(json_PROJECTCARTOBASEMAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJECTCARTOBASEMAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTCARTOBASEMAP_1.addFeatures(features_PROJECTCARTOBASEMAP_1);
var lyr_PROJECTCARTOBASEMAP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROJECTCARTOBASEMAP_1, 
                style: style_PROJECTCARTOBASEMAP_1,
                interactive: true,
    title: 'PROJECT CARTO — BASEMAP<br />\
    <img src="styles/legend/PROJECTCARTOBASEMAP_1_0.png" /> 0 - 7200<br />\
    <img src="styles/legend/PROJECTCARTOBASEMAP_1_1.png" /> 7200 - 120000<br />\
    <img src="styles/legend/PROJECTCARTOBASEMAP_1_2.png" /> 120000 - 180000<br />\
    <img src="styles/legend/PROJECTCARTOBASEMAP_1_3.png" /> 180000 - 250000<br />\
    <img src="styles/legend/PROJECTCARTOBASEMAP_1_4.png" /> 250000 - 790000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_PROJECTCARTOBASEMAP_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PROJECTCARTOBASEMAP_1];
lyr_PROJECTCARTOBASEMAP_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORACLEID': 'ORACLEID', 'Negeri': 'Negeri', 'Covid_Case': 'Covid_Case', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PROJECTCARTOBASEMAP_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORACLEID': 'TextEdit', 'Negeri': 'TextEdit', 'Covid_Case': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PROJECTCARTOBASEMAP_1.set('fieldLabels', {'OBJECTID': 'no label', 'ORACLEID': 'no label', 'Negeri': 'inline label', 'Covid_Case': 'inline label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_PROJECTCARTOBASEMAP_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});