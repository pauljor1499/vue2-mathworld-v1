export let AssignmentsData = [
    {
        headers: [
            "#",
            "Title",
            "Total items",
            "Open from",
            "Close to",
            "Submitted",
            "Status",
        ],
    },

    {
        assignment_types: [
            {
                title: "College Entrance Test",
                type: "CET",
            },
            {
                title: "STAAR Released Test",
                type: "SRT",
            },
            {
                title: "MathWorld Test",
                type: "MW",
            },
        ],
    },
];

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export class AssignmentService {
    getGradebookData() {
        return AssignmentsData;
    }

    getTableHeaders() {
        return AssignmentsData[0].headers;
    }

    getAssignmentTypes() {
        return AssignmentsData[1].assignment_types;
    }

    printToPDF(html) {
        html2canvas(html).then((canvas) => {
            const image = { type: "jpeg", quality: 0.98 };
            const margin = [0.5, 0.5];

            var imgWidth = 8.5;
            var pageHeight = 11;

            var innerPageWidth = imgWidth - margin[0] * 2;
            var innerPageHeight = pageHeight - margin[1] * 2;

            // Calculate the number of pages.
            var pxFullHeight = canvas.height;
            var pxPageHeight = Math.floor(
                canvas.width * (pageHeight / imgWidth)
            );
            var nPages = Math.ceil(pxFullHeight / pxPageHeight);

            // Define pageHeight separately so it can be trimmed on the final page.
            var pageHeight = innerPageHeight;

            // Create a one-page canvas to split up the full image.
            var pageCanvas = document.createElement("canvas");
            var pageCtx = pageCanvas.getContext("2d");
            pageCanvas.width = canvas.width;
            pageCanvas.height = pxPageHeight;

            // Initialize the PDF.
            var pdf = new jsPDF("p", "in", [8.5, 11]);

            for (var page = 0; page < nPages; page++) {
                // Trim the final page to reduce file size.
                if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
                    pageCanvas.height = pxFullHeight % pxPageHeight;
                    pageHeight =
                        (pageCanvas.height * innerPageWidth) / pageCanvas.width;
                }

                // Display the page.
                var w = pageCanvas.width;
                var h = pageCanvas.height;
                pageCtx.fillStyle = "white";
                pageCtx.fillRect(0, 0, w, h);
                pageCtx.drawImage(
                    canvas,
                    0,
                    page * pxPageHeight,
                    w,
                    h,
                    0,
                    0,
                    w,
                    h
                );

                // Add the page to the PDF.
                if (page > 0) {
                    pdf.addPage();
                }

                var imgData = pageCanvas.toDataURL(
                    "image/" + image.type,
                    image.quality
                );

                pdf.addImage(
                    imgData,
                    image.type,
                    margin[1],
                    margin[0],
                    innerPageWidth,
                    pageHeight
                );
            }

            pdf.autoPrint();
            pdf.output("dataurlnewwindow");
            // pdf.save(filename);
        });
    }
}
