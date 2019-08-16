// OCR with JS using tesseract
import TesseractWorker from 'tesseract.js';
const worker = new TesseractWorker();

// event listener for the "go button"
var goBtn = document.getElementById("go_button")
goBtn.addEventListener("click", function(e) {
    var url = document.getElementById("url").value;
    runOCR(url);
});

function runOCR(url) {
    //Tesseract.recognize(url)
    worker.recognize(url)
        .then(function(result) {
            document.getElementById("ocr_results")
                .innerText = result.text;
        }).progress(function(result) {
            document.getElementById("ocr_status")
                .innerText = result["status"] + " (" +
                (result["progress"] * 100) + "%)";
        });
}
