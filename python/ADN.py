secuencia = ("ATGCAAATTGTGTGTGCATAATTTATATAGGCTAGAATAGAATCGCTA")

gc = 0
for base in secuencia:
  if base == "G" or base == "C":
   gc += 1

porcentaje=(gc / len(secuencia)) * 100

print("el porcentaj es" , porcentaje , "%")