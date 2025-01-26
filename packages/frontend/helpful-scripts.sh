# TODO: -fill/-stroke doesn't work
/usr/local/bin/convert \
-density 2400 -resize 400x400 \
-gravity center -extent 512x512 \
-background "#0f172a" -fill "#FE5F00" \
./src/assets/IAW.svg ./public/icons/512-maskable.png

/usr/local/bin/convert \
-density 2400 -resize 500x500 \
-gravity center -extent 512x512 \
-background "#0f172a" -fill "#FE5F00" \
./src/assets/IAW.svg ./public/icons/512.png