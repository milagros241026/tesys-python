#datos deel evento
nombre_evento = input("nombre del evento:")
fecha_evento = input("fecha del evento:")
organizador_evento = input("organizador del evento:")

#cantidad de asistentes
cantidad = input("cantidad de asistentes al evento:")

#lista de asistentes
asistentes = []

#registros de datos
for i in range(cantidad):
  print(f"asistentes{i+1}")
  nombre = input("nombre:")
  apellido = input("apellido:")
  asistentes.append("nombre,apellido")

  #registro

  print("registro del evento")
  print("evento:" ,nombre_evento)
  print("fecha:" ,fecha_evento)
  print("organizador:" ,organizador_evento)

  #"" asistentes
  print("cantidad de asistentes:")
  for i,asistente in enumerate(asistentes,start=1):
     print(f"{i}. {asistente[0]} {asistente[1]}")

print("\nTotal de asistentes:", len(asistentes))
      
