window.onload = () => {
    
    let raw_data =
    `1	B	Refleczer	R						
    2	B	Mad Pecker	R						
    3	B	Crablaster	R						
    4	B	Batton M-501	R		R	G			Gain life energy equal to 6%(→8%) of your attack once every 10 seconds when you defeat target with a weapon or skill.
    5	B	Mettal C-15	Y						
    6	B	Earth Commander	Y						
    7	B	Garakuta Robot	Y						
    8	B	Jelly Seeker	Y		Y	B			20%(→30%) chance to become immune to effects of Immobilize.
    9	B	Ball de Voux	B						
    10	B	Barrier Attacker	B						
    11	B	Axe Man	B						
    12	B	Notor Banger	B		B	R			20%(→30%) chance to become immune to effects of Damage Reduction.
    13	B	Dig Labour	G						
    14	B	Pararoid R-5	G						
    15	B	Hoganmer	G						
    16	B	Victoroid	G		G	Y			Increases the damage by 4%(→6%) when equipping a Buster.
    17	B	Charge Shot (X)	B					X	The preparation time of the Charge Shot is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    17	B	Charge Shot (X)2	B		B	R	Y		20%(→30%) chance to become immune to effects of Immobilize.
    18	B	X	R					X	Increases the effect of Buster Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    18	B	X2	R		R	B	Y		Reduced damage taken by 4%(→6%) when equipping a buster.
    19	B	Strafing Barrage	B					Axl	Increases the damage rate of the Strafing Barrage by 5%(→10%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    19	B	Strafing Barrage2	B		B	R	G		Reduce damage taken by 4%(→6%) when equipping a machine gun.
    20	B	Axl	R					Axl	Increases the effect of the Tactical Reinforcement by 30%(→50%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    20	B	Axl2	R		R	B	G		At 75% or more HP, increase damage by 4%(→5%).
    21	B	Massimo	G					Massimo	The preparation time of the Berserker Charge is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    21	B	Massimo2	G		G	G	R		When below 30% HP, reduce damage taken by 6%(→8%).
    22	B	Pallette	Y					Pallette	When you hit your target with a weapon, there is a chance to cause interference which will cancel new buffs 1 time(increased chance of triggering at 5 star). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    22	B	Pallette2	Y		Y	Y	B		When you hit a target in damage reduction status, increase damage you deal by 4%(→6%).
    23	A	Gigantic Mechaniloid CF-0	R						
    24	A	Anglerge	R						
    25	A	REX-2000	R						
    26	A	Launch Octopus	R		R	B			Increases the damage by 4%(→6%) when equipping a launcher.
    27	A	Raiden	R		R	G			Increases the damage by 4%(→6%) when equipping a melee weapon.
    28	A	Old Robot	Y						
    29	A	Press Disposer	Y						
    30	A	Mole Borer	Y						
    31	A	Double	Y		Y	Y			20%(→30%) chance to become immune to effects of Damage Reduction.
    32	A	Crescent Grizzly	Y		Y	R			Reduced damage taken by 4%(→6%) when equipping a melee weapon.
    32	A	Crescent Grizzly2	Y		Y	R	G		When you hit a target in critical hit enhancement status, increase the damage you deal by 6%(→8%).
    33	A	Bee Blader	B						
    34	A	Volt Kurageil	B						
    35	A	Hell Crusher	B						
    36	A	Crystal Snail	B		B	Y			When you hit a target in slow status, increase the damage you deal by 4%(→6%).
    37	A	Frost Walrus	B		B	G			Reduced damage taken by 4%(→6%) when equipping a sprayer.
    38	A	Maoh The Giant	G						
    39	A	RT-55J	G						
    40	A	Raider Killer	G						
    41	A	Botos	G		G	R			When you hit a target in shield status, increase damage you deal by 6%(→8%).
    41	A	Botos2	G		G	R	B		When you hit a target in continuous damage status, increase damage you deal by 4%(→6%).
    42	A	Commander Yammark	G		G	B			Increases the damage by 4%(→6%) when equipping a machine gun.
    43	A	Z Saber	Y					Zero	Increases the effect of Melee Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    43	A	Z Saber2	Y		Y	R	B		Reduced damage taken by 4%(→6%) when equipping a melee weapon.
    44	A	Zero	R					Zero	Increases the chance of Rapid Response triggering by 30%(→50%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    44	A	Zero2	R		R	Y	B		When your target is a boss, increase damage you deal by 4%(→6%).
    45	A	Explosive Round	B					Vile	The preparation time of the Explosive Round is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    45	A	Explosive Round2	B		B	Y	G		When you hit a target in critical damage enhancement status, increase the damage you deal by 6%(→8%).
    46	A	Vile	Y					Vile	Increases the effect of Revenge by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    46	A	Vile2	Y		Y	B	G		20%(→30%) chance to become immune to effects of Continuous Damage.
    47	A	Marino	G					Marino	Become accelerated after using Blink, increasing movement speed 6.5%(→9.75%), can be stacked up to 3 stacks. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    47	A	Marino2	G		G	R	R		When HP is 50% or higher, reduce damage taken by 4%(→5%).
    48	A	Layer	R					Layer	Reduce damage taken during Tenshouha by half.(At 5*, Will not take any damage when using Tenshouha.) When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    48	A	Layer2	R		R	Y	Y		When you are attacked by a summoned enemy, reduce the damage you take by 15%(→20%).
    49	A	Alia	Y					Alia	Increase the chance of Intelligence Analysis triggering by 30%(→50%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    49	A	Alia2	Y		Y	B	G		When you hit a target in defense reduction status, increase damage you deal by 4%(→6%).
    50	S	Dr. Cain	R		R	R			30%(→40%) chance to become immune to effects of Defense Reduction.
    51	S	Epsilon	R		R	G			When you hit a target in defense enhancement status, increase damage you deal by 8%(→10%).
    52	S	X & Zero	R		R	B			Reduced damage taken by 6%(→8%) when equipping a buster.
    52	S	X & Zero2	R		R	B	B		When below 50% HP, increase damage by 6%(→8%).
    53	S	Dr. Doppler	Y		Y	R			30%(→40%) chance to become immune to effects of Slow.
    54	S	General	Y		Y	G			Reduced damage taken by 6%(→8%) when equipping a launcher.
    54	S	General2	Y		Y	G	R		When you hit a target in damage enhancement status, increase damage you deal by 8%(→10%).
    55	S	Professor Gaudile	Y		Y	Y			Increases the damage by 6%(→8%) when equipping a sprayer.
    56	S	Gate	B		B	G			30%(→40%) chance to become immune to effects of Defense Reduction.
    57	S	The Beginning of Legend	B		B	B			At 75% or more HP, increase damage by 5%(→6%).
    57	S	The Beginning of Legend2	B		B	B	B		30%(→40%) chance to become immune to effects of Continuous Damage.
    58	S	Vile MK-2 & Goliath	B		B	Y			Increases the damage by 6%(→8%) when equipping a launcher.
    59	S	Gareth	G		G	B			Reduced damage taken by 6%(→8%) when equipping a melee weapon.
    60	S	Signas	G		G	Y			30%(→40%) chance to become immune to effects of Continuous Damage.
    61	S	Agile	G		G	R			When you hit a target in accelerated status, increases the damage you deal by 8%(→10%).
    61	S	Agile2	G		G	R	Y		Increase damage by 6%(→8%) when equipping a melee weapon.
    62	S	Ultimate Armor X	G					Ultimate Armor X	Reduce the time needed to Charge Plasma Shot to maximum level by 25%(→40%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    62	S	Ultimate Armor X2	G		G	B	B		Increases the damage by 6%(→8%) when equipping a Buster.
    63	S	Double Charged Shot	R					Second Armor X	The preparation time of the Double Charged Shot is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    63	S	Double Charged Shot2	R		R	B	G		When below 50% HP, reduce damage taken by 6%(→8%).
    64	S	Giga Crush	B					Second Armor X	Increase the natural recovery speed of Armor Energy by 25%(→35%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    64	S	Giga Crush2	B		B	R	G		When you hit a target in critical hit enhancement status, increase damage you deal by 8%(→10%).
    65	S	Headbutt	Y					First Armor X	Increases the damage rate of the Headbutt by 5%(→10%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    65	S	Headbutt2	Y		Y	Y	R		When you hit a target in defense reduction status, increase damage you deal by 6%(→8%).
    66	S	RiCO	B		B	B			Reduce damage taken by 6%(→8%) when equipping a machine gun.
    66	S	RiCO2	B		B	B	Y		At 50% or more HP, increase damage by 4%(→5%).
    67	S	Dr. Light (Lab)	Y		Y	Y			When you hit a target in damage reduction status, increase damage you deal by 6%(→8%).
    67	S	Dr. Light (Lab)2	Y		Y	Y	G		When below 50% HP, reduce damage taken by 6%(→8%).
    68	A	Mummy Armored Soldier	B		B	R			Increases the damage by 4%(→6%) when equipping a Sprayer.
    69	S	Pumpkin Head Dark Man	Y		Y	G			30%(→40%) chance to become immune to effects of Immobilize.
    69	S	Pumpkin Head Dark Man2	Y		Y	G	R		When you hit a target in immobile status, increase the damage you dealt by 6%(→8%).
    70	S	Dr. Psyche	B		B	Y			When you hit a target in slow status, increase the damage you deal by 6%(→8%).
    70	S	Dr. Psyche2	B		B	Y	R		30%(→40%) chance to become immune to effects of Damage Reduction.
    71	S	Duel with X-Hunters	Y		Y	R			When below 30% HP, reduce damage taken by 8%(→10%).
    71	S	Duel with X-Hunters2	Y		Y	R	B		When HP is 50% or higher, reduce damage taken by 5%(→6%).
    72	S	The Rebellion of Doppler	G		G	R			Increase damage by 6%(→8%) when equipping a buster.
    72	S	The Rebellion of Doppler2	G		G	R	Y		Reduced damage taken by 6%(→8%) when equipping a buster.
    73	S	Twin Heroes	R		R	B			Increase damage by 6%(→8%) when equipping a melee weapon.
    73	S	Twin Heroes2	R		R	B	B		Reduced damage taken by 6%(→8%) when equipping a melee weapon.
    74	A	Starting Dash	B		B	G			Gains speed up status when entering a stage, with movement speed increased by 15%(→20%).
    75	A	Burn Dinorex	R		R	R			When you hit a target in continuous damage status, increase the damage you deal by 4%(→6%).
    76	A	Ground Scaravich	Y		Y	Y			20%(→30%) chance to become immune to effects of Defense Reduction.
    77	A	Gravity Beetle	B		B	B			When you hit a target in immobile status, increase the damage you dealt by 4%(→6%).
    78	A	Wire Sponge	G		G	G			At 75% or more HP, increase damage by 4%(→5%).
    79	B	Swordy	R						
    80	B	Ratty	Y						
    81	B	Puffy	B						
    82	B	Fishy	G						
    83	A	FireMan.EXE	R		R	Y			Increases the damage by 4%(→6%) when equipping a sprayer.
    84	A	GutsMan.EXE	Y		Y	G			At 50% or more HP, increase damage by 3%(→4%).
    85	A	ColorMan.EXE	B		B	R			When you hit a target in defense enhancement status, increase damage you deal by 6%(→8%).
    86	A	NumberMan.EXE	G		G	B			20%(→30%) chance to become immune to effects of Slow.
    87	S	Eugene Chaud	R		R	B			When you hit a target in defense reduction status, increase damage you deal by 6%(→8%).
    88	S	Lan Hikari	Y		Y	R			30%(→40%) chance to become immune to effects of Damage Reduction.
    89	S	Mayl Sakurai	B		B	Y			When HP is 75% or higher, reduce damage taken by 6%(→8%).
    90	S	Dex Oyama	G		G	Y			When HP is 50% or higher, reduce damage taken by 5%(→6%).
    91	S	Sigma (X4 3rd form)	Y		Y	B			When you hit a target in shield status, increase damage you deal by 8%(→10%).
    91	S	Sigma (X4 3rd form)2	Y		Y	B	G		Reduced damage taken by 6%(→8%) when equipping a sprayer.
    92	A	Storm Eagle	B		B	G			20%(→30%) chance to become immune to effects of Slow.
    93	S	Big Bang Strike	R					Protoman	Reduce the duration needed to activate Big Bang Strike by 25%(→35%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    93	S	Big Bang Strike2	R		R	Y	B		At 50% or more HP, increase damage by 4%(→5%).
    94	S	Proto Shield	Y					Protoman	The preparation time of the Proto Shield is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    94	S	Proto Shield2	Y		Y	R	B		When you are attacked by a summoned enemy, reduce the damage you take by 20%(→25%).
    95	S	Super Mega Man	R					Super MegaMan	Increases the effect of Buster Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    95	S	Super Mega Man2	R		R	B	G		Increases the damage by 6%(→8%) when equipping a Buster.
    96	S	Supporting Beat	B					Super MegaMan	Increases the effect of Collaboration by 30%(→50%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    96	S	Supporting Beat2	B		B	R	G		When you hit a target in shield status, increase damage you deal by 8%(→10%).
    97	A	Roll	G					Roll	When you use Roll Swing or Mopping(any skill at 5*), remove all negative statuses you currently have.
    97	A	Roll2	G		G	R	Y		When you are attacked by a player, reduce the damage you take by 4%(→6%).
    98	A	Supporting Eddie	R					Roll	Will not take any damage when using Supporting Eddie(Extend the duration of invulnerability for 5 stars). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    98	A	Supporting Eddie2	R		R	G	Y		20%(→30%) chance to become immune to effects of Continuous Damage.
    99	A	Rainy Turtloid	R		R	G			20%(→30%) chance to become immune to effects of Defense Reduction.
    99	A	Rainy Turtloid2	R		R	G	G		Reduced damage taken by 4%(→6%) when equipping a launcher.
    100	A	Adion Ride Chaser	B		B	Y			When you hit a target in accelerated status, increases the damage you deal by 6%(→8%).
    100	A	Adion Ride Chaser2	B		B	Y	Y		When you hit a target in damage enhancement status, increase damage you deal by 6%(→8%).
    101	S	Merry Christmas	R		R	Y			30%(→40%) chance to become immune to effects of Slow.
    101	S	Merry Christmas2	R		R	Y	R		When HP is <50%, you get a defense enhancement status, which decreased damage received by 40%(→50%). It can only be triggered once in a battle. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    102	A	First Dream of the Year	Y		Y	G			When below 50% HP, reduce damage taken by 4%(→6%).
    102	A	First Dream of the Year2	Y		Y	G	G		When you hit a target in defense enhancement status, increase damage you deal by 6%(→8%).
    103	S	Sigma	G					Sigma	Increase the chance of Viral Spread Triggering by 30%(→50%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    103	S	Sigma2	G		G	G	B		When you hit a target in slow status, increase the damage you deal by 6%(→8%).
    104	S	Command Mission X	R					Ultimate Armor X (CM)	Increase damage by 20%(→24%) when equipping a Sprayer. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    104	S	Command Mission X2	R		R	R	Y		Increase damage by 6%(→8%) when equipping a machine gun.
    105	S	Isoc	R		R	R			30%(→40%) chance to become immune to effects of Immobilize.
    105	S	Isoc2	R		R	R	G		When you are attacked by a player, reduce the damage you take by 6%(→8%).
    106	S	Violen	Y		Y	Y			When your target is a player, increase damage you deal by 6%(→8%).
    106	S	Violen2	Y		Y	Y	R		When you hit a target in CRID Enhancement status, increase the damage you deal by 8%(→10%).
    107	S	Berkana	B		B	B			When you hit a target in continuous damage status, increase the damage you deal by 6%(→8%).
    107	S	Berkana2	B		B	B	Y		Reduced damage taken by 6%(→8%) when equipping a sprayer.
    108	S	Colonel Redips	G		G	G			When you are attacked by a boss character, reduce the damage you take by 4%(→6%).
    108	S	Colonel Redips2	G		G	G	B		Increases the damage by 6%(→8%) when equipping a sprayer.
    109	B	Crash Roader	R						
    110	B	Crusher	Y						
    111	B	Blady	B						
    112	B	Snow Shooter	G						
    113	A	Mac	R		R	B			When your target is a player, increase damage you deal by 4%(→6%).
    114	A	Wild Jango	Y		Y	G			When you hit a target in accelerated status, increase the damage you deal by 6%(→8%).
    115	A	Rabbit Ride Armor	B		B	G			When you hit a target in shield status, increase damage you deal by 6%(→8%).
    116	A	Douglas	G		G	B			20%(→30%) chance to become immune to the effects of No Weapon.
    117	S	Red	R		R	R			When below 30% HP, increase damage by 8%(→10%).
    118	S	Nightmare Phenomenon	Y		Y	R			When HP is 75% or higher, reduce damage taken by 6%(→8%).
    119	S	Velguarder	B		B	Y			When you hit a target in accelerated status, increases the damage you deal by 8%(→10%).
    120	S	Shadow Devil	G		G	Y			When you hit a target in damage reduction status, increase damage you deal by 6%(→8%).
    121	A	First Strike	R		R	Y			Gain damage enhancement when entering a stage, with damage increased by 12%(→16%)(25 seconds). It can only be triggered once in a battle & when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    122	A	Z Saber(Z)	R					Zero(Z)	Increase damage by 20%(→24%) when equipping a melee weapon. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    122	A	Z Saber(Z)2	R		R	R	G		When you are attacked by a boss character, reduce the damage you take by 4%(→6%).
    123	A	Zero Knuckle	G					Zero(Z)	The preparation time of Zero Knuckle is reduced by 20%(At 5*, the attack will gain an additional effect of stealing a random buff when hitting a target.) When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    123	A	Zero Knuckle2	G		G	R	R		When you hit a target in no weapon status, increase the damage you deal by 4%(→6%).
    124	S	Cyber-elf	Y					Ciel	Increase the number of attacks and target-lock speed of Cyber-elf by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    124	S	Cyber-elf2	Y		Y	R	G		30%(→40%) chance to become immune to effects of Defense Reduction.
    125	S	Ciel System	R					Ciel	Increase the effective duration of Preventive Shield by 40%.(It cannot be removed at 5 stars). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    125	S	Ciel System2	R		R	Y	G		When below 30% HP, reduce damage taken by 8%(→10%).
    126	A	Boomerang Kuwanger	Y		Y	Y			When you hit a target in damage enhancement status, increase damage you deal by 6%(→8%).
    127	A	Flame Mammoth	R		R	Y			Reduced damage taken by 4%(→6%) when equipping a sprayer.
    127	A	Flame Mammoth2	R		R	Y	G		When you hit a target in slow status, increase the damage you deal by 4%(→6%).
    128	A	Bospider	B		B	B			When you are attacked by a summoned enemy, reduce the damage you take by 15%(→20%)
    128	A	Bospider2	B		B	B	G		When below 50% HP, increase damage by 4%(→6%).
    129	A	Summer Mettaur Gigant	Y		Y	B			Increases the damage by 4%(→6%) when equipping a machine gun.
    130	S	Summer Penguin	G		G	G			When you hit a target in slow status, increase the damage you deal by 6%(→8%).
    130	S	Summer Penguin2	G		G	G	R		When you are attacked by a player, reduce the damage you take by 6%(→8%).
    131	S	Crisis Countdown 16-Hour	Y		Y	G			When below 30% HP, increase damage by 8%(→10%).
    131	S	Crisis Countdown 16-Hour2	Y		Y	G	B		30%(→40%) chance to become immune to effects of Slow.
    132	S	The Nightmare Virus	B		B	Y			When you hit a target in damage enhancement status, increase damage you deal by 8%(→10%).
    132	S	The Nightmare Virus2	B		B	Y	R		When you hit a target in damage reduction status, increase damage you deal by 6%(→8%).
    133	S	Legacy for the New Generation	R		R	B			Increases the damage by 6%(→8%) when equipping a launcher.
    133	S	Legacy for the New Generation2	R		R	B	G		Reduce damage taken by 6%(→8%) when equipping a machine gun.
    134	S	Onward to Space...	G		G	R			30%(→40%) chance to become immune to effects of Damage Reduction.
    134	S	Onward to Space...2	G		G	R	Y		When below 50% HP, increase damage by 6%(→8%).
    135	S	Spiral Blast Shot	R					First Armor X	The preparation time of the Spiral Blast Shot is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    135	S	Spiral Blast Shot2	R		R	Y	Y		At 75% or more HP, increase damage by 5%(→6%).
    136	A	Aile	B					Aile	Enhanced the effects of Soul Reverberation by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    136	A	Aile2	B		B	R	Y		Increase damage by 4%(→6%) when equipping a melee weapon.
    137	A	MODEL ZX	R					Aile	During the transformation, delay the consumption of Biometal energy by 20%(→40%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    137	A	MODEL ZX2	R		R	B	Y		When HP is 50% or higher, reduce tamage taken by 4%(→5%).
    138	S	Pandora	B					Pandora	Increase the number of attacks and target-lock speed of funnels by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    138	S	Pandora2	B		B	G	G		When your target is a player, increase damage you deal by 6%(→8%)
    139	S	Homing Plasma	G					Pandora	Homing Plasma now penetrates terrains and obstacles(at 5*, the duration of immobilization is extended). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    139	S	Homing Plasma2	G		G	G	B		When you hit a target in immobile status, increase the damage you deal by 6%(→8%)
    140	S	Happy Valentine's Day	G		G	B			When you hit a target in continuous damage status, increase damage you deal by 6%(→8%).
    140	S	Happy Valentine's Day2	G		G	B	B		When the skill hits a BOSS character, it will weaken the target's attack damage by 28%(→40%). This effect will only trigger once per battle and when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    141	A	Tunnel Rhino	Y		Y	R			Increases the damage by 4%(→6%) when equipping a Sprayer.
    141	A	Tunnel Rhino2	Y		Y	R	R		20%(→30%) chance to become immune to effects of Defense Reduction.
    142	A	Wheel Gator	G		G	Y			When below 30% HP, increase damage by 6%(→8%).
    142	A	Wheel Gator2	G		G	Y	G		When your target is a player, increase damage you deal by 4%(→6%).
    143	S	Final Sigma W	B		B	B			30%(→40%) chance to become immune to the effects of No Weapon.
    143	S	Final Sigma W2	B		B	B	Y		When you hit a target in defense enhancement status, increase damage you deal by 8%(→10%).
    144	A	Gigantic Mechaniloid CF-0 Jealous-type	R		R	Y			When you are attacked by a player, reduce the damage you take by 4%(→6%)
    144	A	Gigantic Mechaniloid CF-0 Jealous-type2	R		R	Y	R		When below 50% HP, reduce damage taken by 4%(→6%).
    145	B	Kerberos	R						
    146	B	Carryarm	Y						
    147	B	Pantheon Hunter	B						
    148	B	Battle Tutle Bros.	G						
    149	A	Herculious Anchus	R		R	Y			When you hit a target in damage reduction status, increase damage you deal by 4%(→6%).
    150	A	Hanumachine	Y		Y	B			20%(→30%) chance to become immune to effects of Slow.
    151	A	Blizzack Staggroff	B		B	R			When HP is 75% or higher, reduce damage taken by 4%(→6%).
    152	A	Maha Ganeshariff	G		G	Y			20%(→30%) chance to become immune to effects of Immobilize.
    153	S	Omega 1st Form	R		R	G			When your target is a player, increase damage you deal by 6%(→8%)
    154	S	Weil	Y		Y	R			At 75% or more HP, increase damage by 5%(→6%).
    155	S	Elpizo 2nd Form	B		B	B			When you hit a target in defense reduction status, increase damage you deal by 6%(→8%).
    156	S	Dark Elf	G		G	G			When you hit a target in shield status, increase damage you deal by 8%(→10%).
    157	S	Leviathan	B					Leviathan	The preparation time of the Spirit of the Ocean is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    157	S	Leviathan2	B		B	B	G		30%(→40%) chance to become immune to effects of Slow.
    158	A	MegaMan Volnutt	B					MegaMan Volnutt	Increase damage by 20%(→24%) when equipping a buster. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    158	A	MegaMan Volnutt2	B		B	B	Y		When below 50% HP, increase damage by 4%(→6%).
    159	S	Tron Bonne	R					Tron Bonne	The preparation time of the Beacon Bomb is reduced by 20%(→30%) and its travel speed increased by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    159	S	Tron Bonne2	R		R	R	B		Reduced damage taken by 6%(→8%) when equipping a launcher.
    160	S	Bonne Family	G		G	R			At 50% or more HP, increase damage by 4%(→5%).
    161	A	Neon Tiger	R		R	R			When you hit a target in defense reduction status, increase damage you deal by 4%(→6%)
    161	A	Neon Tiger2	R		R	R	G		When you hit a target in CRIT Enhancement status, increase the damage you deal by 6%(→8%)
    162	A	Jet Stingray	Y		Y	Y			When below 30% HP, increase damage by 6%(→8%).
    162	A	Jet Stingray2	Y		Y	Y	R		When your target is a player, increase damage you deal by 4%(→6%)
    163	A	Infinity Mijinion	B		B	B			When you are attacked by a player, reduce the damage you take by 4%(→6%)
    163	A	Infinity Mijinion2	B		B	B	Y		20%(→30%) chance to become immune to effects of Continuous Damage.
    164	A	Spike Rosered	G		G	G			At 50% or more HP, increase damage by 3%(→4%).
    164	A	Spike Rosered2	G		G	G	B		20%(→30%) chance to become immune to effects of Damage Reduction.
    165	S	Comrade Forever	R		R	B			When you are attacked by a boss character, reduce the damage you take by 6%(→8%).
    165	S	Comrade Forever2	R		R	B	R		When your target is a boss , increase damage you deal by 6%(→8%).
    166	S	The supreme commander of Repliforce	Y		Y	B			When you are attacked by a player, reduce the damage you take by 6%(→8%).
    166	S	The supreme commander of Repliforce2	Y		Y	B	Y		When you hit a target in accelerated status, increases the damage you deal by 8%(→10%).
    167	A	Magna Centipede	R		R	G			When you hit a target in accelerated status, increases the damage you deal by 6%(→8%).
    167	A	Magna Centipede2	R		R	G	G		When below 30% HP, reduce damage taken by 6%(→8%).
    168	A	Blizzard Wolfang	B		B	Y			At 75% or more HP, increase damage by 4%(→5%).
    168	A	Blizzard Wolfang2	B		B	Y	R		20%(→30%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    169	S	Copy X	B					Copy X	Increase the effect of Buster Mastery and Buster Adaptability by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    169	S	Copy X2	B		B	B	G		When HP is 50% or higher, reduce damage taken by 5%(→6%).
    170	S	Omega	R					Omega	Increase the effect of Melee Mastery and Melee Adaptability by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    170	S	Omega2	R		R	R	G		30%(→40%) chance to become immune to the effects of No Weapon.
    171	S	Hoshio-kun	G		G	Y			When your target is a boss , increase damage you deal by 6%(→8%).
    171	S	Hoshio-kun2	G		G	Y	Y		When below 50% HP, gain the Ramen Shield that can withstand 100%(→150%) attack damage. The skill will only be triggered once during a stage and when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    172	B	Taketento	R						
    173	B	Elec'n	Y						
    174	B	Count Bomb NEO	B						
    175	B	Sniper Joe	G						
    176	A	Cut Man	R		R	R			When you hit a target in immobile status, increase the damage you dealt by 4%(→6%).
    177	A	Guts Man	Y		Y	Y			When you hit a target in shield status, increase damage you deal by 6%(→8%).
    178	A	Air Man	B		B	B			When you hit a target in continuous damage status, increase damage you deal by 4%(→6%).
    179	A	Wood Man	G		G	G			When HP is 75% or higher, reduce damage taken by 4%(→6%).
    180	S	Dr. Wily (OG Card Pack)	R		R	R			When you hit a target in damage enhancement status, increase damage you deal by 8%(→10%).
    181	S	Kalinka	Y		Y	Y			30%(→40%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    182	S	Dr. Light (OG Card Pack)	B		B				When below 50% HP, increase damage by 6%(→8%).
    183	S	Dr. Cossack	G		G	G			30%(→40%) chance to become immune to the effects of Defense Reduction.
    184	S	Megaman Family	G		G	B			When you are attacked by a player, reduce the damage you take by 6%(→8%).
    184	S	Megaman Family2	G		G	B	R		30%(→40%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    185	B	Mega Man	B					Mega Man	Increases the effect of Buster Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    185	B	Mega Man2	B		B	G	G		Reduced damage taken by 4%(→6%) when equipping a buster.
    186	B	Leaf Shield	G					Mega Man	Launch the leave shield and when it hits a target, there is a chance to make the skill available immediately again(triggers 100% at 5-star). This effect can only be triggered once more after a 15-second cooldown and when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    186	B	Leaf Shield2	G		G	G	G		When you hit a target in slow status, increase the damage you deal by 4%(→6%)
    187	S	Mega Man & Bass	Y		Y	B			When you hit a target in defense enhancement status, increase damage you deal by 8%(→10%).
    187	S	Mega Man & Bass2	Y		Y	B	B		30%(→40%) chance to become immune to effects of Continuous Damage.
    188	S	Sigma Virus	R		R	G			When you hit a target in damage reduction status, increase damage you deal by 6%(→8%).
    188	S	Sigma Virus2	R		R	G	R		When HP is 75% or higher, reduce damage taken by 6%(→8%).
    189	S	Iris	R					Iris	When summoning Floating Mines, remove a random negative status you have, with a chance to gain an invincible shield(Increased chance of triggering at 5 stars) However, Mines summoned by Auto Defense will not trigger this effect.
    189	S	Iris2	R		R	R	B		When HP is 50% or higher, reduce damage taken by 5%(→6%).
    190	S	Ferham	R					Ferham	Enhance the effect of Quality of Queen by 20%(→30%) and increase the chance to trigger Sadistic by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    190	S	Ferham2	R		R	Y	Y		30%(→40%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    191	A	Biometal Model X	B		B	B			20%(→30%) chance to become immune to the effects of No Weapon.
    191	A	Biometal Model X2	B		B	B	B		Reduced damage taken by 6%(→8%) when equipping a buster.
    192	A	Biometal Model Z	R		R	R			When you hit a target in defense enhancement status, increase damage you deal by 6%(→8%).
    192	A	Biometal Model Z2	R		R	R	R		30%(→40%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    193	S	Operator Trio	Y		Y	Y			Reduced damage taken by 6%(→8%) when equipping a melee weapon.
    193	S	Operator Trio2	Y		Y	Y	G		30%(→40%) chance to become immune to the effects of No Weapon; the same type of chance can be stacked.
    194	S	Hero's Awakening	B		B	B			30%(→40%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    194	S	Hero's Awakening2	B		B	B	G		30%(→40%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    195	S	Duel in Yggdrasil	Y		Y	Y			When you are attacked by a boss character, reduce the damage you take by 6%(→8%).
    195	S	Duel in Yggdrasil2	Y		Y	Y	R		When below 50% HP, increase damage by 6%(→8%).
    196	S	Mystery of True Identity	R		R	R			When you hit a target in immobile status, increase the damage you deal by 6%(→8%).
    196	S	Mystery of True Identity2	R		R	R	Y		When you hit a target in shield status, increase damage you deal by 8%(→10%).
    197	S	Ragnarok	G		G	G			When below 30% HP, reduce damage taken by 8%(→10%).
    197	S	Ragnarok2	G		G	G	B		When below 30% HP, increase damage by 8%(→10%).
    198	S	Magnamalo	R		R	B			When you hit a target in accelerated status, increases the damage you deal by 8%(→10%)
    198	S	Magnamalo2	R		R	B	R		When you hit a target in continuous damage status, increase the damage you deal by 6%(→8%)
    199	S	Hunter	B		B	Y			Increase damage by 6%(→8%) when equipping a machine gun.
    199	S	Hunter2	B		B	Y	B		When your target is a boss, increase damage you deal by 6%(→8%)
    200	S	Hunting companions	Y		Y	B			30%(→40%) chance to become immune to effects of Immobilize.
    200	S	Hunting companions2	Y		Y	B	B		30%(→40%) chance to become immune to effects of Continuous Damage.
    201	S	Master Utsushi	G		G	G			When below 50% HP, reduce damage taken by 6%(→8%).
    201	S	Master Utsushi2	G		G	G	R		When you are attacked by a summoned enemy, reduce the damage you take by 20%(→25%).
    202	S	Hinoa & Minoto	R		R	Y			When your target is a boss character, increase damage you deal by 4%(→6%). When you are attacked by a boss character, reduce the damage you take by 4%(→6%).
    202	S	Hinoa & Minoto2	R		R	Y	Y		When your HP drops below 50%, recover HP equivalent to 5%(→7%) of your Attack once every 6 seconds.
    203	A	Bishaten	Y		Y	G			20%(→30%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    203	A	Bishaten2	Y		Y	G	R		20%(→30%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    204	A	Goss Harag	B		B	B			Increases the damage by 4%(→6%) when equipping a machine gun.
    204	A	Goss Harag2	B		B	B	G		When you hit a target in defense reduction status, increase damage you deal by 4%(→6%)
    205	A	Aknosom	R		R	R			When you hit a target in shield status, increase damage you deal by 6%(→8%)
    205	A	Aknosom2	R		R	R	B		When below 30% HP, increase damage by 6%(→8%).
    206	A	Tetranadon	G		G	Y			Increases the damage by 4%(→6%) when equipping a launcher.
    206	A	Tetranadon2	G		G	Y	G		20%(→30%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    207	S	Third Armor X	Y					Third Armor X	When you activate Hyper Chip, remove all negative status you currently have(at 5*, recover HP equivalent to 30% of attack).
    207	S	Third Armor X2	Y		Y	B	B		Reduced damage taken by 6%(→8%) when equipping a buster.
    208	S	Cross Charge Shot	B					Third Armor X	The preparation time of the Cross Charge Shot is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    208	S	Cross Charge Shot2	B		B	B	Y		30%(→40%) Chance to become immune to the effects of no skills; the same type of chance can be stacked.
    209	S	Sigma (X4 2nd form)	G					Sigma (X4 2nd form)	Shoulder Boomerang now goes through terrains and obstacles(and enhance the tracking effect at 5 Star).
    209	S	Sigma (X4 2nd form)2	G		G	R	Y		When your target is a player, increase damage you deal by 6%(→8%).
    210	A	MegaMan.EXE	B					MegaMan.EXE	The Sync Rate increases at a rate of 20% over time.(at 5*, Sync Rate is 100% when entering combat) When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    210	A	MegaMan.EXE2	B		B	Y	G		When you are attacked by a boss character, reduce the damage you take by 4%(→6%)
    211	A	Charge Shot (MegaMan.EXE)	Y					MegaMan.EXE	Reduce the time needed to charge Charge Shot to maximum level by 25%(→40%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    211	A	Charge Shot (MegaMan.EXE)2	Y		Y	B	G		Increases the damage by 4%(→6%) when equipping a Buster.
    212	S	Bass.EXE	R					Bass.EXE	The activation rate of the Get Ability Program II is increased by 20%(→30%), and the re-activation time is now 5(→4) seconds. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    212	S	Bass.EXE2	R		R	Y	Y		When you hit a target in damage enhancement status, increase damage you deal by 8%(→10%)
    213	S	Life Aura	Y					Bass.EXE	The effect of Life Aura is increased by 30%(→50%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    213	S	Life Aura2	Y		Y	Y	R		When your target is a player, increase damage you deal by 6%(→8%)
    214	S	Magma Dragoon	R					Magma Dragoon	The defense enhancement of Burning Spirit is increased by 25%(→40%), and the duration is increased by 3(→5) seconds. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    214	S	Magma Dragoon2	R		R	R	G		When you hit a target in continuous damage status, increase the damage you deal by 6%(→8%).
    215	S	Summer Mammoth	B		B	G			30%(→40%) chance to become immune to effects of Slow.
    215	S	Summer Mammoth2	B		B	G	Y		Increases the damage by 6%(→8%) when equipping a sprayer.
    216	S	The Summer of the Operators	Y		Y	Y			At 50% or more HP, increase damage by 4%(→5%).
    216	S	The Summer of the Operators2	Y		Y	Y	G		Get a preventive shield when entering the level to protect you from all negative status(time is extended at 5 stars.) It can only be triggered once in a battle when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    217	A	Armor Armarge	Y		Y	B			When below 30% HP, reduce damage taken by 6%(→8%).
    217	A	Armor Armarge2	Y		Y	B	R		When below 50% HP, reduce damage taken by 4%(→6%).
    218	A	Web Spider	G		G	R			When you hit a target in damage enhancement status, increase damage you deal by 6%(→8%).
    218	A	Web Spider2	G		G	R	Y		When you hit a target in immobile status, increase the damage you dealt by 4%(→6%).
    219	S	Command Mission Zero	R					Absolute Zero	The invulnerability time of Rampage is extended to 3(→4) seconds, and the invulnerability protects you from negative status effects. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    219	S	Command Mission Zero2	R		R	B	B		When below 30% HP, increase damage by 8%(→10%).
    220	S	Harpuia	G					Harupia	When using Stage 3 of Triple Slash, you will also summon an enemy-seeking Plasma Bit that will release lightning after making contact with the target, or when it is attacked or after 6 seconds, dealing 165.58%(→198.72%) damage to targets within range and disabling them. This skill is a summon. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    220	S	Harpuia2	G		G	G	R		30%(→40%) chance to become immune to effects of Slow.
    221	S	Hell Sigma	Y		Y	Y			Increases the damage by 6%(→8%) when equipping a launcher.
    221	S	Hell Sigma2	Y		Y	Y	G		30%(→40%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    222	S	X-Hunters	B		B	R			When below 50% HP, reduce damage taken by 6%(→8%).
    222	S	X-Hunters2	B		B	R	Y		When you hit a target in immobile status, increase the damage you deal by 6%(→8%).
    223	A	Bit	Y					Bit	Gain a shield when being hit, which can withstand 40%(→50%) attack damage. This effect can only be triggered again after a 8-second cooldown. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    223	A	Bit2	Y		Y	G	G		Increase damage by 6%(→8%) when equipping a melee weapon.
    224	S	Colonel	R					Colonel	Increases the effect of Melee Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    224	S	Colonel2	R		R	R	Y		When you hit a target inConfusion status, increase the damage you deal by 6%(→8%).
    225	S	Blinking Slash	Y					Colonel	The preparation time of the Blinking Slash is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    225	S	Blinking Slash2	Y		Y	R	R		When you hit a target in CRIT Enhancement status, increase the damage you deal by 8%(→10%).
    226	S	Falcon Armor X	B					Falcon Armor X	Become accelerated after using Giga Attack, increasing movement speed by 40.43%.(Extend the duration of invulnerability by 1 second at 5*) When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    226	S	Falcon Armor X2	B		B	B	Y		Increase damage by 6%(→8%) when equipping a buster.
    227	S	Elite Hunter	B		B	R			When you equip a buster and melee weapon at the same time, increase damage by 8%(→10%)
    227	S	Elite Hunter2	B		B	R	B		When you equip a buster and melee weapon at the same time, reduce damage taken by 8%(→10%)
    228	A	Hunter Crew	G		G	Y			Reduced damage taken by 4%(→6%) when equipping a launcher.
    228	A	Hunter Crew2	G		G	Y	B		When below 50% HP, reduce damage taken by 4%(→6%).
    229	A	Cancer Bubble	R		R	B			At 50% or more HP, increase damage by 3%(→4%).
    230	A	Libra Scales	Y		Y	R			Reduce damage taken by 4%(→6%) when equipping a machine gun.
    231	A	Wolf Woods	B		B	G			Reduced damage taken by 4%(→6%) when equipping a melee weapon.
    232	A	Cygnus Wing	G		G	Y			20%(→30%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    233	S	Sonia Strumm	R		R	G			Reduced damage taken by 6%(→8%) when equipping a sprayer.
    234	S	Bud Bison	Y		Y	B			When below 30% HP, reduce damage taken by 8%(→10%).
    235	S	Geo Stelar	B		B	Y			When you are attacked by a boss character, reduce the damage you take by 6%(→8%).
    236	S	Luna Platz	G		G	R			When HP is 75% or higher, reduce damage taken by 6%(→8%).
    237	S	Leo Kingdom	R		R	Y			30%(→40%) chance to become immune to effects of Damage Reduction.
    237	S	Leo Kingdom2	R		R	Y	R		Increases the damage by 6%(→8%) when equipping a sprayer.
    238	S	Andromeda	Y		Y	G			When you hit a target in defense reduction status, increase damage you deal by 6%(→8%).
    238	S	Andromeda2	Y		Y	G	Y		When you hit a target in Out of Control status, increase the damage you deal by 6%(→8%).
    239	S	Pegasus Magic	B		B	R			When you hit a target in slow status, increase the damage you deal by 6%(→8%).
    239	S	Pegasus Magic2	B		B	R	B		30%(→40%) chance to become immune to effects of Immobilize.
    240	S	Dragon Sky	G		G	B			Increase damage by 6%(→8%) when equipping a machine gun.
    240	S	Dragon Sky2	G		G	B	G		30%(→40%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    241	S	EM Wave Change!	B		B	G			Reduced damage taken by 6%(→8%) when equipping a buster.
    241	S	EM Wave Change!2	B		B	G	G		When using character skills to hit a boss, you will gain invulnerability status, which prevents you from taking damage. After it is triggered, it can only be triggered once more after a 45-second(→30-second) cooldown.
    242	S	Wolf Sigma	B		B	R			When your target is a player, increase damage you deal by 6%(→8%).
    242	S	Wolf Sigma2	B		B	R	Y		Reduced damage taken by 6%(→8%) when equipping a launcher.
    243	A	DAN	R		R	G			20%(→30%) chance to become immune to effects of Immobilize.
    243	A	DAN2	R		R	G	B		20%(→30%) chance to become immune to effects of Slow.
    244	A	R. MIKA	Y		Y	B			When you are attacked by a player, reduce the damage you take by 4%(→6%)
    244	A	R. MIKA2	Y		Y	B	R		When HP is 75% or higher, reduce damage taken by 4%(→6%).
    245	A	JURI	B		B	Y			When you hit a target in accelerated status, increases the damage you deal by 6%(→8%).
    245	A	JURI2	B		B	Y	G		20%(→30%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    246	A	E. HONDA	G		G	R			When HP is 50% or higher, reduce damage taken by 4%(→5%).
    246	A	E. HONDA2	G		G	R	Y		20%(→30%) chance to become immune to effects of Defense Reduction.
    247	A	POISON	R		R	R			When you hit a target in Preventive Shield status, increase the damage you deal by 6%(→8%)
    247	A	POISON2	R		R	R	G		20%(→30%) chance to become immune to effects of Damage Reduction.
    248	A	VEGA	Y		Y	Y			When below 50% HP, increase damage by 4%(→6%).
    248	A	VEGA2	Y		Y	Y	B		When you hit a target in interference status, increase the damage you deal by 6%(→8%)
    249	A	LUCIA	B		B	B			When you hit a target in damage reduction status, increase damage you deal by 4%(→6%)
    249	A	LUCIA2	B		B	B	Y		At 50% or more HP, increase damage by 3%(→4%).
    250	A	BLANKA	G		G	G			When you hit a target in immobile status, increase the damage you dealt by 4%(→6%)
    250	A	BLANKA2	G		G	G	R		When below 30% HP, increase damage by 6%(→8%).
    251	S	M. BISON	R		R	Y			When your target is a player, increase damage you deal by 6%(→8%).
    251	S	M. BISON2	R		R	Y	B		30%(→40%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    252	S	ZANGIEF	Y		Y	G			When you are attacked by a player, reduce the damage you take by 6%(→8%).
    252	S	ZANGIEF2	Y		Y	G	R		When you hit a target in shield status, increase damage you deal by 8%(→10%).
    253	S	CHUN-LI	B		B	R			When you hit a target in Out of Control status, increase the damage you deal by 6%(→8%).
    253	S	CHUN-LI2	B		B	R	G		When you are attacked by a boss character, reduce the damage you take by 6%(→8%).
    254	S	CAMMY	G		G	B			When you hit a target in interference status, increase the damage you deal by 8%(→10%)
    254	S	CAMMY2	G		G	B	Y		30%(→40%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    255	S	SAKURA	R		R	R			30%(→40%) chance to become immune to effects of Continuous Damage.
    255	S	SAKURA2	R		R	R	Y		When you hit a target in Defocus status, increase the damage you deal by 6%(→8%)
    256	S	KARIN	Y		Y	Y			When you hit a target in Confusion status, increase the damage you deal by 6%(→8%)
    256	S	KARIN2	Y		Y	Y	G		When your target is a boss character, increase damage you deal by 6%(→8%)
    257	S	RYU	B		B	B			When below 30% HP, increase damage by 8%(→10%).
    257	S	RYU2	B		B	B	R		When below 30% HP, reduce damage taken by 8%(→10%).
    258	S	KEN	G		G	G			When you hit a target in defense enhancement status, increase damage you deal by 8%(→10%).
    258	S	KEN2	G		G	G	B		At 75% or more HP, increase damage by 5%(→6%).
    259	S	AKUMA	R		R	B			When you hit a target in Preventive Shield status, increase the damage you deal by 8%(→10%)
    259	S	AKUMA2	R		R	B	R		When your target is a player, increase damage you deal by 4%(→6%). When you are attacked by a player, reduce the damage you take by 4%(→6%).
    260	S	GUILE	G		G	Y			30%(→40%) chance to become immune to effects of Defense Reduction.
    260	S	GUILE2	G		G	Y	Y		30%(→40%) chance to become immune to effects of Immobilize.
    261	S	Sigma (X4 1st form)	R		R	B			When you hit a target in interference status, increase the damage you deal by 8%(→10%)
    261	S	Sigma (X4 1st form)2	R		R	B	Y		Increase damage by 6%(→8%) when equipping a melee weapon.
    262	S	Bass GS	Y					Bass GS	The preparation time of Vanishing World is reduced by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    262	S	Bass GS2	Y		Y	Y	G		At 75% or more HP, increase damage by 5%(→6%).
    263	S	Roll Caskett	R					Roll Casket	Enhance the effect of damage reduction from Throw Wrench by 8%(→25%) and increase its duration by 20%. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    263	S	Roll Caskett2	R		R	G	Y		When HP is 75% or higher, reduce damage taken by 6%(→8%).
    264	S	RiCO & ViA	B		B	Y			Increase damage by 6%(→8%) when equipping a melee weapon.
    264	S	RiCO & ViA2	B		B	Y	R		When your HP drops below 30%, recover 25%(→35%) HP. This skill will only be activated once per stage.
    265	S	Spidevil	Y		Y	Y			When you hit a target in Out of Control status, increase the damage you deal by 6%(→8%)
    265	S	Spidevil2	Y		Y	Y	R		When you are attacked by a player, reduce the damage you take by 6%(→8%)
    266	S	Rock on	Y		Y	B			30%(→40%) chance to become immune to the effects of No Weapon.
    266	S	Rock on2	Y		Y	B	B		When you hit a target in Preventive Shield status, increase the damage you deal by 8%(→10%)
    267	S	Trans on	R		R	G			When you are attacked by a summoned enemy, reduce the damage you take by 20%(→25%)
    267	S	Trans on2	R		R	G	R		At 50% or more HP, increase damage by 4%(→5%).
    268	A	ShadowMan.EXE	R		R	G			When you hit a target in damage enhancement status, increase damage you deal by 6%(→8%).
    269	A	Glyde.EXE	Y		Y	Y			20%(→30%) chance to become immune to the effects of No Weapon.
    270	A	AirMan.EXE	B		B	R			Increase damage by 4%(→6%) when equipping a buster.
    271	A	PharaohMan.EXE	G		G	B			When you hit a target in Preventive Shield status, increase the damage you deal by 6%(→8%)
    272	S	Mr. Match	R		R	Y			When you hit a target in Out of Control status, increase the damage you deal by 6%(→8%).
    273	S	Yai Ayanokaji	Y		Y	R			When you are attacked by a Fodder, reduce the damage you take by 6%(→8%).
    274	S	Dr. Wily (EXE Card Pack II)	B		B	G			When below 50% HP, reduce damage taken by 6%(→8%).
    275	S	Mr. Famous	G		G	B			When you hit a target inConfusion status, increase the damage you deal by 6%(→8%).
    276	S	Heat Guts Style	R		R	R			When below 50% HP, increase damage by 6%(→8%).
    276	S	Heat Guts Style2	R		R	R	R		When you hit a target in Defocus status, increase the damage you deal by 6%(→8%)
    277	S	Elec Team Style	Y		Y	G			When you equip a buster and machine gun at the same time, reduce damage taken by 8%(→10%)
    277	S	Elec Team Style2	Y		Y	G	G		When you hit a target in interference status, increase the damage you deal by 8%(→10%)
    278	S	Aqua Custom Style	B		B	B			30%(→40%) chance to become immune to effects of Defocus, stacks with similar effects.
    278	S	Aqua Custom Style2	B		B	B	B		When you are attacked by a summoned enemy, reduce the damage you take by 20%(→25%)
    279	S	Wood Shield Style	G		G	Y			When HP is 50% or higher, reduce damage taken by 5%(→6%).
    279	S	Wood Shield Style2	G		G	Y	Y		Reduced damage taken by 6%(→8%) when equipping a machine gun.
    280	S	Life Virus R	G		G	R			When you equip two busters at the same time, increase damage by 8%(→10%)
    280	S	Life Virus R2	G		G	R	Y		When your target is a fodder, increase damage you deal by 6%(→8%).
    281	S	Nova Strike	B					Ultimate Armor X	Increase damage by 30% when hitting a target that has been slowed with Nova Strike.(at 5*, increase damage by 50% against targets slowed by Superconductor) When you equip more than 1 copy of a card, only the card with higher star rank will be activated.
    281	S	Nova Strike2	B		B	B	G		When you equip two busters at the same time, reduce damage taken by 8%(→10%)
    282	S	Dark MegaMan.EXE	R					Dark MegaMan.EXE	Gain enhanced DMG once every 10(→6) seconds and increase damage by 2.45% for each stack. Stacks 15 times and functions in conjuction with Embrace the Dark. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    282	S	Dark MegaMan.EXE2	R		R	R	B		When below 50% HP, reduce damage taken by 6%(→8%).
    283	S	Merry Christmas 2021	R		R	Y			30%(→40%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    283	S	Merry Christmas 20212	R		R	Y	R		When HP is <50%, gain enhanced DMG and increase damage by 40%(→50%). It can only be triggered once in a battle. when you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    284	A	Izzy Glow	R		R	G			Increases the damage by 4%(→6%) when equipping a machine gun.
    284	A	Izzy Glow2	R		R	G	G		Reduced damage taken by 6%(→8%) when equipping a machine gun.
    285	A	Volt Catfish	B		B	Y			When you hit a target in interference status, increase the damage you deal by 6%(→8%)
    285	A	Volt Catfish2	B		B	Y	R		Reduced damage taken by 6%(→8%) when equipping a melee weapon.
    286	A	Overdrive Ostrich	Y		Y	B			When you are attacked by a summon enemy, reduce the damage you take by 15% (→20%)
    286	A	Overdrive Ostrich2	Y		Y	B	R		30% (→40%) chance to become immune to the effects of No Skill
    287	A	Storm Owl	G		G	R			When you hit a target in Damage Reduction status, increase the damage you deal by 4% (→6%)
    287	A	Storm Owl2	G		G	R	Y		When you hit a target in Preventive Shield status, increase damage you deal by 8% (→10%)
    288	S	Return to Origins	Y		Y	Y			Increases the damage by 6%(→8%) when equipping a buster.
    288	S	Return to Origins2	Y		Y	Y	Y		When you hit a target in immobile status, increase the damage you dealt by 6%(→8%).
    289	S	The Mystery of Dr. Wily	B		B	B	B		Reduce the damage taken by 6%(→8%) when hit by a short range attack.
    289	S	The Mystery of Dr. Wily2	B		B	B	B		When you hit a target in Preventive Shield status, increase the damage you deal by 8%(→10%)
    290	S	The End of Dr. Wily	R		R	R			When your target is a fodder, increase damage you deal by 6%(→8%).
    290	S	The End of Dr. Wily2	R		R	R	R		At 75% or more HP, increase damage by 5%(→6%).
    291	S	Newfound Ambitions	G		G	G			Increase damage you deal by 6%(→8%) when hitting a target in long range
    291	S	Newfound Ambitions2	G		G	G	G		Reduced damage taken by 6%(→8%) when equipping a launcher.
    292	A	Flame Stag	R		R	Y			When below 50% HP, increase damage by 4%(→6%).
    292	A	Flame Stag2	R		R	Y	B		30%(→40%) chance to become immune to effects of Defocus, stacks with similar effects.
    293	A	Spark Mandrill	Y		Y	B			When you hit a target in slow status, increase the damage you deal by 4%(→6%).
    293	A	Spark Mandrill2	Y		Y	B	G		30%(→40%) chance to become immune to effects of Damage Reduction.
    294	A	Blast Hornet	B		B	G			20%(→30%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    294	A	Blast Hornet2	B		B	G	R		When you hit a target in Defocus status, increase the damage you deal by 6%(→8%)
    295	A	Tidal Whale	G		G	R			Reduced damage taken by 4%(→6%) when equipping a sprayer.
    295	A	Tidal Whale2	G		G	R	Y		When you hit a target in slow status, increase the damage you deal by 6%(→8%).
    296	S	Bass	Y					Bass	Increases the effect of Self-Awareness by 30%(→50%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    296	S	Bass2	Y		Y	B	G		When below 50% HP, increase damage by 6%(→8%).
    297	S	Vile MK-II	B					Vile MK-II	When riding the Goliath, damage is increased by 30%(→40%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    297	S	Vile MK-II2	B		B	R	Y		Increases the damage by 6%(→8%) when equipping a launcher.
    298	S	X Memories	R		R	B			Increases the damage by 6%(→8%) when equipping a buster.
    298	S	X Memories2	R		R	B	Y		30%(→40%) chance to become immune to effects of Immobilize.
    299	S	Fugen	B		B	B			Increase damage you deal by 8%(→10%) when hitting a target in close proximity
    299	S	Fugen2	B		B	B	Y		When you equip two melee weapons at the same time, reduce damage taken by 8%(→10%)
    300	A	Teostra	R		R	Y			When you hit a target in defense reduction status, increase damage you deal by 4%(→6%)
    300	A	Teostra2	R		R	Y	Y		When your target is a fodder, increase damage you deal by 4%(→6%)
    301	A	Somnacanth	B		B	G			20%(→30%) chance to become immune to effects of Defocus, stacks with similar effects.
    301	A	Somnacanth2	B		B	G	R		When you are attacked by a Fodder, reduce the damage you take by 4%(→6%)
    302	A	Rakna-Kadaki	Y		Y	R			20%(→30%) chance to become immune to effects of Continuous Damage.
    302	A	Rakna-Kadaki2	Y		Y	R	R		When you hit a target in Preventive Shield status, increase the damage you deal by 6%(→8%)
    303	A	Almudron	G		G	R			When HP is 50% or higher, reduce damage taken by 4%(→5%).
    303	A	Almudron2	G		G	R	B		When you are attacked by a boss character, reduce the damage you take by 4%(→6%).
    304	S	Yomogi	G		G	G			Increase damage by 6%(→8%) when equipping a machine gun.
    304	S	Yomogi2	G		G	G	B		When your HP drops below 50%, recover HP equivalent to 5%(→7%) of your Attack once every 6 seconds.
    305	S	Chameleos Chameleon	R		R	G			Reduced damage taken by 6%(→8%) when equipping a sprayer.
    305	S	Chameleos Chameleon2	R		R	G	G		Increase damage by 6%(→8%) when equipping a sprayer.
    306	S	Godkarmachine O Inary	Y		Y	Y			When you hit a target in Damage Reduction status, increase the damage you deal by 6% (→8%)
    306	S	Godkarmachine O Inary2	Y		Y	Y	G		Reduce the damage taken by 6%(→8%) when hit by a long range attack.
    307	S	Sigma (Unfinished)	R		R	G			30%(→40%) chance to become immune to effects of Defocus, stacks with similar effects.
    307	S	Sigma (Unfinished)2	R		R	G	B		Increase damage you deal by 6% (→8%) when hitting a target in mid
    308	S	Lumine	B		B	G			At 75% or more HP, increase damage by 5%(→6%).
    308	S	Lumine2	B		B	G	R		When your target is a boss character, increase damage you deal by 2%(→3%). When you are attacked by a boss character, reduce the damage you take by 6%(→7%)
    309	S	Serpent	G		G	G			When below 50% HP, reduce damage taken by 6%(→8%).
    309	S	Serpent2	G		G	G	B		When below 50% HP, increase damage by 6%(→8%).
    310	S	Happy Valentine's Day 2022	Y		Y	R			When you are attacked by a fodder, reduce damage you take by 6%(→8%)
    310	S	Happy Valentine's Day 20222	Y		Y	R	R		When your HP drops below 30%, gain invulnerability status, preventing you from taking any damage(extend duration at 5 stars). This skill will only be activated once per stage. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    311	S	Dynamo	B					Dynamo	Increases the effect of Weapon Mastery by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    311	S	Dynamo2	B		B	G	G		Increases damage you deal by 6%(→8%) when hitting a target in short range.
    312	S	Cinnamon	G					Cinnamon	The recovery time for Sacrifice is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    312	S	Cinnamon2	G		G	R	B		When you are attacked by a fodder, reduce damage you take by 6%(→8%)
    313	S	Trone Bonne in Formal Attire	Y		Y	Y			When your target is a fodder, increase damage you deal by 6%(→8%).
    313	S	Trone Bonne in Formal Attire2	Y		Y	Y	G		When you are attacked by a fodder, reduce damage you take by 6%(→8%)
    314	A	Guild Development	G		G	Y			When you equip a a buster and melee weapon at the same time, increase damage by 6%(→8%)
    314	A	Guild Development2	G		G	Y	G		20%(→30%) chance to become immune to effects of CRIT Reduction
    315	S	Successfully complete	B		B	G			When you equip a a buster and melee weapon at the same time, increase damage by 8%(→10%)
    315	S	Successfully complete2	B		B	G	G		30%(→40%) chance to become immune to effects of CRIT Reduction
    316	A	Lifesaver	G		G	G			When you equip a a sprayer and machine gun at the same time, increase damage by 6%(→8%)
    316	A	Lifesaver2	G		G	G	B		20%(→30%) chance to become immune to the effects of CRID Reduction.
    317	S	Elite Strike	Y		Y	Y			When you equip a a sprayer and machine gun at the same time, increase damage by 8%(→10%)
    317	S	Elite Strike2	Y		Y	Y	G		30%(→40%) chance to become immune to the effects of CRID Reduction.
    318	A	Bitter Struggle	G		G	B			When you equip two busters at the same time, increase damage by 6%(→8%)
    318	A	Bitter Struggle2	G		G	B	B		20%(→30%) chance to become immune to effects of Defocus, stacks with similar effects.
    319	S	Stopping a hundred with one	B		B	G			When you equip two busters at the same time, increase damage by 8%(→10%)
    319	S	Stopping a hundred with one2	B		B	G	G		30%(→40%) chance to become immune to effects of Defocus, stacks with similar effects.
    320	A	Members of the Resistance	G		G	R			When you equip a machine gun and launcher at the same time, increase damage by 6%(→8%)
    320	A	Members of the Resistance2	G		G	R	G		20%(→30%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    321	S	Elfs Convergence	Y		Y	R			When you equip a machine gun and launcher at the same time, increase damage by 8%(→10%)
    321	S	Elfs Convergence2	Y		Y	R	G		30%(→40%) chance to become immune to the effects of Out of Control; the same type of chance can be stacked.
    322	A	Investigate	G		G	G			When you equip a sprayer and launcher at the same time, increase damage by 6%(→8%)
    322	A	Investigate2	G		G	G	G		20%(→30%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    323	S	Final Showdown!	R		R	B			When you equip two melee weapons at the same time, increase damage by 8%(→10%)
    323	S	Final Showdown!2	R		R	B	B		30%(→40%) chance to become immune to the effects of No skills; the same type of chance can be stacked.
    324	S	ROCKMAN X DiVE	B		B	R			Reduced damage taken by 4%(→5%).
    324	S	ROCKMAN X DiVE2	B		B	R	B		Increase damage by 4%(→5%).
    325	S	Gaea Armor X	Y					Gaea Armor X	The damage taken reduction effect of Armor Protection is increased by 20%. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    325	S	Gaea Armor X2	Y		Y	B	B		When you are attacked by a boss character, reduce the damage you take by 6%(→8%).
    326	S	Black Zero	B					Black Zero	Reduce damage taken by 20% when equipping a melee weapon. When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    326	S	Black Zero2	B		B	R	R		When you are attacked by a player, reduce the damage you take by 6%(→8%).
    327	S	Proto Man's Trap	G		G	R			When you equip a buster and melee weapon at the same time, increase damage by 8%(→10%)
    327	S	Proto Man's Trap2	G		G	R	Y		When you equip a buster and melee weapon at the same time, reduce damage taken by 8%(→10%)
    328	S	The Greatest Battle Ever!	G		G	R			When you equip two melee weapon at the same time, increase damage by 8%(→10%)
    328	S	The Greatest Battle Ever!2	G		G	R	Y		When you equip two melee weapon at the same time, reduce damage taken by 8%(→10%)
    329	S	The Fateful Showdown!	G		G	G			30% (→40%) chance to become immune to the effects of No Weapon
    329	S	The Fateful Showdown!2	G		G	G	R		When you hit a target in No Weapon status, increase the damage you deal by 6% (→8%)
    330	S	Metal Heroes	Y		Y	R			30% (→40%) chance to become immune to the effects of No Skill
    330	S	Metal Heroes2	Y		Y	R	B		When you hit a target in No Skill status, increase the damage you deal by 6% (→8%)
    331	S	The Ambition Resurges!	G		G	Y			30%(→40%) chance to become immune to effects of CRIT Reduction.
    331	S	The Ambition Resurges!2	G		G	Y	Y		When you hit a target in CRIT status, increase damage you deal by 8% (→10%)
    332	S	The Threat from Space!	Y		Y	R			30%(→40%) chance to become immune to the effects of CRID Reduction.
    332	S	The Threat from Space!2	Y		Y	R	B		When you hit a target in Blind status, increase the damage you deal by 6% (→8%)
    333	S	Rabbit? Easter eggs!	G		G	B			30%(→40%) chance to become immune to the effects of Confusion; the same type of chance can be stacked.
    333	S	Rabbit? Easter eggs!2	G		G	B	Y		When HP is <50%, you get an accelerated state, increasing movement speed by 25%(→30%), but can only be activated once per stage. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    334	S	Command Mission	B		B	B			30%(→40%) chance to become immune to effects of Defocus, stacks with similar effects.
    334	S	Command Mission2	B		B	B	R		When your target is a boss, increase damage you deal by 6%(→8%).
    335	S	Everyday Heroes	R		R	R			30% (→40%) chance to become immune to the effects of CRIT Reduction
    335	S	Everyday Heroes2	R		R	R	Y		When you hit a target in No Weapon status, increase the damage you deal by 6% (→8%)
    336	S	Sigma (X3 1st form)	G		G	G			30% (→40%) chance to become immune to the effects of CRID Reduction
    336	S	Sigma (X3 1st form)2	G		G	G	Y		When you hit a target in No Skill status, increase the damage you deal by 6% (→8%)
    337	S	Fourth Armor X	B					Fourth Armor X	Reduced damage taken by 20%(→25%) when equipping a buster. When you equip more than 1 copy of a card, only the card in the right most slot will be activated
    337	S	Fourth Armor X2	B		B	G	Y		When you hit a target in CRIT status, increase damage you deal by 8% (→10%)
    338	S	ProtoMan.EXE	R					ProtoMan.EXE	The preparation time of the Sonic Boom is reduced by 20%. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    338	S	ProtoMan.EXE2	R		R	B	G		When you hit a target in CRID status, increase damage you deal by 8% (→10%)
    339	S	Dark Dizzy	R		R	G			20% (→30%) chance to become immune to the effects of Blind
    339	S	Dark Dizzy2	R		R	G	G		When you equip a buster and a sprayer at the same time, reduce damage taken by 8%(→10%)
    340	S	Toxic Seahorse	B		B	Y			20% (→30%) chance to become immune to the effects of Interference
    340	S	Toxic Seahorse2	B		B	Y	G		When you equip a machine gun and a launcher at the same time, reduce damage taken by 8%(→10%)
    341	S	Slash Beast	Y		Y	B	G		When your target is a boss character, increase damage you deal by 4%(→6%)
    341	S	Slash Beast2	Y		Y	B	G		Reduced damage taken by 6%(→8%) when equipping a melee weapon.
    342	S	Shield Sheldon	G		G	R			When your target is a fodder, increase damage you deal by 4%(→6%)
    342	S	Shield Sheldon2	G		G	R	Y		When you are attacked by a Fodder, reduce the damage you take by 6%(→8%)
    343	S	Swimsuit iCO	B					Swimsuit iCO	Increased the effect of Shelling Meastro by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    343	S	Swimsuit iCO2	B		B	B	G		When you equip a a machine gun and a launcher weapon at the same time, increase damage by 8% (→10%)
    344	S	Swimsuit Ciel	R					Swimsuit Ciel	The damage taken reduction effect of Safeguarding the Oceans is increased by 10%(→15%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated
    344	S	Swimsuit Ciel2	R		R	R	Y		When you hit a target in Interference status, increase the damage you deal by 6% (→8%)
    345	S	Aile (ZXA)	R					Aile (ZXA)	Increase the effect of Sword Cannon Adaptability by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated
    345	S	Aile (ZXA)2	R		R	B	G		30% (→40%) chance to become immune to the effects of Blind
    346	S	Angepitoyeir	G					Angepitoyeir	When Rift Flash hits, it will slow the target and reduce its movement speed by 30%. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    346	S	Angepitoyeir2	G		G	B	B		Increase damage you deal by 6% (→8%) when hitting a target in mid
    347	S	Gate (Combat Type)	G					Gate	When activating Nightmare Hole, you get a damage enhancement status, which increases damage dealt by 20%(→25%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated
    347	S	Gate (Combat Type)2	G		Y	Y	B		30% (→40%) chance to become immune to the effects of Interference
    348	S	Copy X (2nd form)	B		B	R			When you hit a target in Blind status, increase the damage you deal by 6% (→8%)
    348	S	Copy X (2nd form)2	B		B	R	R		When you equip two buster weapon at the same time, reduce damage taken by 8% (→10%)
    349	S	Fighting is Justice	R		R	Y			Increase damage you deal by 8%(→10%) when hitting a target in close proximity
    349	S	Fighting is Justice2	R		R	Y	Y		When you equip a sprayer and a launcher at the same time, increase damage by 8%(→10%)
    350	S	Gears of Fate	G		G	Y			Reduce the damage taken by 6%(→8%) when hit by a mid range attack.
    350	S	Gears of Fate2	G		G	Y	Y		When you equip a machine gun and a launcher at the same time, reduce damage taken by 8%(→10%)
    351	S	Cross Over	Y		Y	R			Increases damage you deal by 8%(→10%) when hitting a target in extremely long range
    351	S	Cross Over2	Y		Y	R	B		Reduce the damage taken by 8%(→10%) when hit by an extremely long range attack.
    352	S	I am the Messiah!	B		B	Y			Increases damage you deal by 6%(→8%) when hitting a target in short range.
    352	S	I am the Messiah!2	B		B	Y	Y		Reduce the damage taken by 8%(→10%) when hit by an extremely short range attack
    353	S	Shadow Armor X	R					Shadow Armor X	The damage taken reduction effect of Armor Protection is increased by 20%. When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    353	S	Shadow Armor X2	R		R	G	Y		Reduce the damage taken by 6%(→8%) when hit by a long range attack.
    354	S	Dame Luchika	Y		Y	R			When hitting a target in CRIT Reduction status, increase damage you deal by 6%(→8%)
    354	S	Dame Luchika2	Y		Y	R	B		When hitting a target in CRID Reduction status, increase damage you deal by 6%(→8%)
    355	S	Admiral Galleus	G		G	G			30%(→40%) chance to become immune to effects of Blind, stacks with similar effects.
    355	S	Admiral Galleus2	G		G	G	Y		30%(→40%) chance to become immune to effects of Interference, stacks with similar effects.
    356	S	Knight of the Royal Order Fiorayne	Y		Y	R			When you hit a target in Blind status, increase the damage you deal by 6% (→8%)
    356	S	Knight of the Royal Order Fiorayne2	Y		Y	R	R		When you hit a target in defense reduction status, increase damage you deal by 6%(→8%)
    357	S	The Quest Damsel Chichae	B		B	R			Increase damage you deal by 6(→8%) when hitting a target in long range
    357	S	The Quest Damsel Chichae2	B		B	R	R		Reduce the damage taken by 6%(→8%) when hit by a mid range attack.
    358	S	Master Arlow	B		B	G			When you equip a buster and a machine gun at the same time, increase damage by 8%(→10%)
    358	S	Master Arlow2	B		B	G	G		When you equip a buster and a machine gun at the same time, reduce damage taken by 8%(→10%)
    359	S	Sir Jae	R		R	B			When you hit a target in No Weapon status, increase the damage you deal by 6% (→8%)
    359	S	Sir Jae2	R		R	B	B		When you hit a target in No Skill status, increase the damage you deal by 6% (→8%)
    360	A	The Scientist Bahari	B		B	R			Increases damage you deal by 4%(→6%) when hitting a target in short range.
    360	A	The Scientist Bahari2	B		B	R	G		Reduce the damage taken by 4%(→6%) when hit by a short range attack.
    361	A	Doctor Tadori	Y		Y	Y			Increases damage you deal by 6%(→8%) when hitting a target in extremely long range.
    361	A	Doctor Tadori2	Y		Y	Y	G		Reduce the damage taken by 6%(→8%) when hit by an extremely long range attack.
    362	A	The Smithy Minayle	G		G	Y			Increases damage you deal by 6%(→8%) when hitting a target in close proximity
    362	A	The Smithy Minayle2	G		G	Y	G		Reduce the damage taken by 6%(→8%) when hit by an extremely short range attack. Requirement:
    363	A	The Merchant Oboro	R		R	B			Increases damage you deal by 4%(→6%) when hitting a target in long range.
    363	A	The Merchant Oboro2	R		R	B	B		Reduce the damage taken by 4%(→6%) when hit by a long range attack. Requirement:
    364	S	Malzeno Dragoon	G		G	R			30%(→40%) chance to become immune to effects of Blind, stacks with similar effects.
    364	S	Malzeno Dragoon2	G		G	R	R		When you equip a sprayer and launcher at the same time, increase damage by 6%(→8%)
    365	S	The Demon of the Flames	Y		Y	R			30%(→40%) chance to become immune to effects of Interference, stacks with similar effects.
    365	S	The Demon of the Flames2	Y		Y	R	B		When you equip a sprayer and machine gun at the same time, increase damage by 8%(→10%)
    366	S	Droitclair	G					Droitclair	Increases the effect of Sprayer Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.
    366	S	Droitclair2	G		G	B	B		Increase damage by 6%(→8%) when equipping a Sprayer.
    367	S	Japanese version 2nd Anniversary	R		R	B			Reduce the damage you take by 3%(→5%)
    367	S	Japanese version 2nd Anniversary2	R		R	B	B		Increase damage you deal by 3%(→5%)
    368	S	Gifts from Eratoeir	Y		Y	Y			Increase damage you deal by 6% (→8%) when hitting a target in mid
    368	S	Gifts from Eratoeir2	Y		Y	Y	Y		When you equip a buster and melee weapon at the same time, increase damage by 8%(→10%)
    369	S	Gifts from Droitclair	G		G	G			When below 50% HP, increase damage by 6%(→8%).
    369	S	Gifts from Droitclair2	G		G	G	G		At 50% or more HP, increase damage by 4%(→5%).
    370	S	Gifts from Angepitoyeir	B		B	B			Increases damage you deal by 6%(→8%) when hitting a target in short range.
    370	S	Gifts from Angepitoyeir2	B		B	B	B		When you equip a buster and a melee weapon at the same time, reduce damage taken by 8%(→10%)
    371	S	Mega Man Killer	R		R	G			Reduce the damage taken by 6%(→8%) when hit by a mid range attack.
    371	S	Mega Man Killer2	R		R	G	Y		When you equip a buster and a machine gun at the same time, increase damage by 8%(→10%)
    372	S	Time Machine	G		G	B			Reduce the damage taken by 6%(→8%) when hit by a short range attack.
    372	S	Time Machine2	G		G	B	Y		When you equip a buster and a sprayer at the same time, reduce damage taken by 8%(→10%)
    373	S	Super Computer	B		B	R			Reduce the damage taken by 8%(→10%) when hit by an extremely short range attack.
    373	S	Super Computer2	B		B	R	R		Increases damage you deal by 8%(→10%) when hitting a target in close proximity
    374	S	The Liquidator	G		G	R			Reduce the damage taken by 8%(→10%) when hit by an extremely long range attack.
    374	S	The Liquidator2	G		G	R	B		Increases damage you deal by 8%(→10%) when hitting a target in extremely long range
    375	S	Stardroids	R		R	Y			When hitting a target in CRID Reduction status, increase damage you deal by 6%(→8%)
    375	S	Stardroids2	R		R	Y	B		When hitting a target in CRIT Reduction status, increase damage you deal by 6%(→8%)
    376	S	RiCO (Card Shop)	G					RiCO	The preparation time for the Data Analysis is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    376	S	RiCO (Card Shop)2	G		G	B	B		Reduce the damage taken by 6%(→8%) when hit by a mid range attack.
    377	S	iCO	Y					iCO	The preparation time for the Analyzer Wall is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    377	S	iCO2	Y		Y	Y	R		Reduce the damage taken by 6%(→8%) when hit by a short range attack.
    378	S	Nana	G					Nana	Special Armor's damage reduction rate is increased to 25%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    378	S	Nana2	G		G	Y	Y		Increase damage you deal by 6(→8%) when hitting a target in long range
    379	S	Super Bass	R					Super Bass	Increases the of effect of Bassnium by 50%(→100%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    379	S	Super Bass2	R		R	B	Y		Increase damage you deal by 6(→8%) when hitting a target in mid range
    380	S	Roll.EXE	B					Roll.EXE	When using Roll Arrow, gain damage enhancement and increase damage dealt by 24%(→100%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    380	S	Roll.EXE2	B		B	G	G		Reduce the damage taken by 6%(→8%) when hit by a long range attack.
    381	S	Rogue	G					Rogue	When below 42% HP, reduce damage taken by 26%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.
    381	S	Rogue2	G		G	R	R		Increases damage you deal by 6%(→8%) when hitting a target in short range.
    382	S	Merry Christmas 2022	Y		Y	B			When you equip a machine gun and a launcher at the same time, reduce damage taken by 8%(→10%)
    382	S	Merry Christmas 20222	Y		Y	B	B		When your HP drops below 50%, recover HP equivalent to 6%(→8%) of your Attack every 6 seconds.
    383	S	XDiVE Hosts	B		B	R			Reduced damage taken by 5%(→7%).
    383	S	XDiVE Hosts2	B		B	R	B		Increase damage by 5%(→7%).
    384	S	Devil May Cry	R		R	G			When your target is a boss character, increase damage you deal by 5%(→7%). When you are attacked by a boss character, reduce the damage you take by 5%(→7%)
    384	S	Devil May Cry2	R		R	G	G		When HP is <50%, gain enhanced DMG and increase damage by 40%(→50%). It can only be triggered once in a battle. when you equip more than 1 copy of a card, only the card in the right most slot will be activated. When the "Sin Devil Trigger I" status is activated, the "Sin Devil Trigger II" status will be disabled.
    385	S	Demon King Urizen	Y		Y	G			When your target is a player, increase damage you deal by 6%(→8%).
    385	S	Demon King Urizen2	Y		Y	G	G		When your target is a player, increase damage you deal by 5%(→7%). When you are attacked by a player, reduce the damage you take by 5%(→7%)
    386	S	Nero	G		G	B			When you equip a buster and melee weapon at the same time, reduce damage taken by 8%(→10%)
    386	S	Nero2	G		G	B	G		There is a chance to increase damage dealt to enemy by 3%(→5%) when you perform any attack. It can be stacked up to 4 levels. When the "Combo Effect I" status is activated, the "Combo Effect II" status will be disabled.
    387	S	Dante	R		R	R			When you equip a buster and melee weapon at the same time, increase damage by 8%(→10%)
    387	S	Dante2	R		R	R	Y		There is a chance to increase damage dealt to enemy by 3%(→5%) when you perform any attack. It can be stacked up to 4 levels. When the "Combo Effect I" status is activated, the "Combo Effect II" status will be disabled.
    388	S	V	B		B	B			Increases damage you deal by 8%(→10%) when hitting a target in extremely long range
    388	S	V2	B		B	B	R		There is a chance to increase damage dealt to enemy by 3%(→5%) when you perform any attack. It can be stacked up to 4 levels. When the "Combo Effect I" status is activated, the "Combo Effect II" status will be disabled.
    389	S	Vergil	B		B	Y			When you equip 2 melee weapons at the same time, increase damage by 8%(→10%)
    389	S	Vergil2	B		B	Y	B		There is a chance to increase damage dealt to enemy by 3%(→5%) when you perform any attack. It can be stacked up to 4 levels. When the "Combo Effect I" status is activated, the "Combo Effect II" status will be disabled.
    390	A	Morph Moth	R		R	G			When you hit a target in Blind status, increase the damage you deal by 4% (→6%)
    390	A	Morph Moth2	R		R	G	B		When you equip a buster and melee weapon at the same time, reduce damage taken by 6%(→8%)
    391	A	Bubble Crab	B		B	G			When hitting a target in Out of Control status, increase damage you deal by 4%(→6%)
    391	A	Bubble Crab2	B		B	G	G		When you equip a buster and a sprayer at the same time, reduce damage taken by 6%(→8%)
    392	A	Blizzard Buffalo	G		G	R			20%(→30%) chance to become immune to effects of Slow.
    392	A	Blizzard Buffalo2	G		G	R	R		When you equip a buster and a machine gun at the same time, reduce damage taken by 6%(→8%) Requirement:
    393	A	Crush Crawfish	Y		Y	B			When you hit a target in defense reduction status, increase damage you deal by 4%(→6%)
    393	A	Crush Crawfish2	Y		Y	B	R		When you equip two busters at the same time, reduce damage taken by 6%(→8%) Requirement:
    394	S	Ultra Batton M-501	R		R	G			After activating a Skill, heal HP equals to 12%(→18%) of attack. This can only trigger once every 8 seconds.
    394	S	Ultra Batton M-5012	R		R	G	R		When equipped with a Machine Gun, increase Attack by 8%(→16%)
    395	S	Mad Mad Pecker	G		G	R			When equipped with TWO Machine Guns, increase Defense by 10%(→14%)
    395	S	Mad Mad Pecker2	G		G	R	R		When equipped with TWO Machine Guns, increase Attack by 30%(→36%)
    396	S	Mega Notor Banger	B		B	Y			When equipped with a Launcher weapon, increase damage by 8%(→12%)
    396	S	Mega Notor Banger2	B		B	Y	Y		When equipped with a Launcher and a Sprayer, increase damage by 20%(→24%)
    397	S	Old Old Robot	Y		Y	B			When above 75% HP, increase damage by 8%(→10%)
    397	S	Old Old Robot2	Y		Y	B	Y		When above 75% HP, decrease damage taken by 8%(→10%)
    398	S	Vengeful Grenade	B					Vengeful Vile	Decrease the cooldown for Vengeful Grenade by 10%(→20%)
    398	S	Vengeful Grenade2	B		B	Y	G		When equipped with a launcher, decrease damage taken by 8%(→12%)
    399	S	Vengeful Vile	Y					Vengeful Vile	Decrease the cooldown for Vengeful Round by 10%(→20%)
    399	S	Vengeful Vile2	Y		Y	B	G		When attacking a Boss Character, increase Damage by 12%(→15%)
    400	S	Fight Card	R		R	R			Gain a 35%(→42%) chance to become immune to the effect of No Skill
    400	S	Fight Card2	R		R	R	B		When equipped with a Melee Weapon, increase Damage by 10%(→14%)
    401	S	Ultra Ratty	Y		Y	B			When equipped with a Buster, reduce damage taken by 10%(→12%)
    401	S	Ultra Ratty2	Y		Y	B	G		When equipped with TWO Busters, increase damage by 25%(→32%)
    402	S	Ultra Puffy	B		B	Y			When attacking a target from long range, increase damage by 15%(→18%)
    402	S	Ultra Puffy2	B		B	Y	G		When attacking a target from long range, increase damage by 18%(→24%)
    403	S	Ultra Fishy	G		G	B			When equipped with a Buster, increase damage by 10%(→12%)
    403	S	Ultra Fishy2	G		G	B	Y		When equipped with TWO Busters, decrease damage taken 14%(→18%)`;

    class Card {
        constructor(number, rank, name, color, effect1, effect2) {
            this.number = number;
            this.rank = rank;
            this.name = name;
            this.color = color;
            this.effect1 = effect1;
            this.effect2 = effect2;
        }
    }
    
    function transformData(data) {
        let raw_cards = [];
        let card_list = [];
        let split_data = data.split('\n');
        split_data.forEach( line => {
            raw_cards.push(line.split('\t'))
        });
        raw_cards.forEach( card => {
            let eff = card[8] != "" ? [card[9], card[8]] : (card[5] == "" ? [] : [card[9], card[5], card[6], card[7]])
            if (eff.length > 3 && eff[3] == "") { eff.pop() }
            let present = false;
            for (let i = 0; i < card_list.length; i++) {
                if (card_list[i].name+"2" == card[2]) {
                    card_list[i].effect2 = eff;
                    present = true;
                    break;
                }
            }
            if (!present) {
                card_list.push(new Card(card[0].trim(), card[1], card[2], card[3], eff, []))
            }
        });
        return card_list;
    }

    function createDropdown(cards, div, dropdown, position) {
        let blankOption = document.createElement("option");
        blankOption.value = '';
        blankOption.innerText = '';
        dropdown.appendChild(blankOption)
        cards.forEach(card => {
            let option = document.createElement("option");
            option.value = card.name;
            option.innerText = card.name;
            option.setAttribute("class", `color-${card.color}`)
            dropdown.appendChild(option);
        });
        div.appendChild(dropdown);
        div.appendChild(document.createElement("br"))
        div.appendChild(document.createElement("br"))

        dropdown.addEventListener("input", () => {
            chosenCards[position] = getCardByName(dropdown.value);
            applyDropdownStyling()
            postEffects(getAppliedEffects())
        })
    }
    
    function sortByName(cards) {
        let cards2 = [...cards]
        cards2.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        return cards2;
    }

    function getCardByName(cardName) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].name == cardName) return cards[i];
        }
    }

    function getColorByName(cardName) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].name == cardName) return cards[i].color;
        }
    }

    function getChosenCards() {
        return chosenCards;
    }

    function getChosenCardsColors() {
        let colors = [];
        for (let i = 0; i < chosenCards.length; i++) {
            let c = chosenCards[i] ? chosenCards[i].color : '';
            colors.push(c)
        }
        return colors;
    }

    function getAppliedEffects() {
        let cardColors = getChosenCardsColors().sort().join('');
        let gainedEffects = [];
        for (let i = 0; i < chosenCards.length; i++) {
            let currCard = chosenCards[i];
            let effect1Req = '';
            let effect2Req = '';
            if (currCard) {
                let sliceLength1 = currCard.effect1.length - 1;
                let sliceLength2 = currCard.effect2.length - 1;
                if (currCard.effect1.length > 1) {
                    effect1Req = currCard.effect1.slice(-sliceLength1).sort().join('')
                } if (currCard.effect2.length > 1) {
                    effect2Req = currCard.effect2.slice(-sliceLength2).sort().join('');
                }
            } console.log(cardColors)
            if (cardColors.includes(effect1Req) && effect1Req.length > 0)
                gainedEffects.push({
                    name: currCard.name,
                    color: currCard.color,
                    effects: [currCard.effect1[0]]
            });
            if (cardColors.includes(effect2Req) && effect2Req.length > 0) {
                for (let j = 0; j < gainedEffects.length; j++) {
                    if (gainedEffects[j].name == currCard.name) {
                        gainedEffects[j].effects.push(currCard.effect2[0]);
                    }
                }
            }
        }
        return gainedEffects;
    }

    function postEffects(effects) {
        let post = '<dl>';
        effects.forEach(effect => {
            post += `<dt>${effect.name}</dt>`;
            post += `<dd>${effect.effects[0]}</dd>`;
            post += effect.effects[1] ? `<dd>${effect.effects[1]}</dd>` : ``;
        })
        post += "</dl>";
        const effectsDiv = document.getElementById("effects");
        effectsDiv.innerHTML = post;
    }

    function applyDropdownStyling() {
        let allSelects = document.querySelectorAll('select')
        for (let i = 0; i < allSelects.length; i++) {
            let value = allSelects[i].value;
            let color = getColorByName(value);
            allSelects[i].setAttribute("style", `background-color:${
                color == 'R' ? RED : (color == 'B' ? BLUE : (color  == 'G' ? GREEN : (color == 'Y' ? YELLOW : 'white')))
            };font-weight:bold;font-family:verdana;padding:5px 0px;text-align:center`)
        }
    }

    function applyDropdownOptionStyling() {
        let allSelects = document.querySelectorAll('select')
        for (let i = 0; i < allSelects.length; i++) {
            for (let j = 0; j < allSelects[i].childNodes.length; j++) {
                if (allSelects[i][j].hasAttribute("class")) {
                    let classColor = allSelects[i][j].className.substring(allSelects[i][j].className.length - 1)
                    allSelects[i][j].setAttribute("style", `background-color:${
                        classColor == 'R' ? RED : (classColor == 'B' ? BLUE : (classColor == 'G' ? GREEN : YELLOW))
                    };font-weight:bold;font-family:verdana`)
                }
            }
        }
    }

    const RED = "#ff6666";
    const BLUE = "#6666ff";
    const GREEN = "#66ff66";
    const YELLOW = "yellow"

    let cards = transformData(raw_data);

    const chosenCards = new Array(3);
    
    const dropdowns = document.getElementById("dropdowns");
    const dropdown1 = document.createElement("select");
    const dropdown2 = document.createElement("select");
    const dropdown3 = document.createElement("select");
    
    createDropdown(sortByName(cards), dropdowns, dropdown1, 0);
    createDropdown(sortByName(cards), dropdowns, dropdown2, 1);
    createDropdown(sortByName(cards), dropdowns, dropdown3, 2);

    applyDropdownStyling();
    applyDropdownOptionStyling();

}