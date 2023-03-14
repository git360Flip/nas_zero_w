# nas_zero_w

Private NAS on Raspberry Pi Zero W, connect a hard disk to the USB socket,  
Access the web page to send or download the files on the disk.

## Requirements

You need a Raspberry Pi Zero W to run this private NAS.  
I recommend you to buy a starter kit to get these essential items:

1. Micro SD Card with micro SD to SD Adapter to install Raspbian in your Pi Zero W
2. 5V Power supply
3. Micro USB to USB Adapter to connect your hard disk
4. (OPTIONAL) micro HDMI to HDMI Adapter

The micro HDMI to HDMI Adapter can be useful for displaying the screen of Raspbian.  
The micro USB to USB Adapter can connect a USB Keyboard to control your Pi Zero W.

### Prepare Pi Zero W

1. Install Raspbian https://www.raspberrypi.com/documentation/computers/getting-started.html
2. Connect your Pi Zero W to your private network
3. Create an Access Point https://gist.github.com/ysr23/c4a9d7185ed5c6d7ccfa31deead44070

## Setup

1. Install Docker
2. Connect a hard disk to the USB socket
3. Set the PASSWORD and DISK_PATH environments variables
4. Run the docker-compose file
