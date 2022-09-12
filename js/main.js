/********************************************************************************/
function updateHtmlSelect(sel){
    let textHtml = $('.htmlArea__text').val();
    let textParsed = textHtml.replaceAll(/<[^>]+>|$nbsp;| |\n/g, '');
    let delta = textHtml.length - textParsed.length;
    $('.htmlArea__text').attr('maxlength', sel.value + delta);
    $('.htmlArea__maxChar').text('(max'+ ' '+sel.value+' '+'caractères)');
}
function updateCssSelect(sel){
    let textCss = $('.cssArea__text').val();
    let textCssParsed = textCss.replaceAll(/\{|\}|\s|:|;|\.|#|\n/g, '');
    let deltaCss = textCss.length - textCssParsed.length;
    $('.cssArea__text').attr('maxlength', sel.value + deltaCss);
    $('.cssArea__maxChar').text('(max'+ ' '+sel.value+' '+'caractères)');
}
function updateJsSelect(sel){
    $('.jsArea__text').attr('maxlength', sel.value);
    $('.jsArea__maxChar').text('(max'+ ' '+sel.value+' '+'caractères)');
}
/*******************************************************************/
function insertTag(tag) {
    var textareaHtmlValue = $(".htmlArea__text").val();
    switch (tag) {
        case 'div':
            $(".htmlArea__text").val(textareaHtmlValue + "<div></div>");
        break;
        case 'p': 
            $(".htmlArea__text").val(textareaHtmlValue + "<p></p>");
        break;
        case 'section': 
            $(".htmlArea__text").val(textareaHtmlValue + "<section></section>");
        break;
        case 'form': 
            $(".htmlArea__text").val(textareaHtmlValue + "<form></form>");
        break;
        case 'a': 
            $(".htmlArea__text").val(textareaHtmlValue + "<a></a>");
        break;
        case 'image': 
            $(".htmlArea__text").val(textareaHtmlValue + "<image/>");
        break;
        case 'b': 
            $(".htmlArea__text").val(textareaHtmlValue + "<b></b>");
        break;
        case 'i': 
            $(".htmlArea__text").val(textareaHtmlValue + "<i></i>");
        break;
        case 'button': 
            $(".htmlArea__text").val(textareaHtmlValue + "<button onclick=''></button>");
        break;
    }
    event.preventDefault();
}
/*******************************************************************/
function insertTitleSelect(sel) {
    var textareaHtmlValue = $(".htmlArea__text").val();
    switch (sel.value) {
        case 'h1':
            $(".htmlArea__text").val(textareaHtmlValue + "<h1></h1>");
        break;
        case 'h2': 
            $(".htmlArea__text").val(textareaHtmlValue + "<h2></h2>");
        break;
        case 'h3': 
            $(".htmlArea__text").val(textareaHtmlValue + "<h3></h3>");
        break;
    }
}
/*******************************************************************/
function insertColorSelect(sel) {
    var textareaCssValue = $(".cssArea__text").val();
    switch (sel.value) {
        case 'Blanc':
            $(".cssArea__text").val(textareaCssValue + "#FFFFFF");
        break;
        case 'Rouge':
            $(".cssArea__text").val(textareaCssValue + "#C0392B");
        break;
        case 'Vert':
            $(".cssArea__text").val(textareaCssValue + "#27AE60");
        break;
        case 'Bleu':
            $(".cssArea__text").val(textareaCssValue + "#2980B9");
        break;
        case 'Jaune':
            $(".cssArea__text").val(textareaCssValue + "#F1C40F");
        break;
    }
}