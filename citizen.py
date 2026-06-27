class Citizen:
    def __init__(self,DNI,nombre,apellido,edad) :
     self.DNI=DNI
     self.nombre=nombre
     self.apellido=apellido
     self.edad=edad
    def __eq__(self,other):
      return (
     self.nombre==other.nombre and
     self.apellido==other.apellido and
     self.DNI==other.DNI and
     self.edad==other.edad
      )
    def __le__(self,other):
      return (
     self.DNI<=other.DNI and
     self.edad<=other.edad
      )
     def __lt__(self,other): 
      return (
     self.DNI<other.DNI and
     self.nombre<other.nombre
      )
    def __gt__(self,other):
      return (
     self.edad>other.edad and
     self.DNI>other.DNI
      )
    def __ge__(self,other):
      return (
     self.edad>=other.edad and
     self.DNI>=other.DNI
      )


   ##ejemplo
      C1 = Citizen(1234567,"juan","juarez" ,25)
      C2 = Citizen(6666666,"julian","acosta",19)
      C3 = Citizen(1616161,"lucas","perez",58)


