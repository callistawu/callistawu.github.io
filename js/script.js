const url = "../assets/resume.pdf";

let loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function (pdf) {
    pdf.getPage(1).then(function (page) {
        let scale = 2;
        let viewport = page.getViewport({ scale: scale, });
        let canvas = document.getElementById('resume');
        let context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        let renderContext = {
            canvasContext: context,
            viewport: viewport,
        };
        page.render(renderContext);
    });
})
document.addEventListener('webviewerloaded', function() {
    PDFViewerApplicationOptions.set('printResolution', 60);
  });