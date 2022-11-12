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
        document.getElementById("wynik").innerHTML = liczba1 / liczba2;
    }
    else
    document.getElementById("wynik").innerHTML = "Nie można dzielić przez 0!";
}


function palindrome()
{

    var slowo = document.getElementById("slowo").value;
    var palindrom = [];
    var palindrom_string = "";
    var j = 0;

    for(var i = slowo.length-1; i >= 0; i--, j++)
    {
        palindrom[j] = slowo[i];
    }

    for(var i = 0; i < slowo.length; i++)
    {
        palindrom_string += palindrom[i];
    }
    
    if(slowo == palindrom_string)
    {
        document.getElementById("wynik2").innerHTML = "Słowo jest palindromem";
    }
    else
    {
        document.getElementById("wynik2").innerHTML = "Słowo nie jest palindromem";
    }

    


}