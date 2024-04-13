// Подключение библиотеки jQuery
$.getScript('jquery.js', function() {
    // Подключение библиотеки jsPDF
    $.getScript('lib.js', function() {
        // Создание кнопки и добавление её в body
        var downloadButton = $("<button>").attr("id", "downloadButton").text("Download Links as PDF").appendTo("body");

        // Обработчик события для кнопки
        $(document).on("click", "#downloadButton", function() {
            var links = [];
            // Получение всех ссылок на странице
            $("a").each(function() {
                links.push($(this).attr("href"));
            });
            var linksText = links.join("\n");
            var doc = new jsPDF();
            // Добавление текста ссылок в PDF
            doc.text(linksText, 10, 10);
            // Сохранение PDF
            doc.save("links.pdf");
        });
    });
});
