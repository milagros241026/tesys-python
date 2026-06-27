class X (object):
    pass
class Y (object):
    pass
class Z (object):
    pass
class A (X,Y):
    pass
class B (Y,Z):
    pass
class M (A,B):
    pass 