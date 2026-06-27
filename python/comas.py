import math

muestra = input ("ingrese numeros separados por comas: ")

numeros = [float(x) for x in nuestra.split(",")]

media = sum (numeros) / len (numeros)

suma = 0
for n in numeros:
    suma += (n - media) **2

desvia = math.sqrt (suma / len(numeros))

print("media:" ,media)
print("desvio:" ,desvio)