import os
import json

# Python script to assemble and output data/curriculum.js

def generate_all_12_modules():
    import generate_final_curriculum as m1_loader
    import make_master_curriculum as m2_loader

    # Load Module 1
    m1 = m1_loader.m1

    # Load Module 2
    import append_modules_to_script as m2_builder
    m2 = m2_builder.generate_curriculum()[1]

    # Load Module 3
    import build_full_curriculum_master as m3_builder
    m3 = m3_builder.build_js()[2]
    m4 = m3_builder.build_js()[3]

    # Load Module 5-12
    import make_complete_curriculum_file as rest_builder
    m5 = rest_builder.m5
    m6 = rest_builder.m6
    m7 = rest_builder.m7
    m8 = rest_builder.m8
    m9 = rest_builder.m9
    m10 = rest_builder.m10
    m11 = rest_builder.m11
    m12 = rest_builder.m12

    all_modules = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12]

    out_file = os.path.join("data", "curriculum.js")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("window.AI_CURRICULUM_DATA = ")
        json.dump(all_modules, f, indent=2)
        f.write(";\n")

    print(f"Successfully generated data/curriculum.js with {len(all_modules)} modules!")

if __name__ == "__main__":
    generate_all_12_modules()
