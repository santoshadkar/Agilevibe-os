import sys
import os
import json

# Script to build data/curriculum.js with 12 complete deep-read modules

print("Writing full 12-module curriculum dataset...")

# We will generate curriculum_data dictionary and write window.AI_CURRICULUM_DATA = ...

with open("data/curriculum.js", "w", encoding="utf-8") as f:
    f.write("// Complete 12-Module Deep Masterclass Dataset\n")
    f.write("window.AI_CURRICULUM_DATA = ")

print("Done base initialization.")
