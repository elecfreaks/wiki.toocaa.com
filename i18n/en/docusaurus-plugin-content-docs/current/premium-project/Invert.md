---

sidebar_position: 4
sidebar_label: Introduction to the Inversion Function and Overview of Usage Scenarios
---

# Introduction to the Inversion Function and Overview of Usage Scenarios
### Introduction to the Inversion Function
The inversion operation will change the colors in the image to their complementary colors.
In a computer, when colors are represented in RGB mode, the inversion is achieved by subtracting the R, G, and B values from 255, respectively, to obtain the inverted RGB values.
The formula for calculating the inversion in RGB mode is:<br/>
R = 255 - R<br/>
G = 255 - G<br/>
B = 255 - B<br/>
#### Main Uses
- **Creating a Negative Effect**:It can simulate the visual feel of traditional film negatives.
- **Highlighting Details in Dark Areas**:In certain scenarios, the inversion operation can make details in the dark areas of an image more clearly visible.
- **Creative Design**:It provides more possibilities for artistic creation, bringing a unique visual impact.

### Usage Scenarios for the Inversion Function
#### 1. The Essence of Laser Engraving: "Subtractive" Process
Laser engraving achieves pattern engraving by ablating the surface of a material at high temperatures. The principle involves converting dark areas in an image into physical etchings. For example:
-  **Dark areas** (such as black) are targeted and burned by the laser, creating indentations or carbonized marks;
-  **Light areas** (such as white) remain unchanged (with lower power output or no output).
If the original image directly uses dark areas to represent the parts to be engraved, the engraving result may be the opposite of what is expected. Therefore, inversion is needed to convert light areas into dark ones, allowing the laser to recognize and engrave them properly.
#### 2. Default Logic of Desktop Laser Engraving Machine Software and the Impact of Material Properties
Most desktop laser engraving machine software defaults to treating dark areas as the engraving path and light areas as blank. If a user wants to engrave the light areas of the original image, they must invert the image to turn the light areas into black; otherwise, the software will ignore the light areas.
Different materials react differently to lasers:
- **Light or transparent materials**(such as acrylic or glass): Dark areas need to be engraved, and inversion can enhance contrast, allowing the laser to target the desired areas more precisely.
- **Dark materials**(such as dark metal, stone, or wood):It may be necessary to engrave the light areas after inversion or adjust the laser power parameters through inversion.<br/>

As shown in the example below: When engraving an image on dark kraft paper, if the original image is predominantly black, inversion will make it predominantly white. The laser will then engrave the dark areas of the image, while ignoring the white areas (reducing power).<br/>
<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Invert/Invert1.png" alt="图片描述" width="1000" />
<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Invert/Invert2.png" alt="图片描述" width="1000" />
<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Invert/Invert3.png" alt="图片描述" width="1000" />
