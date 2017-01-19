#Python Collision Physics Simulation for Probablistic inference
#Author: Rohan Hundia

import pygame as game
from pygame.locals import*
import random,sys
import numpy as np

import Box2D
from Box2D.b2 import(world,polygonShape,staticBody,dynamicBody,circleShape)

data = [] #stores all numerical position and property data from input file

'''Enter file number to access particular input file: example "inputfile10.txt" would have 10 as file number.For every corresponding input file two output files would be created
of the same file number outputfile10.txt (stores 2*N probability values and other probablity data),positionfile10.txt(stores position of moving ball for only the first trajectory)'''

filenumber = int(raw_input('Enter Input File Number:'))
text_file = open("inputfile"+str(filenumber)+".txt","r")
lines = text_file.readlines()
num_lines=(len(lines))


'''Read every alternate line and store every value in the 'data' array. Logic assumption: Every alternate line of input file would only contain numerical data for objects documented in previous line'''

for i in range (2,num_lines+1,2):
    lines[i-1] = lines[i-1].replace("\n","")
    try:
        data.append(float(lines[i-1]))
    except ValueError:
        lines[i-1] = lines[i-1].split(',')
        for j in xrange(len(lines[i-1])):
            data.append(float(lines[i-1][j]))
'''
Imp : PyGame and Box2D use different coordinate axis system; for pygame y-axis coordinates increase from top to bottom however for Box2D
setup Y-coordinates increase from bottom to top. However, for both Box 2D and PyGame X-coordinates increase from left to right
'''

game.init()

# Setting up parameters of Pygame scene
# All scene related positions are read from the data array previously created which stores values from input file. Not a very optimal coding style as a change in the format of file would need minor changes in code

screen_width = int(data[0])
screen_height = int(data[1])
ppm = data[2] # defined 1 m = 20 px (Box 2D uses meter measurement unlike pygame which uses pixel).. Data in input file is store in pixel values and therefore needs to be converted.
true_posx = data[3]/ppm
posy = (screen_height-data[4])/ppm
std = data[5]/ppm #standard deviation in noise  
true_xvelocity = data[6]/ppm
posx = np.random.normal(true_posx,std) #Gaussian Noise initial x position of ball
x_velocity = np.random.normal(true_xvelocity,std) # Gaussian Noise x_velocity


red = (255,0,0)
black = (0,0,0)
white = (255,255,255)
green = (0,255,0)
blue = (0,0,255)
grey = (128,128,128)


# Variables for Box2D setup
fps = 60 # frames per second
time_step = 1.0/fps
screen_height_meters = screen_height/ppm
screen_width_meters = screen_width/ppm

screen = game.display.set_mode((screen_width,screen_height))
title = game.display.set_caption('Physics Collision Simulation')
clock = game.time.Clock()

#doSleep allows the bodies to 'sleep' if no phsyics related thing is happening to them; improves efficiency of the game
world = world(gravity=(0,-10),doSleep=True) # setting up parameters of gravity in Box2D world

# Objects of the scene
# Moving Ball object and fixture(holds properties of objects)
# Fixture binds shapes to objects (shape is just a piece of drawing, object is the real body which contains physics properties)
Ball_body = world.CreateDynamicBody(position=(posx,posy),angle=0)
Ball_fixture = Ball_body.CreateCircleFixture(radius=data[7]/ppm,density=1,friction=data[8],restitution=data[9])
#Rectangular bodies at the bottom of scene 
Rec_body1 = world.CreateStaticBody(position = (data[48]/ppm,screen_height_meters-(data[49]/ppm)),shapes = polygonShape(box=(data[50]/(2*ppm),data[51]/(2*ppm))))  

#Side walls of scene setup to add effect of collision sideways 
Side_wall1 = world.CreateStaticBody(position = (0,screen_height_meters/2),shapes = polygonShape(box = (0.05,screen_height_meters/2))) 
Side_wall2 = world.CreateStaticBody(position = (screen_width_meters,screen_height_meters/2),shapes = polygonShape(box=(0.05,screen_height_meters/2)))

#Array of Circular Colliders
CircColliders = [None]*19
for i in xrange(19):
    #position arrays of colliders read from data[] elements data[10] to data[47]
    positionx = (data[2*i+10]/ppm) 
    positiony = (screen_height_meters-(data[2*i+11]/ppm))
    CircColliders[i] = world.CreateStaticBody(position=(positionx,positiony),shapes = circleShape(radius=1))
    
