

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

    setEntrada(sigToken)
    {
        this.entrada = sigToken;
    }
    checkTipo()
    {
        var reservada =this.entrada;
        if (reservada == 'int' || reservada == 'float' || reservada == 'void')
        {
            return 1;
        }
    }

    checkSum()
    {
        var reservada =this.entrada;
        if (reservada == '+' || reservada == '-')
        {
            return 1;
        }
    }

    checkMul()
    {
        var reservada =this.entrada;
        if (reservada == '*' || reservada == '/')
        {
            return 1;
        }
    }


    checkRel()
    {
        var reservada =this.entrada;
        if (reservada == '<' || reservada == '>' || reservada == "<=" || reservada == ">=")
        {
            return 1;
        }
    }


    checkOr()
    {
        var reservada =this.entrada;
        if (reservada == '||' )
        {
            return 1;
        }
    }

    checkAnd()
    {
        var reservada =this.entrada;
        if (reservada == '&&' )
        {
            return 1;
        }
    }

    checkNot()
    {
        var reservada =this.entrada;
        if (reservada == '!' )
        {
            return 1;
        }
    }

    checkEq()
    {
        var reservada =this.entrada;
        if (reservada == '==' || reservada == '!=' )
        {
            return 1;
        }
    }

    checkNothing()
    {
        var reservada =this.entrada;
        if (reservada == '{' || reservada == '}' || reservada == ';' || reservada == ',' 
                             || reservada == "(" || reservada == ")" 
                             || reservada=="=" || reservada == "while" || reservada == "if" 
                             || reservada == "return" )
        {
            return 1;
        }
    }

    checkId()
    {
        var alto = this.getEntrada();
        for(var tam = 0; tam < alto.length ; tam++)
        {
            if(alto.indexOf(' ') !== -1 || alto.indexOf('|')  !== -1 || alto.indexOf('<')  !== -1 ||  alto.indexOf('>')  !== -1 || alto.indexOf('(')  !== -1
            || alto.indexOf(')')  !== -1 || alto.indexOf('{')  !== -1  || alto.indexOf('}')  !== -1 ||   alto.indexOf('[')  !== -1 ||  alto.indexOf(']')  !== -1
            ||  alto.indexOf('+')  !== -1 || alto.indexOf('-')  !== -1 ||  alto.indexOf('/')  !== -1 ||  alto.indexOf('*')  !== -1 || alto.indexOf('.')  !== -1 
            ||  alto.indexOf(',')  !== -1 || alto.indexOf('^') !== -1 || alto.indexOf('~') !== -1 || alto.indexOf(',') !== -1 
            || alto.indexOf('#') !== -1 || alto.indexOf('!') !== -1 || alto.indexOf('¡') !== -1 || alto.indexOf('?') !== -1 || alto.indexOf('¿') !== -1  
            || alto.indexOf("'") !== -1)
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
        if(numberOfPoints == 1)
        {
            return 2;
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
   var res = lexema.getEntrada().split(" ");
   var tabla = [];
   for(var i =0; i< res.length ; i++)
   {
            lexema.setEntrada(res[i]);
                        if(lexema.checkTipo())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "tipo";
                            tabla[i][1] =  "4";
                            document.getElementById("salida").value =  document.getElementById("salida").value + "tipo";
                        }

                        else if(lexema.checkSum())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opSuma";
                            tabla[i][1] =  "5";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opSum";
                        }

                        else if(lexema.checkMul())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opMul";
                            tabla[i][1] =  "6";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opMul";
                        }
                        else if(lexema.checkRel())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opRelac";
                            tabla[i][1] =  "5";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opRel";
                        }

                        else if(lexema.checkOr())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opOr";
                            tabla[i][1] =  "8";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opOr";
                        }
                        else if(lexema.checkNot())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opNot";
                            tabla[i][1] =  "10";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opNot";
                        }
                        else if(lexema.checkAnd())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opAnd";
                            tabla[i][1] =  "9";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opAnd";
                        }
                        else if(lexema.checkEq())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opIgualdad";
                            tabla[i][1] =  "11";
                            document.getElementById("salida").value = document.getElementById("salida").value + "opIgualdad";
                        }
                        else if(lexema.checkNothing())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  lexema.getEntrada();
                            switch(lexema.entrada)
                            {
                                case ';':
                                    tabla[i][1] =  "12";
                                break;
                                case ',':
                                    tabla[i][1] =  "13";
                                break;
                                case '(':
                                    tabla[i][1] =  "14";
                                break;
                                case ')':
                                    tabla[i][1] =  "15";
                                break;
                                case '{':
                                    tabla[i][1] =  "16";
                                break;
                                case '}':
                                tabla[i][1] =  "17";
                                break;
                                case '=':
                                tabla[i][1] =  "18";
                                break;
                                case 'if':
                                tabla[i][1] =  "19";
                                break;
                                case 'while':
                                tabla[i][1] =  "20";
                                break;
                                case 'return':
                                tabla[i][1] =  "21";
                                break;
                            }
                           
                            document.getElementById("salida").value = "";
                        }
                        else if(!lexema.checkType())
                        {
                            if(lexema.checkNumber() == 0)
                            {
                                document.getElementById("salida").value ="Algo salio mal en la entrada";
                            }
                            if(lexema.checkNumber() == 1)
                            {
                                tabla[i] = [];
                                tabla[i][0] =  "entero";
                                tabla[i][1] =  "1";
                                document.getElementById("salida").value = document.getElementById("salida").value + "Entero";
                            }
                            if(lexema.checkNumber() == 2)
                            {
                                tabla[i] = [];
                                tabla[i][0] =  "real";
                                tabla[i][1] =  "2";
                                document.getElementById("salida").value = document.getElementById("salida").value + "Real";
                            }
                            
                        }

                        else if(lexema.checkType())
                        {
                            if(!lexema.checkId())
                            {
                                document.getElementById("salida").value ="Algo esta mal en la entrada";
                            }
                            else
                            {
                                tabla[i] = [];
                                tabla[i][0] =  "identificador";
                                tabla[i][1] =  "0";
                                document.getElementById("salida").value =document.getElementById("salida").value + "identificador";
                            }
                        }
        }
        console.log(tabla);
      
}