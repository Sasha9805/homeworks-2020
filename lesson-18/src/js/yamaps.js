ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.611409, 37.201122],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });
  // Метка через Placemark
  // var myPlacemark = new ymaps.Placemark([55.611409, 37.201122], {
  //   balloonContent: "Ремонт квартир",
  //   hintContent: 'Ремонт квартир'
  // }, {
  //   preset: 'islands#orangeHomeIcon',
  //   // draggable: true
  // });
  // Метка через GeoObject
  // var myGeoObject = new ymaps.GeoObject({
  //   // Описание геометрии.
  //   geometry: {
  //     type: "Point",
  //     coordinates: [55.611409, 37.201122]
  //   },
  //   // Свойства.
  //   properties: {
  //     // Контент метки (внутри метки)
  //     // iconContent: 'Я тащусь',
  //     // При наведении на метку
  //     hintContent: 'Ремонт квартир',
  //     // Маленькое всплывающее окно при нажатии
  //     balloonContent: "Ремонт квартир"
  //   }
  // }, 
  // {
  //   // Опции.
  //   // Иконка метки будет растягиваться под размер ее содержимого.
  //   preset: 'islands#orangeHomeIcon',
  //   // preset: 'islands#orangeStretchyIcon',
  //   // Метку можно перемещать.
  //   draggable: true
  // });
  // Метка с собственным изображением без контента
  var myPlacemarkImg = new ymaps.Placemark([55.611409, 37.201122], {
    balloonContent: "Ремонт квартир",
    hintContent: 'Ремонт квартир'
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/footer/pin.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-30, -50]
  });
  // myMap.geoObjects.add(myPlacemark);
  // myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemarkImg);
  // Отменим прокуртку
  myMap.behaviors.disable('scrollZoom');
}