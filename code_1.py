#//////////////////////////////////////////////////////
# made in python 2.7.17
#/////////////////////////////////////////////////////
import random 
print('')
n = raw_input('escoje entre Cuarzo, Papiro y Navaja: ')
num = 0

if n == 'cuarzo':
        num = 1 
else:
        if n == 'Cuarzo':
                num = 1
        else: 
                if n == 'papiro':
	                num = 2
                else:
                        if n == 'Papiro':
	                        num = 2
                        else: 
                                if n == 'navaja': 
                                        num = 3
                                else:        
                                        if n == 'Navaja': 
                                                num = 3
                                        else:
                                                print('...')
                                                print ('eso no es cuarzo, papiro o navaja')

if num != 0:
        num_bot = 0
        print('...')
        a = random.randint(1,3)
        b = random.randint(1,3)
        c = random.randint(1,3)

        if a > b:
                num_bot = 1
                print ('El bot escoje Cuarzo, por lo tanto:')        
        else:
                if b > c:
                        num_bot = 2
                        print ('El bot escoje Papiro. /////, por lo tanto:')
                else:   
                        if c > a:  
                                num_bot = 3
                                print ('El bot escoje Navaja, por lo tanto:')

        if a == b == c:
                print ('El bot tiene miedo de contestar: ')
                print ('                        Ganaste')

        else:
                if num_bot == 1 and num == 3: 
                        print ('                        Perdiste')
                else:
                        if num_bot > num:
                                print ('                        Perdiste') 
                        if num_bot < num:
                                print ('                        Ganaste')       
                        if num_bot == num:
                                print ('                        Empate')


