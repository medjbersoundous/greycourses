function moyenne() 
{
    var exam1 = parseFloat(document.getElementById("exam1").value);
    var exam2 = parseFloat(document.getElementById("exam2").value);
    var exam3 = parseFloat(document.getElementById("exam3").value);
    var exam4 = parseFloat(document.getElementById("exam4").value);
    var exam5 = parseFloat(document.getElementById("exam5").value);
    var exam6 = parseFloat(document.getElementById("exam6").value);
    var exam7 = parseFloat(document.getElementById("exam7").value);
    var cc1 = parseFloat(document.getElementById("cc1").value);
    var cc2 = parseFloat(document.getElementById("cc2").value);
    var cc3 = parseFloat(document.getElementById("cc3").value);
    var cc4 = parseFloat(document.getElementById("cc4").value);
    var cc5 = parseFloat(document.getElementById("cc5").value);
    var cc6 = parseFloat(document.getElementById("cc6").value);

    var moyenM1 = (exam1 * 0.6) + (cc1 * 0.4);
    var moyenM2 = (exam2 * 0.6) + (cc2 * 0.4);
    var moyenM3 = (exam3 * 0.6) + (cc3 * 0.4);
    var moyenM4 = (exam4 * 0.6) + (cc4 * 0.4);
    var moyenM5 = (exam5 * 0.6) + (cc5 * 0.4);
    var moyenM6 = (exam6 * 0.6) + (cc6 * 0.4);

    var moyen = (moyenM1 * 3 + moyenM2 * 3 + moyenM3*3 + moyenM4*2 + moyenM5*2 + moyenM6*2 +exam7) / 16;
    document.getElementById("moyen").value = moyen;
}

