var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Airports_1 = new ol.format.GeoJSON();
var features_Airports_1 = format_Airports_1.readFeatures(json_Airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airports_1.addFeatures(features_Airports_1);
var lyr_Airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airports_1, 
                style: style_Airports_1,
                popuplayertitle: "Airports",
                interactive: true,
    title: 'Airports<br />\
    <img src="styles/legend/Airports_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/Airports_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/Airports_1_2.png" /> Small Airport<br />'
        });

lyr_CartoLight_0.setVisible(true);lyr_Airports_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Airports_1];
lyr_Airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'IATA Code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', 'Type_1': 'Type', });
lyr_Airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'ExternalResource', 'natlscale': 'Hidden', 'comments': 'Hidden', 'wikidataid': 'Hidden', 'name_ar': 'Hidden', 'name_bn': 'Hidden', 'name_de': 'Hidden', 'name_en': 'Hidden', 'name_es': 'Hidden', 'name_fr': 'Hidden', 'name_el': 'Hidden', 'name_hi': 'Hidden', 'name_hu': 'Hidden', 'name_id': 'Hidden', 'name_it': 'Hidden', 'name_ja': 'Hidden', 'name_ko': 'Hidden', 'name_nl': 'Hidden', 'name_pl': 'Hidden', 'name_pt': 'Hidden', 'name_ru': 'Hidden', 'name_sv': 'Hidden', 'name_tr': 'Hidden', 'name_vi': 'Hidden', 'name_zh': 'Hidden', 'wdid_score': 'Hidden', 'ne_id': 'Hidden', 'name_fa': 'Hidden', 'name_he': 'Hidden', 'name_uk': 'Hidden', 'name_ur': 'Hidden', 'name_zht': 'Hidden', 'Type_1': 'TextEdit', });
lyr_Airports_1.set('fieldLabels', {'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'Type_1': 'no label', });
lyr_Airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});