#Triangular Colliders 
Triangle1_Body = world.CreateStaticBody(position=(data[52]/ppm,screen_height_meters-(data[53]/ppm)),shapes = polygonShape(vertices=[(data[54]/ppm,data[55]/ppm),(data[56]/ppm,data[57]/ppm),(data[58]/ppm,data[59]/ppm)]))
Triangle2_Body = world.CreateStaticBody(position=(data[60]/ppm,screen_height_meters-(data[61]/ppm)),shapes = polygonShape(vertices=[(data[62]/ppm,data[63]/ppm),(data[64]/ppm,data[65]/ppm),(data[66]/ppm,data[67]/ppm)]))
Triangle3_Body = world.CreateStaticBody(position=(data[68]/ppm,screen_height_meters-(data[69]/ppm)),shapes = polygonShape(vertices=[(data[70]/ppm,data[71]/ppm),(data[72]/ppm,data[73]/ppm),(data[74]/ppm,data[75]/ppm)]))
Triangle4_Body = world.CreateStaticBody(position=(data[76]/ppm,screen_height_meters-(data[77]/ppm)),shapes = polygonShape(vertices=[(data[78]/ppm,data[79]/ppm),(data[80]/ppm,data[81]/ppm),(data[82]/ppm,data[83]/ppm)]))
Triangle5_Body = world.CreateStaticBody(position=(data[84]/ppm,screen_height_meters-(data[85]/ppm)),shapes = polygonShape(vertices=[(data[86]/ppm,data[87]/ppm),(data[88]/ppm,data[89]/ppm),(data[90]/ppm,data[91]/ppm)]))
#Array of Triangular Colliders
TriColliders = [Triangle1_Body,Triangle2_Body,Triangle3_Body,Triangle4_Body,Triangle5_Body]
TriVertices = [] #Array to store vertices of triangle

Gap = 0
ArrayofGaps = [] #Array of ball going through individual gaps
CondVar = 1
positionball = [] #Array to store position of moving ball (only during first simulated trajectory)
CondVarPos = 1
ArrayGoal = [] #Array of ball going through final goal
N_states_goal = [] #Probability states of ball going through a gap given it goes through the goal
N_states_notgoal = [] #Probability states of ball going through a gap given it does not go through the goal
                                        
