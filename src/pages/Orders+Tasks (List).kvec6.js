$w.onReady(function () {

  $w("#box2").onItemReady(($item, itemData, index) => {

    $item("#text4").onMouseIn(() => {
      $item("#text4").style.color = "#6B8E23";
    });

    $item("#text4").onMouseOut(() => {
      $item("#text4").style.color = "#000000";
    });

  });

});