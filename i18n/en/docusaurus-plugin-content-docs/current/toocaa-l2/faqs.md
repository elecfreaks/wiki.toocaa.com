---

sidebar_position: 5
sidebar_label: TOOCAA L2 FAQs Duplicate

---
# FAQs
## Q1: What materials can TOOCAA L2 cut and engrave?
| **Model**  | **Mole** | **2W IR** | **10W** | **20W** | **40W** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Supported Materials** | **Engraving** | All kinds of metal, leather, opaque plastic, dark-colored non-transparent acrylic, stone, glass (with laser engraver marking paper), ceramic (with laser engraver marking paper), and circuit board | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, lacquered metal, tinplate, stainless steel, anodised aluminium, dark-coloured glass, slate, ceramics, jade, marbble, shale, leather, fabrics, canvas, corrugated cardboard, cardboard, plastics, dark-coloured acrylic (except blue) | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, lacquered metal, tinplate, stainless steel, anodised aluminium, dark-coloured glass, slate, ceramics, jade, marbble, shale, leather, fabrics, canvas, corrugated cardboard, cardboard, plastics, dark-coloured acrylic (except blue) | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, lacquered metal, tinplate, stainless steel, anodised aluminium, dark-coloured glass, slate, ceramics, jade, marbble, shale, leather, fabrics, canvas, corrugated cardboard, cardboard, plastics, dark-coloured acrylic (except blue) |
| **Supported Materials** | **Cutting** | / | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, leather, fabriccanvas, corrugated paper, cardboard, plastic, dark acrylic (except blue) | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, leather, fabriccanvas, corrugated paper, cardboard, plastic, dark acrylic (except blue) | Basswood, tung, pine, plywood, beech, walnut, bamboo, MDF, leather, fabriccanvas, corrugated paper, cardboard, plastic, dark acrylic (except blue) |


## Q2: How do I determine the settings for cutting or engraving a material?
You can view the cutting and engraving parameter settings for common materials in the TOOCAA L2 online documentation. The online documentation URL is:	

[https://www.toocaa.com/pages/material-settings-for-toocaa-machines](https://www.toocaa.com/pages/material-settings-for-toocaa-machines)

## Q3: What is the maximum working range of TOOCAA L2?
TOOCAA L2 maximum working range: 415mm * 395mm.

## Q4: What is the maximum thickness of wood that TOOCAA L2 can cut?
The maximum thickness of basswood that can be cut by 10W laser module, 20W laser module and 40W laser meodule is 6mm, 10mm and 15mm respectively.

## Q5: Where can I buy cost-effective cutting and engraving materials, such as wood boards, acrylic, etc.?
TOOCAA L2 selects the most cost-effective cutting and engraving materials from global suppliers. You can log in to the TOOCAA official website store to purchase. The official website store address is: [https://www.toocaa.com/collections/materials](https://www.toocaa.com/collections/materials)。

## Q6: Why can't the tool lock arm be pressed to the bottom?
The tool lock arm does not need to be pressed to the bottom, it only needs to be pressed enough to fix the laser module.

## Q7: After the machine is connected to the computer, Lightburn cannot recognize the machine. What should I do?
### Initial examination
1. Please check that your machine is powered on.

2. Please make sure that the USB cable is connected stably.

3. Close other control software that may communicate with the machine.

4. Please make sure that you have selected the correct device in Lightburn and that the controller type and connection method are correct.

### If Lightburn still does not recognize the machine
#### Check the USB cable
1. Please make sure you are using a USB data cable, not a USB charging cable, and make sure the USB cable you are using has the data transfer function.
2. Computer USB ports can occasionally malfunction. If your computer has multiple USB ports, try plugging the USB cable into a different USB port to test.
3. If you are using a Windows computer and find that you can connect via a USB cable but the connection fails after a while, check your computer's power management settings.

![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/tips.png)_**Tips:**_
+ Open **Control Panel**
+ Click "**Hardware and Sound**"
+ Click **Power Options**
+ Under "Preferred Plans"， click Change plan settings for the active power plan.<br/>
  ![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Q%26A1.png)
+ Click **Change advanced power settings**
+ Open **USB Settings**
+ Open the **USB Selective Suspend setting** and select **Disabled** from the drop-down window.
+ Click “**Apply”**, and then click “**OK”** to close the window.


#### Check Drivers
If you have problems connecting to your machine, you may need to install or update the drivers.

Requires CH340 driver. The latest version is available from the WCH website for Windows, Mac, and Linux.    
WCH website:  [https://www.wch-ic.com/downloads/CH341SER_EXE.html](https://www.wch-ic.com/downloads/CH341SER_EXE.html)

If the above does not resolve the issue, please visit the Lightburn troubleshooting guide: [https://docs.lightburnsoftware.com/Troubleshooting/ConnectionTroubleshooting.html](https://docs.lightburnsoftware.com/Troubleshooting/ConnectionTroubleshooting.html).<br/>
 Or contact our technical support at support@toocaa.com.

## Q8: The laser module cannot be effectively fixed / the laser module is easy to slip
Solution steps:

1.Take out the laser module.

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Take%20out%20the%20laser%20module.jpg" alt="图片描述" width="700" />

2.Remove the outer screw and the tool lock arm.

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Remove%20the%20outer%20screw%20and%20the%20tool%20lock%20arm.jpg" alt="图片描述" width="700" />

3.Adjust the tightness of the screw inside the tool carriage.

![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/tips.png)_**TIPS**_**：**_**Clockwise adjustment is for tightening, and counterclockwise adjustment is for loosening. Please adjust according to the actual situation.**_

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Tighten%20clockwise.png" alt="图片描述" width="700" />

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Loosen%20counterclockwise.png" alt="图片描述" width="700" />

## Q9: Description of Alarm
When the user triggers an alarm condition on the TOOCAA L2, the laser output is automatically switched off.

| **Warning Sound Identify** | **Hidden Meaning** |
| :--- | :--- |
| 1 short beep | Trigger limit switches |
| 2 short beeps | Opening the shield during laser processing |
| 3 short beeps | USB lock not detected |
| 4 short beeps | No laser module connected |
| Long 1 beep, short 1 beep | Machine tilt detected |
| Long 1 beep, short 2 beeps | Power supply mismatch |
| Long 1 beep, short 3 beeps | TF card abnormality during laser processing |
| Long 1 beep, short 4 beeps | Flame detected in working area |


## Q10: Description of Indicator Light
| Indicator Color | Indicator Light Meaning |
| :---: | :---: |
| Solid Yellow | Initialize |
| Cyan Breathing | Frame Running |
| Cyan Breathing | Start Carving |
| Cyan Flashing | Pause Carving |
| Cyan Breathing | Continue Carving |
| Solid Yellow | Force Termination |
| Solid Yellow | Carving Completed |
| Red Flashing | Test Mode |
| Solid Yellow | Initialize |
