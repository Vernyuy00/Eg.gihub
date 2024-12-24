var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_region_cam_1 = new ol.format.GeoJSON();
var features_region_cam_1 = format_region_cam_1.readFeatures(json_region_cam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_cam_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_cam_1.addFeatures(features_region_cam_1);
var lyr_region_cam_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_cam_1, 
                style: style_region_cam_1,
                popuplayertitle: 'region_cam',
                interactive: true,
                title: '<img src="styles/legend/region_cam_1.png" /> region_cam'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_region_cam_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_region_cam_1];
lyr_region_cam_1.set('fieldAliases', {'gid': 'gid', 'nom_region': 'nom_region', 'code_regio': 'code_regio', 'area': 'area', 'pays': 'pays', 'name': 'name', });
lyr_region_cam_1.set('fieldImages', {'gid': 'TextEdit', 'nom_region': 'TextEdit', 'code_regio': 'TextEdit', 'area': 'TextEdit', 'pays': 'TextEdit', 'name': 'TextEdit', });
lyr_region_cam_1.set('fieldLabels', {'gid': 'no label', 'nom_region': 'inline label - always visible', 'code_regio': 'no label', 'area': 'no label', 'pays': 'no label', 'name': 'no label', });
lyr_region_cam_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});