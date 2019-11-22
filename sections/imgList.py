# -*- coding: utf-8 -*-
"""
Created on Mon Nov 11 13:50:22 2019

@author: alexj
"""

import os
import json

allFilesAndDir = list(os.walk('.'))

allDir = allFilesAndDir[0][1]

dico_dir_files = {}
dico_files_dir = {}

for k in range(len(allDir)):
    directory = allDir[k]
    dico_dir_files[directory] = allFilesAndDir[k+1][2]
    for file in dico_dir_files[directory]:
        dico_files_dir[file] = dico_files_dir.get(file,[]) + [directory]
        
with open('dico_dir_files.txt','w') as f:
    f.write(json.dumps(dico_dir_files))
with open('dico_files_dir.txt','w') as f:
    f.write(json.dumps(dico_files_dir))