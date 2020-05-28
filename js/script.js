const url = "../assets/resume.pdf";

const load = () => {
    let eventBus = new pdfjsViewer.EventBus();

    let loadingTask = pdfjsLib.getDocument({
        url: url
    });

    loadingTask.promise.then(function (pdfDocument) {
        return pdfDocument.getPage(1).then(function (pdfPage) {
            let pdfPageView = new pdfjsViewer.PDFPageView({
                container: document.getElementById("resume"),
                id: 1,
                scale: 1.1,
                defaultViewport: pdfPage.getViewport({ scale: 1 }),
                eventBus: eventBus,
                textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
                annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
            });

            pdfPageView.setPdfPage(pdfPage);
            return pdfPageView.draw();
        });
    });
}