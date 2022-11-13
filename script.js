var tab1 = [1, 5 , 34, 10, 0, 5];
var tab2 = ["Alicja", "Robert", "Pomścibor", "Adam", "Aleksandra"];






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

function zadanie3(array)
{
    var max = array[0];
    var max2;

        if(typeof(array[0]) === "number")
        {

         for(let i = 1; i < array.length; i++)
            {
               if(array[i] > max)
                {
                max2 = max;
                max = array[i];
                }
                
                if(array[i] > max2 && array[i] < max)
                {
                    max2 = array[i]
                }
            }
        } 
         

        if(typeof(array[0]) ==="string")
        {
            max2 = "";
            for(let i = 1; i < array.length; i++)
            {
                if(array[i].length > max.length)
                {
                    max2 = max;
                    max = array[i];
                }
                if(array[i].length > max2.length && array[i].length < max.length)
                {
                    max2 = array[i]
                }
            }
        }
    return max2;

}

document.getElementById("wynik3").innerHTML = "Druga największa liczba z tablicy to: " + zadanie3(tab1);
document.getElementById("wynik4").innerHTML = "Drugi największy element tablicy to: " + zadanie3(tab2);
