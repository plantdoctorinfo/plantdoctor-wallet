import { testDiagnosis } from 'backend/plantDiagnosis';

$w.onReady(function () {
    $w('#diagnoseButton').onClick(async () => {
        $w('#resultText').text = "Γίνεται διάγνωση...";

        const symptoms = $w('#symptomInput').value;

        try {
            const uploadedFiles = await $w("#uploadPlantImage").uploadFiles();

            const imageUrl = uploadedFiles[0]?.fileUrl;

              if (!imageUrl) {
              throw new Error("Δεν βρέθηκε φωτογραφία");
              }

                const result = await testDiagnosis(symptoms, imageUrl);
            $w('#resultText').text =
                result + "\n\nΠεριγραφή: " + symptoms;
            } catch (error) {
               console.error(error);
               $w('#resultText').text =
             "Σφάλμα: " + (error.message || JSON.stringify(error));
             }
    });
});