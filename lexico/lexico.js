

class Lexico
{
    constructor(entrada)
    {
        this.entrada = entrada;
    }

    checkType()
    {
        var cadena = this.getEntrada();
       
        return isNaN(cadena);
    }


    checkId()
    {
        var alto = this.getEntrada();
        for(var tam = 0; tam < alto.length ; tam++)
        {
            if(alto.indexOf(' ') !== -1 || alto.indexOf('|')  !== -1 || alto.indexOf('<')  !== -1 ||  alto.indexOf('>')  !== -1 || alto.indexOf('(')  !== -1
            || alto.indexOf(')')  !== -1 || alto.indexOf('{')  !== -1  || alto.indexOf('}')  !== -1 ||   alto.indexOf('[')  !== -1 ||  alto.indexOf(']')  !== -1
            ||  alto.indexOf('+')  !== -1 || alto.indexOf('-')  !== -1 ||  alto.indexOf('/')  !== -1 ||  alto.indexOf('*')  !== -1 || alto.indexOf('.')  !== -1 
            ||  alto.indexOf(',')  !== -1 || alto.indexOf('^') !== -1 || alto.indexOf('~') !== -1 || alto.indexOf(',') !== -1)
            {
               return 0;
            }
            else
            {
                return 1;
            }
        }
    }
    
    checkNumber()
    {  
        var cadena = this.getEntrada();
        var numberOfPoints = 0;
        for(var tam = 0 ; tam < cadena.length; tam++)
        {
            if (cadena.charAt(tam) == ".")
            {
                numberOfPoints++;
            }
         
        }
        if(cadena.charAt(cadena.length-1) == ".")
        {
            return 0;
        }
        if(cadena.charAt(0) == ".")
        {
            return 0;
        }
        if(numberOfPoints >= 2)
        {
            return 0;
        }
        else
        {
            return 1;
        }
      
    }
    
    getEntrada()
    {
        return this.entrada;
    }




}



function callLexico()
{
   var lexema = new Lexico(document.getElementById("entrada").value);
   if(lexema.checkType())
   {
       if(!lexema.checkId())
       {
           console.log("Algo esta mal en la entrada");
       }
   }
   else{
       if(!lexema.checkNumber())
       {
        console.log("Algo salio mal en la entrada");
       }
      
   }


}