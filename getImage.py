#!/usr/bin/env python3

import os
from PIL import Image
from inky.auto import auto
import requests
from io import BytesIO

# Get the current path
PATH = os.path.dirname(__file__)

inky_display = auto(ask_user=True, verbose=True)




response = requests.get("http://192.168.3.33:1337/weather/?gas_index=0&gas_resistance=12946860.58570794&heat_stable=false&humidity=38.272&meas_index=0&pressure=1027.39&status=32&temperature=19.75")
img = Image.open(BytesIO(response.content))
inky_display.set_image(img)
inky_display.show()