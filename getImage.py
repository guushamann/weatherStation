#!/usr/bin/env python3

import os
from PIL import Image
from inky import InkyWHAT
import requests
from io import BytesIO

# Get the current path
PATH = os.path.dirname(__file__)

inky_display = InkyWHAT('yellow')



url = 'http://192.168.3.33:1337/weather/?gas_index=0&gas_resistance=12946860.58570794&heat_stable=false&humidity=38.272&meas_index=0&pressure=1027.39&status=32&temperature=19.75'
response = requests.get(url)
img = Image.open(BytesIO(response.content)).convert("RGB")
w, h = img.size
h_new = 300
w_new = int((float(w) / h) * h_new)
w_cropped = 400
img = img.resize((w_new, h_new), resample=Image.LANCZOS)
x0 = (w_new - w_cropped) / 2
x1 = x0 + w_cropped
y0 = 0
y1 = h_new
img = img.crop((x0, y0, x1, y1))
pal_img = Image.new("P", (1, 1),0)
palette = [255, 255, 255, 0, 0, 0, 255, 0, 0]
NUM_ENTRIES_IN_PILLOW_PALETTE = 256
num_bands = len("RGB")
num_entries_in_palettedata = len(palette) // num_bands
palette.extend(palette[:num_bands]
                   * (NUM_ENTRIES_IN_PILLOW_PALETTE
                      - num_entries_in_palettedata))
pal_img.putpalette(palette)
img = img.convert("RGB").quantize(palette=pal_img, dither=0)

inky_display.set_border(inky_display.WHITE)
inky_display.set_image(img)
inky_display.show()