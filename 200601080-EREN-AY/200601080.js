		function Hesapla() {
			var Sayi1=document.getElementById("Sayi1").value;
			var Sayi2=document.getElementById("Sayi2").value;
			var Islem=document.getElementById("Islem").value;

				if (Islem=="Topla") 
				{
					var Sonuc=parseInt(Sayi1)+parseInt(Sayi2);
                    var Operator="+";
				}else if (Islem=="Cikar") 
		    	{
                    var Sonuc=parseInt(Sayi1)-parseInt(Sayi2);
                    var Operator="-";
		    	}else if (Islem=="Carp") 
		    	{    
                    var Sonuc=parseInt(Sayi1)*parseInt(Sayi2);
                    var Operator="*"
		    	}else if (Islem=="Bol") 
		    	{
                    var Sonuc=parseInt(Sayi1)/parseInt(Sayi2);
                    var Operator="/";
		    	} 
			document.getElementById("Sonuc").innerHTML= "Sonuc: "+ Sayi1 + " " + Operator + " " + Sayi2 + " = " +Sonuc;
		}