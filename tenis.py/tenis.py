
from datetime import  date
from enum import Enum 

class Persona:
    def __init__(self):
        pass

class Tenista(Persona):
        def __init__(self,nombre, edad, pais, ranking, superficie_favorita, raqueta, pelota):
         super().__init__()
         self.nombre=nombre
         self.edad=edad
         self.pais=pais
         self.ranking=ranking
         self.superficie_favorita=superficie_favorita
         self.raqueta=raqueta
         self.pelota=pelota 
        
        def __eq__(self, other):
            if isinstance(other, Tenista):
                return self.name == other.name and self.price == other.price
            return False

class Raqueta:
    def __init__(self,mango,cuerdas,marca):
        self.mango=mango
        self.cuerdas=cuerdas
        self.marca=marca


class MangoTypes(Enum):
    duro = "duro"
    flojo = "flojo"

class CuerdasTypes(Enum):
    munifilamentos = "munifilamentos"
    monofilamentos = "monofilamentos"
    hibridos = "hibridos"

class MarcaTypes(Enum):
    wilson = "wilson"
    head = "head"
    babolat = "babolat"



Raqueta1 = Raqueta(MangoTypes.duro,CuerdasTypes.hibridos,MarcaTypes.wilson)
Tenista1 = Tenista(Raqueta1)
        
class Pelota:
    def __init__(self,color,durabilidad):
        self.color=color
        self.durabilidad=durabilidad

class PelotaType(Enum):
    ATP = "ATP",
    WTA = "WTA",
    RECREATIVE = "Recreative"

pelota1 = (PelotaType.ATP)
Tenista1 = (pelota1)
        


class tipos(Tenista):
    def __init__(self, nombre, edad, pais, ranking, superficie_favorita,profesional,amateur):
        super().__init__(nombre, edad, pais, ranking, superficie_favorita)
        self.profesional=profesional
        self.amateur=amateur

class Amateur(Tenista):
    def __init__(self, nombre, edad, pais, superficie_favorita):
        super().__init__(nombre, edad, pais, superficie_favorita)

    def jugar_torneo(self):
        print(f"{self.nombre} juega un torneo local")

class Profesional(Tenista):
    def __init__(self, nombre, edad, pais, ranking, superficie_favorita,aces,erorres_noforzados,):
        super().__init__(nombre, edad, pais, ranking, superficie_favorita)
        self.victorias = 0
        self.derrotas = 0

    def jugar_torneo(self):
        print(f"{self.nombre}juega un torneo profesional")

    def ganar_partidos(self):
        self.victorias +=1

    def perder_partidos(self):
        self.derrotas +=1

    nombre = input("ingrese el nombre del jugador")



class Equipamento:
    def __init__(self):
        pass

class Raqueta(Equipamento):
    
   Profesional = []

encontrado = False

for jugador in Profesional:
    if jugador.nombre == jugador.nombre:
        print("Estadísticas de", jugador.nombre)
        print("Ganados:", jugador.victorias)
        print("Perdidos:", jugador.derrotas)
        encontrado = True
        break

if not encontrado:
    print("Jugador no encontrado.")

    def __init__(self,marca,modelo,peso,balance,material_cuerda):
        super().__init__()
        self.marca=marca
        self.modeolo=modelo
        self.peso=peso
        self.balance=balance
        self.material_cuerda=material_cuerda



class Pelota(Equipamento):
    def __init__(self,tipo,durabilidad,presion):
        super().__init__()
        self.tipo=tipo 
        self.durabilidad=durabilidad
        self.presion=presion

class PelotaType(Enum):
    ATP = "ATP",
    WTA = "WTA",
    RECREATIVE = "Recreative"

class Superficie:
    def __init__(self,tierra,pasto,cemento,velocidad,bote):
        self.tierra=tierra
        self.pasto=pasto
        self.cemento=cemento
        self.bote=bote
        self.velocidad=velocidad


Superficie = input("ingrese una superficie:").lower ()

if Superficie == "pasto":
     velocidad = 15

elif Superficie == "tierra":
    velocidad = 30

elif Superficie == "cemento":
    velocidad = 45

else: 
   print("supeerficie no valida")

if velocidad > 0 :
   print("la velocidad de la superficie es " ,velocidad,"km/h")


if Superficie == "cemento":
   bote = 90

elif Superficie == "tierra":
    bote = 60

elif Superficie == "pasto":
    bote = 30

else:
    print("la superficie no existe")


