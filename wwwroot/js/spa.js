﻿$(document).ready(function () {
    $('#map').click(function () {
        $('#page-content-wrapper').load('map.html')
    })

    $('#treasure').click(function () {
        $('#page-content-wrapper').load('treasure.html')
    })

    $('#data').click(function () {
        $('#page-content-wrapper').load('data.html')
    })
     
});