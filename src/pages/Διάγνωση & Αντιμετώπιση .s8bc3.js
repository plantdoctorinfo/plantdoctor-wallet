import { testDiagnosis } from 'backend/plantDiagnosis';

$w.onReady(function () {
  $w("#diagnoseButton").onClick(async () => {
    $w("#resultText").text = "Γίνεται διάγνωση...";

    const symptoms = $w("#symptomInput").value;

    try {
      const result = await testDiagnosis(symptoms);

      $w("#resultText").text =
        result + "\n\nΠεριγραφή: " + symptoms;

    } catch (error) {
      console.error(error);
      $w("#resultText").text = "Σφάλμα επικοινωνίας με το AI.";
    }
  });
});