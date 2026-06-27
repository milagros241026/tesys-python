class phonebill:
   def __init__ (self,precio_segundos,movimientos,costo,duracion,registrar_llamada):
    self.precio_segundo=precio_segundos
    self.movimientos=movimientos
    self.costo=costo
    self.duracion=duracion
    self.registrar_llamada=registrar_llamada
 
   def costo(self,duracion):
    self.duracion=duracion
    self.costo=self.duracion*self.precio_segundos

   def  mostrar_movimientos(self):
     print("movimientos")
     for i,moviminetos in enumerate(self.movimientos,start=1):
        self.duracion=self.mostrar_movimientos

   def consultar_saldo(self):
     for costo in self.movimientos:
        total+=costo
     return total
   
   def ajustar_precio_segundos(self,precio_nuevo):
     self.precio_nuevo=precio_nuevo
     self.precio_segundo=nuevo_precio


cuenta=phonebill

cuenta.registrar_llamada[36]

cuenta.mostrar_movimientos

print("saldo total" , cuenta.consultar_saldo())

cuenta.ajustar_precio_segundos(3)

cuenta.mostar_movimientos(16)

cuenta.mostrar_movimientos()

print("saldo total" ,cuenta.consultar_saldo)