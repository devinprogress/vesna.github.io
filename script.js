
var user = prompt("papir - kamen - makaze");

var computer = Math.random();

if (computer < 0.33)
{
	computer = "papir";
}
else if (computer <= 0.66)
{
	computer = "kamen";
}
else
{
	computer = "makaze";
}



if (user == computer)
{
	document.write("Nerešeno, refresh odmah!");
}
else if (user == "papir") 
{
	if (computer == "makaze")
	{
		document.write("ha-ha! loser! :D")
	}
	else 
	{
		document.write("hm... aj opet!")
	}
}

else if (user == "kamen") 
{
	if (computer == "papir")
	{
		document.write("ha-ha! loser! :D")
	}
	else 
	{
		document.write("hm... aj opet!")
	}
}

else if (user == "makaze") 
{
	if (computer == "papir")
	{
		document.write("ha-ha! loser! :D")
	}
	else 
	{
		document.write("hm... aj opet!")
	}
}

