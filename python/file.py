
BUILDING A GUESSING GAME

secret_word ="giraffe"
guess = ""
guess count = 0
guess limit = 3
out of guess = false

while guess != secret_word  and not(out of guess) :
 if guess count < guess limit:
    guess = input("enter guess: ")
    guess += 1 

else: 
    out of game = true

    print(" you win!")


(OMO, I NO TO UNDERSTAND THIS ONE)



FOR LOOP

for letter in "Giraffe Academy":
     print(letter)......it went through the whole string and printed it out like this
                                                    G
                                                    i
                                                    r
                                                    a 
                                                    f
                                                    f
                                                    e 

                                                    A
                                                    c
                                                    a
                                                    d
                                                    e
                                                    m
                                                    y  

    friends = ["chibuike","amara","chibuzor"]
      for name in friends:
       print(name)


EXPONENT FUNCTION

def raise to power(base num, pow num)
      result = 1
       for index in range(pow_num):
           result = result * base_num



  2D LISTS

  number__grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
  ]
  print(number__grid[0][0])
  
    for row in number__grid:
        for col in row: 
     print(col)


     BUILDING A TRANSLATOR:




    TRY EXCEPT:....helps when a user inputS an incorrect type of data
   
   try:
      value = 10/0
      number = int(input(Enter a number: ))
      print(number)

   except zeroDivisionError as err:
       print("divided by err")
   except valueError:
             print("invalid input")       




MODULES.....ITS A PYTHON FILE YOU CAN IMPORT INTO YOUR CURRENT PYTHON FILE//
import name of file e.g

import useful_tools
    print(useful_tools.)




CLASSES AND OBJECTS

     class Students:
            
            def _init_(self, name,major, gpa,)
                self.name = name
                self. major = major 
                sself.gpa = gpa

     def on_a_roll(self)
          if self.gpa >= 3.5:
               return true
          else:
              return false



INHERITANCE

