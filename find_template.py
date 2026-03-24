import cv2
import numpy as np

# Load images
bg = cv2.imread(r'c:\Users\Mohammed Imthiyaz\Desktop\fourart 3d\public\products-hero-new.png')
template = cv2.imread(r'c:\Users\Mohammed Imthiyaz\Desktop\fourart 3d\public\safety-locks.png')

# The templates might different sizes or scales.
# The user's new safety locks image might be larger or smaller than the one in the hero-image.
# Let's resize template in various sizes to find best match
gray_bg = cv2.cvtColor(bg, cv2.COLOR_BGR2GRAY)
gray_tpl = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)

best_val = -1
best_loc = None
best_scale = 1

h, w = gray_tpl.shape

for scale in np.linspace(0.2, 1.5, 30):
    resized = cv2.resize(gray_tpl, (int(w * scale), int(h * scale)))
    if resized.shape[0] > gray_bg.shape[0] or resized.shape[1] > gray_bg.shape[1]:
        continue
    
    res = cv2.matchTemplate(gray_bg, resized, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    
    if max_val > best_val:
        best_val = max_val
        best_loc = max_loc
        best_scale = scale

print(f"Best Match: {best_val}")
if best_loc:
    print(f"Location: {best_loc}")
    print(f"Scale: {best_scale}")
    found_w = int(w * best_scale)
    found_h = int(h * best_scale)
    print(f"Bounding Box: {best_loc[0]}, {best_loc[1]}, {found_w}, {found_h}")
    # Print percentage:
    px = best_loc[0] / gray_bg.shape[1] * 100
    py = best_loc[1] / gray_bg.shape[0] * 100
    pw = found_w / gray_bg.shape[1] * 100
    ph = found_h / gray_bg.shape[0] * 100
    print(f"Percentages: left={px:.2f}%, top={py:.2f}%, width={pw:.2f}%, height={ph:.2f}%")
