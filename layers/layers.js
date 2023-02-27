var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Dwinover25_1 = new ol.format.GeoJSON();
var features_Dwinover25_1 = format_Dwinover25_1.readFeatures(json_Dwinover25_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dwinover25_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dwinover25_1.addFeatures(features_Dwinover25_1);
var lyr_Dwinover25_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dwinover25_1, 
                style: style_Dwinover25_1,
				'opacity': 0.7,
                interactive: true,
    title: 'Dwinover25<br />\
    <img src="styles/legend/Dwinover25_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/Dwinover25_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/Dwinover25_1_2.png" /> 10 - 20<br />\
    <img src="styles/legend/Dwinover25_1_3.png" /> 20 - 30<br />\
    <img src="styles/legend/Dwinover25_1_4.png" /> 30 - 40<br />\
    <img src="styles/legend/Dwinover25_1_5.png" /> 40 - 100<br />'
        });
var format_dwinunder25_2 = new ol.format.GeoJSON();
var features_dwinunder25_2 = format_dwinunder25_2.readFeatures(json_dwinunder25_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwinunder25_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwinunder25_2.addFeatures(features_dwinunder25_2);
var lyr_dwinunder25_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwinunder25_2, 
                style: style_dwinunder25_2,
				'opacity': 0.7,
                interactive: true,
    title: 'dwinunder25<br />\
    <img src="styles/legend/dwinunder25_2_0.png" /> 0.7 - 5<br />\
    <img src="styles/legend/dwinunder25_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/dwinunder25_2_2.png" /> 10 - 20<br />\
    <img src="styles/legend/dwinunder25_2_3.png" /> 20 - 30<br />\
    <img src="styles/legend/dwinunder25_2_4.png" /> 30 - 40<br />\
    <img src="styles/legend/dwinunder25_2_5.png" /> 40 - 24.6<br />'
        });
var format_Rwinunder25_3 = new ol.format.GeoJSON();
var features_Rwinunder25_3 = format_Rwinunder25_3.readFeatures(json_Rwinunder25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rwinunder25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rwinunder25_3.addFeatures(features_Rwinunder25_3);
var lyr_Rwinunder25_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rwinunder25_3, 
                style: style_Rwinunder25_3,
				'opacity': 0.7,
                interactive: true,
    title: 'Rwinunder25<br />\
    <img src="styles/legend/Rwinunder25_3_0.png" /> 0.2 - 5<br />\
    <img src="styles/legend/Rwinunder25_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/Rwinunder25_3_2.png" /> 10 - 20<br />\
    <img src="styles/legend/Rwinunder25_3_3.png" /> 20 - 30<br />\
    <img src="styles/legend/Rwinunder25_3_4.png" /> 30 - 22.5<br />\
    <img src="styles/legend/Rwinunder25_3_5.png" /> 22.5 - 24.7<br />'
        });
var format_Rwin40_4 = new ol.format.GeoJSON();
var features_Rwin40_4 = format_Rwin40_4.readFeatures(json_Rwin40_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rwin40_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rwin40_4.addFeatures(features_Rwin40_4);
var lyr_Rwin40_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rwin40_4, 
                style: style_Rwin40_4,
				'opacity': 0.7,
                interactive: true,
    title: 'Rwin40<br />\
    <img src="styles/legend/Rwin40_4_0.png" /> 0 - 5<br />\
    <img src="styles/legend/Rwin40_4_1.png" /> 5 - 10<br />\
    <img src="styles/legend/Rwin40_4_2.png" /> 10 - 20<br />\
    <img src="styles/legend/Rwin40_4_3.png" /> 20 - 30<br />\
    <img src="styles/legend/Rwin40_4_4.png" /> 30 - 40<br />\
    <img src="styles/legend/Rwin40_4_5.png" /> 40 - 100<br />'
        });
var format_Rwin2540_5 = new ol.format.GeoJSON();
var features_Rwin2540_5 = format_Rwin2540_5.readFeatures(json_Rwin2540_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rwin2540_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rwin2540_5.addFeatures(features_Rwin2540_5);
var lyr_Rwin2540_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rwin2540_5, 
                style: style_Rwin2540_5,
				'opacity': 0.7,
                interactive: true,
    title: 'Rwin25&40<br />\
    <img src="styles/legend/Rwin2540_5_0.png" /> 0 - 5<br />\
    <img src="styles/legend/Rwin2540_5_1.png" /> 5 - 10<br />\
    <img src="styles/legend/Rwin2540_5_2.png" /> 10 - 20<br />\
    <img src="styles/legend/Rwin2540_5_3.png" /> 20 - 30<br />\
    <img src="styles/legend/Rwin2540_5_4.png" /> 30 - 40<br />\
    <img src="styles/legend/Rwin2540_5_5.png" /> 40 - 39.9<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Dwinover25_1.setVisible(true);lyr_dwinunder25_2.setVisible(true);lyr_Rwinunder25_3.setVisible(true);lyr_Rwin40_4.setVisible(true);lyr_Rwin2540_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Dwinover25_1,lyr_dwinunder25_2,lyr_Rwinunder25_3,lyr_Rwin40_4,lyr_Rwin2540_5];
lyr_Dwinover25_1.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwinunder25_2.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_Rwinunder25_3.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_Rwin40_4.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_Rwin2540_5.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_Dwinover25_1.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwinunder25_2.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_Rwinunder25_3.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_Rwin40_4.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_Rwin2540_5.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_Dwinover25_1.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'no label', 'Party': 'no label', '1st': 'inline label', '2nd': 'inline label', 'Gap': 'inline label', 'Result': 'no label', 'Note': 'no label', });
lyr_dwinunder25_2.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'no label', 'Party': 'no label', '1st': 'inline label', '2nd': 'inline label', 'Gap': 'inline label', 'Result': 'no label', 'Note': 'no label', });
lyr_Rwinunder25_3.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'no label', 'Party': 'no label', '1st': 'inline label', '2nd': 'inline label', 'Gap': 'inline label', 'Result': 'no label', 'Note': 'no label', });
lyr_Rwin40_4.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'no label', 'Party': 'no label', '1st': 'inline label', '2nd': 'inline label', 'Gap': 'inline label', 'Result': 'no label', 'Note': 'no label', });
lyr_Rwin2540_5.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'no label', 'Party': 'no label', '1st': 'inline label', '2nd': 'inline label', 'Gap': 'inline label', 'Result': 'no label', 'Note': 'no label', });
lyr_Rwin2540_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});