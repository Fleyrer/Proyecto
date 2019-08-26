

class Lexico
{
    constructor(entrada)
    {
        this.entrada = this.arrayToString(entrada.split("\n"));
        console.log(this.entrada);
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
            || alto.indexOf("'") !== -1 || alto.indexOf('&') !== -1 || alto.indexOf('"') !== -1)
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

    arrayToString(arr)
    {
        var str = "";
        for( var i = 0 ; i < arr.length; i++)
        {
            
           str = str.concat(arr[i] + " ");
        }

        return str;
    }

    genera_tabla(data) {
        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];
       
        // Crea un elemento <table> y un elemento <tbody>
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
       
        // Crea las celdas
        for (var i = 0; i < data.length-1; i++) {
          // Crea las hileras de la tabla
          var hilera = document.createElement("tr");
       
          for (var j = 0; j < 3; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(data[i][j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
       
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
        }
       
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("border", "2");
      }


}



function callLexico()
{
   var lexema = new Lexico(document.getElementById("entrada").value);
   var res = lexema.getEntrada().split(" ");
   
   console.log(lexema.getEntrada());
   var tabla = [];
   for(var i =0; i< res.length ; i++)
   {
            lexema.setEntrada(res[i]);
                        if(lexema.checkTipo())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "tipo";
                            tabla[i][1] =  "4";
                            tabla[i][2] =  lexema.getEntrada();
                          
                        }

                        else if(lexema.checkSum())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opSuma";
                            tabla[i][1] =  "5";
                            tabla[i][2] =  lexema.getEntrada();
                           
                        }

                        else if(lexema.checkMul())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opMul";
                            tabla[i][1] =  "6";
                            tabla[i][2] =  lexema.getEntrada();
                           
                        }
                        else if(lexema.checkRel())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opRelac";
                            tabla[i][1] =  "5";
                            tabla[i][2] =  lexema.getEntrada();
                        }

                        else if(lexema.checkOr())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opOr";
                            tabla[i][1] =  "8";
                            tabla[i][2] =  lexema.getEntrada();
                          
                        }
                        else if(lexema.checkNot())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opNot";
                            tabla[i][1] =  "10";
                            tabla[i][2] =  lexema.getEntrada();
                           
                        }
                        else if(lexema.checkAnd())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opAnd";
                            tabla[i][1] =  "9";
                            tabla[i][2] =  lexema.getEntrada();
                            
                        }
                        else if(lexema.checkEq())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  "opIgualdad";
                            tabla[i][1] =  "11";
                            tabla[i][2] =  lexema.getEntrada();
                            
                        }
                        else if(lexema.checkNothing())
                        {
                            tabla[i] = [];
                            tabla[i][0] =  lexema.getEntrada();
                            switch(lexema.entrada)
                            {
                                case ';':
                                    tabla[i][1] =  "12";
                                    tabla[i][2] =  lexema.getEntrada();
                                break;
                                case ',':
                                    tabla[i][1] =  "13";
                                    tabla[i][2] =  lexema.getEntrada();
                                break;
                                case '(':
                                    tabla[i][1] =  "14";
                                    tabla[i][2] =  lexema.getEntrada();
                                break;
                                case ')':
                                    tabla[i][1] =  "15";
                                    tabla[i][2] =  lexema.getEntrada();
                                break;
                                case '{':
                                    tabla[i][1] =  "16";
                                    tabla[i][2] =  lexema.getEntrada();
                                break;
                                case '}':
                                tabla[i][1] =  "17";
                                tabla[i][2] =  lexema.getEntrada();
                                break;
                                case '=':
                                tabla[i][1] =  "18";
                                tabla[i][2] =  lexema.getEntrada();
                                break;
                                case 'if':
                                tabla[i][1] =  "19";
                                tabla[i][2] =  lexema.getEntrada();
                                break;
                                case 'while':
                                tabla[i][1] =  "20";
                                tabla[i][2] =  lexema.getEntrada();
                                break;
                                case 'return':
                                tabla[i][1] =  "21";
                                tabla[i][2] =  lexema.getEntrada();
                                break;
                            }
                           
                        }
                        else if(!lexema.checkType())
                        {
                            if(lexema.checkNumber() == 0)
                            {
                               
                            }
                            if(lexema.checkNumber() == 1)
                            {
                                tabla[i] = [];
                                tabla[i][0] =  "entero";
                                tabla[i][1] =  "1";
                                tabla[i][2] =  lexema.getEntrada();
                              
                            }
                            if(lexema.checkNumber() == 2)
                            {
                                tabla[i] = [];
                                tabla[i][0] =  "real";
                                tabla[i][1] =  "2";
                                tabla[i][2] =  lexema.getEntrada();
                                
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
                                tabla[i][2] =  lexema.getEntrada();
                             
                            }
                        }
        }
      lexema.genera_tabla(tabla);
}