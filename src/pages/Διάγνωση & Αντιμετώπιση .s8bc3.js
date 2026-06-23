import { testDiagnosis } from 'backend/plantDiagnosis';

$w.onReady(function () {
    $w('#diagnoseButton').onClick(async () => {
        $w('#resultText').text = "Γίνεται διάγνωση...";

        const symptoms = $w('#symptomInput').value;

        try {
           const uploadedFiles = await $w("#uploadPlantImage").uploadFiles();

          $w("#resultText").text =
          uploadedFiles[0].fileUrl;

          return;
            console.log("FILE OBJECT:", uploadedFiles[0]);
                
            $w('#resultText').text =
                result + "\n\nΠεριγραφή: " + symptoms;
            } catch (error) {
               console.error(error);
               $w('#resultText').text =
             "Σφάλμα: " + (error.message || JSON.stringify(error));
             }
    });
});