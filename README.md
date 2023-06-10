# NAS Zero W

Connect a private NAS server to your local network.   
You can upload and download files from a hard disk,   
plugged into the USB port of your Raspberry Pi Zero W.

## Last update: v0.1.6-alpha   

- Https for front-end & back-end
- Http redirection to https
- Access to page with hostname
- Login feature with PIN Code, the authentification is using JWT Token  
- Production mode on Pi Zero W
- Development mode
- Docker compose to run all components of the project  

## Next planned updates

#### [ALPHA] **v0.2.0**
- Navigation
- Upload a file
- Download a file

#### [ALPHA] **v0.3.0**
- Delete a file
- Rename a file
- Move a file

#### [ALPHA] **v0.4.0**
- Options
- Quick Notes

#### [ALPHA] **v0.5.0**
- Wifi AP

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

## Installation - To be completed

> Installation steps can be summarized on Pi Zero W are:   
>    
> 1) Setup OS
> 2) Install Docker
> 3) Execute a script to enable Wifi AP ? (To be defined)
> 4) Transfer a release of the project
> 5) Run docker compose
    
### Complete installation detailed below
    
#### 1) Install **Raspberry Pi OS Lite** with [Raspberry Pi Imager](https://www.raspberrypi.com/software/).  

Before writing to the micro SD Card, make sure to set these settings:   

- **Hostname** (link used to access your NAS)
- **Activate SSH Access**
- **Define an username and password**
- **Configure the WiFi**
- Define the locale settings

#### 2) Install **Docker** on your Raspberry Pi Zero W

#### 3) Transfer **NAS Zero W files** on your Raspberry Pi Zero W and run the Docker-compose file
