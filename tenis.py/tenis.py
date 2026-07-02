class Persona:
    def __init__(self):
        pass


class Tenista(Persona):
        def __init__(self,nombre, edad, pais, ranking, superficie_favorita):
         super().__init__()
         self.nombre=nombre
         self.edad=edad
         self.pais=pais
         self.ranking=ranking
         self.superficie_favorita=superficie_favorita

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

if Tenista in Profesional:
    print("Estadísticas de", Tenista)
    print("ganados:" , [Tenista]["ganados"])
    print("perdidos:", [Tenista]["perdidos"])
else:
    print("Jugador no encontrado.")


class Equipamento:
    def __init__(self):
        pass

class Raqueta(Equipamento):
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



class Superficie:
    def __init__(self,tierra,pasto,cemento,velocidad,bote):
        self.tierra=tierra
        self.pasto=pasto
        self.cemento=cemento
        self.bote=bote
        self.velocidad=velocidad


Superficie = input("ingrese una supeerficie:").lower ()

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


        if jugador1 == jugador2:
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


        