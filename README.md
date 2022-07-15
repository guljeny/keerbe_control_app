# Controll app

## THIS APP IS IN WORK IN PROGRESS STATUS

![App main screen](https://github.com/guljeny/keebee/blob/master/images/app.jpg)

## Requirements
> Required only to build and run [controll app](#controll-app)

- python3
- node 12+

## Run app
Init git submodules
`git submodule init`

Install requiremets:
`pip install ./firmware/requirements.txt`

To change layout and update/reset keboard run it:

```
npm i
npm run build
npm start
```

## Restore keyboard
If keyboard not boot try to:
- Unplug USB cable from keyboard
- Press top-left key on main(right) part
- Konnect keyboard via usb (You will see CIRCUITPY drive)
- Start software and press `Restore` button
- Wait few minutes and try to unplug and plug USB cable

## Features
- [x] Connect to keyboard
- [x] Read layout from keyboard
- [x] Update layout
- [ ] Update firmware
- [ ] Reset keyboard
