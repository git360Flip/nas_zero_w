# NAS Zero W

Connect a private NAS server to your local network.   
You can upload and download files from a hard disk,   
plugged into the USB port of your Raspberry Pi Zero W.


## Requirements

You need at least a Raspberry Pi Zero W to run this private NAS.  
Every Raspberry Pi released after the Pi Zero W will work.   
I recommend you to buy a starter kit to get these essential items:

1. Micro SD Card with micro SD to SD Adapter to install Raspbian in your Pi Zero W
2. 5V Power supply
3. Micro USB to USB Adapter to connect your hard disk
4. (OPTIONAL) micro HDMI to HDMI Adapter

The micro HDMI to HDMI Adapter can be useful for displaying the screen of Raspbian.  
The micro USB to USB Adapter can also connect a USB Keyboard to control your Pi Zero W.


## Installation

1) Install **Raspberry Pi OS Lite** with [Raspberry Pi Imager](https://www.raspberrypi.com/software/).  

Before writing to the micro SD Card, make sure to set these settings:   

- **Hostname** (link used to access your NAS)
- **Activate SSH Access**
- **Define an username and password**
- **Configure the WiFi**
- Define the locale settings

2) Install **NAS Zero W servers** on your Raspberry Pi Zero W
