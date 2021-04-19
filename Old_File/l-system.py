import pygame
import math

# other = variables
# F,A = move n forward
# G = move n forward without drawing a line
# B = move n backwards
# - = turn left by angle
# + = turn right by angle
# [ = push position and angle
# ] = pop position and angle
# a,b,c,d = color 1,2,3,4
# 1-4 line size (std = 1)
#

rules = {}

# rules['A'] = '+F-A-F+' # Sierpinsky
# rules['F'] = '-A+F+A-'
# axiom = 'A'
# angle = 60

# rules['F'] = 'F+F-F-F+F' # Koch curve 1
# axiom = 'F'
# angle = 60

# rules['F'] = 'F+F--F+F' # Koch curve 2
# axiom = 'F'
# angle = 60

# rules['X'] = 'X+YF+'  # Dragon curve
# rules['Y'] = '-FX-Y'
# axiom = 'FX'
# angle = 90

# rules['X'] = 'F-[[X]+X]+F[+FX]-X'  # Wheat
# rules['F'] = 'FF'
# axiom = 'X'
# angle = 25

# rules['F'] = 'a2FF-[c1-F+F+F]+[c1+F-F-F]'  # Tree - colored
# axiom = 'F'
# angle = 40

# rules['X'] = '2F-[[1X]+1X]+1F[+1FX]-1X'  # Wheat
# rules['F'] = 'FF'
# axiom = 'X'
# angle = 25

# rules['X'] = "F[+X][-X]FX"
# rules['F'] = "FF"
# axiom = "X"
# angle = 30

# rules['F'] = "FF-[-F+F+F]+[+F-F-F]"
# axiom = "F"
# angle = 25

rules['F'] = "aF[+F]aF[[-cF]cF+.F]"
axiom = "F"
angle = 25

# rules['B'] = "F"  # Tree
# rules['B'] = "F[+B]F[-B][B]"
# axiom = "B"
# angle = 30

iterations = 6  # number of iterations
step = 5  # step size / line length

color1 = (105, 46, 26)  # brown 1
color2 = (201, 146, 127)  # brown 2
color3 = (101, 250, 52)  # green
color4 = (255, 255, 255)  # white

angleoffset = 270

size = width, height = 1920, 1080  # display with/height
pygame.init()  # init display
screen = pygame.display.set_mode(size)  # open screen

# startpos = 100, height - 225
# startpos = 50, height / 2 - 50
# startpos = width / 2, height / 2
# startpos = 100, height / 2
# startpos = 10,10
startpos = width / 2, 1000

def applyRule(input):
    output = ""
    for rule, result in rules.items():  # applying the rule by checking the current char against it
        if (input == rule):
            output = result  # Rule 1
            break
        else:
            output = input  # else ( no rule set ) output = the current char -> no rule was applied
    return output


def processString(oldStr):
    newstr = ""
    for character in oldStr:
        newstr = newstr + applyRule(character)  # build the new string
    return newstr


def createSystem(numIters, axiom):
    startString = axiom
    endString = ""
    for i in range(numIters):  # iterate with appling the rules
        print("Iteration: {0}".format(i))
        endString = processString(startString)
        startString = endString
    return endString


def polar_to_cart(theta, r, point):
    x = r * math.cos(math.radians(theta))
    y = r * math.sin(math.radians(theta))
    return tuple([x + y for x, y in zip((int(x), int(y)), point)])


def cart_to_polar(point):
    x = point.getX()
    y = point.getY()
    return math.degrees(math.atan(y / x)), math.sqrt(math.pow(x, 2) + math.pow(y, 2))


def drawTree(input, oldpos):
    a = 0  # angle
    i = 0  # counter for processcalculation
    processOld = 0  # old process
    newpos = oldpos
    num = []  # stack for the brackets
    color = (255, 255, 255)
    linesize = 1
    for character in input:  # process for drawing the l-system by writing the string to the screen
        # i += 1  # print process in percent
        # process = i * 100 / len(input)
        # if not process == processOld:
        #     print(process, "%")
        #     processOld = process

        if character == 'A':  # magic happens here
            newpos = polar_to_cart(a + angleoffset, step, oldpos)
            pygame.draw.line(screen, color, oldpos, newpos, linesize)
            oldpos = newpos
        elif character == 'F':
            newpos = polar_to_cart(a + angleoffset, step, oldpos)
            pygame.draw.line(screen, color, oldpos, newpos, linesize)
            oldpos = newpos
        elif character == 'B':
            newpos = polar_to_cart(-a + angleoffset, -step, oldpos)
            pygame.draw.line(screen, color, oldpos, newpos, linesize)
            oldpos = newpos
        elif character == 'G':
            newpos = polar_to_cart(a + angleoffset, step, oldpos)
            oldpos = newpos
        elif character == 'a':
            color = color1
        elif character == 'b':
            color = color2
        elif character == 'c':
            color = color3
        elif character == 'd':
            color = color4
        elif character == '+':
            a += angle
        elif character == '-':
            a -= angle
        elif character == '[':
            num.append((oldpos, a))
        elif character == ']':
            oldpos, a = num.pop()
        elif character == '1':
            linesize = 1
        elif character == '2':
            linesize = 2
        elif character == '3':
            linesize = 3
        elif character == '4':
            linesize = 4
        # elif character == '.': # trying to implement adding a picture where there is a "." in the string
        #



"""
        if a > 360:  # wrap the angle
            a = a - 360
        elif a < 0:
            a = 360 - abs(a)
        else:
            a = a
"""

if __name__ == '__main__':
    drawTree(createSystem(iterations, axiom), startpos)
    tree = (createSystem(iterations, axiom))
    drawTree(tree, startpos)
    pygame.display.flip()
    pygame.image.save(screen, "screenshot.png")
