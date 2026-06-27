class System:

    # Establecer los cursos al momento de iniciar el sistema
    pass 


class Person:
    def __init__(self, dinero):
        self.dinero = dinero


class Course:
    def __init__(self, id, name, teacher):
        self.id = id # 1 
        self.name = name # Informacion Basica
        self.student = [Student] # [carlos, agustin, antonella, ...]
        self.teacher = teacher # Anabella

class School:
    def __init__(self,teacher,student,course):
        self.teacher=teacher
        self.student=Student
        self.course=course


class Teacher(Person):
    def __init__(self, cobra):
        super().__init__(cobra)
        self.course = [Course] # vinculado con Course   
    

class Student(Person):
    def __init__(self, paga):
        super().__init__(paga)
        self.courses = [Course]

    def my_courses(self):
        return self.course.length    


# Teachers
anabella = Teacher(20000, "Matematica y informatica basica")
juan=Teacher(10000,"biologia")
alberto=Teacher(10000,"geografia")

teachers=[anabella,juan,alberto]


# Courses
informaticabasica = Course(1, "Info basi", anabella)
matematica = Course()
bioogia = Course()
geografia = Course()

courses = [informaticabasica, matematica, bioogia, geografia]


# Students

carlos=Student(6000,"informaticca basica")
agustin=Student(6000,"informatica basica")
antonella=Student(6000,"informatica basica")
mariela=Student(120000,"informmatica basica y biologia")
andres=Student(6000,"geografia")
lucia=Student(6000,"geografia")
valentina=Student(6000,"geografia")


students=[carlos,agustin,antonella,mariela,andres,lucia,valentina]
    
        
        

