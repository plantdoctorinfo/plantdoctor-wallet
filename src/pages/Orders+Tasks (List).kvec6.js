// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your $w.onReady(function () {
  $w("#box2").onItemReady(($item, itemData, index) => {

    $item("#text4").onMouseIn(() => {
      $item("#text4").style.color = "#6B8E23"; // hover χρώμα
    });

    $item("#text4").onMouseOut(() => {
      $item("#text4").style.color = "#000000"; // αρχικό
    });

  });

  



