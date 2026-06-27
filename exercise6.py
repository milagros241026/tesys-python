# Definir la clase Point3D a partir de Point2D y agregar la variable z
class Point2:
    def __init__(self,x,y):
        self.x=x
        self.y=y

class Point3(Point2):
    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z= z


    

#Definir la clase Point3D a partir de Object, sin relación alguna con Point2D
class Object:
    def __init__(self,x,y,z):
        self.x=x
        self.y=y
        self.z=z

#Piensa una tercera alternativa? Que ocurre con la redundancia de código? Critique esta implementación de Point3D.
class Point3:
    def __init__(self,coordenadas):
        self.coordenadas=coordenadas