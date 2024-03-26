using System;
using System.ComponentModel;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      /*try
      {
        //int num = int.Parse( Console.ReadLine());
        rotarNumero();
        

      }
      catch(Exception e)
      {
        Console.WriteLine("Debe poner numeros >:v ");


      }*/

      //rotar2();
      //int numero = 5;
      /*try
      {
        if ((numero % 2)!=0)
        {
          throw new ExceptionPar("Es un numero par");
        }


      }
      catch (ExceptionPar e)
      {
        Console.WriteLine(e.Message);

      }*/
      //int num = int.Parse( Console.ReadLine());
      //int num1 = int.Parse( Console.ReadLine());

      //suma_elementos(num,num1);
     
      //int resultado = suma_elementos(num,num1);
      //Console.WriteLine(resultado);
      //Console.WriteLine(suma_elementos(num,num1));


      /*try
      {
        if (resultado > 10)
        {
          throw new ExceptionSuma();
        }


      }
      catch(ExceptionSuma e)
      {
        Console.WriteLine(e.Message);

      }*/
      int resultado = contarVocales();

      try
      {
        if (resultado >= 3)
        {
          throw new ExceptionVocales();s
        }


      }
      catch(ExceptionVocales e)
      {
        Console.WriteLine(e.Message);

      }


      


      
    }

    /*static void rotarNumero() // poner el ultimo numero al inicio
    {
      Console.Write("Ingrese un número: ");
      string input = Console.ReadLine();

      // Rotar los dígitos
      char lastDigit = input[input.Length - 1];
      string rotatedNumber = lastDigit + input.Substring(0, input.Length - 1);

      Console.WriteLine("Número rotado: " + rotatedNumber);
    }

    static void rotar2()
    {
      string numero = Console.ReadLine();
      char primero = numero[0];
      char segundo = numero[1];
      string resto = numero.Substring(2, numero.Length - 2);
      string resultado = resto + primero + segundo;
      Console.WriteLine(resultado);
    }*/
    static int suma_elementos(int elemento1, int elemento2) //sumar dos numeros
    {
            int suma = elemento1 + elemento2;
            return suma;

    }

    static void contarVocales()
    {
            Console.Write("Ingrese una palabra: ");
            string palabra = Console.ReadLine().ToLower(); // Convertir la palabra a minúsculas para comparar

            int contadorVocales = 0;

            foreach (char letra in palabra)
            {
                if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
                {
                    contadorVocales++;
                }
            }

            Console.WriteLine("La palabra ingresada tiene " + contadorVocales + " vocales.");

    }
   
  }
  
  public class ExceptionPar : Exception
  {
    public ExceptionPar(string mensaje ) : base(mensaje)
    {

    }
  }

  public class ExceptionSuma : Exception
  {
    public ExceptionSuma( ) : base("La suma es muy grande")
    {

    }
  }

  public class ExceptionVocales : Exception
  {
    public ExceptionVocales( ) : base("se paso de la cantidad de vocales")
    {

    }
  }
 
}
