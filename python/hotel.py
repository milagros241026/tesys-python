class Habitacion:
    def __init__(self,precio,capacidad):
          self.precio=precio
          self.capacidad=capacidad

class Estandar(Habitacion):
    def __init__(self):
          super().__init__(1000 , 4)

class Suite(Habitacion):
    def __init__(self):
         super().__init__(2000 , 2)

class Presidencial(Habitacion):
    def __init__(self):
        super().__init__(4000 , 2)

class Cliente:
     def __init__(self,nombre):
          self.nombre=nombre

class Reserva:
     def __init__(self,cliente,habitacion,fecha):
          self.fecha=fecha
          self.habitacion=habitacion
          self.fecha=fecha
          self.cliente=cliente

class Hotel:
     def __init__(self,agregar_reservas):
          self.reservas = reservas
          self.agregar_reservas=agregar_reservas


#ejemplo de uso

Cliente1 = Cliente("pedro")
Habitacion1 = Suite()

Reserva1 = Reserva(Cliente1 ,Reserva,15/6/2026)

print("Reserva1.cliente.nombre")
print("Reserva1.habitacion.precio")
print("Reserva1.fecha")


    
    