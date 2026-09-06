import os
from PIL import Image, ImageDraw, ImageFont

def generate_cover():
    width, height = 1200, 1600
    img = Image.new("RGB", (width, height), (11, 19, 43)) # Deep navy
    draw = ImageDraw.Draw(img)

    # Gradient background
    for y in range(height):
        r = int(11 + (28 - 11) * (y / height))
        g = int(19 + (40 - 19) * (y / height))
        b = int(43 + (75 - 43) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Tech grid background pattern
    grid_color = (30, 58, 138, 40)
    for x in range(0, width, 60):
        draw.line([(x, 0), (x, height)], fill=(25, 45, 95))
    for y in range(0, height, 60):
        draw.line([(0, y), (width, y)], fill=(25, 45, 95))

    # Geometric glowing background elements
    draw.ellipse([150, 250, 1050, 1150], outline=(0, 180, 216), width=3)
    draw.ellipse([250, 350, 950, 1050], outline=(247, 127, 0), width=2)
    draw.ellipse([350, 450, 850, 950], outline=(0, 245, 255), width=4)

    # Futuristic central node graph
    nodes = [(600, 400), (450, 550), (750, 550), (400, 750), (800, 750), (600, 900)]
    for n1 in nodes:
        for n2 in nodes:
            draw.line([n1, n2], fill=(0, 212, 255), width=2)
    for nx, ny in nodes:
        draw.ellipse([nx-15, ny-15, nx+15, ny+15], fill=(255, 215, 0), outline=(255, 255, 255), width=3)

    # Load Fonts
    font_path_bd = r"C:\Windows\Fonts\arialbd.ttf"
    font_path_reg = r"C:\Windows\Fonts\arial.ttf"
    font_path_geor = r"C:\Windows\Fonts\georgiab.ttf"

    try:
        f_title = ImageFont.truetype(font_path_bd, 54)
        f_subtitle = ImageFont.truetype(font_path_reg, 26)
        f_author_label = ImageFont.truetype(font_path_reg, 24)
        f_author_name = ImageFont.truetype(font_path_bd, 48)
        f_edition = ImageFont.truetype(font_path_bd, 22)
    except:
        f_title = f_subtitle = f_author_label = f_author_name = f_edition = ImageFont.load_default()

    # Top Edition Badge
    draw.rectangle([350, 80, 850, 130], fill=(30, 58, 138), outline=(0, 212, 255), width=2)
    draw.text((600, 105), "EXECUTIVE MASTER EDITION", font=f_edition, fill=(255, 255, 255), anchor="mm")

    # Main Title
    draw.text((600, 220), "THE AI-AUGMENTED", font=f_title, fill=(255, 215, 0), anchor="mm")
    draw.text((600, 290), "ENTERPRISE AGILE COACH", font=f_title, fill=(255, 255, 255), anchor="mm")

    # Subtitle Box
    draw.text((600, 1060), "A Technical & Operational Playbook for Scaling Agile Coaching,", font=f_subtitle, fill=(203, 213, 225), anchor="mm")
    draw.text((600, 1100), "Jira DC/Cloud, Azure DevOps, and Agentic AI Architecture", font=f_subtitle, fill=(203, 213, 225), anchor="mm")

    # Author Banner Box at Bottom
    draw.rectangle([100, 1250, 1100, 1480], fill=(15, 23, 42), outline=(255, 215, 0), width=3)
    draw.text((600, 1310), "AUTHOR & PRINCIPAL ARCHITECT", font=f_author_label, fill=(0, 212, 255), anchor="mm")
    draw.text((600, 1390), "SANTOSHANAND ADKAR", font=f_author_name, fill=(255, 215, 0), anchor="mm")

    # Footer note
    draw.text((600, 1530), "Enterprise Architecture • Scaled Frameworks • Prompt Libraries • Automation Scripts", font=f_edition, fill=(148, 163, 184), anchor="mm")

    output_path = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book\master_cover.jpg"
    img.save(output_path, quality=95)
    print("Cover image created successfully at:", output_path)

if __name__ == "__main__":
    generate_cover()
