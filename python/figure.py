import math

class Figure: 
    def __init__(self,perimeter,area,diagonal,height,base):
        self.perimeter=perimeter
        self.area=area
        self.diagonal=diagonal
        self.height=height
        self.base=base

class Rectangule (Figure):
    def __init__(self,diagonal,base,height,area):
     Figure.__init__(diagonal,base,height,area)

    def diagonal(self,base,height):
       
       math.sqrt(base**2+height**2)
     
    def base(self,area,height):
        area/height
        
    
    def height (self,area,base):
       area/base

class Circle (Figure):
    def __init__(self, radius,area):
        self.radius=radius
        Figure.__init__(area)

    def area(self):
        math.pi*self.radius**2

class Triangule:
    def __init__(self,perimeter,area,height,base,lado1,lado2,lado3):
     self.lado1=lado1
     self.lado2=lado2
     self.lado3=lado3

     Figure.__init__(perimeter,area,height,base)

    def perimeter(self,lado1,lado2,lado3):
        lado1+lado2+lado3
    
    def area(self,base,height):
        base*height/2
     
    def height (self,area,base):
        2*area/base
     
    def base (self,area,height):
        2*area/height



##hay que poner return y que pasa en linea 31




        