while True:
    for event in game.event.get():
        if event.type == game.QUIT: #if game exited, data is stored in a notepad file
            Outputfile1 = open("outputfile"+str(filenumber)+".txt","w")
            print >>Outputfile1,('Nmber of Trajectories Simulated: '+str(len(ArrayofGaps)))
            print >>Outputfile1,('Number of Trajectories that went through final goal: ' + str(len(ArrayGoal)))
            for i in xrange(1,7):
                print >>Outputfile1,('Number of Trajectories that went through gap ' + str(i)+': '+str(ArrayofGaps.count(i)))
                print >>Outputfile1,('Number of Trajectories that went through final goal given it went through gap ' + str(i)+': '+str(ArrayGoal.count(i)))
                N_states_notgoal.append((ArrayofGaps.count(i)-ArrayGoal.count(i))/float(len(ArrayofGaps)))
                N_states_goal.append(ArrayGoal.count(i)/float(len(ArrayofGaps)))
            print >>Outputfile1, ('\nProbablity distribution of 2*N Values: '+str(N_states_notgoal)+str(N_states_goal)+'\n')
            Outputfile1.close()
            Positionfile = open("PositionFile"+str(filenumber)+".json","w") #Positions of moving ball (1st trajectory only) is stored in a separate output file (JSON format) easily read by JS/HTML
            positionball = str(positionball).replace('(','[').replace(')',']')
            print >>Positionfile,(positionball)
            Positionfile.close()
            game.quit()
            sys.exit()
            
        # Pause the game for 3000 ms when Keypad ENTER is pressed   
        if event.type == game.KEYDOWN:
            if event.key == game.K_KP_ENTER: # Use Keypad ENTER for 3 sec pause
                game.time.wait(3000)
                
    screen.fill(black) #Color of screen setup
    for body in world.bodies:
        for fixture in body.fixtures: #fixture holds properties of objects
            shape = fixture.shape
            if len(TriVertices)==5:
                Height_Lines = TriVertices [0][0][1]
                Thickness_Lines = 5
                '''Lines drawn according to base vertices positions of the triangle'''
                Blueline_1 = game.draw.line(screen,blue,(TriVertices[0][0][0],Height_Lines),(TriVertices[1][2][0],Height_Lines),Thickness_Lines)
                Blueline_2 = game.draw.line(screen,blue,(TriVertices[3][0][0],Height_Lines),(TriVertices[4][2][0],Height_Lines),Thickness_Lines)
                Redline_1 = game.draw.line(screen,red,(0,Height_Lines),(TriVertices[0][2][0],Height_Lines),Thickness_Lines)
                Redline_2 = game.draw.line(screen,red,(TriVertices[1][0][0],Height_Lines),(TriVertices[2][2][0],Height_Lines),Thickness_Lines)
                Redline_3 = game.draw.line(screen,red,(TriVertices[2][0][0],Height_Lines),(TriVertices[3][2][0],Height_Lines),Thickness_Lines)
                Redline_4 = game.draw.line(screen,red,(TriVertices[4][0][0],Height_Lines),(screen_width,Height_Lines),Thickness_Lines)
    
            if shape.type == 0: #circular shape has type 0
                center = body.position * ppm
                radius = int(shape.radius *ppm)
                center = (int(center[0]),int(screen_height-center[1]))
                
                if body.type == dynamicBody: #moving ball
                    game.draw.circle(screen,blue,center,radius)
                    Ball_body.linearVelocity= Ball_body.linearVelocity+[x_velocity,0] #initial gaussian noise in x_velocity
                    x_velocity = 0
                    if len(TriVertices)>1:
                        if Blueline_1.y >= center[1] >= Blueline_1.y-3 and CondVar==1:
                            if 0 <= center[0] <=  int((Triangle1_Body.position*ppm)[0]):
                                Gap = 1  # Ball went through Gap 1
                                print('Ball went through Gap 1')
                            if ((Triangle1_Body.position*ppm)[0]) <= center[0] <= ((Triangle2_Body.position*ppm)[0]):
                                Gap = 2  # Ball went through Gap 2
                                print('Ball went through Gap 2')
                            if ((Triangle2_Body.position*ppm)[0]) <= center[0] <= ((Triangle3_Body.position*ppm)[0]):
                                Gap = 3  # Ball went through Gap 3
                                print('Ball went through Gap 3')
                            if ((Triangle3_Body.position*ppm)[0]) <= center[0] <= ((Triangle4_Body.position*ppm)[0]):
                                Gap = 4  # Ball went through Gap 4
                                print('Ball went through Gap 4')
                            if ((Triangle4_Body.position*ppm)[0]) <= center[0] <= ((Triangle5_Body.position*ppm)[0]):
                                Gap = 5  # Ball went through Gap 5
                                print('Ball went through Gap 5')
                            if ((Triangle5_Body.position*ppm)[0]) <= center[0] <= 1000:
                                Gap = 6  # Ball went through Gap 6
                                print('Ball went through Gap 6')
                            ArrayofGaps.append(Gap) 
                            CondVar=0
                            
                    if CondVarPos==1: #CondVar used as a condition to store moving ball position data only during first trajectory
                        positionball.append(center)
       
                    if (center[1] >= screen_height) or ((data[48]-(data[50]/2)<center[0]<data[48]+(data[50]/2))and (center[1]>=screen_height-(Rec_body1.position[1]*2*ppm)-(radius+3))):#-(Rec_body1.position[1]*2*ppm)-(radius+3): #Ball goes in goal (Y_component)
                        game.time.wait(2000)
                        world.DestroyBody(Ball_body) #Destroy Ball
                        x_velocity = np.random.normal(true_xvelocity,std) #Re-initialize gaussian x_velocity
                        posx = np.random.normal(true_posx,std) #Re-initialize gaussian x_pos
                        CondVar=1
                        CondVarPos=0
                        Ball_body = world.CreateDynamicBody(position=(posx,posy),angle=0) #Re-create ball at new posx
                        Ball_body.CreateCircleFixture(radius=data[7]/ppm,density=1,friction=data[8],restitution=data[9])
                        game.draw.circle(screen,blue,center,radius)
                        Ball_body.linearVelocity= Ball_body.linearVelocity+[x_velocity,0]
                        x_velocity = 0
                        if data[48]-(data[50]/2)<center[0]<data[48]+(data[50]/2): #Ball goes in between goal area (X_component) 
                            print('Ball went through gate after it passed through Gap ' + str(Gap))
                            ArrayGoal.append(Gap)
                            
                                
                    
                else: #defining for rest of static spehrical objects
                    game.draw.circle(screen,grey,center,radius)

            else: #defining for rest of objects non-spherical
                vertices = [(body.transform * v) * ppm for v in shape.vertices]
                vertices = [(v[0], screen_height - v[1]) for v in vertices]
                if(len(shape.vertices) == 4): # Rectanglular objects
                    game.draw.polygon(screen, red, vertices)
                else:#Trianglular Objects
                    game.draw.polygon(screen, grey, vertices)
                    if len(TriVertices) < len(TriColliders):
                        TriVertices.append(vertices)
            
    
    world.Step(time_step,10,10)
    game.display.flip()# updating scene
    clock.tick(fps)

    

