function converterPalavrasComAcentos(elemento) {
    let texto = $("#conteudo-texto").val();
    let textoConvertido = "";
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] === "Á") {
            textoConvertido += texto[i].replace("Á", "&Aacute;");
        } else if(texto[i] === "á") {
            textoConvertido += texto[i].replace("á", "&aacute;");
        } else if(texto[i] === "Â") {
            textoConvertido += texto[i].replace("Â", "&Acirc;");
        } else if(texto[i] === "â") {
            textoConvertido += texto[i].replace("â", "&acirc;");
        } else if(texto[i] === "À") {
            textoConvertido += texto[i].replace("À", "&Agrave;");
        } else if(texto[i] === "à") {
            textoConvertido += texto[i].replace("à", "&agrave;");
        } else if(texto[i] === "Å") {
            textoConvertido += texto[i].replace("Å", "&Aring;");
        } else if(texto[i] === "å") {
            textoConvertido += texto[i].replace("å", "&aring;");
        } else if(texto[i] === "Ã") {
            textoConvertido += texto[i].replace("Ã", "&Atilde;");
        } else if(texto[i] === "ã") {
            textoConvertido += texto[i].replace("ã", "&atilde;");
        } else if(texto[i] === "Ä") {
            textoConvertido += texto[i].replace("Ä", "&Auml;");
        } else if(texto[i] === "ä") {
            textoConvertido += texto[i].replace("ä", "&auml;");
        } else if(texto[i] === "Æ") {
            textoConvertido += texto[i].replace("Æ", "&AElig;");
        } else if(texto[i] === "æ") {
            textoConvertido += texto[i].replace("æ", "&aelig;");
        } else if(texto[i] === "É") {
            textoConvertido += texto[i].replace("É", "&Eacute;");
        } else if(texto[i] === "é") {
            textoConvertido += texto[i].replace("é", "&eacute;");
        } else if(texto[i] === "Ê") {
            textoConvertido += texto[i].replace("Ê", "&Ecirc;");
        } else if(texto[i] === "ê") {
            textoConvertido += texto[i].replace("ê", "&ecirc;");
        } else if(texto[i] === "È") {
            textoConvertido += texto[i].replace("È", "&Egrave;");
        } else if(texto[i] === "è") {
            textoConvertido += texto[i].replace("è", "&egrave;");
        } else if(texto[i] === "Ë") {
            textoConvertido += texto[i].replace("Ë", "&Euml;");
        } else if(texto[i] === "ë") {
            textoConvertido += texto[i].replace("ë", "&euml;");
        } else if(texto[i] === "Ð") {
            textoConvertido += texto[i].replace("Ð", "&ETH;");
        } else if(texto[i] === "ð") {
            textoConvertido += texto[i].replace("ð", "&eth;");
        } else if(texto[i] === "Í") {	
            textoConvertido += texto[i].replace("Í", "&Iacute;");
        } else if(texto[i] === "í") {	
            textoConvertido += texto[i].replace("í", "&iacute;");
        } else if(texto[i] === "Î") {	
            textoConvertido += texto[i].replace("Î", "&Icirc;");	
        } else if(texto[i] === "î") {	
            textoConvertido += texto[i].replace("î", "&icirc;");	
        } else if(texto[i] === "Ì") {	
            textoConvertido += texto[i].replace("Ì", "&Igrave;");
        } else if(texto[i] === "ì") {	
            textoConvertido += texto[i].replace("ì", "&igrave;");
        } else if(texto[i] === "Ï") {	
            textoConvertido += texto[i].replace("Ï", "&Iuml;");	
        } else if(texto[i] === "ï") {	
            textoConvertido += texto[i].replace("ï", "&iuml;");
        } else if (texto[i] === "Ó") {
            textoConvertido += texto[i].replace("Ó", "&Oacute;");
        } else if (texto[i] === "ó") {
            textoConvertido += texto[i].replace("ó", "&oacute;");
        } else if (texto[i] === "Ô") {
            textoConvertido += texto[i].replace("Ô", "&Ocirc;");
        } else if (texto[i] === "ô") {
            textoConvertido += texto[i].replace("ô", "&ocirc;");
        } else if (texto[i] === "Ò") {
            textoConvertido += texto[i].replace("Ò", "&Ograve;");
        } else if (texto[i] === "ò") {
            textoConvertido += texto[i].replace("ò", "&ograve;");
        } else if (texto[i] === "Ø") {
            textoConvertido += texto[i].replace("Ø", "&Oslash;");
        } else if (texto[i] === "ø") {
            textoConvertido += texto[i].replace("ø", "&oslash;");
        } else if (texto[i] === "Õ") {
            textoConvertido += texto[i].replace("Õ", "&Otilde;");
        } else if (texto[i] === "õ") {
            textoConvertido += texto[i].replace("õ", "&otilde;");
        } else if (texto[i] === "Ö") {
            textoConvertido += texto[i].replace("Ö", "&Ouml;");
        } else if (texto[i] === "ö") {
            textoConvertido += texto[i].replace("ö", "&ouml;");
        } else if (texto[i] === "Ú") { 
            textoConvertido += texto[i].replace("Ú","&Uacute;"); 
        } else if (texto[i] === "ú") { 
            textoConvertido += texto[i].replace("ú","&uacute;"); 
        } else if (texto[i] === "Û") { 
            textoConvertido += texto[i].replace("Û","&Ucirc;"); 
        } else if (texto[i] === "û") { 
            textoConvertido += texto[i].replace("û","&ucirc;"); 
        } else if (texto[i] === "Ù") { 
            textoConvertido += texto[i].replace("Ù","&Ugrave;"); 
        } else if (texto[i] === "ù") { 
            textoConvertido += texto[i].replace("ù","&ugrave;"); 
        } else if (texto[i] === "Ü") { 
            textoConvertido += texto[i].replace("Ü","&Uuml;"); 
        } else if (texto[i] === "ü") { 
            textoConvertido += texto[i].replace("ü","&uuml;"); 
        } else if (texto[i] === "Ç") { 
            textoConvertido += texto[i].replace("Ç","&Ccedil;"); 
        } else if (texto[i] === "ç") { 
            textoConvertido += texto[i].replace("ç","&ccedil;"); 
        } else if (texto[i] === "Ñ") { 
            textoConvertido += texto[i].replace("Ñ","&Ntilde;"); 
        } else if (texto[i] === "ñ") { 
            textoConvertido += texto[i].replace("ñ","&ntilde;"); 
        } else if (texto[i] === "Ý") { 
            textoConvertido += texto[i].replace("Ý","&Yacute;"); 
        } else if (texto[i] === "ý") { 
            textoConvertido += texto[i].replace("ý","&yacute;"); 
        } else if (texto[i] === "<") { 
            textoConvertido += texto[i].replace("<","&lt;"); 
        } else if (texto[i] === ">") { 
            textoConvertido += texto[i].replace(">","&gt;"); 
        } else if (texto[i] === "&") { 
            textoConvertido += texto[i].replace("&","&amp;"); 
        } else if (texto[i] === "®") { 
            textoConvertido += texto[i].replace("®","&reg;"); 
        } else if (texto[i] === "©") { 
            textoConvertido += texto[i].replace("©","&copy;"); 
        } else if (texto[i] === "Þ") { 
            textoConvertido += texto[i].replace("Þ","&THORN;"); 
        } else if (texto[i] === "þ") { 
            textoConvertido += texto[i].replace("þ","&thorn;"); 
        } else if (texto[i] === "ß") { 
            textoConvertido += texto[i].replace("ß","&szlig;"); 
        } else {
            textoConvertido += texto[i];
        }
    }
    if(elemento === '') {
        $("#conteudo-convertido").val(textoConvertido);
    } else {
        definirElementoTexto(elemento, textoConvertido);
    }
}

function definirElementoTexto(elemento, texto) {
    let conteudoTexto = texto.split("\n");
    console.log(conteudoTexto);
    var textoMaisElemento = "";
    for(let i = 0; i < conteudoTexto.length; i++) {
        if(conteudoTexto[i] === "") {
            textoMaisElemento = textoMaisElemento + "\n";
        } else {
            textoMaisElemento = textoMaisElemento + "<" + elemento + ">\n" + conteudoTexto[i] + "\n</"+elemento+">" + "\n";
            $("#conteudo-convertido").val(textoMaisElemento);
        }
    }
}