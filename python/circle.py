import math as m

class Circle:
    def __init__(self,area,volumen):
       self.area=area
       self.volumen=volumen
    
    def area(self, radius):
        return 2*radius*m.pi

class Cylinder(Circle):
    def __init__(self,area,volumen,height):
       Circle.__init__(area,volumen)
       self.height=height
    
    def area(self,radius,height):
   
        Cylinder.area=2*m.pi**2*radius
        Cylinder.volumen=m.pi*radius*height




cylinder = Cylinder(3,5)
print("area:", cylinder.area())
print("volumen", cylinder.volumen())