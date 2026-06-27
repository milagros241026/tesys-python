class Paciente:
    def __init__(self,nombre, apellido, edad, dni, peso ,altura):
        self.nombre=nombre
        self.apellido=apellido
        self.edad=edad
        self.dni=dni
        self.peso=peso
        self.altura=altura

    def calcular_imc(self):
            return self.peso / (self.altura **2 )
        
    def imc(self):
         imc = self.calcular_imc()


         if imc < 18.5:
            return "estas flaco"
         
         elif imc < 20:
             return "estas bien"
         
         elif imc < 30:
              return "estas gordo"
         
         else:
              return "estas muy gordo"
         

    def guardararchivo(self,nombre_archivo,archivo):
        self.nombre_archivo=nombre_archivo
        self.archivo=archivo
       
        for open(nombre_archivo, "a", encoding="utf-8") in archivo:
        
         archivo.write(f"nombre:{self.nombre}")
         archivo.write(f"edad:{self.edad}")
         archivo.write(f"apellido:{self.apellido}")
         archivo.write(f"dni:{self.dni}")
         archivo.write(f"peso:{self.peso}kg")
         archivo.write(f"altura:{self.altura}m")
         archivo.write(f"imc:{self.calcular_imc(): .2f}")
         archivo.write(f"condicion:{self.calcular_imc()}")
         print()

    def mostrardatos(self):
         print(f"nombre:{self.nombre}")
         print(f"edad:{self.edad}")
         print(f"apellido:{self.apellido}")
         print(f"dni:{self.dni}")
         print(f"peso:{self.peso}kg")
         print(f"altura:{self.altura}m")
         print(f"imc:{self.calcular_imc(): .2f}")
         print(f"condicion:{self.calcular_imc()}")
         print()

# Creación de pacientes
paciente1 = Paciente("Juan", "Pérez", 30, "30111222", 70, 1.75)
paciente2 = Paciente("María", "Gómez", 25, "35444555", 52, 1.68)
paciente3 = Paciente("Carlos", "López", 45, "27888999", 95, 1.72)

# Mostrar información
paciente1.mostrar_datos()
paciente2.mostrar_datos()
paciente3.mostrar_datos()

# Guardar en archivo
paciente1.guardar_archivo("pacientes.txt")
paciente2.guardar_archivo("pacientes.txt")
paciente3.guardar_archivo("pacientes.txt")

print("Datos guardados correctamente en pacientes.txt")

         
         

            