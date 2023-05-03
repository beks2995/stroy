var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.880042, 74.589345],
        zoom: 18
    });
    var myIcon = DG.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/929/929426.png',
        iconSize: [20, 20],
    });
    DG.marker([42.880285, 74.588963], {icon: myIcon}).bindPopup('U! devz. Школа программирования').openPopup().addTo(map);
});