if bote > 0 :
   print("el bote de la superficie es ",bote,"%")



class Partido:
    def __init__(self,fecha,torneo,superficie,jugador1,jugador2):
        self.fecha=fecha
        self.torneo=torneo
        self.superficie=superficie
        self.jugador1=jugador1
        self.jugador2=jugador2

    def  date(self):
     today = date.today()
     if self.jugador1.__eq__(self.jugador2):
            raise ValueError("los jugadores deben ser diferentes")
        
            self.partidos = []
        

    def registrar_set(self,juegos_j1,juegos_j2):
        if len(self.set) >= 5:  
          print("no se pueden jugar mas de 5 sets")
          return
        
        self.append.sets(juegos_j1,juegos_j2)

        def finalizar_partido(self):

         sets_ganados_j1 = 0
         sets_ganados_j2 = 0

        for set in self.sets:
            if set[0] > set[1]:
                sets_ganados_j1 += 1
            else:
                sets_ganados_j2 += 1

        if sets_ganados_j1 > sets_ganados_j2:
            ganador = self.jugador1
            perdedor = self.jugador2
        else:
            ganador = self.jugador2
            perdedor = self.jugador1

        
        ganador.victorias += 1
        perdedor.derrotas += 1

        print("Ganador:", ganador.nombre)
               
class Torneo:
    def __init__(self,max_jugadores,puntos,victorias,derrotas):
        self.max_jugadores=max_jugadores
        self.puntos=puntos
        self.victorias=victorias
        self.derrotas=derrotas

class GrandSlam(Torneo):
    def __init__(self):
        super().__init__()
        self.puntos = 2000
        self.max_jugadores = 128

class MasterSeries(Torneo):
    def __init__(self):
        super().__init__()
        self.puntos = 1000
        self.max_jugadores = 64

class TorneoChanllegerATP(Torneo):
    def __init__(self):
        super().__init__()
        self.puntos = 80
        self.max_jugadores = 32

class TorneoAmateur(Torneo):
    def __init__(self):
        super().__init__()
        self.puntos = 0
        self.max_jugadores = 32

def generar_reportes(self):
    return (
        f"Torneo: {self.nombre}\n"
        f"Puntos: {self.puntos}\n"
        f"Máximo de jugadores: {self.max_jugadores}"
    )

def get_estadisticas(self,total):
    def get_estadisticas(self):
       total = self.victorias + self.derrotas
    win_rate = (self.victorias / total * 100) if total > 0 else 0

    return (
        f"V: {self.victorias}, "
        f"D: {self.derrotas}, "
        f"Win Rate: {win_rate:.2f}%, "
        f"Puntos: {self.puntos}"
    )
    

     
        
import pytest
from tenis import *

def test_crear_raqueta():
    r = Raqueta(MangoTypes.duro, CuerdasTypes.hibridos, MarcaTypes.wilson)

    assert r.mango == MangoTypes.duro
    assert r.cuerdas == CuerdasTypes.hibridos
    assert r.marca == MarcaTypes.wilson


def test_crear_pelota():
    p = Pelota(PelotaType.ATP, 80)

    assert p.color == PelotaType.ATP
    assert p.durabilidad == 80


def test_crear_tenista():
    r = Raqueta(MangoTypes.duro, CuerdasTypes.hibridos, MarcaTypes.wilson)
    p = Pelota(PelotaType.ATP, 80)

    t = Tenista(
        "Nadal",
        38,
        "España",
        2,
        "Tierra",
        r,
        p
    )

    assert t.nombre == "Nadal"
    assert t.edad == 38
    assert t.ranking == 2


def test_igualdad_tenistas():
    r = Raqueta(MangoTypes.duro, CuerdasTypes.hibridos, MarcaTypes.wilson)
    p = Pelota(PelotaType.ATP, 80)

    t1 = Tenista("Nadal",38,"España",2,"Tierra",r,p)
    t2 = Tenista("Nadal",38,"España",2,"Tierra",r,p)

    assert t1 == t2


def test_profesional_gana():
    jugador = Profesional("Djokovic",38,"Serbia",1,"Cemento",300,20)

    jugador.ganar_partidos()

    assert jugador.victorias == 1


def test_profesional_pierde():
    jugador = Profesional("Alcaraz",22,"España",2,"Tierra",250,10)

    jugador.perder_partidos()

    assert jugador.derrotas == 1


def test_superficie():
    superficie = "pasto"

    if superficie == "pasto":
        velocidad = 15

    assert velocidad == 15
