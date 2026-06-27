palabra=input ("ingrese una palabra") # Neuquen


l1 = []

l2 = []

for l in palabra: # n
   l1.append(l) # [n, e, u, q, u, e, n]

for l in palabra: # n
   l2.append(l) # [n, e, u, q, u, e, n]

for i in range(0, 7):
    if l1[i] == l2[7]:
        print("la palabra es un palidromo")

    else: 
        print("no es un palidromo")