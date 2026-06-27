class Particulas:
    def Getenergia (self):
        pass

class ParticulaLibre (Particulas):
    def __init__(self,masa,velocidad):
        self.masa=masa
        self.velocidad=velocidad

    def Getenergia(self):
        return (self.masa * self.velocidad ** 2)
    
class Foton (Particulas):
    H=6.6260693e-34
    C=299792458

    def Longitud_Onda (self):
        self.Longitud_Onda= self.Longitud_Onda

    def Getenergia(self):
        return (Foton.H * Foton.C )/self.longitud_onda


        