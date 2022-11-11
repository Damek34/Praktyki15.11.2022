function dodaj()
{
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);

    document.getElementById("wynik").innerHTML = liczba1 + liczba2;
}

function odejmij()
{
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);

    document.getElementById("wynik").innerHTML = liczba1 - liczba2;
}


function pomnoz()
{
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);

    document.getElementById("wynik").innerHTML = liczba1 * liczba2;
}

function podziel()
{
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);


    if(liczba2!=0)
    {
        document.getElementById("wynik").innerHTML = liczba1 + liczba2;
    }
    else
    document.getElementById("wynik").innerHTML = "Nie można dzielić przez 0!";


    
}