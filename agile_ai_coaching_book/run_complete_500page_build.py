import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

print("Running complete 500-page build...")

# Execute part builders
import part1_builder
part1_builder.build_part1()

import gen_part2
gen_part2.main()

import gen_part3
gen_part3.main()

import gen_part4
gen_part4.main()

import gen_part5
gen_part5.main()

import gen_part6
gen_part6.main()

import gen_appendices
gen_appendices.main()

print("All parts written.")
