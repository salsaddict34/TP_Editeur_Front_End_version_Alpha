/*------------------------------------------------------------------*/
/* update the iframe view whenever HTML, CSS, or JS/jQuery is enter */
/*------------------------------------------------------------------*/

function updateIframe() {
    var textareaHtmlValue = $(".htmlArea__text").val();
    var textareaCssValue = $(".cssArea__text").val();
    var textareaJsValue = $(".jsArea__text").val();
    textareaJsValue = textareaJsValue.replaceAll(/\$/g, "parent.$");
    textareaJsValue = textareaJsValue.replaceAll(/\)\./g, ", document).");
    var cssLink = "<style>" + textareaCssValue + "</style>";
    var js = '<script>' + textareaJsValue + '<\/script>';
    var myFrame = $(".displayArea__result").contents().find('body');
    var head = $(".displayArea__result").contents().find("head");
    head.empty();
    head.append(cssLink);
    myFrame.html(textareaHtmlValue);
    myFrame.append(js);
    /****************************HTML**********************************************/
    var textHtml = $('.htmlArea__text').val();
    textHtml = textHtml.replaceAll(/<[^>]+>|$nbsp;| |\n/g, '');
    var countHtmlChar = textHtml.length;
    var htmlMaxLength = $('.htmlArea__text').attr('maxlength');
    var rateHtml = (countHtmlChar / htmlMaxLength) * 100;
    $(".htmlArea__progressbar").progressbar("value", countHtmlChar);
    $(".htmlArea__progressbar").progressbar("option", "max", htmlMaxLength);
    if (rateHtml < 25) {
        $('.htmlArea__progressbar > div').css({ 'background': 'green' });
    } else if (rateHtml > 25 && rateHtml < 50) {
        $('.htmlArea__progressbar > div').css({ 'background': 'yellow' });
    } else if (rateHtml > 50 && rateHtml < 75) {
        $('.htmlArea__progressbar > div').css({ 'background': 'orange' });
    } else if (rateHtml > 75) {
        $('.htmlArea__progressbar > div').css({ 'background': 'red' });
    }
    /******************************CSS****************************************/
    var textCss = $('.cssArea__text').val();
    textCss = textCss.replaceAll(/\{|\}|\s|:|;|\.|#|\n/g, '');
    var countCssChar = textCss.length
    var cssMaxLength = $('.cssArea__text').attr('maxlength');
    var rateCss = (countCssChar / cssMaxLength) * 100;
    $(".cssArea__progressbar").progressbar("value", countCssChar);
    $(".cssArea__progressbar").progressbar("option", "max", cssMaxLength);
    if (rateCss < 25) {
        $('.cssArea__progressbar > div').css({ 'background': 'green' });
    } else if (rateCss > 25 && rateCss < 50) {
        $('.cssArea__progressbar > div').css({ 'background': 'yellow' });
    } else if (rateCss > 50 && rateCss < 75) {
        $('.cssArea__progressbar > div').css({ 'background': 'orange' });
    } else if (rateCss > 75) {
        $('.cssArea__progressbar > div').css({ 'background': 'red' });
    }
    /******************************JS****************************************/
    var textJs = $('.jsArea__text').val();
    var countJsChar = textJs.length;
    var jsMaxLength = $('.jsArea__text').attr('maxlength');
    var rateJs = (countJsChar / jsMaxLength) * 100;
    $(".jsArea__progressbar").progressbar("value", countJsChar);
    $(".jsArea__progressbar").progressbar("option", "max", jsMaxLength);
    if (rateJs < 25) {
        $('.jsArea__progressbar > div').css({ 'background': 'green' });
    } else if (rateJs > 25 && rateJs < 50) {
        $('.jsArea__progressbar > div').css({ 'background': 'yellow' });
    } else if (rateJs > 50 && rateJs < 75) {
        $('.jsArea__progressbar > div').css({ 'background': 'orange' });
    } else if (rateJs > 75) {
        $('.jsArea__progressbar > div').css({ 'background': 'red' });
    }
    /*----------------------------------------------------------*/
    event.preventDefault();
}