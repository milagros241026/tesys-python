class Empleado:
    def __init__(self,sueldo_base,legajo):
        self.sueldo=sueldo_base
        self.legajo=legajo
        
    def Getsueldo (self):
        return self.sueldo_base

class Gerente(Empleado):
    def __init__(self,legajo,sueldo_base,subordinados):
        self.subordinados=[]
        super().__init__(legajo,sueldo_base)

    def agregarempleado (self):
        self.subordinados.append(self)
    
    def Getsueldo(self):
        extra= 0

        for Empleado in self.subordinados:
            extra += Empleado.Getsueldo * 0.01

            return self.sueldo_base + extra

