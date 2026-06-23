import { testDiagnosis } from 'backend/plantDiagnosis';

$w.onReady(function () {
    $w('#diagnoseButton').onClick(async () => {
        $w('#resultText').text = "Γίνεται διάγνωση...";

        const symptoms = $w('#symptomInput').value;

        try {
            const uploadedFiles = await $w("#uploadPlantImage").uploadFiles();

           const wixImageUrl = uploadedFiles[0]?.fileUrl;

           if (!wixImageUrl) {
            throw new Error("Δεν βρέθηκε φωτογραφία");
           }

          const imageUrl = "https://static.wixstatic.com/media/" +
            wixImageUrl
           .replace("wix:image://v1/", "")
            .split("/")[0];

           console.log("WIX URL:", wixImageUrl);
         $w('#resultText').text = wixImageUrl;
          return;
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