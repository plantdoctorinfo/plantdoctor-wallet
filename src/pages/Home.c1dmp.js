$w.onReady(function () {
  $w("#megaMenu").hide();

  // όταν πας πάνω στο menu -> ανοίγει
  $w("#menu17").onMouseIn(() => {
    $w("#megaMenu").show();
  });

  // όταν είσαι μέσα στο mega menu -> μένει ανοιχτό
  $w("#megaMenu").onMouseIn(() => {
    $w("#megaMenu").show();
  });

  // όταν φύγεις από το mega menu -> κλείνει
  $w("#megaMenu").onMouseOut(() => {
    $w("#megaMenu").hide();
  });
});