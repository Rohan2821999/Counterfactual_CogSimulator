import random, math
import numpy as np

#Pexact = [0.175824,0.186813,0.142857,0.104395,0.104395,0.016483,0.016483,0.016483,0.13186,0.08791,0.016483,0]
Pexact = [0.17886178861788618, 0.16260162601626016, 0.12195121951219512, 0.10569105691056911, 0.10569105691056911, 0.0,0.008130081300813009, 0.024390243902439025, 0.17886178861788618, 0.0975609756097561, 0.008130081300813009, 0.008130081300813009]
# change start state for sub and super

n_steps = 10
n_rep = 200
P_est = np.zeros(12)
red_gates = [6,8,9,11]

for j in xrange(n_rep):
    #packed
    #start_state = random.choice(red_gates)
    #subadditive
    #start_state = 8
    #superadditive
    start_state = 11

    
    zs = []
    zs.append(start_state)
    for i in xrange(n_steps):
        start_lp = np.log(Pexact[start_state])
        transition_proposal_state = random.randint(0,10)
        prop_lp = np.log(Pexact[transition_proposal_state])
        
        
        log_alpha = prop_lp - start_lp
        alpha = np.exp(log_alpha)
        #print(alpha)
        u = np.random.uniform()
        #print(u)
        
        if (u) < alpha:
            # Accept
            zs.append(transition_proposal_state)
        else:
            # Append Current State
            zs.append(start_state)
        start_state = zs[-1]
    zs = np.array(zs)
    #print(zs[:-1])


    P_est += np.bincount(zs[:-1],minlength=12)/float(n_steps)# fill in func hist(zs[:-1])/n_steps
    #print(P_est)

P_est /= n_rep
#print(P_est)
print(np.sum([P_est[6],P_est[8],P_est[9],P_est[11]]))
# print(np.sum(Pexact[6:11]))
