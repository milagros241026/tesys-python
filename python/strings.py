frase=input("ingrese una frase")
letra=input("Ingrese una letra ")
cantidad = 0

for caracter in frase:
    if caracter == letra:
      cantidad += 1

print("la letra aparece" ,cantidad ,"veces")